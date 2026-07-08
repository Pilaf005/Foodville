import zipfile
import xml.etree.ElementTree as ET
import os
import json

def parse_xlsx(file_path):
    # Namespace dictionary for parsing
    ns = {
        'main': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main',
        'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships'
    }
    
    with zipfile.ZipFile(file_path, 'r') as zip_ref:
        # 1. Load shared strings
        shared_strings = []
        if 'xl/sharedStrings.xml' in zip_ref.namelist():
            ss_content = zip_ref.read('xl/sharedStrings.xml')
            root = ET.fromstring(ss_content)
            # Find all <t> elements
            for si in root.findall('.//main:si', ns):
                t_elem = si.find('main:t', ns)
                if t_elem is not None:
                    shared_strings.append(t_elem.text)
                else:
                    # Sometimes strings can have rich text formatting <r><t>...</t></r>
                    t_texts = [t.text for t in si.findall('.//main:t', ns) if t.text]
                    shared_strings.append("".join(t_texts))
        
        # 2. Load sheet1
        # Let's inspect the sheets in xl/workbook.xml to see their names and relation files
        wb_content = zip_ref.read('xl/workbook.xml')
        wb_root = ET.fromstring(wb_content)
        sheets = []
        for s in wb_root.findall('.//main:sheet', ns):
            sheets.append({
                'name': s.get('name'),
                'sheetId': s.get('sheetId'),
                'id': s.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id')
            })
            
        print("Sheets in workbook:", sheets)
        
        # Usually Sheet 1 is sheet1.xml
        sheet_path = 'xl/worksheets/sheet1.xml'
        if sheet_path not in zip_ref.namelist():
            # If sheet1.xml doesn't exist, search in xl/worksheets/
            worksheets = [f for f in zip_ref.namelist() if f.startswith('xl/worksheets/')]
            sheet_path = worksheets[0]
            
        print("Reading sheet from path:", sheet_path)
        sheet_content = zip_ref.read(sheet_path)
        sheet_root = ET.fromstring(sheet_content)
        
        # Helper to parse cell references (e.g. A1 -> col 0, row 0)
        def get_cell_coords(ref):
            col_str = ""
            row_str = ""
            for char in ref:
                if char.isalpha():
                    col_str += char
                elif char.isdigit():
                    row_str += char
            
            # Convert col_str to index
            col = 0
            for char in col_str:
                col = col * 26 + (ord(char.upper()) - 64)
            return col - 1, int(row_str) - 1

        rows_data = {}
        max_col = 0
        max_row = 0
        
        for row in sheet_root.findall('.//main:row', ns):
            r_idx = int(row.get('r')) - 1
            max_row = max(max_row, r_idx)
            for cell in row.findall('main:c', ns):
                ref = cell.get('r')
                col_idx, _ = get_cell_coords(ref)
                max_col = max(max_col, col_idx)
                
                cell_type = cell.get('t')
                val_elem = cell.find('main:v', ns)
                val = ""
                if val_elem is not None:
                    raw_val = val_elem.text
                    if cell_type == 's': # shared string
                        val = shared_strings[int(raw_val)]
                    elif cell_type == 'b': # boolean
                        val = True if raw_val == '1' else False
                    else:
                        # Attempt to parse float or keep as string
                        try:
                            val = float(raw_val)
                            if val.is_integer():
                                val = int(val)
                        except ValueError:
                            val = raw_val
                
                if r_idx not in rows_data:
                    rows_data[r_idx] = {}
                rows_data[r_idx][col_idx] = val

        # Convert to list of lists (table format)
        table = []
        for r in range(max_row + 1):
            row_list = []
            for c in range(max_col + 1):
                cell_val = rows_data.get(r, {}).get(c, "")
                row_list.append(cell_val)
            table.append(row_list)
            
        return table

# Run the parser and dump to json
excel_path = r"C:\Users\mukul sharma\Downloads\Doenloaded Excel.xlsx"
data = parse_xlsx(excel_path)
print(f"Parsed {len(data)} rows.")

# Write first 20 rows to console / file
out_path = r"c:\Users\mukul sharma\Project\Online Mart\scratch\excel_dump.json"
with open(out_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)
print("Dumped data to scratch/excel_dump.json")
