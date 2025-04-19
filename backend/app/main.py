from fastapi import FastAPI
from app.routes import router
from fastapi.middleware.cors import CORSMiddleware
from .database import engine
from . import models

app = FastAPI()

# Create the database tables
models.Base.metadata.create_all(bind=engine)

# Enable CORS so frontend can talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # change this if your frontend is hosted elsewhere
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)
