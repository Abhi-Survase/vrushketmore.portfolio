import os

# AGGRESSIVE CSS with wildcard selectors that WILL apply
AGGRESSIVE_CSS = '''
/* FORCE DARK ON EVERYTHING */
* {
    --body-background-fill: #0a0f1a !important;
    --background-fill-primary: #0a0f1a !important;
    --background-fill-secondary: #111827 !important;
    --block-background-fill: #111827 !important;
    --color-accent: #0891b2 !important;
}

.gradio-container, .main, .contain, body {
    background: #0a0f1a !important;
}

/* ALL MESSAGES - FORCE DARK BACKGROUND, WHITE TEXT */
[class*="message"], [class*="bubble"], .message, .bot, .user {
    background: #1e293b !important;
    color: #f1f5f9 !important;
    border: 1px solid #334155 !important;
    border-radius: 12px !important;
}

[class*="message"] *, [class*="bubble"] *, .message *, .bot *, .user * {
    color: #f1f5f9 !important;
    background: transparent !important;
}

/* User messages - slight accent */
.user, [class*="user"] {
    background: #164e63 !important;
    border-color: #0891b2 !important;
}

/* Input */
textarea, input, [class*="textbox"], [class*="input"] {
    background: #1e293b !important;
    color: #f1f5f9 !important;
    border: 1px solid #334155 !important;
    border-radius: 12px !important;
}

/* All buttons */
button {
    background: #1e293b !important;
    color: #94a3b8 !important;
    border: 1px solid #334155 !important;
    border-radius: 8px !important;
}

button:hover {
    background: #334155 !important;
    color: #f1f5f9 !important;
}

/* Primary/Submit button */
button.primary, [class*="primary"] {
    background: #0891b2 !important;
    color: white !important;
    border: none !important;
}

/* Hide junk */
footer, header, .built-with, .label-wrap, label span {
    display: none !important;
}
'''

# Use simpler demo with dark theme
SIMPLE_DEMO = '''demo = gr.ChatInterface(
    fn=chat,
    css=CUSTOM_CSS,
)
'''

files = [
    r'c:\\Users\\vrush\\OneDrive\\Documents\\Portfolio\\chatbot\\app.py',
    r'c:\\Users\\vrush\\OneDrive\\Documents\\Portfolio\\vrushket-assistant\\app.py'
]

for fp in files:
    if os.path.exists(fp):
        with open(fp, 'r', encoding='utf-8') as f:
            c = f.read()
        
        # Find markers
        s = c.find('# Comprehensive dark theme CSS')
        if s == -1:
            s = c.find('CUSTOM_CSS = """')
        
        e = c.find('if __name__ == "__main__":')
        
        if s != -1 and e != -1:
            # Keep everything before CSS, add new CSS, add simple demo, keep ending
            out = c[:s] + 'CUSTOM_CSS = """' + AGGRESSIVE_CSS + '"""\n\n' + SIMPLE_DEMO + '\n\n' + c[e:]
            with open(fp, 'w', encoding='utf-8') as f:
                f.write(out)
            print(f'OK: {fp}')
        else:
            print(f'ERR markers: s={s} e={e} in {fp}')
    else:
        print(f'NOT FOUND: {fp}')

print('Done - push to HF')
