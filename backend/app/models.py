from sqlalchemy import Column, Integer, String, Boolean
from .database import Base

class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)
    task = Column(String, index=True)
    due = Column(String)
    completed = Column(Boolean, default=False)
