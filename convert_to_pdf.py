import markdown2
from pathlib import Path

# Read markdown
md_path = Path(r"C:\Users\vrush\.gemini\antigravity\brain\46924c89-5aff-47d4-a6e5-4d87beb19751\ClarifyAI_Complete_Pitch_Deck.md")
md_content = md_path.read_text(encoding='utf-8')

# Convert to HTML with styling
html_content = f"""
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        body {{
            font-family: 'Inter', -apple-system, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px;
            color: #1a1a2e;
            line-height: 1.6;
        }}
        
        h1 {{
            color: #0891b2;
            border-bottom: 3px solid #0891b2;
            padding-bottom: 10px;
            margin-top: 40px;
        }}
        
        h2 {{
            color: #1e3a5f;
            margin-top: 30px;
        }}
        
        h3 {{
            color: #2d4a6f;
        }}
        
        table {{
            border-collapse: collapse;
            width: 100%;
            margin: 20px 0;
        }}
        
        th, td {{
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }}
        
        th {{
            background: #0891b2;
            color: white;
        }}
        
        tr:nth-child(even) {{
            background: #f8f9fa;
        }}
        
        code {{
            background: #f1f5f9;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: 'Consolas', monospace;
        }}
        
        pre {{
            background: #1e293b;
            color: #e2e8f0;
            padding: 20px;
            border-radius: 8px;
            overflow-x: auto;
        }}
        
        pre code {{
            background: none;
            color: inherit;
        }}
        
        blockquote {{
            border-left: 4px solid #0891b2;
            margin: 20px 0;
            padding: 10px 20px;
            background: #f0f9ff;
            font-style: italic;
        }}
        
        hr {{
            border: none;
            border-top: 2px solid #e2e8f0;
            margin: 40px 0;
        }}
        
        strong {{
            color: #0891b2;
        }}
        
        .title {{
            text-align: center;
            margin-bottom: 40px;
        }}
        
        @media print {{
            body {{
                padding: 20px;
            }}
            pre {{
                white-space: pre-wrap;
            }}
        }}
    </style>
</head>
<body>
{markdown2.markdown(md_content, extras=['tables', 'fenced-code-blocks', 'code-friendly'])}
</body>
</html>
"""

# Save HTML
html_path = Path(r"C:\Users\vrush\OneDrive\Documents\Portfolio\ClarifyAI_Pitch_Deck.html")
html_path.write_text(html_content, encoding='utf-8')
print(f"HTML saved to: {html_path}")
print("\\nTo convert to PDF:")
print("1. Open the HTML file in Chrome")
print("2. Press Ctrl+P")
print("3. Select 'Save as PDF'")
print("4. Click Save")
