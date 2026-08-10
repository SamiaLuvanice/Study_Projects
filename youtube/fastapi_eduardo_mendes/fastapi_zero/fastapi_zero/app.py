from http import HTTPStatus

from fastapi import FastAPI 
from fastapi.responses import HTMLResponse

from schemas import Message, UserPublic, UserSchema

app = FastAPI(title='FastAPI Zero', version='0.1.0')


@app.get(
    '/',
    status_code=HTTPStatus.OK,
    response_model=Message
    )
def read_root():
    return {'message': 'Hello, World!'}


@app.get(
    '/html', 
    status_code=HTTPStatus.OK, 
    response_class=HTMLResponse
    )
def read_html():
    return '<h1>olá, mundo!</h1>'

@app.post(
    '/users/',
    status_code=HTTPStatus.CREATED,
    response_model=UserPublic
    )
def create_user(user: UserSchema):
    return user
        