from fastapi import APIRouter
from pydantic import BaseModel
from .nlp import parse_task

router = APIRouter()

class TaskInput(BaseModel):
    text: str

@router.post("/parse-task")
async def parse_task_route(input: TaskInput):
    result = parse_task(input.text)
    return result
