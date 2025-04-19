from fastapi import APIRouter, Depends
from pydantic import BaseModel
from .nlp import parse_task
from sqlalchemy.orm import Session
from . import crud, models, database

router = APIRouter()

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

class TaskInput(BaseModel):
    text: str

@router.post("/add-task")
async def add_task(input: TaskInput, db: Session = Depends(get_db)):
    parsed = parse_task(input.text)
    task = crud.create_task(db=db, task_name=parsed["task"], due_date=parsed["due"])
    return task

@router.get("/tasks")
async def get_tasks(db: Session = Depends(get_db)):
    tasks = crud.get_tasks(db)
    return tasks

@router.post("/complete-task/{task_id}")
async def complete_task(task_id: int, db: Session = Depends(get_db)):
    task = crud.complete_task(db, task_id)
    if task:
        return task
    return {"error": "Task not found"}

@router.post("/parse-task")
async def parse_task_route(input: TaskInput):
    result = parse_task(input.text)
    return result
