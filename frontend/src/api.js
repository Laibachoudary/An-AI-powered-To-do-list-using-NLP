const API_BASE = "http://127.0.0.1:8000"; // FastAPI server address

// Send natural language task to backend
export async function addTask(text) {
    const response = await fetch(`${API_BASE}/add-task`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
    });
    return await response.json();
}

// Get all tasks
export async function getTasks() {
    const response = await fetch(`${API_BASE}/tasks`);
    return await response.json();
}

// Mark a task as completed
export async function completeTask(taskId) {
    const response = await fetch(`${API_BASE}/complete-task/${taskId}`, {
        method: "POST",
    });
    return await response.json();
}
