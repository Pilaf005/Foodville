import json

with open(r"c:\Users\mukul sharma\Project\Online Mart\scratch\excel_dump.json", "r", encoding="utf-8") as f:
    data = json.load(f)

headers = data[0]
rows = data[1:]

print("Columns:")
for idx, h in enumerate(headers[:30]):
    print(f"{idx}: {h}")

print("\nAll Unique Products and Sizes in Excel:")
products_by_name = {}
for r in rows:
    if not r: continue
    # Some rows might be shorter than headers
    name = r[1] if len(r) > 1 else ""
    if not name: continue
    
    gtin = r[3] if len(r) > 3 else ""
    category = r[11] if len(r) > 11 else ""
    sub_category = r[12] if len(r) > 12 else ""
    net_content = r[14] if len(r) > 14 else ""
    size = r[16] if len(r) > 16 else "" # Wait, let's verify if size is at index 16. In headers, let's count:
    # 0: Brand Name
    # 1: Product Name
    # 2: Product Description
    # 3: GTIN
    # 4: SKU Number
    # 5: Bar Code
    # 6: Packaging Level
    # 7: Product Channel
    # 8: Primary GTIN
    # 9: Category? Wait! Let's check headers.
    
    # Let's map headers dynamically by name:
    r_dict = {}
    for idx, h in enumerate(headers):
        if idx < len(r):
            r_dict[h] = r[idx]
        else:
            r_dict[h] = ""
            
    p_name = r_dict.get("Product Name")
    p_size = r_dict.get("size")
    p_net = r_dict.get("Net Content/Count")
    p_unit = r_dict.get("Measurement Unit of Weight (Net Content)")
    p_gtin = r_dict.get("GTIN")
    p_hs = r_dict.get("HS Code")
    p_igst = r_dict.get("IGST")
    p_cgst = r_dict.get("CGST")
    p_sgst = r_dict.get("SGST")
    p_sub = r_dict.get("Sub Category")
    
    if p_name not in products_by_name:
        products_by_name[p_name] = []
    
    products_by_name[p_name].append({
        "size": p_size,
        "net_content": p_net,
        "unit": p_unit,
        "gtin": p_gtin,
        "hs_code": p_hs,
        "igst": p_igst,
        "cgst": p_cgst,
        "sgst": p_sgst,
        "sub_category": p_sub
    })

print(json.dumps(products_by_name, indent=2))
