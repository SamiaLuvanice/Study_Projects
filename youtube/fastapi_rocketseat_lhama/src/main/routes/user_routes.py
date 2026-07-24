from fastapi import APIRouter
from fastapi.responses import JSONResponse

from src.main.validators.user_register_validator import UserRegisterValidator

users_routers = APIRouter(tags=["Usuários"])

@users_routers.post("/users")
async def create_user(body: UserRegisterValidator):
    dict_body = dict(body)
    return JSONResponse(
        status_code=201, 
        content={
            "message": "Usuário criado com sucesso", 
            "att": dict_body
            }
        )
