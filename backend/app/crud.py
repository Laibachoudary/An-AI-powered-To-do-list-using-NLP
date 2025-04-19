from sqlalchemy.orm import Session
from . import models

# Create a new task
def create_task(db: Session, task_name: str, due_date: str):
    db_task = models.Task(task=task_name, due=due_date)
    db.add(db_task)
    db.commit()
    db.refresh(db_task)
    return db_task

# Get all tasks
def get_tasks(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Task).offset(skip).limit(limit).all()

# Mark task as completed
def complete_task(db: Session, task_id: int):
    task = db.query(models.Task).filter(models.Task.id == task_id).first()
    if task:
        task.completed = True
        db.commit()
        db.refresh(task)
        return task
    return None
