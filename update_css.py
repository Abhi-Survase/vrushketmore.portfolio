import os

new_css = """
/* Force Dark Theme & Font */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&display=swap');

:root {
    --primary: #00d4ff;
    --secondary: #7c3aed;
    --dark-bg: #0a0f1a;
    --card-bg: #111827;
    --text-main: #f3f4f6;
    --text-muted: #9ca3af;
}

body, .gradio-container {
    background-color: var(--dark-bg) !important;
    color: var(--text-main) !important;
    font-family: 'Outfit', sans-serif !important;
}

/* Hide Header/Footer/Branding */
footer, .footer, .svelte-1lyswbr { 
    display: none !important; 
}

/* Main Chatbot Container */
.chatbot {
    background: transparent !important;
    border: none !important;
    height: 100% !important;
    min-height: 400px !important;
    padding: 0 !important;
}

/* Message Bubbles */
.message-wrap {
    gap: 12px !important;
}

.message-wrap .message {
    border-radius: 20px !important;
    padding: 14px 20px !important;
    font-size: 15px !important;
    line-height: 1.6 !important;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
}

/* Bot Message */
.message-wrap .bot {
    background: #1f2937 !important; /* Dark Gray */
    border: 1px solid #374151 !important;
    color: #f3f4f6 !important;
    border-bottom-left-radius: 4px !important;
}

/* User Message */
.message-wrap .user {
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%) !important;
    border: none !important;
    color: white !important;
    border-bottom-right-radius: 4px !important;
}

/* Input Area */
.row.svelte-1g805jl { /* Input container */
    background: #111827 !important;
    border: 1px solid #374151 !important;
    border-radius: 16px !important;
    padding: 8px !important;
    margin-top: 10px !important;
}

textarea {
    background: transparent !important;
    border: none !important;
    color: white !important;
    font-size: 16px !important;
    padding: 10px !important;
}

textarea::placeholder {
    color: #6b7280 !important;
}

/* Submit Button */
button.primary {
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%) !important;
    border: none !important;
    border-radius: 12px !important;
    color: white !important;
    font-weight: 600 !important;
    transition: transform 0.2s !important;
}

button.primary:hover {
    transform: scale(1.05) !important;
    box-shadow: 0 0 15px rgba(0, 212, 255, 0.4) !important;
}

/* Secondary Buttons (Retry, Undo, Clear) */
button.secondary {
    background: transparent !important;
    border: 1px solid #374151 !important;
    color: #9ca3af !important;
    border-radius: 8px !important;
    font-size: 12px !important;
    padding: 4px 12px !important;
}

button.secondary:hover {
    border-color: var(--primary) !important;
    color: var(--primary) !important;
    background: rgba(0, 212, 255, 0.05) !important;
}

/* Examples */
.examples {
    display: none !important; /* Hide examples to keep it clean */
}

/* Avatar styling if visible */
.avatar-container {
    border-radius: 50% !important;
    border: 2px solid var(--primary) !important;
}
"""

# Create the interface with a custom theme base
new_demo_code = """# Create the interface with a custom theme base
theme = gr.themes.Base(
    primary_hue="cyan",
    secondary_hue="violet",
    neutral_hue="slate",
    font=["Outfit", "sans-serif"],
).set(
    body_background_fill="#0a0f1a",
    body_text_color="#f3f4f6",
    background_fill_primary="#111827",
    block_background_fill="#111827",
    block_border_color="#374151",
    input_background_fill="#1f2937",
    button_primary_background_fill="linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)",
)

demo = gr.ChatInterface(
    fn=chat,
    title=None,
    description=None, # Remove description to save space
    theme=theme,
    css=CUSTOM_CSS,
    examples=[
        "What are Vrushket's main skills?",
        "Tell me about TheraMind",
        "Is he open to opportunities?",
    ],
    cache_examples=False,
)
"""

files = [
    r'c:\Users\vrush\OneDrive\Documents\Portfolio\chatbot\app.py',
    r'c:\Users\vrush\OneDrive\Documents\Portfolio\vrushket-assistant\app.py'
]

for file_path in files:
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find the start of CUSTOM_CSS
        start_idx = content.find('CUSTOM_CSS = """')
        if start_idx != -1:
            # We replace everything from CUSTOM_CSS down to the end of demo definition
            # But we need to keep the if __name__ == "__main__": block at the end
            end_marker = 'if __name__ == "__main__":'
            end_idx = content.find(end_marker)
            
            if end_idx != -1:
                final_content = content[:start_idx] + 'CUSTOM_CSS = """' + new_css + '"""\n\n' + new_demo_code + '\n\n' + content[end_idx:]
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(final_content)
                print(f'Updated {file_path}')
            else:
                print(f'Could not find end marker in {file_path}')
        else:
            print(f'Could not find start marker in {file_path}')
    else:
        print(f'File not found: {file_path}')
