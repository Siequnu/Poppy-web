from app import create_app
from config import poppy

app = create_app(poppy)

from app import db
from app.auth.models import User

username = input('Enter an administrator username: ')
email = input('Enter an administrator email address: ')
password = input('Enter an administrator password: ')

user = User(username=username, email=email, email_confirmed=True, is_admin=True)
user.set_password(password)

try:
	db.session.add(user)
	db.session.commit()
	print ('User ' + username + ' created successfully.')
except:
	print ('Failed adding new administrator. Is the email or username already in use? No changes have been made to the database.')
