from http import HTTPStatus

from fastapi.testclient import TestClient

from fastapi_zero.app import app


def test_root_deve_retornar_ola_mundo():
    """
    Esse teste tem 3 etapas (AAA)
    1. Arrange: Preparar o teste, criar o client
    2. Act: Executar a ação que queremos testar, nesse caso, fazer uma requisição GET para a rota raiz
    3. Assert: Verificar se o resultado da ação é o esperado, nesse caso, se a resposta da requisição é igual a {'message': 'Hello, World!'}
    """

    client = TestClient(app)  # Arrange

    response = client.get('/')  # Act

    assert response.status_code == HTTPStatus.OK  # Assert
    assert response.json() == {'message': 'Hello, World!'}  # Assert


def test_html_deve_retornar_ola_mundo():
    client = TestClient(app)

    response = client.get('/html')

    assert response.status_code == HTTPStatus.OK
    assert response.headers['content-type'].startswith('text/html')
    assert 'olá, mundo!' in response.text
