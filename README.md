# Research Paper Fetching and Analysis Tool

## Overview
This project fetches research papers based on a user's query using the **Semantic Scholar API**, extracts key details (submission, revision, acceptance, and publication dates), calculates **publication speed probability**, and visualizes insights using **Plotly**. Additionally, it saves the abstracts of research papers and generates **summaries** using the **LLaMA model via Groq API**.

## Features
- Fetches research papers using **Semantic Scholar API**.
- Extracts **submission, revision, acceptance, and publication** dates.
- Calculates **publication speed probability**.
- Generates **summaries** of abstracts using **LLaMA (Groq API)**.
- Visualizes insights with **Plotly**.
- Displays summarized research paper details on a **web interface**.

## Tech Stack
- **Backend**: Python (Flask)
- **Frontend**: HTML, CSS, JavaScript
- **APIs**: 
  - **Semantic Scholar API** (fetching research papers)
  - **Groq API (LLaMA)** (summarizing abstracts)
- **Visualization**: Plotly

## Installation & Setup
### Prerequisites
- Python 3.x installed
- `pip` package manager
- Node.js (for frontend dependencies)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/research-paper-tool.git
   cd research-paper-tool
