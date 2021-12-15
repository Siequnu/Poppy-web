"""
API models
"""
from app import db
from datetime import datetime
from sqlalchemy_serializer import SerializerMixin


class Inquiry(db.Model, SerializerMixin):
    """
    Store inquiries made via the site form
    """
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120))
    email = db.Column(db.String(120))
    inquiry = db.Column(db.String(5000))
    submitted = db.Column(db.DateTime, default=datetime.now())

    def __repr__(self):
        return '<Inquiry {}>'.format(self.name)
