import spacy
import re

nlp = spacy.load("en_core_web_sm")

def parse_task(text: str):
    doc = nlp(text)
    
    due_parts = []
    spans_to_remove = []

    for ent in doc.ents:
        if ent.label_ in ["TIME", "DATE"]:
            due_parts.append(ent.text)
            spans_to_remove.append((ent.start_char, ent.end_char))

    # Combine due parts
    due = " ".join(due_parts)

    # Remove the spans in reverse so positions don’t shift
    for start, end in sorted(spans_to_remove, reverse=True):
        text = text[:start] + text[end:]

    # Remove leftover connecting words like "on", "at", etc.
    text = re.sub(r"\b(on|at|by|before|after|from|until|to)\b", "", text, flags=re.IGNORECASE)

    # Clean extra spaces and punctuation
    task = re.sub(r'\s+', ' ', text).strip().strip('.')

    return {
        "task": task,
        "due": due
    }
