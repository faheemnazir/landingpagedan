import os
import glob
import re

css_files = glob.glob('src/components/**/*.css', recursive=True)

replacements = {
    r'padding-top:\s*100px;': 'padding-top: 40px;',
    r'padding-bottom:\s*100px;': 'padding-bottom: 40px;',
    r'padding-top:\s*80px;': 'padding-top: 40px;',
    r'padding-bottom:\s*80px;': 'padding-bottom: 40px;',
    r'padding-top:\s*60px;': 'padding-top: 40px;',
    r'padding-bottom:\s*60px;': 'padding-bottom: 40px;',
    r'margin-bottom:\s*80px;': 'margin-bottom: 40px;',
    r'margin-bottom:\s*64px;': 'margin-bottom: 32px;',
    r'margin-top:\s*64px;': 'margin-top: 32px;'
}

for file_path in css_files:
    with open(file_path, 'r') as f:
        content = f.read()
    
    new_content = content
    for pattern, replacement in replacements.items():
        new_content = re.sub(pattern, replacement, new_content)
        
    if new_content != content:
        with open(file_path, 'w') as f:
            f.write(new_content)
        print(f'Updated {file_path}')

print('Spacing reduction complete.')
