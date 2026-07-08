import json

with open(r"c:\Users\mukul sharma\Project\Online Mart\scratch\excel_dump.json", "r", encoding="utf-8") as f:
    data = json.load(f)

headers = data[0]
rows = data[1:]

products_by_name = {}
for r in rows:
    if not r: continue
    
    r_dict = {}
    for idx, h in enumerate(headers):
        if idx < len(r):
            r_dict[h] = r[idx]
        else:
            r_dict[h] = ""
            
    p_name = r_dict.get("Product Name")
    if not p_name: continue
    
    p_size = r_dict.get("size")
    p_net = r_dict.get("Net Content/Count")
    p_unit = r_dict.get("Measurement Unit of Weight (Net Content)")
    p_gtin = r_dict.get("GTIN")
    p_hs = r_dict.get("HS Code")
    p_igst = r_dict.get("IGST")
    p_cgst = r_dict.get("CGST")
    p_sgst = r_dict.get("SGST")
    p_sub = r_dict.get("Sub Category")
    p_packaging = r_dict.get("size") # "size" column contains packaging info like "Pouch 10*14", "jar 27*7.5"
    
    # Clean up name: strip whitespace
    p_name = p_name.strip()
    
    if p_name not in products_by_name:
        products_by_name[p_name] = []
    
    products_by_name[p_name].append({
        "packaging": p_packaging,
        "net_content": str(p_net).strip(),
        "unit": str(p_unit).strip(),
        "gtin": str(p_gtin).strip(),
        "hs_code": str(p_hs).strip(),
        "igst": str(p_igst).strip(),
        "cgst": str(p_cgst).strip(),
        "sgst": str(p_sgst).strip(),
        "sub_category": str(p_sub).strip()
    })

with open(r"c:\Users\mukul sharma\Project\Online Mart\scratch\all_excel_products.json", "w", encoding="utf-8") as f:
    json.dump(products_by_name, f, indent=2)

print("Saved all products to scratch/all_excel_products.json")
for name, variants in products_by_name.items():
    print(f"- {name}: {', '.join([v['net_content'] + ('g' if v['unit'].lower() == 'grams' else '') for v in variants])}")
