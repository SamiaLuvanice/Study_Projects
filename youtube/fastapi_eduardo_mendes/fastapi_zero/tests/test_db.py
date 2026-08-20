from fastapi_zero.models import User
from tests.conftest import session


def test_create_user():
    user = User(
        username='teste',
        email='teste@example.com',
        password='password123'
    )
    session.add(user)
    session.commit()
    assert user.username == "teste"
    assert user.email == "teste@example.com"
    assert user.password == "password123"
