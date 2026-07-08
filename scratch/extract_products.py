import re
import json

with open(r"c:\Users\mukul sharma\Project\Online Mart\src\data\products.js", "r", encoding="utf-8") as f:
    js_content = f.read()

# Let's extract the products array content.
# Since it's a large array of objects, we can find: export const products = [ ... ]
# Let's find "export const products = [" and get everything inside the bracket.
match = re.search(r"export const products = \[\s*({.*})\s*\];?", js_content, re.DOTALL)
if not match:
    # Let's write a simpler parser that finds the index of `export const products = [` and then finds matching bracket.
    start_idx = js_content.find("export const products = [")
    if start_idx != -1:
        # find matching bracket
        bracket_count = 0
        end_idx = -1
        for i in range(start_idx + len("export const products = [") - 1, len(js_content)):
            if js_content[i] == '[':
                bracket_count += 1
            elif js_content[i] == ']':
                bracket_count -= 1
                if bracket_count == 0:
                    end_idx = i
                    break
        products_str = js_content[start_idx + len("export const products = ["):end_idx]
        
        # Let's write this to a scratch file and print details
        print("Found products array, length:", len(products_str))
        
        # We can parse this products_str. Since it is valid JS/JSON (might have unquoted keys? No, in products.js it looks like standard JSON objects).
        # Let's try parsing it as JSON by wrapping it in `[` and `]`.
        try:
            # Clean up trailing commas if any
            clean_str = re.sub(r",\s*([\]}])", r"\1", products_str)
            products_list = json.loads("[" + clean_str + "]")
            print("Successfully parsed products as JSON!")
            print("Number of products:", len(products_list))
            for p in products_list[:15]:
                print(f"ID: {p['id']}, Name: '{p['name']}', Category: '{p['category']}'")
            
            # Let's save this JSON to scratch/existing_products.json
            with open(r"c:\Users\mukul sharma\Project\Online Mart\scratch\existing_products.json", "w", encoding="utf-8") as out:
                json.dump(products_list, out, indent=2)
        except Exception as e:
            print("Error parsing as JSON:", e)
else:
    print("RegEx match failed.")
