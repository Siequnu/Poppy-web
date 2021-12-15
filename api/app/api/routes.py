"""
API routes
"""
from datetime import datetime
import json

from flask import request
from flask import jsonify

from flask_jwt_extended import jwt_required

from app import db

from . import bp
from .models import Inquiry


@bp.route('/inquiries/get')
@jwt_required()
def get_inquiry():
    """
    Private route to return inquiries
    """
    inquiries = []
    for inquiry in Inquiry.query.all():
        inquiries.append(inquiry.to_dict())
    return jsonify(inquiries)


@bp.route('/inquiries/add', methods=['POST'])
def add_inquiry():
    """
    Public route to add a new inquiry
    """
    try:
        # Get feedback data from the request
        name = request.json.get('name', None)
        email = request.json.get('email', None)
        inquiry = request.json

        new_inquiry = Inquiry(
            name=name,
            email=email,
            inquiry=json.dumps(inquiry),
            submitted=datetime.now()
        )

        db.session.add(new_inquiry)
        db.session.commit()

        return {'success': 'Your inquiry has been received. Thank you!'}
    except Exception as error:
        print(error)
        return jsonify({'error': 'Sorry, we could not submit your inquiry.'})


@bp.route('/inquiries/delete', methods=['POST'])
@jwt_required()
def delete_inquiry():
    """
    Delete an inquiry
    """
    try:
        # Get inquiry data from the request
        inquiry_id = request.json.get('id', None)

        if inquiry_id is None:
            return {'error': 'Did not receive an inquiry ID.'}

        inquiry = Inquiry.query.get(inquiry_id)

        if inquiry is None:
            return {'error': 'Could not find this inquiry in the database.'}

        db.session.delete(inquiry)
        db.session.commit()

        return {'success': 'The inquiry was deleted successfully'}
    except Exception as error:
        print(error)
        return jsonify({'error': 'An error occured.'})


@bp.route('/inquiries/delete/all', methods=['POST'])
@jwt_required()
def delete_all_inquiries():
    """
    Delete all inquiries
    """
    try:
        for inquiry in Inquiry.query.all():
            db.session.delete(inquiry)
        db.session.commit()

        return {'success': 'All inquiries deleted successfully'}
    except Exception as error:
        print(error)
        return jsonify({'error': 'An error occured.'})
