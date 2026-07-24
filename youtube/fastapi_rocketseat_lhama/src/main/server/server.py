from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.main.routes.user_routes import users_routers

app = FastAPI()

app.include_router(users_routers)