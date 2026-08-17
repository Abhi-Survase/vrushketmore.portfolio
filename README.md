<div align="center">

# Vrushket More — Portfolio

### AI/ML Engineer | Data Scientist | Full-Stack Developer

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-vmore2.github.io-00d4ff?style=for-the-badge)](https://vmore2.github.io)
[![AI Chatbot](https://img.shields.io/badge/🤖_AI_Assistant-Chat_Now-7c3aed?style=for-the-badge)](https://vrushket-vrushket-assistant.hf.space)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/vrushketmore)

<br/>

Personal website built with **Next.js**, **Tailwind CSS**, and **shadcn/ui**.  
Features a WebGL hero background, project showcase, skills, experience timeline, and contact section.

[Features](#-features) • [Tech Stack](#-tech-stack) • [AI Chatbot](#-ai-chatbot) • [Local Setup](#-local-setup) • [Architecture](#-architecture)

**Live:** [vrushketmore.github.io](https://vmore2.github.io/vrushketmore.github.io/)

## </div>

## Tech Stack

- **Framework:** Next.js 16 (React 19)
- **Styling:** Tailwind CSS 4, shadcn/ui, CSS variables with OKLCH
- **Animations:** Motion (Framer Motion), tw-animate-css
- **Icons:** Lucide React, Simple Icons
- **Background:** WebGL via `ogl` (reactbits `WebThreadsBackground`)
- **Fonts:** Geist Sans, Geist Mono, custom heading font
- **Deployment:** GitHub Pages (static export to `docs/`)

---

## Features

- Responsive dark theme with light/dark toggle
- Hero section with animated WebGL background and stats
- Project cards with filtering and modal details
- Skills section with animated progress bars
- Interactive experience timeline
- Publications and contact sections
- Smooth scroll and intersection‑observer animations
- Accessible components via shadcn/ui primitives

---

### AI Chatbot

| Technology            | Purpose                       |
| --------------------- | ----------------------------- |
| Python                | Backend logic                 |
| Gradio                | Chat interface & hosting      |
| Groq API              | LLM inference (Llama 3.3 70B) |
| ChromaDB              | Vector database               |
| sentence-transformers | Text embeddings               |

### Deployment

| Service            | Purpose           |
| ------------------ | ----------------- |
| GitHub Pages       | Portfolio hosting |
| HuggingFace Spaces | Chatbot hosting   |

---

## AI Chatbot

### How It Works

The chatbot uses **Retrieval-Augmented Generation (RAG)** to answer questions about my experience:

```
User Question
     │
     ▼
┌─────────────────────────┐
│  Embed Question         │  ← sentence-transformers
│  (384-dim vector)       │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  Vector Search          │  ← ChromaDB
│  (Find relevant docs)   │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  LLM Generation         │  ← Groq (Llama 3.3)
│  (Context + Question)   │
└───────────┬─────────────┘
            │
            ▼
      AI Response
```

### Knowledge Base

The chatbot is trained on:

- `resume.md` — Full resume content
- `projects.md` — Detailed project descriptions
- `skills.md` — Technical capabilities
- `personality.md` — Response style guide
- `faq.md` — Common questions

### Try It

```
"What projects has Vrushket worked on?"
"Tell me about his ML experience"
"What tech stack does he use?"
"Is he available for opportunities?"
```

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm (or npm/yarn)

### Install & Run

```bash
git clone https://github.com/vmore2/vmore2.github.io.git
cd vmore2.github.io
pnpm install
pnpm dev
```

### Chatbot (Local Development)

```bash
# Navigate to chatbot directory
cd chatbot

# Create virtual environment
python -m venv venv
source venv/bin/activate  # or `venv\Scripts\activate` on Windows

# Install dependencies
pip install -r requirements.txt

# Set API key
export GROQ_API_KEY="your-groq-api-key"

# Run
python app.py
```

### RAG Pipeline

```python
# Embed user question
embedding = model.encode(question)

# Search knowledge base
results = collection.query(query_texts=[question], n_results=5)

# Generate response with context
response = groq.chat.completions.create(
    model="llama-3.3-70b-versatile",
    messages=[
        {"role": "system", "content": SYSTEM_PROMPT},
        {"role": "system", "content": f"Context: {results}"},
        {"role": "user", "content": question}
    ]
)
```

---

## Performance

| Metric                 | Value  |
| ---------------------- | ------ |
| Lighthouse Performance | 95+    |
| First Contentful Paint | < 1.5s |
| Chatbot Response Time  | < 2s   |
| Mobile Responsive      | ✅     |

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Contact

**Vrushket More**

- Email: [vmore2@binghamton.edu](mailto:vmore2@binghamton.edu)
- LinkedIn: [linkedin.com/in/vrushketmore](https://linkedin.com/in/vrushketmore)
- GitHub: [github.com/vmore2](https://github.com/vmore2)
- Portfolio: [vmore2.github.io](https://vmore2.github.io)

---
