from flask import Flask

import importlib
import logging
import os
from logging.handlers import RotatingFileHandler

from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_mail import Mail
from flask_executor import Executor
from flask_jwt_extended import JWTManager
from flask_cors import CORS

db = SQLAlchemy()

migrate = Migrate()
mail = Mail()
executor = Executor()
jwt = JWTManager()
cors = CORS()


def create_app(config_class):
    app = Flask(__name__, static_folder='../build', static_url_path='/')
    app.config.from_object(config_class)

    db.init_app(app)
    migrate.init_app(app, db)
    app.app_context().push()

    mail.init_app(app)
    executor.init_app(app)

    jwt.init_app(app)

    cors.init_app(app)

    # Compile registry of blueprints
    services = [
        {'path': 'app.main'},
        {'path': 'app.api', 'url_prefix': '/api'},
        {'path': 'app.auth', 'url_prefix': '/auth'},
    ]

    # Enable each service
    for service in services:
        module = importlib.import_module(service['path'], package='app')
        if 'url_prefix' in service:
            app.register_blueprint(
                getattr(module, 'bp'),
                url_prefix=service['url_prefix'])
        else:
            app.register_blueprint(getattr(module, 'bp'))

    # Log errors to local log
    if not app.debug and not app.testing:
        logsPath = os.path.join(app.config['APP_ROOT'], 'logs')
        if not os.path.exists(os.path.join(logsPath)):
            os.mkdir(logsPath)
        file_handler = RotatingFileHandler(os.path.join(
            logsPath, 'poppy_app.log'),
            maxBytes=10*1024*1024,
            backupCount=10)
        file_handler.setFormatter(logging.Formatter(
            '%(asctime)s %(levelname)s: \
                %(message)s [in %(pathname)s:%(lineno)d]'))
        file_handler.setLevel(logging.INFO)
        app.logger.addHandler(file_handler)

        app.logger.setLevel(logging.INFO)
        app.logger.info('Myo App startup')

    db.create_all()
    db.session.commit()

    return app
