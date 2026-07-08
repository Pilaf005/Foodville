// products.js
// 🔹 SINGLE FILE for all product data — 128 products total.

// ---------- 1. CATEGORIES ----------
export const categories = [
  {
    "id": "powders",
    "name": "Spice Powders"
  },
  {
    "id": "seasoning",
    "name": "Seasoning & Herbs"
  },
  {
    "id": "seeds",
    "name": "Seeds"
  },
  {
    "id": "dryfruits",
    "name": "Dry Fruits & Nuts"
  },
  {
    "id": "wellness",
    "name": "Herbal & Wellness"
  },
  {
    "id": "combos",
    "name": "Combo Packs"
  },
  {
    "id": "bulk",
    "name": "Bulk Products"
  }
];

// ---------- 2. PRODUCTS ----------
export const products = [
  {
    "id": 1,
    "slug": "red-onion-powder",
    "name": "Red Onion Powder",
    "category": "powders",
    "shopBy": "valueBuys",
    "unit": "100g",
    "price": 149,
    "mrp": 179,
    "image": "https://media.istockphoto.com/id/1466771545/photo/onion-powder-on-a-wooden-spoon-with-onions-on-black-background.jpg?s=2048x2048&w=is&k=20&c=znQlLW5hsXc__JX3my9vtqdrEvmLUO4b_0TgkQmTPoU=",
    "description": "Sun-dried red onions, ground fresh.",
    "stock": 40,
    "rating": 4.4,
    "tags": [
      "spice",
      "powder"
    ],
    "images": [
      "https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1528569051709-22528f7c7527?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://i.pinimg.com/1200x/64/ae/12/64ae12e4361ae5f25cb52b3e7958877e.jpg",
      "https://i.pinimg.com/1200x/ca/74/88/ca748847e4c600ffdaacf9c314f367c2.jpg"
    ],
    "reviews": [
      {
        "name": "Aishwarya R.",
        "rating": 5,
        "comment": "Super fresh, smells amazing. Ground really fine. Worth every rupee!",
        "date": "2026-06-15"
      },
      {
        "name": "Vikram K.",
        "rating": 4,
        "comment": "Great flavor addition to my cooking. Very convenient packing.",
        "date": "2026-05-20"
      }
    ],
    "details": "Our premium Red Onion Powder is carefully ground from the finest handpicked raw ingredients sourced directly from organic farmers across India. We use a low-temperature grinding process to ensure that all natural oils, rich aroma, and authentic color are locked into every packet. This versatile spice powder adds a deep, savory layer to your curries, soups, marinades, and daily recipes. It is completely free from artificial dyes, chemicals, MSG, or synthetic fillers, guaranteeing 100% purity and unmatched freshness in your kitchen.",
    "highlights": {
      "shelfLife": "9 Months from Packaging",
      "storage": "Store in a cool, dark, and dry place. Transfer to an airtight glass container after opening to prevent moisture absorption.",
      "origin": "India",
      "form": "Fine Ground Powder",
      "ingredients": "100% Pure Dehydrated Red Onion",
      "netWeight": "100g",
      "foodType": "100% Vegetarian / Vegan Friendly",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001",
      "brand": "Foodville",
      "gtin": "8908031464001",
      "netContent": "100g",
      "packagingType": "Pouch 10x14",
      "category": "Food",
      "subCategory": "Dehydrated Fruits and Vegetables",
      "igst": "0 percent",
      "cgst": "0 percent",
      "sgst": "0 percent",
      "companyName": "Foodville Consumer Products Private Limited",
      "hsCode": "0712"
    },
    "units": [
      {
        "unit": "100g",
        "price": 149,
        "mrp": 179,
        "gtin": "8908031464001",
        "packaging": "Pouch 10x14"
      },
      {
        "unit": "200g",
        "price": 268,
        "mrp": 322,
        "gtin": "8908031464193",
        "packaging": "Jar 27x7.5"
      }
    ],
    "brand": "Foodville",
    "gtin": "8908031464001",
    "packaging": "Pouch 10x14"
  },
  {
    "id": 2,
    "slug": "white-onion-powder",
    "name": "White Onion Powder",
    "category": "powders",
    "shopBy": "valueBuys",
    "unit": "100g",
    "price": 139,
    "mrp": 169,
    "image": "https://images.unsplash.com/photo-1676620202070-085c67e7ccb5?q=80&w=1997&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Mild, sweet onion flavor in powder form.",
    "stock": 35,
    "rating": 4.3,
    "tags": [
      "spice",
      "powder"
    ],
    "images": [
      "https://i.pinimg.com/736x/04/81/f1/0481f12938f3b3745fe9c49a043a0493.jpg",
      "https://i.pinimg.com/736x/3e/1f/58/3e1f58737a1815a5e745bbcc67657886.jpg",
      "https://i.pinimg.com/1200x/5c/81/7d/5c817d0371817657d33a8f86404d399c.jpg",
      "https://i.pinimg.com/1200x/a0/4c/20/a04c20ebe737bdc7ce4e801670aa167a.jpg"
    ],
    "reviews": [
      {
        "name": "Priya S.",
        "rating": 5,
        "comment": "Genuine taste. Totally organic, no synthetic smell. Highly recommended.",
        "date": "2026-06-25"
      },
      {
        "name": "Kunal M.",
        "rating": 4,
        "comment": "Good quality seeds, extremely clean and fresh packaging.",
        "date": "2026-04-18"
      },
      {
        "name": "Amit N.",
        "rating": 5,
        "comment": "First time buying this, absolutely impressed with quality.",
        "date": "2026-06-02"
      }
    ],
    "details": "Our premium White Onion Powder is carefully ground from the finest handpicked raw ingredients sourced directly from organic farmers across India. We use a low-temperature grinding process to ensure that all natural oils, rich aroma, and authentic color are locked into every packet. This versatile spice powder adds a deep, savory layer to your curries, soups, marinades, and daily recipes. It is completely free from artificial dyes, chemicals, MSG, or synthetic fillers, guaranteeing 100% purity and unmatched freshness in your kitchen.",
    "highlights": {
      "shelfLife": "9 Months from Packaging",
      "storage": "Store in a cool, dark, and dry place. Transfer to an airtight glass container after opening to prevent moisture absorption.",
      "origin": "India",
      "form": "Fine Ground Powder",
      "ingredients": "100% Pure Dehydrated White Onion",
      "netWeight": "100g",
      "foodType": "100% Vegetarian / Vegan Friendly",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001",
      "brand": "Foodville",
      "gtin": "8908031464018",
      "netContent": "100g",
      "packagingType": "Pouch 10x14",
      "category": "Food",
      "subCategory": "Dehydrated Fruits and Vegetables",
      "igst": "0 percent",
      "cgst": "0 percent",
      "sgst": "0 percent",
      "companyName": "Foodville Consumer Products Private Limited",
      "hsCode": "0712"
    },
    "units": [
      {
        "unit": "100g",
        "price": 139,
        "mrp": 169,
        "gtin": "8908031464018",
        "packaging": "Pouch 10x14"
      },
      {
        "unit": "200g",
        "price": 250,
        "mrp": 304,
        "gtin": "8908031464209",
        "packaging": "Jar 27x7.5"
      }
    ],
    "brand": "Foodville",
    "gtin": "8908031464018",
    "packaging": "Pouch 10x14"
  },
  {
    "id": 3,
    "slug": "moringa-powder",
    "name": "Moringa Powder",
    "category": "powders",
    "shopBy": "trending",
    "unit": "200g",
    "price": 199,
    "mrp": 249,
    "image": "https://images.unsplash.com/photo-1565117661210-fd54898de423?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Nutrient-dense superfood leaf powder.",
    "stock": 25,
    "rating": 4.6,
    "tags": [
      "superfood",
      "powder"
    ],
    "images": [
      "https://images.unsplash.com/photo-1650494701391-daceb922ce9d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://i.pinimg.com/1200x/36/10/6a/36106af0566f7626cc4f750ebded34d6.jpg",
      "https://i.pinimg.com/736x/8d/d1/ef/8dd1ef323630e6a53b4a6c1c5781c44b.jpg",
      "https://i.pinimg.com/736x/cf/b5/1d/cfb51d6784a16e1b5a90bd5d9a0d6805.jpg"
    ],
    "reviews": [
      {
        "name": "Rohan P.",
        "rating": 5,
        "comment": "Premium crunch! Size of nuts is great. Perfect for morning breakfast.",
        "date": "2026-06-10"
      },
      {
        "name": "Deepika G.",
        "rating": 4.5,
        "comment": "Tasty, fresh and healthy. Clean packaging.",
        "date": "2026-05-12"
      }
    ],
    "details": "Our premium Moringa Powder is carefully ground from the finest handpicked raw ingredients sourced directly from organic farmers across India. We use a low-temperature grinding process to ensure that all natural oils, rich aroma, and authentic color are locked into every packet. This versatile spice powder adds a deep, savory layer to your curries, soups, marinades, and daily recipes. It is completely free from artificial dyes, chemicals, MSG, or synthetic fillers, guaranteeing 100% purity and unmatched freshness in your kitchen.",
    "highlights": {
      "shelfLife": "9 Months from Packaging",
      "storage": "Store in a cool, dark, and dry place. Transfer to an airtight glass container after opening to prevent moisture absorption.",
      "origin": "India",
      "form": "Fine Ground Powder",
      "ingredients": "100% Pure Dehydrated Moringa",
      "netWeight": "100g",
      "foodType": "100% Vegetarian / Vegan Friendly",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001",
      "brand": "Foodville",
      "gtin": "8908031464117",
      "netContent": "200g",
      "packagingType": "Jar 27x7.5",
      "category": "Food",
      "subCategory": "Herbs and Spices",
      "igst": "5 percent",
      "cgst": "2.5 percent",
      "sgst": "2.5 percent",
      "companyName": "Foodville Consumer Products Private Limited",
      "hsCode": "1211"
    },
    "units": [
      {
        "unit": "200g",
        "price": 199,
        "mrp": 249,
        "gtin": "8908031464117",
        "packaging": "Jar 27x7.5"
      }
    ],
    "brand": "Foodville",
    "gtin": "8908031464117",
    "packaging": "Jar 27x7.5"
  },
  {
    "id": 4,
    "slug": "tomato-powder",
    "name": "Tomato Powder",
    "category": "powders",
    "shopBy": "valueBuys",
    "unit": "100g",
    "price": 159,
    "mrp": 189,
    "image": "https://images.unsplash.com/photo-1616289738325-8c952648eded?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Concentrated tomato flavor, no preservatives.",
    "stock": 30,
    "rating": 4.2,
    "tags": [
      "spice",
      "powder"
    ],
    "images": [
      "https://i.pinimg.com/736x/d4/e1/1b/d4e11b225378568da9d775016f762ac3.jpg",
      "https://images.unsplash.com/photo-1546241295-5d238887342e?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://i.pinimg.com/1200x/49/27/1a/49271abced1488524dce1b0f21c2f5dd.jpg",
      "https://i.pinimg.com/1200x/60/1a/bf/601abf80a0ca6271d33bbf87524c3c10.jpg"
    ],
    "reviews": [
      {
        "name": "Aishwarya R.",
        "rating": 5,
        "comment": "Super fresh, smells amazing. Ground really fine. Worth every rupee!",
        "date": "2026-06-15"
      },
      {
        "name": "Vikram K.",
        "rating": 4,
        "comment": "Great flavor addition to my cooking. Very convenient packing.",
        "date": "2026-05-20"
      }
    ],
    "details": "Our premium Tomato Powder is carefully ground from the finest handpicked raw ingredients sourced directly from organic farmers across India. We use a low-temperature grinding process to ensure that all natural oils, rich aroma, and authentic color are locked into every packet. This versatile spice powder adds a deep, savory layer to your curries, soups, marinades, and daily recipes. It is completely free from artificial dyes, chemicals, MSG, or synthetic fillers, guaranteeing 100% purity and unmatched freshness in your kitchen.",
    "highlights": {
      "shelfLife": "9 Months from Packaging",
      "storage": "Store in a cool, dark, and dry place. Transfer to an airtight glass container after opening to prevent moisture absorption.",
      "origin": "India",
      "form": "Fine Ground Powder",
      "ingredients": "100% Pure Dehydrated Tomato",
      "netWeight": "100g",
      "foodType": "100% Vegetarian / Vegan Friendly",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001",
      "brand": "Foodville",
      "gtin": "8908031464049",
      "netContent": "100g",
      "packagingType": "Pouch 10x14",
      "category": "Food",
      "subCategory": "Dehydrated Fruits and Vegetables",
      "igst": "5 percent",
      "cgst": "2.5 percent",
      "sgst": "2.5 percent",
      "companyName": "Foodville Consumer Products Private Limited",
      "hsCode": "2002"
    },
    "units": [
      {
        "unit": "100g",
        "price": 159,
        "mrp": 189,
        "gtin": "8908031464049",
        "packaging": "Pouch 10x14"
      },
      {
        "unit": "200g",
        "price": 286,
        "mrp": 340,
        "gtin": "8908031464230",
        "packaging": "Jar 27x7.5"
      }
    ],
    "brand": "Foodville",
    "gtin": "8908031464049",
    "packaging": "Pouch 10x14"
  },
  {
    "id": 5,
    "slug": "ginger-powder",
    "name": "Ginger Powder",
    "category": "powders",
    "shopBy": "valueBuys",
    "unit": "100g",
    "price": 169,
    "mrp": 199,
    "image": "https://media.istockphoto.com/id/647402644/photo/ginger-root-and-ginger-powder-in-the-bowl.jpg?s=2048x2048&w=is&k=20&c=4AgwDwIQl-43vMgQzlzDVOZzYXReGb3yLVlQVdDZg7o=",
    "description": "Pure dried ginger, finely ground.",
    "stock": 45,
    "rating": 4.5,
    "tags": [
      "spice",
      "powder"
    ],
    "images": [
      "https://i.pinimg.com/1200x/6d/ae/ae/6daeaeead1207a8262c7b083fc89168b.jpg",
      "https://i.pinimg.com/736x/57/33/64/573364e7977dc5b4fc3c9649ab6b9e58.jpg",
      "https://plus.unsplash.com/premium_photo-1670952897229-2bd661864858?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0",
      "https://i.pinimg.com/736x/da/0b/cf/da0bcfe026cd1a7f7b26db7f0c55ac66.jpg"
    ],
    "reviews": [
      {
        "name": "Priya S.",
        "rating": 5,
        "comment": "Genuine taste. Totally organic, no synthetic smell. Highly recommended.",
        "date": "2026-06-25"
      },
      {
        "name": "Kunal M.",
        "rating": 4,
        "comment": "Good quality seeds, extremely clean and fresh packaging.",
        "date": "2026-04-18"
      },
      {
        "name": "Amit N.",
        "rating": 5,
        "comment": "First time buying this, absolutely impressed with quality.",
        "date": "2026-06-02"
      }
    ],
    "details": "Our premium Ginger Powder is carefully ground from the finest handpicked raw ingredients sourced directly from organic farmers across India. We use a low-temperature grinding process to ensure that all natural oils, rich aroma, and authentic color are locked into every packet. This versatile spice powder adds a deep, savory layer to your curries, soups, marinades, and daily recipes. It is completely free from artificial dyes, chemicals, MSG, or synthetic fillers, guaranteeing 100% purity and unmatched freshness in your kitchen.",
    "highlights": {
      "shelfLife": "9 Months from Packaging",
      "storage": "Store in a cool, dark, and dry place. Transfer to an airtight glass container after opening to prevent moisture absorption.",
      "origin": "India",
      "form": "Fine Ground Powder",
      "ingredients": "100% Pure Dehydrated Ginger",
      "netWeight": "100g",
      "foodType": "100% Vegetarian / Vegan Friendly",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001",
      "brand": "Foodville",
      "gtin": "8908031464032",
      "netContent": "100g",
      "packagingType": "Pouch 10x14",
      "category": "Food",
      "subCategory": "Dehydrated Fruits and Vegetables",
      "igst": "5 percent",
      "cgst": "2.5 percent",
      "sgst": "2.5 percent",
      "companyName": "Foodville Consumer Products Private Limited",
      "hsCode": "0910"
    },
    "units": [
      {
        "unit": "100g",
        "price": 169,
        "mrp": 199,
        "gtin": "8908031464032",
        "packaging": "Pouch 10x14"
      },
      {
        "unit": "200g",
        "price": 304,
        "mrp": 358,
        "gtin": "8908031464223",
        "packaging": "Jar 27x7.5"
      }
    ],
    "brand": "Foodville",
    "gtin": "8908031464032",
    "packaging": "Pouch 10x14"
  },
  {
    "id": 6,
    "slug": "garlic-powder",
    "name": "Garlic Powder",
    "category": "powders",
    "shopBy": "bestseller",
    "unit": "100g",
    "price": 159,
    "mrp": 189,
    "image": "https://media.istockphoto.com/id/1366928508/photo/garlic-powder.jpg?s=2048x2048&w=is&k=20&c=pK3oyVFW0Y5eANzqlcFp4ooZUPqrVikDTtC8ueff6Bw=",
    "description": "Strong, pure garlic flavor.",
    "stock": 50,
    "rating": 4.5,
    "tags": [
      "spice",
      "powder"
    ],
    "images": [
      "https://images.unsplash.com/photo-1636210589096-a53d5dacd702?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://i.pinimg.com/1200x/49/7c/37/497c37ede9508d6ef051a9822ab51629.jpg",
      "https://i.pinimg.com/1200x/4f/29/02/4f29025b7767a917596cd43a48c7b592.jpg",
      "https://plus.unsplash.com/premium_photo-1726215330238-3e4ce4bcb9e6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    "reviews": [
      {
        "name": "Rohan P.",
        "rating": 5,
        "comment": "Premium crunch! Size of nuts is great. Perfect for morning breakfast.",
        "date": "2026-06-10"
      },
      {
        "name": "Deepika G.",
        "rating": 4.5,
        "comment": "Tasty, fresh and healthy. Clean packaging.",
        "date": "2026-05-12"
      }
    ],
    "details": "Our premium Garlic Powder is carefully ground from the finest handpicked raw ingredients sourced directly from organic farmers across India. We use a low-temperature grinding process to ensure that all natural oils, rich aroma, and authentic color are locked into every packet. This versatile spice powder adds a deep, savory layer to your curries, soups, marinades, and daily recipes. It is completely free from artificial dyes, chemicals, MSG, or synthetic fillers, guaranteeing 100% purity and unmatched freshness in your kitchen.",
    "highlights": {
      "shelfLife": "9 Months from Packaging",
      "storage": "Store in a cool, dark, and dry place. Transfer to an airtight glass container after opening to prevent moisture absorption.",
      "origin": "India",
      "form": "Fine Ground Powder",
      "ingredients": "100% Pure Dehydrated Garlic",
      "netWeight": "100g",
      "foodType": "100% Vegetarian / Vegan Friendly",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001",
      "brand": "Foodville",
      "gtin": "8908031464025",
      "netContent": "100g",
      "packagingType": "Pouch 10x14",
      "category": "Food",
      "subCategory": "Dehydrated Fruits and Vegetables",
      "igst": "0 percent",
      "cgst": "0 percent",
      "sgst": "0 percent",
      "companyName": "Foodville Consumer Products Private Limited",
      "hsCode": "0712"
    },
    "units": [
      {
        "unit": "100g",
        "price": 159,
        "mrp": 189,
        "gtin": "8908031464025",
        "packaging": "Pouch 10x14"
      },
      {
        "unit": "200g",
        "price": 286,
        "mrp": 340,
        "gtin": "8908031464216",
        "packaging": "Jar 27x7.5"
      }
    ],
    "brand": "Foodville",
    "gtin": "8908031464025",
    "packaging": "Pouch 10x14"
  },
  {
    "id": 7,
    "slug": "mint-powder",
    "name": "Mint Powder",
    "category": "powders",
    "shopBy": "valueBuys",
    "unit": "100g",
    "price": 129,
    "mrp": 159,
    "image": "https://i.pinimg.com/webp85/1200x/15/5e/b7/155eb7808a53b26d7d2f46fc112f30ae.webp",
    "description": "Refreshing dried mint leaves, ground.",
    "stock": 28,
    "rating": 4.3,
    "tags": [
      "spice",
      "powder"
    ],
    "images": [
      "https://i.pinimg.com/736x/79/c9/8f/79c98f74aecce4d1b66e7bb0bca1a76a.jpg",
      "https://i.pinimg.com/736x/6c/fd/23/6cfd23a8111d59538f433647613aaf31.jpg",
      "https://i.pinimg.com/736x/c0/bc/ab/c0bcab75bc75b1f8baba098446f8faa4.jpg",
      "https://i.pinimg.com/736x/42/5a/5e/425a5edba090f5be097dcb1a48f346a2.jpg"
    ],
    "reviews": [
      {
        "name": "Aishwarya R.",
        "rating": 5,
        "comment": "Super fresh, smells amazing. Ground really fine. Worth every rupee!",
        "date": "2026-06-15"
      },
      {
        "name": "Vikram K.",
        "rating": 4,
        "comment": "Great flavor addition to my cooking. Very convenient packing.",
        "date": "2026-05-20"
      }
    ],
    "details": "Our premium Mint Powder is carefully ground from the finest handpicked raw ingredients sourced directly from organic farmers across India. We use a low-temperature grinding process to ensure that all natural oils, rich aroma, and authentic color are locked into every packet. This versatile spice powder adds a deep, savory layer to your curries, soups, marinades, and daily recipes. It is completely free from artificial dyes, chemicals, MSG, or synthetic fillers, guaranteeing 100% purity and unmatched freshness in your kitchen.",
    "highlights": {
      "shelfLife": "9 Months from Packaging",
      "storage": "Store in a cool, dark, and dry place. Transfer to an airtight glass container after opening to prevent moisture absorption.",
      "origin": "India",
      "form": "Fine Ground Powder",
      "ingredients": "100% Pure Dehydrated Mint",
      "netWeight": "100g",
      "foodType": "100% Vegetarian / Vegan Friendly",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001",
      "brand": "Foodville",
      "gtin": "8908031464063",
      "netContent": "100g",
      "packagingType": "Pouch 10x14",
      "category": "Food",
      "subCategory": "Herbs and Spices",
      "igst": "5 percent",
      "cgst": "2.5 percent",
      "sgst": "2.5 percent",
      "companyName": "Foodville Consumer Products Private Limited",
      "hsCode": "1211"
    },
    "units": [
      {
        "unit": "100g",
        "price": 129,
        "mrp": 159,
        "gtin": "8908031464063",
        "packaging": "Pouch 10x14"
      }
    ],
    "brand": "Foodville",
    "gtin": "8908031464063",
    "packaging": "Pouch 10x14"
  },
  {
    "id": 8,
    "slug": "beetroot-powder",
    "name": "Beetroot Powder",
    "category": "powders",
    "shopBy": "trending",
    "unit": "200g",
    "price": 189,
    "mrp": 229,
    "image": "https://media.istockphoto.com/id/1400024680/photo/beetroot-powder-in-wooden-bowl-with-fresh-fruit-isolated-on-white.jpg?s=2048x2048&w=is&k=20&c=_BTuL93KbJ1k-HgJyc_z1jr7H2nRDUMg5uqXR_Q28To=",
    "description": "Natural color and earthy sweetness.",
    "stock": 22,
    "rating": 4.4,
    "tags": [
      "superfood",
      "powder"
    ],
    "images": [
      "https://plus.unsplash.com/premium_photo-1700072295449-1cf40c665fe0?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://i.pinimg.com/1200x/e5/2b/bc/e52bbcc7680c5879c761fc588853a653.jpg",
      "https://images.unsplash.com/photo-1606951444141-e5533feb55be?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80"
    ],
    "reviews": [
      {
        "name": "Priya S.",
        "rating": 5,
        "comment": "Genuine taste. Totally organic, no synthetic smell. Highly recommended.",
        "date": "2026-06-25"
      },
      {
        "name": "Kunal M.",
        "rating": 4,
        "comment": "Good quality seeds, extremely clean and fresh packaging.",
        "date": "2026-04-18"
      },
      {
        "name": "Amit N.",
        "rating": 5,
        "comment": "First time buying this, absolutely impressed with quality.",
        "date": "2026-06-02"
      }
    ],
    "details": "Our premium Beetroot Powder is carefully ground from the finest handpicked raw ingredients sourced directly from organic farmers across India. We use a low-temperature grinding process to ensure that all natural oils, rich aroma, and authentic color are locked into every packet. This versatile spice powder adds a deep, savory layer to your curries, soups, marinades, and daily recipes. It is completely free from artificial dyes, chemicals, MSG, or synthetic fillers, guaranteeing 100% purity and unmatched freshness in your kitchen.",
    "highlights": {
      "shelfLife": "9 Months from Packaging",
      "storage": "Store in a cool, dark, and dry place. Transfer to an airtight glass container after opening to prevent moisture absorption.",
      "origin": "India",
      "form": "Fine Ground Powder",
      "ingredients": "100% Pure Dehydrated Beetroot",
      "netWeight": "100g",
      "foodType": "100% Vegetarian / Vegan Friendly",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001",
      "brand": "Foodville",
      "gtin": "8908031464124",
      "netContent": "200g",
      "packagingType": "Jar 27x7.5",
      "category": "Food",
      "subCategory": "Dehydrated Fruits and Vegetables",
      "igst": "0 percent",
      "cgst": "0 percent",
      "sgst": "0 percent",
      "companyName": "Foodville Consumer Products Private Limited",
      "hsCode": "0712"
    },
    "units": [
      {
        "unit": "200g",
        "price": 189,
        "mrp": 229,
        "gtin": "8908031464124",
        "packaging": "Jar 27x7.5"
      }
    ],
    "brand": "Foodville",
    "gtin": "8908031464124",
    "packaging": "Jar 27x7.5"
  },
  {
    "id": 9,
    "slug": "turmeric-powder",
    "name": "Turmeric Powder",
    "category": "powders",
    "unit": "100g",
    "price": 99,
    "mrp": 129,
    "image": "https://images.unsplash.com/photo-1606951444141-e5533feb55be?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Pure, high-curcumin turmeric.",
    "stock": 60,
    "rating": 4.7,
    "tags": [
      "spice",
      "wellness",
      "bestseller"
    ],
    "images": [
      "https://images.unsplash.com/photo-1606951444141-e5533feb55be?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1606951444141-e5533feb55be?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80"
    ],
    "reviews": [
      {
        "name": "Rohan P.",
        "rating": 5,
        "comment": "Premium crunch! Size of nuts is great. Perfect for morning breakfast.",
        "date": "2026-06-10"
      },
      {
        "name": "Deepika G.",
        "rating": 4.5,
        "comment": "Tasty, fresh and healthy. Clean packaging.",
        "date": "2026-05-12"
      }
    ],
    "details": "Our premium Turmeric Powder is carefully ground from the finest handpicked raw ingredients sourced directly from organic farmers across India. We use a low-temperature grinding process to ensure that all natural oils, rich aroma, and authentic color are locked into every packet. This versatile spice powder adds a deep, savory layer to your curries, soups, marinades, and daily recipes. It is completely free from artificial dyes, chemicals, MSG, or synthetic fillers, guaranteeing 100% purity and unmatched freshness in your kitchen.",
    "highlights": {
      "shelfLife": "9 Months from Packaging",
      "storage": "Store in a cool, dark, and dry place. Transfer to an airtight glass container after opening to prevent moisture absorption.",
      "origin": "100% Indian Origin",
      "form": "Fine Ground Powder",
      "ingredients": "100% Pure Dehydrated Turmeric",
      "netWeight": "100g",
      "foodType": "100% Vegetarian / Vegan Friendly",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001"
    },
    "units": [
      {
        "unit": "100g",
        "price": 99,
        "mrp": 129
      },
      {
        "unit": "250g",
        "price": 228,
        "mrp": 297
      },
      {
        "unit": "500g",
        "price": 416,
        "mrp": 542
      },
      {
        "unit": "1kg",
        "price": 792,
        "mrp": 1032
      }
    ]
  },
  {
    "id": 10,
    "slug": "green-chilli-powder",
    "name": "Green Chilli Powder",
    "category": "powders",
    "shopBy": "valueBuys",
    "unit": "100g",
    "price": 149,
    "mrp": 179,
    "image": "https://i.pinimg.com/1200x/33/00/9d/33009d53a302f194e21df082c4745165.jpg",
    "description": "Sharp heat from sun-dried green chillies.",
    "stock": 33,
    "rating": 4.2,
    "tags": [
      "spice",
      "powder"
    ],
    "images": [
      "https://i.pinimg.com/1200x/33/00/9d/33009d53a302f194e21df082c4745165.jpg",
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1606951444141-e5533feb55be?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80"
    ],
    "reviews": [
      {
        "name": "Aishwarya R.",
        "rating": 5,
        "comment": "Super fresh, smells amazing. Ground really fine. Worth every rupee!",
        "date": "2026-06-15"
      },
      {
        "name": "Vikram K.",
        "rating": 4,
        "comment": "Great flavor addition to my cooking. Very convenient packing.",
        "date": "2026-05-20"
      }
    ],
    "details": "Our premium Green Chilli Powder is carefully ground from the finest handpicked raw ingredients sourced directly from organic farmers across India. We use a low-temperature grinding process to ensure that all natural oils, rich aroma, and authentic color are locked into every packet. This versatile spice powder adds a deep, savory layer to your curries, soups, marinades, and daily recipes. It is completely free from artificial dyes, chemicals, MSG, or synthetic fillers, guaranteeing 100% purity and unmatched freshness in your kitchen.",
    "highlights": {
      "shelfLife": "9 Months from Packaging",
      "storage": "Store in a cool, dark, and dry place. Transfer to an airtight glass container after opening to prevent moisture absorption.",
      "origin": "India",
      "form": "Fine Ground Powder",
      "ingredients": "100% Pure Dehydrated Green Chilli",
      "netWeight": "100g",
      "foodType": "100% Vegetarian / Vegan Friendly",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001",
      "brand": "Foodville",
      "gtin": "8908031464070",
      "netContent": "100g",
      "packagingType": "Pouch 10x14",
      "category": "Food",
      "subCategory": "Dehydrated Fruits and Vegetables",
      "igst": "0 percent",
      "cgst": "0 percent",
      "sgst": "0 percent",
      "companyName": "Foodville Consumer Products Private Limited",
      "hsCode": "0712"
    },
    "units": [
      {
        "unit": "100g",
        "price": 149,
        "mrp": 179,
        "gtin": "8908031464070",
        "packaging": "Pouch 10x14"
      },
      {
        "unit": "200g",
        "price": 268,
        "mrp": 322,
        "gtin": "8908031464247",
        "packaging": "Jar 27x7.5"
      }
    ],
    "brand": "Foodville",
    "gtin": "8908031464070",
    "packaging": "Pouch 10x14"
  },
  {
    "id": 11,
    "slug": "oregano",
    "name": "Oregano",
    "category": "seasoning",
    "shopBy": "bestseller",
    "unit": "100g",
    "price": 99,
    "mrp": 119,
    "image": "https://i.pinimg.com/736x/d7/d1/9c/d7d19ca6eb66a303970871ce3d881d1f.jpg",
    "description": "Dried oregano leaves for Italian dishes.",
    "stock": 40,
    "rating": 4.4,
    "tags": [
      "herb",
      "seasoning"
    ],
    "images": [
      "https://i.pinimg.com/736x/d7/d1/9c/d7d19ca6eb66a303970871ce3d881d1f.jpg",
      "https://images.unsplash.com/photo-1508747703725-719ae257c84a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "reviews": [
      {
        "name": "Priya S.",
        "rating": 5,
        "comment": "Genuine taste. Totally organic, no synthetic smell. Highly recommended.",
        "date": "2026-06-25"
      },
      {
        "name": "Kunal M.",
        "rating": 4,
        "comment": "Good quality seeds, extremely clean and fresh packaging.",
        "date": "2026-04-18"
      },
      {
        "name": "Amit N.",
        "rating": 5,
        "comment": "First time buying this, absolutely impressed with quality.",
        "date": "2026-06-02"
      }
    ],
    "details": "Bring authentic restaurant-style flavors to your home cooked dishes with our premium Oregano. Crafted from high-grade dried herbs and select ingredients, this seasoning blend is mixed in precise proportions to deliver a balanced and flavorful touch to your pizzas, pastas, salads, and snacks. Packaged in a moisture-controlled, food-safe jar to retain its volatile oils and signature aroma, it is the perfect pantry addition for food enthusiasts who value gourmet quality and clean ingredients.",
    "highlights": {
      "shelfLife": "9 Months from Packaging",
      "storage": "Store in a cool, dark, and dry place. Transfer to an airtight glass container after opening to prevent moisture absorption.",
      "origin": "India",
      "form": "Premium Selected Grade",
      "ingredients": "Raw Organic Oregano",
      "netWeight": "50g",
      "foodType": "100% Vegetarian / Vegan Friendly",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001",
      "brand": "Foodville",
      "gtin": "8908031464087",
      "netContent": "100g",
      "packagingType": "Pouch 10x14",
      "category": "Food",
      "subCategory": "Herbs and Spices",
      "igst": "0 percent",
      "cgst": "0 percent",
      "sgst": "0 percent",
      "companyName": "Foodville Consumer Products Private Limited",
      "hsCode": "0712"
    },
    "units": [
      {
        "unit": "100g",
        "price": 99,
        "mrp": 119,
        "gtin": "8908031464087",
        "packaging": "Pouch 10x14"
      }
    ],
    "brand": "Foodville",
    "gtin": "8908031464087",
    "packaging": "Pouch 10x14"
  },
  {
    "id": 12,
    "slug": "basil",
    "name": "Basil",
    "category": "seasoning",
    "unit": "50g",
    "price": 109,
    "mrp": 129,
    "image": "https://i.pinimg.com/736x/df/da/f8/dfdaf83ceacba34e527a49dbc1cc0915.jpg",
    "description": "Aromatic dried basil leaves.",
    "stock": 38,
    "rating": 4.4,
    "tags": [
      "herb",
      "seasoning"
    ],
    "images": [
      "https://i.pinimg.com/736x/df/da/f8/dfdaf83ceacba34e527a49dbc1cc0915.jpg",
      "https://images.unsplash.com/photo-1508747703725-719ae257c84a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "reviews": [
      {
        "name": "Rohan P.",
        "rating": 5,
        "comment": "Premium crunch! Size of nuts is great. Perfect for morning breakfast.",
        "date": "2026-06-10"
      },
      {
        "name": "Deepika G.",
        "rating": 4.5,
        "comment": "Tasty, fresh and healthy. Clean packaging.",
        "date": "2026-05-12"
      }
    ],
    "details": "Bring authentic restaurant-style flavors to your home cooked dishes with our premium Basil. Crafted from high-grade dried herbs and select ingredients, this seasoning blend is mixed in precise proportions to deliver a balanced and flavorful touch to your pizzas, pastas, salads, and snacks. Packaged in a moisture-controlled, food-safe jar to retain its volatile oils and signature aroma, it is the perfect pantry addition for food enthusiasts who value gourmet quality and clean ingredients.",
    "highlights": {
      "shelfLife": "9 Months from Packaging",
      "storage": "Store in a cool, dark, and dry place. Transfer to an airtight glass container after opening to prevent moisture absorption.",
      "origin": "100% Indian Origin",
      "form": "Premium Selected Grade",
      "ingredients": "Raw Organic Basil",
      "netWeight": "50g",
      "foodType": "100% Vegetarian / Vegan Friendly",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001"
    },
    "units": [
      {
        "unit": "50g",
        "price": 109,
        "mrp": 129
      },
      {
        "unit": "100g",
        "price": 196,
        "mrp": 232
      },
      {
        "unit": "250g",
        "price": 436,
        "mrp": 516
      }
    ]
  },
  {
    "id": 13,
    "slug": "potato-flakes",
    "name": "Potato Flakes",
    "category": "seasoning",
    "shopBy": "newlyIn",
    "unit": "200g",
    "price": 179,
    "mrp": 209,
    "image": "https://images.unsplash.com/photo-1612739406461-8b8a9bf06996?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "Instant mashed potato flakes.",
    "stock": 30,
    "rating": 4.1,
    "tags": [
      "instant"
    ],
    "images": [
      "https://images.unsplash.com/photo-1612739406461-8b8a9bf06996?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1508747703725-719ae257c84a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "reviews": [
      {
        "name": "Aishwarya R.",
        "rating": 5,
        "comment": "Super fresh, smells amazing. Ground really fine. Worth every rupee!",
        "date": "2026-06-15"
      },
      {
        "name": "Vikram K.",
        "rating": 4,
        "comment": "Great flavor addition to my cooking. Very convenient packing.",
        "date": "2026-05-20"
      }
    ],
    "details": "Bring authentic restaurant-style flavors to your home cooked dishes with our premium Potato Flakes. Crafted from high-grade dried herbs and select ingredients, this seasoning blend is mixed in precise proportions to deliver a balanced and flavorful touch to your pizzas, pastas, salads, and snacks. Packaged in a moisture-controlled, food-safe jar to retain its volatile oils and signature aroma, it is the perfect pantry addition for food enthusiasts who value gourmet quality and clean ingredients.",
    "highlights": {
      "shelfLife": "9 Months from Packaging",
      "storage": "Store in a cool, dark, and dry place. Transfer to an airtight glass container after opening to prevent moisture absorption.",
      "origin": "India",
      "form": "Premium Selected Grade",
      "ingredients": "Raw Organic Potato Flakes",
      "netWeight": "200g",
      "foodType": "100% Vegetarian / Vegan Friendly",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001",
      "brand": "Foodville",
      "gtin": "8908031464056",
      "netContent": "200g",
      "packagingType": "Pouch 16x18",
      "category": "Food",
      "subCategory": "Dehydrated Fruits and Vegetables",
      "igst": "5 percent",
      "cgst": "2.5 percent",
      "sgst": "2.5 percent",
      "companyName": "Foodville Consumer Products Private Limited",
      "hsCode": "1105"
    },
    "units": [
      {
        "unit": "200g",
        "price": 179,
        "mrp": 209,
        "gtin": "8908031464056",
        "packaging": "Pouch 16x18"
      }
    ],
    "brand": "Foodville",
    "gtin": "8908031464056",
    "packaging": "Pouch 16x18"
  },
  {
    "id": 14,
    "slug": "pizza-pasta-seasoning",
    "name": "Pizza Pasta Seasoning",
    "category": "seasoning",
    "shopBy": "bestseller",
    "unit": "100g",
    "price": 119,
    "mrp": 149,
    "image": "https://i.pinimg.com/1200x/c7/9f/90/c79f9041a6c62daa2ef07bbabab7743b.jpg",
    "description": "Blend of herbs for pizza and pasta.",
    "stock": 45,
    "rating": 4.5,
    "tags": [
      "seasoning",
      "bestseller"
    ],
    "images": [
      "https://i.pinimg.com/1200x/c7/9f/90/c79f9041a6c62daa2ef07bbabab7743b.jpg",
      "https://images.unsplash.com/photo-1508747703725-719ae257c84a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "reviews": [
      {
        "name": "Priya S.",
        "rating": 5,
        "comment": "Genuine taste. Totally organic, no synthetic smell. Highly recommended.",
        "date": "2026-06-25"
      },
      {
        "name": "Kunal M.",
        "rating": 4,
        "comment": "Good quality seeds, extremely clean and fresh packaging.",
        "date": "2026-04-18"
      },
      {
        "name": "Amit N.",
        "rating": 5,
        "comment": "First time buying this, absolutely impressed with quality.",
        "date": "2026-06-02"
      }
    ],
    "details": "Bring authentic restaurant-style flavors to your home cooked dishes with our premium Pizza Pasta Seasoning. Crafted from high-grade dried herbs and select ingredients, this seasoning blend is mixed in precise proportions to deliver a balanced and flavorful touch to your pizzas, pastas, salads, and snacks. Packaged in a moisture-controlled, food-safe jar to retain its volatile oils and signature aroma, it is the perfect pantry addition for food enthusiasts who value gourmet quality and clean ingredients.",
    "highlights": {
      "shelfLife": "9 Months from Packaging",
      "storage": "Store in a cool, dark, and dry place. Transfer to an airtight glass container after opening to prevent moisture absorption.",
      "origin": "India",
      "form": "Premium Selected Grade",
      "ingredients": "Raw Organic Pizza Pasta Seasoning",
      "netWeight": "75g",
      "foodType": "100% Vegetarian / Vegan Friendly",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001",
      "brand": "Foodville",
      "gtin": "8908031464100",
      "netContent": "100g",
      "packagingType": "Pouch 10x14",
      "category": "Food",
      "subCategory": "Seasonings and Preservatives",
      "igst": "5 percent",
      "cgst": "2.5 percent",
      "sgst": "2.5 percent",
      "companyName": "Foodville Consumer Products Private Limited",
      "hsCode": "0910"
    },
    "units": [
      {
        "unit": "100g",
        "price": 119,
        "mrp": 149,
        "gtin": "8908031464100",
        "packaging": "Pouch 10x14"
      },
      {
        "unit": "200g",
        "price": 214,
        "mrp": 268,
        "gtin": "8908031464261",
        "packaging": "Jar 27x7.5"
      }
    ],
    "brand": "Foodville",
    "gtin": "8908031464100",
    "packaging": "Pouch 10x14"
  },
  {
    "id": 15,
    "slug": "chia-seeds",
    "name": "Chia Seeds",
    "category": "seeds",
    "shopBy": "trending",
    "unit": "200g",
    "price": 199,
    "mrp": 249,
    "image": "https://i.pinimg.com/736x/7c/5d/18/7c5d18a8086fb13cbd8f233151700681.jpg",
    "description": "Omega-3 rich superfood seeds.",
    "stock": 50,
    "rating": 4.6,
    "tags": [
      "superfood",
      "seeds"
    ],
    "images": [
      "https://i.pinimg.com/736x/7c/5d/18/7c5d18a8086fb13cbd8f233151700681.jpg",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80"
    ],
    "reviews": [
      {
        "name": "Rohan P.",
        "rating": 5,
        "comment": "Premium crunch! Size of nuts is great. Perfect for morning breakfast.",
        "date": "2026-06-10"
      },
      {
        "name": "Deepika G.",
        "rating": 4.5,
        "comment": "Tasty, fresh and healthy. Clean packaging.",
        "date": "2026-05-12"
      }
    ],
    "details": "Supercharge your daily nutrition with our premium raw Chia Seeds. Loaded with essential fatty acids, protein, dietary fiber, and trace minerals like zinc and magnesium, these seeds are a powerhouse of clean energy. They are carefully cleaned, dried, and sorted to ensure that only the plumpest, highest-quality seeds reach your table. Ideal for mixing into morning smoothies, oatmeal bowls, baking healthy breads, or simply roasting for a crunchy afternoon snack.",
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dark, and dry place. Transfer to an airtight glass container after opening to prevent moisture absorption.",
      "origin": "India",
      "form": "Whole Dried Seeds",
      "ingredients": "Raw Organic Chia Seeds",
      "netWeight": "200g",
      "foodType": "100% Vegetarian / Vegan Friendly",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001",
      "brand": "Foodville",
      "gtin": "8908031464148",
      "netContent": "200g",
      "packagingType": "Jar 27x7.5",
      "category": "Food",
      "subCategory": "Dry Fruits and Seeds",
      "igst": "5 percent",
      "cgst": "2.5 percent",
      "sgst": "2.5 percent",
      "companyName": "Foodville Consumer Products Private Limited",
      "hsCode": "12079990"
    },
    "units": [
      {
        "unit": "200g",
        "price": 199,
        "mrp": 249,
        "gtin": "8908031464148",
        "packaging": "Jar 27x7.5"
      }
    ],
    "brand": "Foodville",
    "gtin": "8908031464148",
    "packaging": "Jar 27x7.5"
  },
  {
    "id": 16,
    "slug": "watermelon-seeds",
    "name": "Watermelon Seeds",
    "category": "seeds",
    "shopBy": "valueBuys",
    "unit": "200g",
    "price": 159,
    "mrp": 189,
    "image": "https://i.pinimg.com/1200x/ef/5e/2c/ef5e2c5b376defcc29feb832b0071101.jpg",
    "description": "Roasted, protein-rich watermelon seeds.",
    "stock": 35,
    "rating": 4.3,
    "tags": [
      "seeds",
      "snack"
    ],
    "images": [
      "https://i.pinimg.com/1200x/ef/5e/2c/ef5e2c5b376defcc29feb832b0071101.jpg",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80"
    ],
    "reviews": [
      {
        "name": "Aishwarya R.",
        "rating": 5,
        "comment": "Super fresh, smells amazing. Ground really fine. Worth every rupee!",
        "date": "2026-06-15"
      },
      {
        "name": "Vikram K.",
        "rating": 4,
        "comment": "Great flavor addition to my cooking. Very convenient packing.",
        "date": "2026-05-20"
      }
    ],
    "details": "Supercharge your daily nutrition with our premium raw Watermelon Seeds. Loaded with essential fatty acids, protein, dietary fiber, and trace minerals like zinc and magnesium, these seeds are a powerhouse of clean energy. They are carefully cleaned, dried, and sorted to ensure that only the plumpest, highest-quality seeds reach your table. Ideal for mixing into morning smoothies, oatmeal bowls, baking healthy breads, or simply roasting for a crunchy afternoon snack.",
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dark, and dry place. Transfer to an airtight glass container after opening to prevent moisture absorption.",
      "origin": "India",
      "form": "Whole Dried Seeds",
      "ingredients": "Raw Organic Watermelon Seeds",
      "netWeight": "150g",
      "foodType": "100% Vegetarian / Vegan Friendly",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001",
      "brand": "Foodville",
      "gtin": "8908031464155",
      "netContent": "200g",
      "packagingType": "Jar 27x7.5",
      "category": "Food",
      "subCategory": "Dry Fruits and Seeds",
      "igst": "5 percent",
      "cgst": "2.5 percent",
      "sgst": "2.5 percent",
      "companyName": "Foodville Consumer Products Private Limited",
      "hsCode": "12077090"
    },
    "units": [
      {
        "unit": "200g",
        "price": 159,
        "mrp": 189,
        "gtin": "8908031464155",
        "packaging": "Jar 27x7.5"
      }
    ],
    "brand": "Foodville",
    "gtin": "8908031464155",
    "packaging": "Jar 27x7.5"
  },
  {
    "id": 17,
    "slug": "pumpkin-seeds",
    "name": "Pumpkin Seeds",
    "category": "seeds",
    "shopBy": "newlyIn",
    "unit": "200g",
    "price": 219,
    "mrp": 259,
    "image": "https://i.pinimg.com/1200x/6e/f2/b4/6ef2b4bb98bc7ddfc76ab99a776752f8.jpg",
    "description": "Nutrient-dense roasted pumpkin seeds.",
    "stock": 40,
    "rating": 4.5,
    "tags": [
      "seeds",
      "snack"
    ],
    "images": [
      "https://i.pinimg.com/1200x/6e/f2/b4/6ef2b4bb98bc7ddfc76ab99a776752f8.jpg",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80"
    ],
    "reviews": [
      {
        "name": "Priya S.",
        "rating": 5,
        "comment": "Genuine taste. Totally organic, no synthetic smell. Highly recommended.",
        "date": "2026-06-25"
      },
      {
        "name": "Kunal M.",
        "rating": 4,
        "comment": "Good quality seeds, extremely clean and fresh packaging.",
        "date": "2026-04-18"
      },
      {
        "name": "Amit N.",
        "rating": 5,
        "comment": "First time buying this, absolutely impressed with quality.",
        "date": "2026-06-02"
      }
    ],
    "details": "Supercharge your daily nutrition with our premium raw Pumpkin Seeds. Loaded with essential fatty acids, protein, dietary fiber, and trace minerals like zinc and magnesium, these seeds are a powerhouse of clean energy. They are carefully cleaned, dried, and sorted to ensure that only the plumpest, highest-quality seeds reach your table. Ideal for mixing into morning smoothies, oatmeal bowls, baking healthy breads, or simply roasting for a crunchy afternoon snack.",
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dark, and dry place. Transfer to an airtight glass container after opening to prevent moisture absorption.",
      "origin": "India",
      "form": "Whole Dried Seeds",
      "ingredients": "Raw Organic Pumpkin Seeds",
      "netWeight": "200g",
      "foodType": "100% Vegetarian / Vegan Friendly",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001",
      "brand": "Foodville",
      "gtin": "8908031464162",
      "netContent": "200g",
      "packagingType": "Jar 27x7.5",
      "category": "Food",
      "subCategory": "Dry Fruits and Seeds",
      "igst": "5 percent",
      "cgst": "2.5 percent",
      "sgst": "2.5 percent",
      "companyName": "Foodville Consumer Products Private Limited",
      "hsCode": "12077090"
    },
    "units": [
      {
        "unit": "200g",
        "price": 219,
        "mrp": 259,
        "gtin": "8908031464162",
        "packaging": "Jar 27x7.5"
      }
    ],
    "brand": "Foodville",
    "gtin": "8908031464162",
    "packaging": "Jar 27x7.5"
  },
  {
    "id": 18,
    "slug": "flax-seeds",
    "name": "Flax Seeds",
    "category": "seeds",
    "shopBy": "valueBuys",
    "unit": "200g",
    "price": 149,
    "mrp": 179,
    "image": "https://i.pinimg.com/736x/7a/cb/68/7acb68f132d63fc52af2aa8f83de2201.jpg",
    "description": "Fiber and omega-3 rich flax seeds.",
    "stock": 45,
    "rating": 4.4,
    "tags": [
      "superfood",
      "seeds"
    ],
    "images": [
      "https://i.pinimg.com/736x/7a/cb/68/7acb68f132d63fc52af2aa8f83de2201.jpg",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80"
    ],
    "reviews": [
      {
        "name": "Rohan P.",
        "rating": 5,
        "comment": "Premium crunch! Size of nuts is great. Perfect for morning breakfast.",
        "date": "2026-06-10"
      },
      {
        "name": "Deepika G.",
        "rating": 4.5,
        "comment": "Tasty, fresh and healthy. Clean packaging.",
        "date": "2026-05-12"
      }
    ],
    "details": "Supercharge your daily nutrition with our premium raw Flax Seeds. Loaded with essential fatty acids, protein, dietary fiber, and trace minerals like zinc and magnesium, these seeds are a powerhouse of clean energy. They are carefully cleaned, dried, and sorted to ensure that only the plumpest, highest-quality seeds reach your table. Ideal for mixing into morning smoothies, oatmeal bowls, baking healthy breads, or simply roasting for a crunchy afternoon snack.",
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dark, and dry place. Transfer to an airtight glass container after opening to prevent moisture absorption.",
      "origin": "India",
      "form": "Whole Dried Seeds",
      "ingredients": "Raw Organic Flax Seeds",
      "netWeight": "200g",
      "foodType": "100% Vegetarian / Vegan Friendly",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001",
      "brand": "Foodville",
      "gtin": "8908031464179",
      "netContent": "200g",
      "packagingType": "Jar 27x7.5",
      "category": "Food",
      "subCategory": "Dry Fruits and Seeds",
      "igst": "0 percent",
      "cgst": "0 percent",
      "sgst": "0 percent",
      "companyName": "Foodville Consumer Products Private Limited",
      "hsCode": "12040090"
    },
    "units": [
      {
        "unit": "200g",
        "price": 149,
        "mrp": 179,
        "gtin": "8908031464179",
        "packaging": "Jar 27x7.5"
      }
    ],
    "brand": "Foodville",
    "gtin": "8908031464179",
    "packaging": "Jar 27x7.5"
  },
  {
    "id": 19,
    "slug": "sesame-seeds",
    "name": "Sesame Seeds",
    "category": "seeds",
    "unit": "200g",
    "price": 129,
    "mrp": 159,
    "image": "https://i.pinimg.com/736x/c8/63/0a/c8630ac0ebbae890b641b657d97b9fc8.jpg",
    "description": "Nutty, versatile sesame seeds.",
    "stock": 50,
    "rating": 4.3,
    "tags": [
      "seeds"
    ],
    "images": [
      "https://i.pinimg.com/736x/c8/63/0a/c8630ac0ebbae890b641b657d97b9fc8.jpg",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80"
    ],
    "reviews": [
      {
        "name": "Aishwarya R.",
        "rating": 5,
        "comment": "Super fresh, smells amazing. Ground really fine. Worth every rupee!",
        "date": "2026-06-15"
      },
      {
        "name": "Vikram K.",
        "rating": 4,
        "comment": "Great flavor addition to my cooking. Very convenient packing.",
        "date": "2026-05-20"
      }
    ],
    "details": "Supercharge your daily nutrition with our premium raw Sesame Seeds. Loaded with essential fatty acids, protein, dietary fiber, and trace minerals like zinc and magnesium, these seeds are a powerhouse of clean energy. They are carefully cleaned, dried, and sorted to ensure that only the plumpest, highest-quality seeds reach your table. Ideal for mixing into morning smoothies, oatmeal bowls, baking healthy breads, or simply roasting for a crunchy afternoon snack.",
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dark, and dry place. Transfer to an airtight glass container after opening to prevent moisture absorption.",
      "origin": "100% Indian Origin",
      "form": "Whole Dried Seeds",
      "ingredients": "Raw Organic Sesame Seeds",
      "netWeight": "200g",
      "foodType": "100% Vegetarian / Vegan Friendly",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001"
    },
    "units": [
      {
        "unit": "200g",
        "price": 129,
        "mrp": 159
      },
      {
        "unit": "500g",
        "price": 297,
        "mrp": 366
      },
      {
        "unit": "1kg",
        "price": 542,
        "mrp": 668
      }
    ]
  },
  {
    "id": 20,
    "slug": "sunflower-seeds",
    "name": "Sunflower Seeds",
    "category": "seeds",
    "shopBy": "valueBuys",
    "unit": "200g",
    "price": 139,
    "mrp": 169,
    "image": "https://i.pinimg.com/1200x/67/ed/a4/67eda453e41429a63cb98555c7703483.jpg",
    "description": "Crunchy, vitamin-E rich seeds.",
    "stock": 42,
    "rating": 4.3,
    "tags": [
      "seeds",
      "snack"
    ],
    "images": [
      "https://i.pinimg.com/1200x/67/ed/a4/67eda453e41429a63cb98555c7703483.jpg",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80"
    ],
    "reviews": [
      {
        "name": "Priya S.",
        "rating": 5,
        "comment": "Genuine taste. Totally organic, no synthetic smell. Highly recommended.",
        "date": "2026-06-25"
      },
      {
        "name": "Kunal M.",
        "rating": 4,
        "comment": "Good quality seeds, extremely clean and fresh packaging.",
        "date": "2026-04-18"
      },
      {
        "name": "Amit N.",
        "rating": 5,
        "comment": "First time buying this, absolutely impressed with quality.",
        "date": "2026-06-02"
      }
    ],
    "details": "Supercharge your daily nutrition with our premium raw Sunflower Seeds. Loaded with essential fatty acids, protein, dietary fiber, and trace minerals like zinc and magnesium, these seeds are a powerhouse of clean energy. They are carefully cleaned, dried, and sorted to ensure that only the plumpest, highest-quality seeds reach your table. Ideal for mixing into morning smoothies, oatmeal bowls, baking healthy breads, or simply roasting for a crunchy afternoon snack.",
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dark, and dry place. Transfer to an airtight glass container after opening to prevent moisture absorption.",
      "origin": "India",
      "form": "Whole Dried Seeds",
      "ingredients": "Raw Organic Sunflower Seeds",
      "netWeight": "200g",
      "foodType": "100% Vegetarian / Vegan Friendly",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001",
      "brand": "Foodville",
      "gtin": "8908031464186",
      "netContent": "200g",
      "packagingType": "Jar 27x7.5",
      "category": "Food",
      "subCategory": "Dry Fruits and Seeds",
      "igst": "0 percent",
      "cgst": "0 percent",
      "sgst": "0 percent",
      "companyName": "Foodville Consumer Products Private Limited",
      "hsCode": "12060010"
    },
    "units": [
      {
        "unit": "200g",
        "price": 139,
        "mrp": 169,
        "gtin": "8908031464186",
        "packaging": "Jar 27x7.5"
      }
    ],
    "brand": "Foodville",
    "gtin": "8908031464186",
    "packaging": "Jar 27x7.5"
  },
  {
    "id": 21,
    "slug": "almonds",
    "name": "Almonds",
    "category": "dryfruits",
    "shopBy": "bestseller",
    "unit": "250g",
    "price": 299,
    "mrp": 349,
    "image": "https://i.pinimg.com/736x/dd/3c/b1/dd3cb1a90ea516f35191c3684e4e63d1.jpg",
    "description": "Premium quality whole almonds.",
    "stock": 60,
    "rating": 4.7,
    "tags": [
      "nuts",
      "bestseller"
    ],
    "images": [
      "https://i.pinimg.com/736x/dd/3c/b1/dd3cb1a90ea516f35191c3684e4e63d1.jpg",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80"
    ],
    "reviews": [
      {
        "name": "Rohan P.",
        "rating": 5,
        "comment": "Premium crunch! Size of nuts is great. Perfect for morning breakfast.",
        "date": "2026-06-10"
      },
      {
        "name": "Deepika G.",
        "rating": 4.5,
        "comment": "Tasty, fresh and healthy. Clean packaging.",
        "date": "2026-05-12"
      }
    ],
    "details": "Indulge in the finest selected Almonds, hand-gathered and naturally dried to preserve their natural sweetness, flavor, and dense nutrient profile. Rich in healthy monounsaturated fats, antioxidants, and vitamins, these premium dry fruits are perfect for daily vitality. We pack them under clean, vacuum-sealed conditions to prevent moisture and extend shelf-life without the need for any chemical preservatives or artificial sweeteners. A perfect snack on their own or a rich garnish for desserts.",
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dark, and dry place. Transfer to an airtight glass container after opening to prevent moisture absorption.",
      "origin": "100% Indian Origin",
      "form": "Premium Selected Grade",
      "ingredients": "Raw Organic Almonds",
      "netWeight": "250g",
      "foodType": "100% Vegetarian / Vegan Friendly",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001"
    },
    "units": [
      {
        "unit": "250g",
        "price": 299,
        "mrp": 349
      },
      {
        "unit": "500g",
        "price": 538,
        "mrp": 628
      },
      {
        "unit": "1kg",
        "price": 1017,
        "mrp": 1187
      },
      {
        "unit": "2kg",
        "price": 1944,
        "mrp": 2269
      }
    ]
  },
  {
    "id": 22,
    "slug": "cashews",
    "name": "Cashews",
    "category": "dryfruits",
    "shopBy": "bestseller",
    "unit": "250g",
    "price": 399,
    "mrp": 459,
    "image": "https://i.pinimg.com/736x/37/d4/73/37d47378cfe8efc4f8c64aa50a832c18.jpg",
    "description": "Creamy, premium whole cashews.",
    "stock": 55,
    "rating": 4.6,
    "tags": [
      "nuts",
      "bestseller"
    ],
    "images": [
      "https://i.pinimg.com/736x/37/d4/73/37d47378cfe8efc4f8c64aa50a832c18.jpg",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80"
    ],
    "reviews": [
      {
        "name": "Aishwarya R.",
        "rating": 5,
        "comment": "Super fresh, smells amazing. Ground really fine. Worth every rupee!",
        "date": "2026-06-15"
      },
      {
        "name": "Vikram K.",
        "rating": 4,
        "comment": "Great flavor addition to my cooking. Very convenient packing.",
        "date": "2026-05-20"
      }
    ],
    "details": "Indulge in the finest selected Cashews, hand-gathered and naturally dried to preserve their natural sweetness, flavor, and dense nutrient profile. Rich in healthy monounsaturated fats, antioxidants, and vitamins, these premium dry fruits are perfect for daily vitality. We pack them under clean, vacuum-sealed conditions to prevent moisture and extend shelf-life without the need for any chemical preservatives or artificial sweeteners. A perfect snack on their own or a rich garnish for desserts.",
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dark, and dry place. Transfer to an airtight glass container after opening to prevent moisture absorption.",
      "origin": "100% Indian Origin",
      "form": "Premium Selected Grade",
      "ingredients": "Raw Organic Cashews",
      "netWeight": "250g",
      "foodType": "100% Vegetarian / Vegan Friendly",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001"
    },
    "units": [
      {
        "unit": "250g",
        "price": 399,
        "mrp": 459
      },
      {
        "unit": "500g",
        "price": 718,
        "mrp": 826
      },
      {
        "unit": "1kg",
        "price": 1357,
        "mrp": 1561
      },
      {
        "unit": "2kg",
        "price": 2594,
        "mrp": 2984
      }
    ]
  },
  {
    "id": 23,
    "slug": "raisins",
    "name": "Raisins",
    "category": "dryfruits",
    "shopBy": "bestseller",
    "unit": "250g",
    "price": 159,
    "mrp": 189,
    "image": "https://i.pinimg.com/736x/ff/ab/4b/ffab4becedf4d7f03207cafcb1d8da05.jpg",
    "description": "Naturally sweet seedless raisins.",
    "stock": 65,
    "rating": 4.4,
    "tags": [
      "dryfruit"
    ],
    "images": [
      "https://i.pinimg.com/736x/ff/ab/4b/ffab4becedf4d7f03207cafcb1d8da05.jpg",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80"
    ],
    "reviews": [
      {
        "name": "Priya S.",
        "rating": 5,
        "comment": "Genuine taste. Totally organic, no synthetic smell. Highly recommended.",
        "date": "2026-06-25"
      },
      {
        "name": "Kunal M.",
        "rating": 4,
        "comment": "Good quality seeds, extremely clean and fresh packaging.",
        "date": "2026-04-18"
      },
      {
        "name": "Amit N.",
        "rating": 5,
        "comment": "First time buying this, absolutely impressed with quality.",
        "date": "2026-06-02"
      }
    ],
    "details": "Indulge in the finest selected Raisins, hand-gathered and naturally dried to preserve their natural sweetness, flavor, and dense nutrient profile. Rich in healthy monounsaturated fats, antioxidants, and vitamins, these premium dry fruits are perfect for daily vitality. We pack them under clean, vacuum-sealed conditions to prevent moisture and extend shelf-life without the need for any chemical preservatives or artificial sweeteners. A perfect snack on their own or a rich garnish for desserts.",
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dark, and dry place. Transfer to an airtight glass container after opening to prevent moisture absorption.",
      "origin": "100% Indian Origin",
      "form": "Premium Selected Grade",
      "ingredients": "Raw Organic Raisins",
      "netWeight": "250g",
      "foodType": "100% Vegetarian / Vegan Friendly",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001"
    },
    "units": [
      {
        "unit": "250g",
        "price": 159,
        "mrp": 189
      },
      {
        "unit": "500g",
        "price": 286,
        "mrp": 340
      },
      {
        "unit": "1kg",
        "price": 541,
        "mrp": 643
      },
      {
        "unit": "2kg",
        "price": 1034,
        "mrp": 1229
      }
    ]
  },
  {
    "id": 24,
    "slug": "walnuts",
    "name": "Walnuts",
    "category": "dryfruits",
    "unit": "250g",
    "price": 449,
    "mrp": 499,
    "image": "https://i.pinimg.com/736x/a8/15/1c/a8151c84e528abc939f20f23d3e281f0.jpg",
    "description": "Brain-healthy omega-3 rich walnuts.",
    "stock": 40,
    "rating": 4.6,
    "tags": [
      "nuts"
    ],
    "images": [
      "https://i.pinimg.com/736x/a8/15/1c/a8151c84e528abc939f20f23d3e281f0.jpg",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80"
    ],
    "reviews": [
      {
        "name": "Rohan P.",
        "rating": 5,
        "comment": "Premium crunch! Size of nuts is great. Perfect for morning breakfast.",
        "date": "2026-06-10"
      },
      {
        "name": "Deepika G.",
        "rating": 4.5,
        "comment": "Tasty, fresh and healthy. Clean packaging.",
        "date": "2026-05-12"
      }
    ],
    "details": "Indulge in the finest selected Walnuts, hand-gathered and naturally dried to preserve their natural sweetness, flavor, and dense nutrient profile. Rich in healthy monounsaturated fats, antioxidants, and vitamins, these premium dry fruits are perfect for daily vitality. We pack them under clean, vacuum-sealed conditions to prevent moisture and extend shelf-life without the need for any chemical preservatives or artificial sweeteners. A perfect snack on their own or a rich garnish for desserts.",
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dark, and dry place. Transfer to an airtight glass container after opening to prevent moisture absorption.",
      "origin": "100% Indian Origin",
      "form": "Premium Selected Grade",
      "ingredients": "Raw Organic Walnuts",
      "netWeight": "250g",
      "foodType": "100% Vegetarian / Vegan Friendly",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001"
    },
    "units": [
      {
        "unit": "250g",
        "price": 449,
        "mrp": 499
      },
      {
        "unit": "500g",
        "price": 808,
        "mrp": 898
      },
      {
        "unit": "1kg",
        "price": 1527,
        "mrp": 1697
      },
      {
        "unit": "2kg",
        "price": 2919,
        "mrp": 3244
      }
    ]
  },
  {
    "id": 25,
    "slug": "pistachios",
    "name": "Pistachios",
    "category": "dryfruits",
    "shopBy": "bestseller",
    "unit": "250g",
    "price": 499,
    "mrp": 569,
    "image": "https://i.pinimg.com/736x/4c/0c/e4/4c0ce406e543a003f17f24c172d26be5.jpg",
    "description": "Roasted, lightly salted pistachios.",
    "stock": 35,
    "rating": 4.6,
    "tags": [
      "nuts"
    ],
    "images": [
      "https://i.pinimg.com/736x/4c/0c/e4/4c0ce406e543a003f17f24c172d26be5.jpg",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80"
    ],
    "reviews": [
      {
        "name": "Aishwarya R.",
        "rating": 5,
        "comment": "Super fresh, smells amazing. Ground really fine. Worth every rupee!",
        "date": "2026-06-15"
      },
      {
        "name": "Vikram K.",
        "rating": 4,
        "comment": "Great flavor addition to my cooking. Very convenient packing.",
        "date": "2026-05-20"
      }
    ],
    "details": "Indulge in the finest selected Pistachios, hand-gathered and naturally dried to preserve their natural sweetness, flavor, and dense nutrient profile. Rich in healthy monounsaturated fats, antioxidants, and vitamins, these premium dry fruits are perfect for daily vitality. We pack them under clean, vacuum-sealed conditions to prevent moisture and extend shelf-life without the need for any chemical preservatives or artificial sweeteners. A perfect snack on their own or a rich garnish for desserts.",
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dark, and dry place. Transfer to an airtight glass container after opening to prevent moisture absorption.",
      "origin": "100% Indian Origin",
      "form": "Premium Selected Grade",
      "ingredients": "Raw Organic Pistachios",
      "netWeight": "250g",
      "foodType": "100% Vegetarian / Vegan Friendly",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001"
    },
    "units": [
      {
        "unit": "250g",
        "price": 499,
        "mrp": 569
      },
      {
        "unit": "500g",
        "price": 898,
        "mrp": 1024
      },
      {
        "unit": "1kg",
        "price": 1697,
        "mrp": 1935
      },
      {
        "unit": "2kg",
        "price": 3244,
        "mrp": 3699
      }
    ]
  },
  {
    "id": 26,
    "slug": "dates",
    "name": "Dates",
    "category": "dryfruits",
    "unit": "250g",
    "price": 199,
    "mrp": 239,
    "image": "https://i.pinimg.com/736x/44/d1/7f/44d17f2d098634a468b25872e066604a.jpg",
    "description": "Soft, naturally sweet dates.",
    "stock": 50,
    "rating": 4.5,
    "tags": [
      "dryfruit"
    ],
    "images": [
      "https://i.pinimg.com/736x/44/d1/7f/44d17f2d098634a468b25872e066604a.jpg",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80"
    ],
    "reviews": [
      {
        "name": "Priya S.",
        "rating": 5,
        "comment": "Genuine taste. Totally organic, no synthetic smell. Highly recommended.",
        "date": "2026-06-25"
      },
      {
        "name": "Kunal M.",
        "rating": 4,
        "comment": "Good quality seeds, extremely clean and fresh packaging.",
        "date": "2026-04-18"
      },
      {
        "name": "Amit N.",
        "rating": 5,
        "comment": "First time buying this, absolutely impressed with quality.",
        "date": "2026-06-02"
      }
    ],
    "details": "Indulge in the finest selected Dates, hand-gathered and naturally dried to preserve their natural sweetness, flavor, and dense nutrient profile. Rich in healthy monounsaturated fats, antioxidants, and vitamins, these premium dry fruits are perfect for daily vitality. We pack them under clean, vacuum-sealed conditions to prevent moisture and extend shelf-life without the need for any chemical preservatives or artificial sweeteners. A perfect snack on their own or a rich garnish for desserts.",
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dark, and dry place. Transfer to an airtight glass container after opening to prevent moisture absorption.",
      "origin": "100% Indian Origin",
      "form": "Premium Selected Grade",
      "ingredients": "Raw Organic Dates",
      "netWeight": "250g",
      "foodType": "100% Vegetarian / Vegan Friendly",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001"
    },
    "units": [
      {
        "unit": "250g",
        "price": 199,
        "mrp": 239
      },
      {
        "unit": "500g",
        "price": 358,
        "mrp": 430
      },
      {
        "unit": "1kg",
        "price": 677,
        "mrp": 813
      },
      {
        "unit": "2kg",
        "price": 1294,
        "mrp": 1554
      }
    ]
  },
  {
    "id": 27,
    "slug": "apricots",
    "name": "Apricots",
    "category": "dryfruits",
    "shopBy": "trending",
    "unit": "250g",
    "price": 259,
    "mrp": 299,
    "image": "https://i.pinimg.com/736x/c6/02/50/c60250baec645a7c5345260713ec30ef.jpg",
    "description": "Tangy-sweet dried apricots.",
    "stock": 30,
    "rating": 4.4,
    "tags": [
      "dryfruit"
    ],
    "images": [
      "https://i.pinimg.com/736x/c6/02/50/c60250baec645a7c5345260713ec30ef.jpg",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80"
    ],
    "reviews": [
      {
        "name": "Rohan P.",
        "rating": 5,
        "comment": "Premium crunch! Size of nuts is great. Perfect for morning breakfast.",
        "date": "2026-06-10"
      },
      {
        "name": "Deepika G.",
        "rating": 4.5,
        "comment": "Tasty, fresh and healthy. Clean packaging.",
        "date": "2026-05-12"
      }
    ],
    "details": "Indulge in the finest selected Apricots, hand-gathered and naturally dried to preserve their natural sweetness, flavor, and dense nutrient profile. Rich in healthy monounsaturated fats, antioxidants, and vitamins, these premium dry fruits are perfect for daily vitality. We pack them under clean, vacuum-sealed conditions to prevent moisture and extend shelf-life without the need for any chemical preservatives or artificial sweeteners. A perfect snack on their own or a rich garnish for desserts.",
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dark, and dry place. Transfer to an airtight glass container after opening to prevent moisture absorption.",
      "origin": "100% Indian Origin",
      "form": "Premium Selected Grade",
      "ingredients": "Raw Organic Apricots",
      "netWeight": "250g",
      "foodType": "100% Vegetarian / Vegan Friendly",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001"
    },
    "units": [
      {
        "unit": "250g",
        "price": 259,
        "mrp": 299
      },
      {
        "unit": "500g",
        "price": 466,
        "mrp": 538
      },
      {
        "unit": "1kg",
        "price": 881,
        "mrp": 1017
      },
      {
        "unit": "2kg",
        "price": 1684,
        "mrp": 1944
      }
    ]
  },
  {
    "id": 28,
    "slug": "fox-nuts-makhana",
    "name": "Fox Nuts (Makhana)",
    "category": "dryfruits",
    "unit": "100g",
    "price": 149,
    "mrp": 179,
    "image": "https://i.pinimg.com/1200x/8c/96/01/8c9601fc4770844e06e2a7874f053d85.jpg",
    "description": "Light, roasted lotus seed snack.",
    "stock": 45,
    "rating": 4.5,
    "tags": [
      "snack",
      "bestseller"
    ],
    "images": [
      "https://i.pinimg.com/1200x/8c/96/01/8c9601fc4770844e06e2a7874f053d85.jpg",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80"
    ],
    "reviews": [
      {
        "name": "Aishwarya R.",
        "rating": 5,
        "comment": "Super fresh, smells amazing. Ground really fine. Worth every rupee!",
        "date": "2026-06-15"
      },
      {
        "name": "Vikram K.",
        "rating": 4,
        "comment": "Great flavor addition to my cooking. Very convenient packing.",
        "date": "2026-05-20"
      }
    ],
    "details": "Indulge in the finest selected Fox Nuts (Makhana), hand-gathered and naturally dried to preserve their natural sweetness, flavor, and dense nutrient profile. Rich in healthy monounsaturated fats, antioxidants, and vitamins, these premium dry fruits are perfect for daily vitality. We pack them under clean, vacuum-sealed conditions to prevent moisture and extend shelf-life without the need for any chemical preservatives or artificial sweeteners. A perfect snack on their own or a rich garnish for desserts.",
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dark, and dry place. Transfer to an airtight glass container after opening to prevent moisture absorption.",
      "origin": "100% Indian Origin",
      "form": "Premium Selected Grade",
      "ingredients": "Raw Organic Fox Nuts (Makhana)",
      "netWeight": "100g",
      "foodType": "100% Vegetarian / Vegan Friendly",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001"
    },
    "units": [
      {
        "unit": "100g",
        "price": 149,
        "mrp": 179
      },
      {
        "unit": "250g",
        "price": 343,
        "mrp": 412
      },
      {
        "unit": "500g",
        "price": 626,
        "mrp": 752
      },
      {
        "unit": "1kg",
        "price": 1192,
        "mrp": 1432
      }
    ]
  },
  {
    "id": 29,
    "slug": "ashwagandha-powder",
    "name": "Ashwagandha Powder",
    "category": "wellness",
    "shopBy": "trending",
    "unit": "100g",
    "price": 249,
    "mrp": 299,
    "image": "https://i.pinimg.com/1200x/79/ab/42/79ab4262e7e3ebad23d85634e7d1b23f.jpg",
    "description": "Adaptogenic root powder.",
    "stock": 30,
    "rating": 4.5,
    "tags": [
      "wellness",
      "ayurveda"
    ],
    "images": [
      "https://i.pinimg.com/1200x/79/ab/42/79ab4262e7e3ebad23d85634e7d1b23f.jpg",
      "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=600&q=80",
      "https://plus.unsplash.com/premium_photo-1774416430699-ca015984fa4f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80"
    ],
    "reviews": [
      {
        "name": "Priya S.",
        "rating": 5,
        "comment": "Genuine taste. Totally organic, no synthetic smell. Highly recommended.",
        "date": "2026-06-25"
      },
      {
        "name": "Kunal M.",
        "rating": 4,
        "comment": "Good quality seeds, extremely clean and fresh packaging.",
        "date": "2026-04-18"
      },
      {
        "name": "Amit N.",
        "rating": 5,
        "comment": "First time buying this, absolutely impressed with quality.",
        "date": "2026-06-02"
      }
    ],
    "details": "Our Ayurvedic Ashwagandha Powder represents the best of traditional wellness practices, prepared under strict quality standards. Sourced from high-altitude herbs and roots, this adaptogenic supplement supports overall immunity, energy levels, and stress relief. Ground into a fine, easily soluble form, it can be seamlessly blended into warm milk, tea, or water for your daily health routine. It is entirely vegetarian, organic, and ethically sourced.",
    "highlights": {
      "shelfLife": "9 Months from Packaging",
      "storage": "Store in a cool, dark, and dry place. Transfer to an airtight glass container after opening to prevent moisture absorption.",
      "origin": "100% Indian Origin",
      "form": "Premium Selected Grade",
      "ingredients": "100% Pure Dehydrated Ashwagandha",
      "netWeight": "100g",
      "foodType": "100% Vegetarian / Vegan Friendly",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001"
    },
    "units": [
      {
        "unit": "100g",
        "price": 249,
        "mrp": 299
      },
      {
        "unit": "250g",
        "price": 573,
        "mrp": 688
      },
      {
        "unit": "500g",
        "price": 1046,
        "mrp": 1256
      },
      {
        "unit": "1kg",
        "price": 1992,
        "mrp": 2392
      }
    ]
  },
  {
    "id": 30,
    "slug": "giloy-powder",
    "name": "Giloy Powder",
    "category": "wellness",
    "unit": "100g",
    "price": 219,
    "mrp": 259,
    "image": "https://i.pinimg.com/1200x/b4/be/5c/b4be5c8d6e33ebb2ace9444ab11942d2.jpg",
    "description": "Immunity-supporting herb powder.",
    "stock": 28,
    "rating": 4.4,
    "tags": [
      "wellness",
      "ayurveda"
    ],
    "images": [
      "https://i.pinimg.com/1200x/b4/be/5c/b4be5c8d6e33ebb2ace9444ab11942d2.jpg",
      "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=600&q=80",
      "https://plus.unsplash.com/premium_photo-1774416430699-ca015984fa4f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80"
    ],
    "reviews": [
      {
        "name": "Rohan P.",
        "rating": 5,
        "comment": "Premium crunch! Size of nuts is great. Perfect for morning breakfast.",
        "date": "2026-06-10"
      },
      {
        "name": "Deepika G.",
        "rating": 4.5,
        "comment": "Tasty, fresh and healthy. Clean packaging.",
        "date": "2026-05-12"
      }
    ],
    "details": "Our Ayurvedic Giloy Powder represents the best of traditional wellness practices, prepared under strict quality standards. Sourced from high-altitude herbs and roots, this adaptogenic supplement supports overall immunity, energy levels, and stress relief. Ground into a fine, easily soluble form, it can be seamlessly blended into warm milk, tea, or water for your daily health routine. It is entirely vegetarian, organic, and ethically sourced.",
    "highlights": {
      "shelfLife": "9 Months from Packaging",
      "storage": "Store in a cool, dark, and dry place. Transfer to an airtight glass container after opening to prevent moisture absorption.",
      "origin": "100% Indian Origin",
      "form": "Premium Selected Grade",
      "ingredients": "100% Pure Dehydrated Giloy",
      "netWeight": "100g",
      "foodType": "100% Vegetarian / Vegan Friendly",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001"
    },
    "units": [
      {
        "unit": "100g",
        "price": 219,
        "mrp": 259
      },
      {
        "unit": "250g",
        "price": 504,
        "mrp": 596
      },
      {
        "unit": "500g",
        "price": 920,
        "mrp": 1088
      },
      {
        "unit": "1kg",
        "price": 1752,
        "mrp": 2072
      }
    ]
  },
  {
    "id": 31,
    "slug": "mulethi-powder",
    "name": "Mulethi (Licorice) Powder",
    "category": "wellness",
    "shopBy": "trending",
    "unit": "100g",
    "price": 179,
    "mrp": 209,
    "image": "https://i.pinimg.com/1200x/1c/cb/55/1ccb555844df088f67e52e6e1a90e8d1.jpg",
    "description": "Licorice root powder for throat & skin care.",
    "stock": 25,
    "rating": 4.3,
    "tags": [
      "wellness",
      "ayurveda"
    ],
    "images": [
      "https://i.pinimg.com/1200x/1c/cb/55/1ccb555844df088f67e52e6e1a90e8d1.jpg",
      "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=600&q=80",
      "https://plus.unsplash.com/premium_photo-1774416430699-ca015984fa4f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80"
    ],
    "reviews": [
      {
        "name": "Aishwarya R.",
        "rating": 5,
        "comment": "Super fresh, smells amazing. Ground really fine. Worth every rupee!",
        "date": "2026-06-15"
      },
      {
        "name": "Vikram K.",
        "rating": 4,
        "comment": "Great flavor addition to my cooking. Very convenient packing.",
        "date": "2026-05-20"
      }
    ],
    "details": "Our Ayurvedic Mulethi (Licorice) Powder represents the best of traditional wellness practices, prepared under strict quality standards. Sourced from high-altitude herbs and roots, this adaptogenic supplement supports overall immunity, energy levels, and stress relief. Ground into a fine, easily soluble form, it can be seamlessly blended into warm milk, tea, or water for your daily health routine. It is entirely vegetarian, organic, and ethically sourced.",
    "highlights": {
      "shelfLife": "9 Months from Packaging",
      "storage": "Store in a cool, dark, and dry place. Transfer to an airtight glass container after opening to prevent moisture absorption.",
      "origin": "100% Indian Origin",
      "form": "Premium Selected Grade",
      "ingredients": "100% Pure Dehydrated Mulethi (Licorice)",
      "netWeight": "100g",
      "foodType": "100% Vegetarian / Vegan Friendly",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001"
    },
    "units": [
      {
        "unit": "100g",
        "price": 179,
        "mrp": 209
      },
      {
        "unit": "250g",
        "price": 412,
        "mrp": 481
      },
      {
        "unit": "500g",
        "price": 752,
        "mrp": 878
      },
      {
        "unit": "1kg",
        "price": 1432,
        "mrp": 1672
      }
    ]
  },
  {
    "id": 32,
    "slug": "amla-powder",
    "name": "Amla Powder",
    "category": "wellness",
    "shopBy": "trending",
    "unit": "100g",
    "price": 189,
    "mrp": 219,
    "image": "https://i.pinimg.com/1200x/89/fa/8c/89fa8c85c730e93158088727c5b969ce.jpg",
    "description": "Vitamin C rich Indian gooseberry powder.",
    "stock": 32,
    "rating": 4.5,
    "tags": [
      "wellness",
      "ayurveda"
    ],
    "images": [
      "https://i.pinimg.com/1200x/89/fa/8c/89fa8c85c730e93158088727c5b969ce.jpg",
      "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=600&q=80",
      "https://plus.unsplash.com/premium_photo-1774416430699-ca015984fa4f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80"
    ],
    "reviews": [
      {
        "name": "Priya S.",
        "rating": 5,
        "comment": "Genuine taste. Totally organic, no synthetic smell. Highly recommended.",
        "date": "2026-06-25"
      },
      {
        "name": "Kunal M.",
        "rating": 4,
        "comment": "Good quality seeds, extremely clean and fresh packaging.",
        "date": "2026-04-18"
      },
      {
        "name": "Amit N.",
        "rating": 5,
        "comment": "First time buying this, absolutely impressed with quality.",
        "date": "2026-06-02"
      }
    ],
    "details": "Our Ayurvedic Amla Powder represents the best of traditional wellness practices, prepared under strict quality standards. Sourced from high-altitude herbs and roots, this adaptogenic supplement supports overall immunity, energy levels, and stress relief. Ground into a fine, easily soluble form, it can be seamlessly blended into warm milk, tea, or water for your daily health routine. It is entirely vegetarian, organic, and ethically sourced.",
    "highlights": {
      "shelfLife": "9 Months from Packaging",
      "storage": "Store in a cool, dark, and dry place. Transfer to an airtight glass container after opening to prevent moisture absorption.",
      "origin": "100% Indian Origin",
      "form": "Premium Selected Grade",
      "ingredients": "100% Pure Dehydrated Amla",
      "netWeight": "100g",
      "foodType": "100% Vegetarian / Vegan Friendly",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001"
    },
    "units": [
      {
        "unit": "100g",
        "price": 189,
        "mrp": 219
      },
      {
        "unit": "250g",
        "price": 435,
        "mrp": 504
      },
      {
        "unit": "500g",
        "price": 794,
        "mrp": 920
      },
      {
        "unit": "1kg",
        "price": 1512,
        "mrp": 1752
      }
    ]
  },
  {
    "id": 33,
    "slug": "red-chilli-flakes",
    "name": "Red Chilli Flakes",
    "category": "seasoning",
    "shopBy": "bestseller",
    "unit": "100g",
    "price": 89,
    "mrp": 109,
    "image": "https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?auto=format&fit=crop&w=500&q=80",
    "description": "Coarsely crushed dried red chillies for bold heat.",
    "stock": 55,
    "rating": 4.6,
    "tags": [
      "spice",
      "seasoning",
      "bestseller"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1606951444141-e5533feb55be?auto=format&fit=crop&w=600&q=80"
    ],
    "reviews": [
      {
        "name": "Vivek R.",
        "rating": 5,
        "comment": "Perfect heat level. Goes on everything from pizza to dal!",
        "date": "2026-06-25"
      },
      {
        "name": "Meena S.",
        "rating": 4,
        "comment": "Very fresh and pungent. Great quality flakes.",
        "date": "2026-06-14"
      }
    ],
    "details": "Our Red Chilli Flakes are made from premium sun-dried whole red chillies, coarsely crushed to retain the seeds for maximum heat and visual appeal. Perfect as a finishing seasoning on pizzas, pastas, grilled meats, stir-fries, and dals. Stone-ground in small batches to preserve the natural capsaicin oils and vibrant colour. No artificial colours or preservatives added.",
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in an airtight container away from direct sunlight and moisture.",
      "origin": "India",
      "form": "Coarsely Crushed Flakes",
      "ingredients": "100% Sun-Dried Red Chilli",
      "netWeight": "50g",
      "foodType": "100% Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001",
      "brand": "Foodville",
      "gtin": "8908031464292",
      "netContent": "100g",
      "packagingType": "Pouch 10x14",
      "category": "Food",
      "subCategory": "Herbs and Spices",
      "igst": "5 percent",
      "cgst": "2.5 percent",
      "sgst": "2.5 percent",
      "companyName": "Foodville Consumer Products Private Limited",
      "hsCode": "09042219"
    },
    "units": [
      {
        "unit": "100g",
        "price": 89,
        "mrp": 109,
        "gtin": "8908031464292",
        "packaging": "Pouch 10x14"
      },
      {
        "unit": "200g",
        "price": 160,
        "mrp": 196,
        "gtin": "8908031464308",
        "packaging": "Pouch 16x18"
      }
    ],
    "brand": "Foodville",
    "gtin": "8908031464292",
    "packaging": "Pouch 10x14"
  },
  {
    "id": 34,
    "slug": "basil-seeds",
    "name": "Basil Seeds (Sabja)",
    "category": "seeds",
    "shopBy": "trending",
    "unit": "200g",
    "price": 99,
    "mrp": 129,
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80",
    "description": "Cooling sabja seeds for drinks, desserts and digestion.",
    "stock": 48,
    "rating": 4.5,
    "tags": [
      "seeds",
      "superfood",
      "trending"
    ],
    "images": [
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1528569051709-22528f7c7527?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80"
    ],
    "reviews": [
      {
        "name": "Ananya K.",
        "rating": 5,
        "comment": "Perfect for my summer sherbets and falooda. Very clean seeds.",
        "date": "2026-06-22"
      },
      {
        "name": "Preet S.",
        "rating": 4,
        "comment": "Good quality. Soaks up water quickly and swells nicely.",
        "date": "2026-06-11"
      }
    ],
    "details": "Basil Seeds (Sabja) are the small black seeds of sweet basil, prized in Ayurveda for their cooling, digestive, and weight-loss properties. When soaked in water they swell into a gel-like coating rich in soluble fibre. Add them to sherbets, falooda, lemonade, chaas, or overnight oats. They support gut health, reduce bloating, and help manage blood sugar after meals.",
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool dry place. Soak in water for 15 minutes before use.",
      "origin": "India",
      "form": "Whole Dried Seeds",
      "ingredients": "Raw Organic Basil Seeds",
      "netWeight": "100g",
      "foodType": "100% Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001",
      "brand": "Foodville",
      "gtin": "8908031464285",
      "netContent": "200g",
      "packagingType": "Jar 27x7.5",
      "category": "Food",
      "subCategory": "Dry Fruits and Seeds",
      "igst": "5 percent",
      "cgst": "2.5 percent",
      "sgst": "2.5 percent",
      "companyName": "Foodville Consumer Products Private Limited",
      "hsCode": "12119092"
    },
    "units": [
      {
        "unit": "200g",
        "price": 99,
        "mrp": 129,
        "gtin": "8908031464285",
        "packaging": "Jar 27x7.5"
      }
    ],
    "brand": "Foodville",
    "gtin": "8908031464285",
    "packaging": "Jar 27x7.5"
  },
  {
    "id": 35,
    "slug": "dry-amla",
    "name": "Dry Amla (Indian Gooseberry)",
    "category": "wellness",
    "shopBy": "trending",
    "unit": "100g",
    "price": 129,
    "mrp": 159,
    "image": "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=500&q=80",
    "description": "Naturally dried whole amla berries rich in Vitamin C.",
    "stock": 38,
    "rating": 4.5,
    "tags": [
      "wellness",
      "superfood",
      "trending"
    ],
    "images": [
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1606951444141-e5533feb55be?auto=format&fit=crop&w=600&q=80"
    ],
    "reviews": [
      {
        "name": "Savita P.",
        "rating": 5,
        "comment": "Perfect for my morning routine. Very authentic tangy taste.",
        "date": "2026-06-20"
      },
      {
        "name": "Rajiv N.",
        "rating": 4,
        "comment": "Good quality dried amla. Clean with no added salt.",
        "date": "2026-06-09"
      }
    ],
    "details": "Dry Amla is the whole sun-dried Indian Gooseberry — one of the most nutrient-dense fruits on earth. Rich in natural Vitamin C, antioxidants, and tannins, it supports immunity, skin health, hair strength, and liver detoxification. Unlike amla powder, the dried whole form retains more of the fruit's natural fibre and slow-release nutrients. Eat directly as a snack, brew into herbal tea, or grind fresh as needed.",
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in an airtight container in a cool dry place.",
      "origin": "100% Indian Origin",
      "form": "Whole Sun-Dried Berries",
      "ingredients": "100% Natural Dried Amla",
      "netWeight": "100g",
      "foodType": "100% Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001"
    },
    "units": [
      {
        "unit": "100g",
        "price": 129,
        "mrp": 159
      },
      {
        "unit": "250g",
        "price": 297,
        "mrp": 366
      },
      {
        "unit": "500g",
        "price": 542,
        "mrp": 668
      },
      {
        "unit": "1kg",
        "price": 968,
        "mrp": 1192
      }
    ]
  },
  {
    "id": 36,
    "slug": "peri-peri-masala",
    "name": "Peri Peri Masala",
    "category": "seasoning",
    "shopBy": "newlyIn",
    "unit": "100g",
    "price": 99,
    "mrp": 129,
    "image": "https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?auto=format&fit=crop&w=500&q=80",
    "description": "Fiery African-inspired chilli seasoning blend.",
    "stock": 42,
    "rating": 4.4,
    "tags": [
      "seasoning",
      "spice",
      "newlyIn"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80"
    ],
    "reviews": [
      {
        "name": "Kabir M.",
        "rating": 5,
        "comment": "Absolutely addictive on makhana and roasted chickpeas!",
        "date": "2026-06-28"
      },
      {
        "name": "Zara P.",
        "rating": 4,
        "comment": "Great heat level. Love it on homemade fries.",
        "date": "2026-06-17"
      }
    ],
    "details": "Our Peri Peri Masala is a bold, smoky-hot spice blend inspired by African piri-piri chilli cuisine. A perfect seasoning for fries, chips, roasted vegetables, grilled paneer, makhana, and popcorn. Made with red chillies, paprika, garlic, onion, herbs, and a touch of citrus for a complex, layered heat profile. No MSG, no artificial colours, no anti-caking agents.",
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool dry place. Keep sealed after use.",
      "origin": "India",
      "form": "Fine Ground Spice Blend",
      "ingredients": "Red Chilli, Paprika, Garlic, Onion, Herbs, Salt, Citric Acid",
      "netWeight": "50g",
      "foodType": "100% Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001",
      "brand": "Foodville",
      "gtin": "8908031464131",
      "netContent": "100g",
      "packagingType": "Pouch 10x14",
      "category": "Food",
      "subCategory": "Seasonings and Preservatives",
      "igst": "5 percent",
      "cgst": "2.5 percent",
      "sgst": "2.5 percent",
      "companyName": "Foodville Consumer Products Private Limited",
      "hsCode": "0910"
    },
    "units": [
      {
        "unit": "100g",
        "price": 99,
        "mrp": 129,
        "gtin": "8908031464131",
        "packaging": "Pouch 10x14"
      },
      {
        "unit": "200g",
        "price": 178,
        "mrp": 232,
        "gtin": "8908031464278",
        "packaging": "Jar 27x7.5"
      }
    ],
    "brand": "Foodville",
    "gtin": "8908031464131",
    "packaging": "Pouch 10x14"
  },
  {
    "id": 37,
    "slug": "cinnamon-stick",
    "name": "Cinnamon Sticks",
    "category": "seasoning",
    "shopBy": "valueBuys",
    "unit": "50g",
    "price": 79,
    "mrp": 109,
    "image": "https://images.unsplash.com/photo-1508747703725-719ae257c84a?auto=format&fit=crop&w=500&q=80",
    "description": "Aromatic Ceylon cinnamon quills for cooking and teas.",
    "stock": 60,
    "rating": 4.5,
    "tags": [
      "spice",
      "seasoning",
      "valueBuys"
    ],
    "images": [
      "https://images.unsplash.com/photo-1508747703725-719ae257c84a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1606951444141-e5533feb55be?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    ],
    "reviews": [
      {
        "name": "Pooja G.",
        "rating": 5,
        "comment": "Incredible fragrance. My chai has been transformed completely!",
        "date": "2026-06-24"
      },
      {
        "name": "Aryan M.",
        "rating": 5,
        "comment": "Authentic cinnamon with real aroma, not the cassia type most brands sell.",
        "date": "2026-06-13"
      }
    ],
    "details": "Our Cinnamon Sticks are premium quality quills with a sweet, warm, and complex aroma. They are ideal for brewing in chai, adding to biryani and pulao for depth of flavour, infusing into desserts, mulled drinks, and herbal teas. Cinnamon has well-documented blood-sugar-lowering effects and is one of the most antioxidant-rich spices available. Each quill is sourced fresh and packed airtight to preserve maximum essential oil content.",
    "highlights": {
      "shelfLife": "24 Months from Packaging",
      "storage": "Store in an airtight container away from moisture.",
      "origin": "Sri Lanka / South Indian Origin",
      "form": "Whole Dried Quills",
      "ingredients": "100% Natural Cinnamon",
      "netWeight": "50g",
      "foodType": "100% Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001"
    },
    "units": [
      {
        "unit": "50g",
        "price": 79,
        "mrp": 109
      },
      {
        "unit": "100g",
        "price": 139,
        "mrp": 189
      },
      {
        "unit": "250g",
        "price": 319,
        "mrp": 429
      },
      {
        "unit": "500g",
        "price": 579,
        "mrp": 779
      }
    ]
  },
  {
    "id": 201,
    "slug": "turmeric-powder-bulk",
    "name": "Turmeric Powder — Bulk Pack",
    "category": "bulk",
    "unit": "Pack of 2",
    "price": 179,
    "mrp": 238,
    "image": "https://images.unsplash.com/photo-1606951444141-e5533feb55be?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1606951444141-e5533feb55be?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "High-curcumin turmeric powder — bigger packs, bigger savings.",
    "stock": 50,
    "rating": 4.7,
    "tags": [
      "bulk",
      "powder"
    ],
    "details": "Premium stone-ground high-curcumin Turmeric Powder in bulk packs. Each pack contains one 100g packet. Buy more, save more — up to 25% off vs single pack price.",
    "highlights": {
      "shelfLife": "9 Months",
      "storage": "Cool dry airtight container.",
      "origin": "100% Indian",
      "form": "Fine Powder",
      "ingredients": "Organic Turmeric Root",
      "netWeight": "100g per packet",
      "foodType": "Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited"
    },
    "reviews": [
      {
        "name": "Manish R.",
        "rating": 5,
        "comment": "Excellent bulk value. Very aromatic.",
        "date": "2026-06-12"
      }
    ],
    "units": [
      {
        "unit": "Pack of 2",
        "price": 179,
        "mrp": 198,
        "perUnit": 89,
        "savings": 19
      },
      {
        "unit": "Pack of 4",
        "price": 339,
        "mrp": 396,
        "perUnit": 84,
        "savings": 57
      },
      {
        "unit": "Pack of 8",
        "price": 639,
        "mrp": 792,
        "perUnit": 79,
        "savings": 153
      },
      {
        "unit": "Pack of 12",
        "price": 899,
        "mrp": 1188,
        "perUnit": 74,
        "savings": 289
      },
      {
        "unit": "Pack of 15",
        "price": 1099,
        "mrp": 1485,
        "perUnit": 73,
        "savings": 386
      }
    ]
  },
  {
    "id": 202,
    "slug": "garlic-powder-bulk",
    "name": "Garlic Powder — Bulk Pack",
    "category": "bulk",
    "unit": "Pack of 2",
    "price": 299,
    "mrp": 358,
    "image": "https://media.istockphoto.com/id/1366928508/photo/garlic-powder.jpg?s=2048x2048&w=is&k=20&c=pK3oyVFW0Y5eANzqlcFp4ooZUPqrVikDTtC8ueff6Bw=",
    "images": [
      "https://media.istockphoto.com/id/1366928508/photo/garlic-powder.jpg?s=2048x2048&w=is&k=20&c=pK3oyVFW0Y5eANzqlcFp4ooZUPqrVikDTtC8ueff6Bw=",
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Pure garlic powder — strong flavour, bigger pack savings.",
    "stock": 40,
    "rating": 4.5,
    "tags": [
      "bulk",
      "powder"
    ],
    "details": "Sun-dried garlic cloves stone-ground to aromatic powder. Each pack contains one 100g packet. Buy in bulk and save up to 25%.",
    "highlights": {
      "shelfLife": "9 Months",
      "storage": "Airtight away from moisture.",
      "origin": "100% Indian",
      "form": "Fine Powder",
      "ingredients": "Dehydrated Garlic",
      "netWeight": "100g per packet",
      "foodType": "Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited"
    },
    "reviews": [
      {
        "name": "Sunita G.",
        "rating": 5,
        "comment": "Saves so much buying in bulk. Great quality.",
        "date": "2026-06-19"
      }
    ],
    "units": [
      {
        "unit": "Pack of 2",
        "price": 299,
        "mrp": 358,
        "perUnit": 149,
        "savings": 59
      },
      {
        "unit": "Pack of 4",
        "price": 569,
        "mrp": 716,
        "perUnit": 142,
        "savings": 147
      },
      {
        "unit": "Pack of 8",
        "price": 1079,
        "mrp": 1432,
        "perUnit": 134,
        "savings": 353
      },
      {
        "unit": "Pack of 12",
        "price": 1529,
        "mrp": 2148,
        "perUnit": 127,
        "savings": 619
      },
      {
        "unit": "Pack of 15",
        "price": 1849,
        "mrp": 2685,
        "perUnit": 123,
        "savings": 836
      }
    ]
  },
  {
    "id": 203,
    "slug": "ginger-powder-bulk",
    "name": "Ginger Powder — Bulk Pack",
    "category": "bulk",
    "unit": "Pack of 2",
    "price": 319,
    "mrp": 378,
    "image": "https://media.istockphoto.com/id/647402644/photo/ginger-root-and-ginger-powder-in-the-bowl.jpg?s=2048x2048&w=is&k=20&c=4AgwDwIQl-43vMgQzlzDVOZzYXReGb3yLVlQVdDZg7o=",
    "images": [
      "https://media.istockphoto.com/id/647402644/photo/ginger-root-and-ginger-powder-in-the-bowl.jpg?s=2048x2048&w=is&k=20&c=4AgwDwIQl-43vMgQzlzDVOZzYXReGb3yLVlQVdDZg7o=",
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1606951444141-e5533feb55be?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Pure dried ginger powder — sharp warmth, everyday savings in bulk.",
    "stock": 35,
    "rating": 4.5,
    "tags": [
      "bulk",
      "powder"
    ],
    "details": "Finely ground pure dried ginger. Each pack contains one 100g packet. Buy in bulk and save up to 25% vs single pack.",
    "highlights": {
      "shelfLife": "9 Months",
      "storage": "Cool dry airtight storage.",
      "origin": "100% Indian",
      "form": "Fine Powder",
      "ingredients": "Dehydrated Ginger",
      "netWeight": "100g per packet",
      "foodType": "Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited"
    },
    "reviews": [
      {
        "name": "Priya N.",
        "rating": 5,
        "comment": "My chai has never been better. Love bulk size.",
        "date": "2026-06-17"
      }
    ],
    "units": [
      {
        "unit": "Pack of 2",
        "price": 319,
        "mrp": 378,
        "perUnit": 159,
        "savings": 59
      },
      {
        "unit": "Pack of 4",
        "price": 609,
        "mrp": 756,
        "perUnit": 152,
        "savings": 147
      },
      {
        "unit": "Pack of 8",
        "price": 1149,
        "mrp": 1512,
        "perUnit": 143,
        "savings": 363
      },
      {
        "unit": "Pack of 12",
        "price": 1629,
        "mrp": 2268,
        "perUnit": 135,
        "savings": 639
      },
      {
        "unit": "Pack of 15",
        "price": 1979,
        "mrp": 2835,
        "perUnit": 131,
        "savings": 856
      }
    ]
  },
  {
    "id": 204,
    "slug": "moringa-powder-bulk",
    "name": "Moringa Powder — Bulk Pack",
    "category": "bulk",
    "unit": "Pack of 2",
    "price": 369,
    "mrp": 448,
    "image": "https://images.unsplash.com/photo-1565117661210-fd54898de423?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1565117661210-fd54898de423?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1606951444141-e5533feb55be?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Nutrient-dense moringa superfood powder — bulk packs, daily savings.",
    "stock": 28,
    "rating": 4.6,
    "tags": [
      "bulk",
      "superfood"
    ],
    "details": "Cold-processed Moringa Powder from handpicked leaves. Each pack contains one 100g packet. Buy in bulk and save up to 25%.",
    "highlights": {
      "shelfLife": "9 Months",
      "storage": "Cool dry place away from light.",
      "origin": "Organic India",
      "form": "Fine Powder",
      "ingredients": "Moringa Leaf Powder",
      "netWeight": "100g per packet",
      "foodType": "Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited"
    },
    "reviews": [
      {
        "name": "Ritu S.",
        "rating": 5,
        "comment": "Best moringa price in bulk size.",
        "date": "2026-06-15"
      }
    ],
    "units": [
      {
        "unit": "Pack of 2",
        "price": 369,
        "mrp": 448,
        "perUnit": 184,
        "savings": 79
      },
      {
        "unit": "Pack of 4",
        "price": 699,
        "mrp": 896,
        "perUnit": 174,
        "savings": 197
      },
      {
        "unit": "Pack of 8",
        "price": 1299,
        "mrp": 1792,
        "perUnit": 162,
        "savings": 493
      },
      {
        "unit": "Pack of 12",
        "price": 1849,
        "mrp": 2688,
        "perUnit": 154,
        "savings": 839
      },
      {
        "unit": "Pack of 15",
        "price": 2249,
        "mrp": 3360,
        "perUnit": 149,
        "savings": 1111
      }
    ]
  },
  {
    "id": 205,
    "slug": "chia-seeds-bulk",
    "name": "Chia Seeds — Bulk Pack",
    "category": "bulk",
    "unit": "Pack of 2",
    "price": 369,
    "mrp": 448,
    "image": "https://i.pinimg.com/736x/7c/5d/18/7c5d18a8086fb13cbd8f233151700681.jpg",
    "images": [
      "https://i.pinimg.com/736x/7c/5d/18/7c5d18a8086fb13cbd8f233151700681.jpg",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1528569051709-22528f7c7527?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Omega-3 rich organic chia seeds — multi-pack savings.",
    "stock": 40,
    "rating": 4.7,
    "tags": [
      "bulk",
      "seeds",
      "superfood"
    ],
    "details": "Raw organic black chia seeds. Each pack contains one 200g packet. Buy more, save more — up to 25% off vs single pack.",
    "highlights": {
      "shelfLife": "12 Months",
      "storage": "Airtight container in cool dry place.",
      "origin": "Organic India",
      "form": "Whole Raw Seeds",
      "ingredients": "Organic Chia Seeds",
      "netWeight": "200g per packet",
      "foodType": "Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited"
    },
    "reviews": [
      {
        "name": "Swati P.",
        "rating": 5,
        "comment": "Best price per gram for chia seeds.",
        "date": "2026-06-05"
      }
    ],
    "units": [
      {
        "unit": "Pack of 2",
        "price": 369,
        "mrp": 448,
        "perUnit": 184,
        "savings": 79
      },
      {
        "unit": "Pack of 4",
        "price": 699,
        "mrp": 896,
        "perUnit": 174,
        "savings": 197
      },
      {
        "unit": "Pack of 8",
        "price": 1299,
        "mrp": 1792,
        "perUnit": 162,
        "savings": 493
      },
      {
        "unit": "Pack of 12",
        "price": 1849,
        "mrp": 2688,
        "perUnit": 154,
        "savings": 839
      },
      {
        "unit": "Pack of 15",
        "price": 2249,
        "mrp": 3360,
        "perUnit": 149,
        "savings": 1111
      }
    ]
  },
  {
    "id": 206,
    "slug": "flax-seeds-bulk",
    "name": "Flax Seeds — Bulk Pack",
    "category": "bulk",
    "unit": "Pack of 2",
    "price": 269,
    "mrp": 318,
    "image": "https://i.pinimg.com/736x/7a/cb/68/7acb68f132d63fc52af2aa8f83de2201.jpg",
    "images": [
      "https://i.pinimg.com/736x/7a/cb/68/7acb68f132d63fc52af2aa8f83de2201.jpg",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Fibre-rich flax seeds — omega-3 and savings in every bulk pack.",
    "stock": 45,
    "rating": 4.4,
    "tags": [
      "bulk",
      "seeds"
    ],
    "details": "Raw organic flax seeds. Each pack contains one 200g packet. Grind fresh before use for maximum benefit. Save up to 25% vs single pack.",
    "highlights": {
      "shelfLife": "12 Months",
      "storage": "Airtight sealed storage in cool place.",
      "origin": "Organic India",
      "form": "Whole Raw Seeds",
      "ingredients": "Raw Flax Seeds",
      "netWeight": "200g per packet",
      "foodType": "Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited"
    },
    "reviews": [
      {
        "name": "Deepa M.",
        "rating": 4,
        "comment": "Good quality flax at a great bulk price.",
        "date": "2026-06-03"
      }
    ],
    "units": [
      {
        "unit": "Pack of 2",
        "price": 269,
        "mrp": 318,
        "perUnit": 134,
        "savings": 49
      },
      {
        "unit": "Pack of 4",
        "price": 509,
        "mrp": 636,
        "perUnit": 127,
        "savings": 127
      },
      {
        "unit": "Pack of 8",
        "price": 949,
        "mrp": 1272,
        "perUnit": 118,
        "savings": 323
      },
      {
        "unit": "Pack of 12",
        "price": 1349,
        "mrp": 1908,
        "perUnit": 112,
        "savings": 559
      },
      {
        "unit": "Pack of 15",
        "price": 1649,
        "mrp": 2385,
        "perUnit": 109,
        "savings": 736
      }
    ]
  },
  {
    "id": 207,
    "slug": "pumpkin-seeds-bulk",
    "name": "Pumpkin Seeds — Bulk Pack",
    "category": "bulk",
    "unit": "Pack of 2",
    "price": 409,
    "mrp": 478,
    "image": "https://i.pinimg.com/1200x/6e/f2/b4/6ef2b4bb98bc7ddfc76ab99a776752f8.jpg",
    "images": [
      "https://i.pinimg.com/1200x/6e/f2/b4/6ef2b4bb98bc7ddfc76ab99a776752f8.jpg",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Nutrient-dense pumpkin seeds — zinc and protein powerhouse in bulk.",
    "stock": 35,
    "rating": 4.5,
    "tags": [
      "bulk",
      "seeds"
    ],
    "details": "Premium raw pumpkin seeds. Each pack contains one 200g packet. Rich in zinc, magnesium and plant protein. Save up to 25% vs single pack.",
    "highlights": {
      "shelfLife": "12 Months",
      "storage": "Airtight container in cool dry place.",
      "origin": "100% Indian",
      "form": "Whole Raw Seeds",
      "ingredients": "Raw Pumpkin Seeds",
      "netWeight": "200g per packet",
      "foodType": "Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited"
    },
    "reviews": [
      {
        "name": "Harsh S.",
        "rating": 5,
        "comment": "Fresh and crunchy in this big pack. Great value.",
        "date": "2026-06-08"
      }
    ],
    "units": [
      {
        "unit": "Pack of 2",
        "price": 409,
        "mrp": 478,
        "perUnit": 204,
        "savings": 69
      },
      {
        "unit": "Pack of 4",
        "price": 779,
        "mrp": 956,
        "perUnit": 194,
        "savings": 177
      },
      {
        "unit": "Pack of 8",
        "price": 1449,
        "mrp": 1912,
        "perUnit": 181,
        "savings": 463
      },
      {
        "unit": "Pack of 12",
        "price": 2049,
        "mrp": 2868,
        "perUnit": 170,
        "savings": 819
      },
      {
        "unit": "Pack of 15",
        "price": 2499,
        "mrp": 3585,
        "perUnit": 166,
        "savings": 1086
      }
    ]
  },
  {
    "id": 208,
    "slug": "almonds-bulk",
    "name": "Almonds — Bulk Pack",
    "category": "bulk",
    "unit": "Pack of 2",
    "price": 569,
    "mrp": 648,
    "image": "https://i.pinimg.com/736x/dd/3c/b1/dd3cb1a90ea516f35191c3684e4e63d1.jpg",
    "images": [
      "https://i.pinimg.com/736x/dd/3c/b1/dd3cb1a90ea516f35191c3684e4e63d1.jpg",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Premium whole almonds — daily vitality at multi-pack savings.",
    "stock": 55,
    "rating": 4.7,
    "tags": [
      "bulk",
      "nuts"
    ],
    "details": "California-grade whole almonds. Each pack contains one 250g packet. Vacuum-sealed for freshness. Save up to 25% vs single pack.",
    "highlights": {
      "shelfLife": "12 Months",
      "storage": "Cool dry place. Refrigerate after opening.",
      "origin": "Premium Sourced",
      "form": "Whole Dried Nuts",
      "ingredients": "Premium Whole Almonds",
      "netWeight": "250g per packet",
      "foodType": "Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited"
    },
    "reviews": [
      {
        "name": "Karan J.",
        "rating": 5,
        "comment": "Best almond deal online. Fresh and crunchy.",
        "date": "2026-06-08"
      }
    ],
    "units": [
      {
        "unit": "Pack of 2",
        "price": 569,
        "mrp": 648,
        "perUnit": 284,
        "savings": 79
      },
      {
        "unit": "Pack of 4",
        "price": 1079,
        "mrp": 1296,
        "perUnit": 269,
        "savings": 217
      },
      {
        "unit": "Pack of 8",
        "price": 1999,
        "mrp": 2592,
        "perUnit": 249,
        "savings": 593
      },
      {
        "unit": "Pack of 12",
        "price": 2849,
        "mrp": 3888,
        "perUnit": 237,
        "savings": 1039
      },
      {
        "unit": "Pack of 15",
        "price": 3449,
        "mrp": 4860,
        "perUnit": 229,
        "savings": 1411
      }
    ]
  },
  {
    "id": 209,
    "slug": "cashews-bulk",
    "name": "Cashews — Bulk Pack",
    "category": "bulk",
    "unit": "Pack of 2",
    "price": 769,
    "mrp": 878,
    "image": "https://i.pinimg.com/736x/37/d4/73/37d47378cfe8efc4f8c64aa50a832c18.jpg",
    "images": [
      "https://i.pinimg.com/736x/37/d4/73/37d47378cfe8efc4f8c64aa50a832c18.jpg",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Creamy premium whole cashews — restaurant kitchen savings in bulk.",
    "stock": 45,
    "rating": 4.6,
    "tags": [
      "bulk",
      "nuts"
    ],
    "details": "W240 grade premium whole cashews. Each pack contains one 250g packet. Perfect for sweet preparations, cooking and snacking. Save up to 25% vs single pack.",
    "highlights": {
      "shelfLife": "12 Months",
      "storage": "Cool dry place. Refrigerate after opening.",
      "origin": "100% India Sourced",
      "form": "Whole Raw Cashews",
      "ingredients": "Selected Cashews",
      "netWeight": "250g per packet",
      "foodType": "Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited"
    },
    "reviews": [
      {
        "name": "Tarun S.",
        "rating": 5,
        "comment": "Big whole cashews, zero broken pieces.",
        "date": "2026-06-01"
      }
    ],
    "units": [
      {
        "unit": "Pack of 2",
        "price": 769,
        "mrp": 878,
        "perUnit": 384,
        "savings": 109
      },
      {
        "unit": "Pack of 4",
        "price": 1469,
        "mrp": 1756,
        "perUnit": 367,
        "savings": 287
      },
      {
        "unit": "Pack of 8",
        "price": 2749,
        "mrp": 3512,
        "perUnit": 343,
        "savings": 763
      },
      {
        "unit": "Pack of 12",
        "price": 3899,
        "mrp": 5268,
        "perUnit": 324,
        "savings": 1369
      },
      {
        "unit": "Pack of 15",
        "price": 4749,
        "mrp": 6585,
        "perUnit": 316,
        "savings": 1836
      }
    ]
  },
  {
    "id": 210,
    "slug": "walnuts-bulk",
    "name": "Walnuts — Bulk Pack",
    "category": "bulk",
    "unit": "Pack of 2",
    "price": 869,
    "mrp": 978,
    "image": "https://i.pinimg.com/736x/a8/15/1c/a8151c84e528abc939f20f23d3e281f0.jpg",
    "images": [
      "https://i.pinimg.com/736x/a8/15/1c/a8151c84e528abc939f20f23d3e281f0.jpg",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Brain-healthy walnut kernels — omega-3 in money-saving bulk packs.",
    "stock": 38,
    "rating": 4.6,
    "tags": [
      "bulk",
      "nuts"
    ],
    "details": "Premium walnut kernels. Each pack contains one 250g packet. Rich in omega-3 fatty acids. Save up to 25% vs single pack.",
    "highlights": {
      "shelfLife": "12 Months",
      "storage": "Refrigerate or cool dry storage.",
      "origin": "100% Indian Origin",
      "form": "Whole Dried Walnut Kernels",
      "ingredients": "Walnut Kernels",
      "netWeight": "250g per packet",
      "foodType": "Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited"
    },
    "reviews": [
      {
        "name": "Rohit K.",
        "rating": 5,
        "comment": "Excellent walnut quality at bulk price.",
        "date": "2026-06-04"
      }
    ],
    "units": [
      {
        "unit": "Pack of 2",
        "price": 869,
        "mrp": 978,
        "perUnit": 434,
        "savings": 109
      },
      {
        "unit": "Pack of 4",
        "price": 1649,
        "mrp": 1956,
        "perUnit": 412,
        "savings": 307
      },
      {
        "unit": "Pack of 8",
        "price": 3099,
        "mrp": 3912,
        "perUnit": 387,
        "savings": 813
      },
      {
        "unit": "Pack of 12",
        "price": 4399,
        "mrp": 5868,
        "perUnit": 366,
        "savings": 1469
      },
      {
        "unit": "Pack of 15",
        "price": 5349,
        "mrp": 7335,
        "perUnit": 356,
        "savings": 1986
      }
    ]
  },
  {
    "id": 301,
    "slug": "premium-daily-nuts",
    "name": "Premium Daily Nuts",
    "category": "combos",
    "unit": "Pack of 2 (250g each)",
    "price": 614,
    "mrp": 808,
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Premium Daily Nuts combining premium natural ingredients for healthy, vital living. High in nutrition and protein.",
    "stock": 29,
    "rating": 4.7,
    "tags": [
      "combo",
      "dryfruits",
      "2-product-combo",
      "bestseller"
    ],
    "comboIncludes": [
      {
        "name": "Almonds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Cashews",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 2 (250g each)",
        "price": 614,
        "mrp": 808
      },
      {
        "unit": "Pack of 2 (500g each)",
        "price": 1050,
        "mrp": 1454
      }
    ],
    "highlights": {
      "packType": "2-Product Combo",
      "totalProducts": "2 Packets",
      "recommendedSize": "Pack of 2 (250g each)",
      "bulkAvailable": "Yes (500g each)",
      "strategy": "Bestseller",
      "bestFor": "Daily Snacking, Morning Nutrition",
      "storage": "Store in a cool, dry place. Keep packets tightly sealed to avoid humidity.",
      "foodType": "100% Vegan"
    },
    "details": "Premium Daily Nuts is a curated selection of premium organic whole foods. Stone-packed to seal in authentic freshness, crunchiness, and deep aromatic oils. 100% natural, free from preservatives or chemical additives. Safe for daily household use.",
    "reviews": [
      {
        "name": "Amit Sharma",
        "rating": 5,
        "comment": "This Premium Daily Nuts is amazing. Great value combo for my daily health routine. Clean and prompt delivery.",
        "date": "2026-06-12"
      },
      {
        "name": "Sneha Patel",
        "rating": 4.5,
        "comment": "Good value pack. Almonds and Cashews are top notch. Perfect mix. Sourced fresh, clean, and full of natural aroma. Definitely buying again.",
        "date": "2026-06-15"
      }
    ]
  },
  {
    "id": 302,
    "slug": "sweet-and-crunchy-pack",
    "name": "Sweet and Crunchy Pack",
    "category": "combos",
    "unit": "Pack of 2 (250g each)",
    "price": 403,
    "mrp": 538,
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Sweet and Crunchy Pack combining premium natural ingredients for healthy, vital living. High in nutrition and protein.",
    "stock": 33,
    "rating": 4.8,
    "tags": [
      "combo",
      "dryfruits",
      "2-product-combo",
      "value-buy"
    ],
    "comboIncludes": [
      {
        "name": "Raisins",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Almonds",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 2 (250g each)",
        "price": 403,
        "mrp": 538
      },
      {
        "unit": "Pack of 2 (500g each)",
        "price": 689,
        "mrp": 968
      }
    ],
    "highlights": {
      "packType": "2-Product Combo",
      "totalProducts": "2 Packets",
      "recommendedSize": "Pack of 2 (250g each)",
      "bulkAvailable": "Yes (500g each)",
      "strategy": "Value Buy",
      "bestFor": "Energy Boost, Kids Tiffin",
      "storage": "Store in a cool, dry place. Keep packets tightly sealed to avoid humidity.",
      "foodType": "100% Vegan"
    },
    "details": "Sweet and Crunchy Pack is a curated selection of premium organic whole foods. Stone-packed to seal in authentic freshness, crunchiness, and deep aromatic oils. 100% natural, free from preservatives or chemical additives. Safe for daily household use.",
    "reviews": [
      {
        "name": "Rohan Gupta",
        "rating": 5,
        "comment": "This Sweet and Crunchy Pack is amazing. Unbelievable discount compared to buying them individually. Perfect addition to the kitchen.",
        "date": "2026-06-14"
      },
      {
        "name": "Priya Nair",
        "rating": 4.5,
        "comment": "Good value pack. Raisins and Almonds are top notch. Authentic taste and absolute purity. Very fresh product.",
        "date": "2026-06-17"
      }
    ]
  },
  {
    "id": 303,
    "slug": "festive-treat-combo",
    "name": "Festive Treat Combo",
    "category": "combos",
    "unit": "Pack of 2 (250g each)",
    "price": 790,
    "mrp": 1028,
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Festive Treat Combo combining premium natural ingredients for healthy, vital living. High in nutrition and protein.",
    "stock": 42,
    "rating": 4.5,
    "tags": [
      "combo",
      "dryfruits",
      "2-product-combo",
      "premium-gifting"
    ],
    "comboIncludes": [
      {
        "name": "Pistachios",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Cashews",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 2 (250g each)",
        "price": 790,
        "mrp": 1028
      },
      {
        "unit": "Pack of 2 (500g each)",
        "price": 1351,
        "mrp": 1850
      }
    ],
    "highlights": {
      "packType": "2-Product Combo",
      "totalProducts": "2 Packets",
      "recommendedSize": "Pack of 2 (250g each)",
      "bulkAvailable": "Yes (500g each)",
      "strategy": "Premium Gifting",
      "bestFor": "Festive Snacking, Gifting",
      "storage": "Store in a cool, dry place. Keep packets tightly sealed to avoid humidity.",
      "foodType": "100% Vegan"
    },
    "details": "Festive Treat Combo is a curated selection of premium organic whole foods. Stone-packed to seal in authentic freshness, crunchiness, and deep aromatic oils. 100% natural, free from preservatives or chemical additives. Safe for daily household use.",
    "reviews": [
      {
        "name": "Vikram Singh",
        "rating": 5,
        "comment": "This Festive Treat Combo is amazing. Saves so much time in prep. Very clean ingredients, high quality standards.",
        "date": "2026-06-16"
      },
      {
        "name": "Sonal Mehta",
        "rating": 4.5,
        "comment": "Good value pack. Pistachios and Cashews are top notch. Very high quality. Ground fine and smells amazing. Totally worth it.",
        "date": "2026-06-19"
      }
    ]
  },
  {
    "id": 304,
    "slug": "sweet-and-salty-crunch",
    "name": "Sweet and Salty Crunch",
    "category": "combos",
    "unit": "Pack of 2 (250g each)",
    "price": 579,
    "mrp": 758,
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Sweet and Salty Crunch combining premium natural ingredients for healthy, vital living. High in nutrition and protein.",
    "stock": 34,
    "rating": 4.7,
    "tags": [
      "combo",
      "dryfruits",
      "2-product-combo",
      "bestseller"
    ],
    "comboIncludes": [
      {
        "name": "Pistachios",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Raisins",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 2 (250g each)",
        "price": 579,
        "mrp": 758
      },
      {
        "unit": "Pack of 2 (500g each)",
        "price": 990,
        "mrp": 1364
      }
    ],
    "highlights": {
      "packType": "2-Product Combo",
      "totalProducts": "2 Packets",
      "recommendedSize": "Pack of 2 (250g each)",
      "bulkAvailable": "Yes (500g each)",
      "strategy": "Bestseller",
      "bestFor": "Travel Snacking, Evening Treats",
      "storage": "Store in a cool, dry place. Keep packets tightly sealed to avoid humidity.",
      "foodType": "100% Vegan"
    },
    "details": "Sweet and Salty Crunch is a curated selection of premium organic whole foods. Stone-packed to seal in authentic freshness, crunchiness, and deep aromatic oils. 100% natural, free from preservatives or chemical additives. Safe for daily household use.",
    "reviews": [
      {
        "name": "Kunal Shah",
        "rating": 5,
        "comment": "This Sweet and Salty Crunch is amazing. Perfect crunch and taste. Premium selection, highly satisfied.",
        "date": "2026-06-18"
      },
      {
        "name": "Shweta Rao",
        "rating": 4.5,
        "comment": "Good value pack. Pistachios and Raisins are top notch. Extremely useful wellness bundle. Safe, pure, and very fast delivery.",
        "date": "2026-06-21"
      }
    ]
  },
  {
    "id": 305,
    "slug": "nutty-fiber-blend",
    "name": "Nutty Fiber Blend",
    "category": "combos",
    "unit": "Pack of 2 (250g each)",
    "price": 491,
    "mrp": 648,
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Nutty Fiber Blend combining premium natural ingredients for healthy, vital living. High in nutrition and protein.",
    "stock": 22,
    "rating": 4.4,
    "tags": [
      "combo",
      "dryfruits",
      "2-product-combo",
      "value-buy"
    ],
    "comboIncludes": [
      {
        "name": "Almonds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Apricots",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 2 (250g each)",
        "price": 491,
        "mrp": 648
      },
      {
        "unit": "Pack of 2 (500g each)",
        "price": 840,
        "mrp": 1166
      }
    ],
    "highlights": {
      "packType": "2-Product Combo",
      "totalProducts": "2 Packets",
      "recommendedSize": "Pack of 2 (250g each)",
      "bulkAvailable": "Yes (500g each)",
      "strategy": "Value Buy",
      "bestFor": "Digestive Health, Fiber intake",
      "storage": "Store in a cool, dry place. Keep packets tightly sealed to avoid humidity.",
      "foodType": "100% Vegan"
    },
    "details": "Nutty Fiber Blend is a curated selection of premium organic whole foods. Stone-packed to seal in authentic freshness, crunchiness, and deep aromatic oils. 100% natural, free from preservatives or chemical additives. Safe for daily household use.",
    "reviews": [
      {
        "name": "Rajesh Tiwari",
        "rating": 5,
        "comment": "This Nutty Fiber Blend is amazing. Super fresh and high quality. The combination is very convenient and cost-effective.",
        "date": "2026-06-20"
      },
      {
        "name": "Neha Verma",
        "rating": 4.5,
        "comment": "Good value pack. Almonds and Apricots are top notch. Excellent packaging, both ingredients feel large and genuine. Highly recommended!",
        "date": "2026-06-23"
      }
    ]
  },
  {
    "id": 306,
    "slug": "hair-and-skin-care-pack",
    "name": "Hair and Skin Care Pack",
    "category": "combos",
    "unit": "Pack of 2 (250g each)",
    "price": 524,
    "mrp": 715,
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Hair and Skin Care Pack combining premium natural ingredients for healthy, vital living. High in nutrition and protein.",
    "stock": 43,
    "rating": 4.5,
    "tags": [
      "combo",
      "dryfruits",
      "2-product-combo",
      "ayurvedic-health"
    ],
    "comboIncludes": [
      {
        "name": "Dry Amla (Indian Gooseberry)",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Almonds",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 2 (250g each)",
        "price": 524,
        "mrp": 715
      },
      {
        "unit": "Pack of 2 (500g each)",
        "price": 903,
        "mrp": 1296
      }
    ],
    "highlights": {
      "packType": "2-Product Combo",
      "totalProducts": "2 Packets",
      "recommendedSize": "Pack of 2 (250g each)",
      "bulkAvailable": "Yes (500g each)",
      "strategy": "Ayurvedic Health",
      "bestFor": "Hair Strength, Skin Glow",
      "storage": "Store in a cool, dry place. Keep packets tightly sealed to avoid humidity.",
      "foodType": "100% Vegan"
    },
    "details": "Hair and Skin Care Pack is a curated selection of premium organic whole foods. Stone-packed to seal in authentic freshness, crunchiness, and deep aromatic oils. 100% natural, free from preservatives or chemical additives. Safe for daily household use.",
    "reviews": [
      {
        "name": "Arjun Kapoor",
        "rating": 5,
        "comment": "This Hair and Skin Care Pack is amazing. Great value combo for my daily health routine. Clean and prompt delivery.",
        "date": "2026-06-22"
      },
      {
        "name": "Karan Malhotra",
        "rating": 4.5,
        "comment": "Good value pack. Dry Amla and Almonds are top notch. Perfect mix. Sourced fresh, clean, and full of natural aroma. Definitely buying again.",
        "date": "2026-06-25"
      }
    ]
  },
  {
    "id": 307,
    "slug": "royal-energy-bite",
    "name": "Royal Energy Bite",
    "category": "combos",
    "unit": "Pack of 2 (250g each)",
    "price": 579,
    "mrp": 758,
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Royal Energy Bite combining premium natural ingredients for healthy, vital living. High in nutrition and protein.",
    "stock": 30,
    "rating": 4.4,
    "tags": [
      "combo",
      "dryfruits",
      "2-product-combo",
      "premium-snacking"
    ],
    "comboIncludes": [
      {
        "name": "Cashews",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Apricots",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 2 (250g each)",
        "price": 579,
        "mrp": 758
      },
      {
        "unit": "Pack of 2 (500g each)",
        "price": 990,
        "mrp": 1364
      }
    ],
    "highlights": {
      "packType": "2-Product Combo",
      "totalProducts": "2 Packets",
      "recommendedSize": "Pack of 2 (250g each)",
      "bulkAvailable": "Yes (500g each)",
      "strategy": "Premium Snacking",
      "bestFor": "Pre-Workout Energy, Dessert Prep",
      "storage": "Store in a cool, dry place. Keep packets tightly sealed to avoid humidity.",
      "foodType": "100% Vegan"
    },
    "details": "Royal Energy Bite is a curated selection of premium organic whole foods. Stone-packed to seal in authentic freshness, crunchiness, and deep aromatic oils. 100% natural, free from preservatives or chemical additives. Safe for daily household use.",
    "reviews": [
      {
        "name": "Ananya Sen",
        "rating": 5,
        "comment": "This Royal Energy Bite is amazing. Unbelievable discount compared to buying them individually. Perfect addition to the kitchen.",
        "date": "2026-06-24"
      },
      {
        "name": "Deepak Joshi",
        "rating": 4.5,
        "comment": "Good value pack. Cashews and Apricots are top notch. Authentic taste and absolute purity. Very fresh product.",
        "date": "2026-06-27"
      }
    ]
  },
  {
    "id": 308,
    "slug": "classic-trio-pack",
    "name": "Classic Trio Pack",
    "category": "combos",
    "unit": "Pack of 3 (250g each)",
    "price": 728,
    "mrp": 997,
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Classic Trio Pack combining premium natural ingredients for healthy, vital living. High in nutrition and protein.",
    "stock": 39,
    "rating": 4.8,
    "tags": [
      "combo",
      "dryfruits",
      "3-product-combo",
      "bestseller"
    ],
    "comboIncludes": [
      {
        "name": "Almonds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Cashews",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Raisins",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (250g each)",
        "price": 728,
        "mrp": 997
      },
      {
        "unit": "Pack of 3 (500g each)",
        "price": 1245,
        "mrp": 1794
      }
    ],
    "highlights": {
      "packType": "3-Product Combo",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (250g each)",
      "bulkAvailable": "Yes (500g each)",
      "strategy": "Bestseller",
      "bestFor": "Daily Energy, Household Pantry",
      "storage": "Store in a cool, dry place. Keep packets tightly sealed to avoid humidity.",
      "foodType": "100% Vegan"
    },
    "details": "Classic Trio Pack is a curated selection of premium organic whole foods. Stone-packed to seal in authentic freshness, crunchiness, and deep aromatic oils. 100% natural, free from preservatives or chemical additives. Safe for daily household use.",
    "reviews": [
      {
        "name": "Pooja Mishra",
        "rating": 5,
        "comment": "This Classic Trio Pack is amazing. Saves so much time in prep. Very clean ingredients, high quality standards.",
        "date": "2026-06-26"
      },
      {
        "name": "Sanjay Kumar",
        "rating": 4.5,
        "comment": "Good value pack. Almonds and Cashews are top notch. Very high quality. Ground fine and smells amazing. Totally worth it.",
        "date": "2026-06-29"
      }
    ]
  },
  {
    "id": 309,
    "slug": "energy-booster-pack",
    "name": "Energy Booster Pack",
    "category": "combos",
    "unit": "Pack of 3 (250g each)",
    "price": 898,
    "mrp": 1217,
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Energy Booster Pack combining premium natural ingredients for healthy, vital living. High in nutrition and protein.",
    "stock": 26,
    "rating": 4.8,
    "tags": [
      "combo",
      "dryfruits",
      "3-product-combo",
      "premium-health"
    ],
    "comboIncludes": [
      {
        "name": "Pistachios",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Apricots",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Almonds",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (250g each)",
        "price": 898,
        "mrp": 1217
      },
      {
        "unit": "Pack of 3 (500g each)",
        "price": 1536,
        "mrp": 2190
      }
    ],
    "highlights": {
      "packType": "3-Product Combo",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (250g each)",
      "bulkAvailable": "Yes (500g each)",
      "strategy": "Premium Health",
      "bestFor": "Active Lifestyles, Gym Diet",
      "storage": "Store in a cool, dry place. Keep packets tightly sealed to avoid humidity.",
      "foodType": "100% Vegan"
    },
    "details": "Energy Booster Pack is a curated selection of premium organic whole foods. Stone-packed to seal in authentic freshness, crunchiness, and deep aromatic oils. 100% natural, free from preservatives or chemical additives. Safe for daily household use.",
    "reviews": [
      {
        "name": "Aditi Roy",
        "rating": 5,
        "comment": "This Energy Booster Pack is amazing. Perfect crunch and taste. Premium selection, highly satisfied.",
        "date": "2026-06-28"
      },
      {
        "name": "Varun Saxena",
        "rating": 4.5,
        "comment": "Good value pack. Pistachios and Apricots are top notch. Extremely useful wellness bundle. Safe, pure, and very fast delivery.",
        "date": "2026-06-12"
      }
    ]
  },
  {
    "id": 310,
    "slug": "premium-rich-nuts-trio",
    "name": "Premium Rich Nuts Trio",
    "category": "combos",
    "unit": "Pack of 3 (250g each)",
    "price": 1017,
    "mrp": 1377,
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Premium Rich Nuts Trio combining premium natural ingredients for healthy, vital living. High in nutrition and protein.",
    "stock": 22,
    "rating": 4.5,
    "tags": [
      "combo",
      "dryfruits",
      "3-product-combo",
      "luxury-snacking"
    ],
    "comboIncludes": [
      {
        "name": "Almonds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Cashews",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Pistachios",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (250g each)",
        "price": 1017,
        "mrp": 1377
      },
      {
        "unit": "Pack of 3 (500g each)",
        "price": 1739,
        "mrp": 2478
      }
    ],
    "highlights": {
      "packType": "3-Product Combo",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (250g each)",
      "bulkAvailable": "Yes (500g each)",
      "strategy": "Luxury Snacking",
      "bestFor": "Guest Serving, Premium Gift Packs",
      "storage": "Store in a cool, dry place. Keep packets tightly sealed to avoid humidity.",
      "foodType": "100% Vegan"
    },
    "details": "Premium Rich Nuts Trio is a curated selection of premium organic whole foods. Stone-packed to seal in authentic freshness, crunchiness, and deep aromatic oils. 100% natural, free from preservatives or chemical additives. Safe for daily household use.",
    "reviews": [
      {
        "name": "Simran Gill",
        "rating": 5,
        "comment": "This Premium Rich Nuts Trio is amazing. Super fresh and high quality. The combination is very convenient and cost-effective.",
        "date": "2026-06-10"
      },
      {
        "name": "Manish Bansal",
        "rating": 4.5,
        "comment": "Good value pack. Almonds and Cashews are top notch. Excellent packaging, both ingredients feel large and genuine. Highly recommended!",
        "date": "2026-06-14"
      }
    ]
  },
  {
    "id": 311,
    "slug": "tangy-sweet-antioxidant-pack",
    "name": "Tangy Sweet Antioxidant Pack",
    "category": "combos",
    "unit": "Pack of 3 (250g each)",
    "price": 608,
    "mrp": 854,
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Tangy Sweet Antioxidant Pack combining premium natural ingredients for healthy, vital living. High in nutrition and protein.",
    "stock": 37,
    "rating": 4.3,
    "tags": [
      "combo",
      "dryfruits",
      "3-product-combo",
      "immunity-booster"
    ],
    "comboIncludes": [
      {
        "name": "Raisins",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Apricots",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Dry Amla (Indian Gooseberry)",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (250g each)",
        "price": 608,
        "mrp": 854
      },
      {
        "unit": "Pack of 3 (500g each)",
        "price": 1045,
        "mrp": 1546
      }
    ],
    "highlights": {
      "packType": "3-Product Combo",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (250g each)",
      "bulkAvailable": "Yes (500g each)",
      "strategy": "Immunity Booster",
      "bestFor": "Detoxification, Rich Vitamin C",
      "storage": "Store in a cool, dry place. Keep packets tightly sealed to avoid humidity.",
      "foodType": "100% Vegan"
    },
    "details": "Tangy Sweet Antioxidant Pack is a curated selection of premium organic whole foods. Stone-packed to seal in authentic freshness, crunchiness, and deep aromatic oils. 100% natural, free from preservatives or chemical additives. Safe for daily household use.",
    "reviews": [
      {
        "name": "Tarun Goel",
        "rating": 5,
        "comment": "This Tangy Sweet Antioxidant Pack is amazing. Great value combo for my daily health routine. Clean and prompt delivery.",
        "date": "2026-06-12"
      },
      {
        "name": "Divya Reddy",
        "rating": 4.5,
        "comment": "Good value pack. Raisins and Apricots are top notch. Perfect mix. Sourced fresh, clean, and full of natural aroma. Definitely buying again.",
        "date": "2026-06-16"
      }
    ]
  },
  {
    "id": 312,
    "slug": "royal-dessert-mix",
    "name": "Royal Dessert Mix",
    "category": "combos",
    "unit": "Pack of 3 (250g each)",
    "price": 983,
    "mrp": 1327,
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Royal Dessert Mix combining premium natural ingredients for healthy, vital living. High in nutrition and protein.",
    "stock": 22,
    "rating": 4.3,
    "tags": [
      "combo",
      "dryfruits",
      "3-product-combo",
      "sweet-prep"
    ],
    "comboIncludes": [
      {
        "name": "Cashews",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Pistachios",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Apricots",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (250g each)",
        "price": 983,
        "mrp": 1327
      },
      {
        "unit": "Pack of 3 (500g each)",
        "price": 1682,
        "mrp": 2388
      }
    ],
    "highlights": {
      "packType": "3-Product Combo",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (250g each)",
      "bulkAvailable": "Yes (500g each)",
      "strategy": "Sweet Prep",
      "bestFor": "Kheer & Halwa Garnish, Sweet Treats",
      "storage": "Store in a cool, dry place. Keep packets tightly sealed to avoid humidity.",
      "foodType": "100% Vegan"
    },
    "details": "Royal Dessert Mix is a curated selection of premium organic whole foods. Stone-packed to seal in authentic freshness, crunchiness, and deep aromatic oils. 100% natural, free from preservatives or chemical additives. Safe for daily household use.",
    "reviews": [
      {
        "name": "Harsh Vardhan",
        "rating": 5,
        "comment": "This Royal Dessert Mix is amazing. Unbelievable discount compared to buying them individually. Perfect addition to the kitchen.",
        "date": "2026-06-14"
      },
      {
        "name": "Swati Kulkarni",
        "rating": 4.5,
        "comment": "Good value pack. Cashews and Pistachios are top notch. Authentic taste and absolute purity. Very fresh product.",
        "date": "2026-06-18"
      }
    ]
  },
  {
    "id": 313,
    "slug": "royal-dry-fruit-platter",
    "name": "Royal Dry Fruit Platter",
    "category": "combos",
    "unit": "Pack of 4 (250g each)",
    "price": 1112,
    "mrp": 1566,
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Royal Dry Fruit Platter combining premium natural ingredients for healthy, vital living. High in nutrition and protein.",
    "stock": 35,
    "rating": 4.7,
    "tags": [
      "combo",
      "dryfruits",
      "4-product-combo",
      "luxury-platter"
    ],
    "comboIncludes": [
      {
        "name": "Almonds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Cashews",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Raisins",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Pistachios",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 4 (250g each)",
        "price": 1112,
        "mrp": 1566
      },
      {
        "unit": "Pack of 4 (500g each)",
        "price": 1901,
        "mrp": 2818
      }
    ],
    "highlights": {
      "packType": "4-Product Combo",
      "totalProducts": "4 Packets",
      "recommendedSize": "Pack of 4 (250g each)",
      "bulkAvailable": "Yes (500g each)",
      "strategy": "Luxury Platter",
      "bestFor": "Festivals, Family Feast",
      "storage": "Store in a cool, dry place. Keep packets tightly sealed to avoid humidity.",
      "foodType": "100% Vegan"
    },
    "details": "Royal Dry Fruit Platter is a curated selection of premium organic whole foods. Stone-packed to seal in authentic freshness, crunchiness, and deep aromatic oils. 100% natural, free from preservatives or chemical additives. Safe for daily household use.",
    "reviews": [
      {
        "name": "Kavita Deshmukh",
        "rating": 5,
        "comment": "This Royal Dry Fruit Platter is amazing. Saves so much time in prep. Very clean ingredients, high quality standards.",
        "date": "2026-06-16"
      },
      {
        "name": "Nitin Khurana",
        "rating": 4.5,
        "comment": "Good value pack. Almonds and Cashews are top notch. Very high quality. Ground fine and smells amazing. Totally worth it.",
        "date": "2026-06-20"
      }
    ]
  },
  {
    "id": 314,
    "slug": "healthy-immunity-combo",
    "name": "Healthy Immunity Combo",
    "category": "combos",
    "unit": "Pack of 4 (250g each)",
    "price": 1028,
    "mrp": 1473,
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Healthy Immunity Combo combining premium natural ingredients for healthy, vital living. High in nutrition and protein.",
    "stock": 20,
    "rating": 4.7,
    "tags": [
      "combo",
      "dryfruits",
      "4-product-combo",
      "immunity-boost"
    ],
    "comboIncludes": [
      {
        "name": "Almonds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Cashews",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Apricots",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Dry Amla (Indian Gooseberry)",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 4 (250g each)",
        "price": 1028,
        "mrp": 1473
      },
      {
        "unit": "Pack of 4 (500g each)",
        "price": 1763,
        "mrp": 2660
      }
    ],
    "highlights": {
      "packType": "4-Product Combo",
      "totalProducts": "4 Packets",
      "recommendedSize": "Pack of 4 (250g each)",
      "bulkAvailable": "Yes (500g each)",
      "strategy": "Immunity Boost",
      "bestFor": "Vitamins C & E, Disease Resistance",
      "storage": "Store in a cool, dry place. Keep packets tightly sealed to avoid humidity.",
      "foodType": "100% Vegan"
    },
    "details": "Healthy Immunity Combo is a curated selection of premium organic whole foods. Stone-packed to seal in authentic freshness, crunchiness, and deep aromatic oils. 100% natural, free from preservatives or chemical additives. Safe for daily household use.",
    "reviews": [
      {
        "name": "Geeta Pillai",
        "rating": 5,
        "comment": "This Healthy Immunity Combo is amazing. Perfect crunch and taste. Premium selection, highly satisfied.",
        "date": "2026-06-18"
      },
      {
        "name": "Rahul Bose",
        "rating": 4.5,
        "comment": "Good value pack. Almonds and Cashews are top notch. Extremely useful wellness bundle. Safe, pure, and very fast delivery.",
        "date": "2026-06-22"
      }
    ]
  },
  {
    "id": 315,
    "slug": "elite-dry-fruit-feast",
    "name": "Elite Dry Fruit Feast",
    "category": "combos",
    "unit": "Pack of 4 (250g each)",
    "price": 1194,
    "mrp": 1676,
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Elite Dry Fruit Feast combining premium natural ingredients for healthy, vital living. High in nutrition and protein.",
    "stock": 26,
    "rating": 4.3,
    "tags": [
      "combo",
      "dryfruits",
      "4-product-combo",
      "premium-feast"
    ],
    "comboIncludes": [
      {
        "name": "Almonds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Cashews",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Apricots",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Pistachios",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 4 (250g each)",
        "price": 1194,
        "mrp": 1676
      },
      {
        "unit": "Pack of 4 (500g each)",
        "price": 2041,
        "mrp": 3016
      }
    ],
    "highlights": {
      "packType": "4-Product Combo",
      "totalProducts": "4 Packets",
      "recommendedSize": "Pack of 4 (250g each)",
      "bulkAvailable": "Yes (500g each)",
      "strategy": "Premium Feast",
      "bestFor": "Gourmet Eating, High Protein Snacking",
      "storage": "Store in a cool, dry place. Keep packets tightly sealed to avoid humidity.",
      "foodType": "100% Vegan"
    },
    "details": "Elite Dry Fruit Feast is a curated selection of premium organic whole foods. Stone-packed to seal in authentic freshness, crunchiness, and deep aromatic oils. 100% natural, free from preservatives or chemical additives. Safe for daily household use.",
    "reviews": [
      {
        "name": "Jyoti Sharma",
        "rating": 5,
        "comment": "This Elite Dry Fruit Feast is amazing. Super fresh and high quality. The combination is very convenient and cost-effective.",
        "date": "2026-06-20"
      },
      {
        "name": "Vijay Yadav",
        "rating": 4.5,
        "comment": "Good value pack. Almonds and Cashews are top notch. Excellent packaging, both ingredients feel large and genuine. Highly recommended!",
        "date": "2026-06-24"
      }
    ]
  },
  {
    "id": 316,
    "slug": "vitality-antioxidant-pack",
    "name": "Vitality Antioxidant Pack",
    "category": "combos",
    "unit": "Pack of 4 (250g each)",
    "price": 995,
    "mrp": 1423,
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Vitality Antioxidant Pack combining premium natural ingredients for healthy, vital living. High in nutrition and protein.",
    "stock": 48,
    "rating": 4.6,
    "tags": [
      "combo",
      "dryfruits",
      "4-product-combo",
      "antioxidant-rich"
    ],
    "comboIncludes": [
      {
        "name": "Pistachios",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Raisins",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Apricots",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Dry Amla (Indian Gooseberry)",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 4 (250g each)",
        "price": 995,
        "mrp": 1423
      },
      {
        "unit": "Pack of 4 (500g each)",
        "price": 1707,
        "mrp": 2570
      }
    ],
    "highlights": {
      "packType": "4-Product Combo",
      "totalProducts": "4 Packets",
      "recommendedSize": "Pack of 4 (250g each)",
      "bulkAvailable": "Yes (500g each)",
      "strategy": "Antioxidant Rich",
      "bestFor": "Cell Protection, Complete Vitality",
      "storage": "Store in a cool, dry place. Keep packets tightly sealed to avoid humidity.",
      "foodType": "100% Vegan"
    },
    "details": "Vitality Antioxidant Pack is a curated selection of premium organic whole foods. Stone-packed to seal in authentic freshness, crunchiness, and deep aromatic oils. 100% natural, free from preservatives or chemical additives. Safe for daily household use.",
    "reviews": [
      {
        "name": "Amit Sharma",
        "rating": 5,
        "comment": "This Vitality Antioxidant Pack is amazing. Great value combo for my daily health routine. Clean and prompt delivery.",
        "date": "2026-06-22"
      },
      {
        "name": "Sneha Patel",
        "rating": 4.5,
        "comment": "Good value pack. Pistachios and Raisins are top notch. Perfect mix. Sourced fresh, clean, and full of natural aroma. Definitely buying again.",
        "date": "2026-06-26"
      }
    ]
  },
  {
    "id": 317,
    "slug": "super-saver-dry-fruit-deal",
    "name": "Super Saver Dry Fruit Deal",
    "category": "combos",
    "unit": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
    "price": 280,
    "mrp": 400,
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Super Saver Dry Fruit Deal combining premium natural ingredients for healthy, vital living. High in nutrition and protein.",
    "stock": 35,
    "rating": 4.8,
    "tags": [
      "combo",
      "dryfruits",
      "buy-2-get-1-free",
      "super-saver-deal"
    ],
    "comboIncludes": [
      {
        "name": "Almonds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Cashews",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Raisins",
        "qty": "1 unit",
        "isFree": true
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
        "price": 280,
        "mrp": 400
      },
      {
        "unit": "Pack of 3 (Buy 2 Get 1 Free - 200g)",
        "price": 530,
        "mrp": 797
      }
    ],
    "highlights": {
      "packType": "Buy 2 Get 1 Free",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
      "bulkAvailable": "Yes (200g each)",
      "strategy": "Super Saver Deal",
      "bestFor": "Maximum Savings, Home Baking",
      "storage": "Store in a cool, dry place. Keep packets tightly sealed to avoid humidity.",
      "foodType": "100% Vegan"
    },
    "details": "Super Saver Dry Fruit Deal is a curated selection of premium organic whole foods. Stone-packed to seal in authentic freshness, crunchiness, and deep aromatic oils. 100% natural, free from preservatives or chemical additives. Safe for daily household use.",
    "reviews": [
      {
        "name": "Rohan Gupta",
        "rating": 5,
        "comment": "This Super Saver Dry Fruit Deal is amazing. Unbelievable discount compared to buying them individually. Perfect addition to the kitchen.",
        "date": "2026-06-24"
      },
      {
        "name": "Priya Nair",
        "rating": 4.5,
        "comment": "Good value pack. Almonds and Cashews are top notch. Authentic taste and absolute purity. Very fresh product.",
        "date": "2026-06-28"
      }
    ]
  },
  {
    "id": 318,
    "slug": "healthy-bones-and-hair-offer",
    "name": "Healthy Bones and Hair Offer",
    "category": "combos",
    "unit": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
    "price": 320,
    "mrp": 527,
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Healthy Bones and Hair Offer combining premium natural ingredients for healthy, vital living. High in nutrition and protein.",
    "stock": 49,
    "rating": 4.6,
    "tags": [
      "combo",
      "dryfruits",
      "buy-2-get-1-free",
      "wellness-offer"
    ],
    "comboIncludes": [
      {
        "name": "Pistachios",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Almonds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Dry Amla (Indian Gooseberry)",
        "qty": "1 unit",
        "isFree": true
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
        "price": 320,
        "mrp": 527
      },
      {
        "unit": "Pack of 3 (Buy 2 Get 1 Free - 200g)",
        "price": 606,
        "mrp": 1027
      }
    ],
    "highlights": {
      "packType": "Buy 2 Get 1 Free",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
      "bulkAvailable": "Yes (200g each)",
      "strategy": "Wellness Offer",
      "bestFor": "Calcium & Vitamin C Intake",
      "storage": "Store in a cool, dry place. Keep packets tightly sealed to avoid humidity.",
      "foodType": "100% Vegan"
    },
    "details": "Healthy Bones and Hair Offer is a curated selection of premium organic whole foods. Stone-packed to seal in authentic freshness, crunchiness, and deep aromatic oils. 100% natural, free from preservatives or chemical additives. Safe for daily household use.",
    "reviews": [
      {
        "name": "Vikram Singh",
        "rating": 5,
        "comment": "This Healthy Bones and Hair Offer is amazing. Saves so much time in prep. Very clean ingredients, high quality standards.",
        "date": "2026-06-26"
      },
      {
        "name": "Sonal Mehta",
        "rating": 4.5,
        "comment": "Good value pack. Pistachios and Almonds are top notch. Very high quality. Ground fine and smells amazing. Totally worth it.",
        "date": "2026-06-11"
      }
    ]
  },
  {
    "id": 319,
    "slug": "gym-diet-premium-deal",
    "name": "Gym Diet Premium Deal",
    "category": "combos",
    "unit": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
    "price": 320,
    "mrp": 488,
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Gym Diet Premium Deal combining premium natural ingredients for healthy, vital living. High in nutrition and protein.",
    "stock": 50,
    "rating": 4.6,
    "tags": [
      "combo",
      "dryfruits",
      "buy-2-get-1-free",
      "fitness-deal"
    ],
    "comboIncludes": [
      {
        "name": "Almonds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Pistachios",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Apricots",
        "qty": "1 unit",
        "isFree": true
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
        "price": 320,
        "mrp": 488
      },
      {
        "unit": "Pack of 3 (Buy 2 Get 1 Free - 200g)",
        "price": 606,
        "mrp": 973
      }
    ],
    "highlights": {
      "packType": "Buy 2 Get 1 Free",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
      "bulkAvailable": "Yes (200g each)",
      "strategy": "Fitness Deal",
      "bestFor": "Gym Goers, Pre & Post Workout",
      "storage": "Store in a cool, dry place. Keep packets tightly sealed to avoid humidity.",
      "foodType": "100% Vegan"
    },
    "details": "Gym Diet Premium Deal is a curated selection of premium organic whole foods. Stone-packed to seal in authentic freshness, crunchiness, and deep aromatic oils. 100% natural, free from preservatives or chemical additives. Safe for daily household use.",
    "reviews": [
      {
        "name": "Kunal Shah",
        "rating": 5,
        "comment": "This Gym Diet Premium Deal is amazing. Perfect crunch and taste. Premium selection, highly satisfied.",
        "date": "2026-06-28"
      },
      {
        "name": "Shweta Rao",
        "rating": 4.5,
        "comment": "Good value pack. Almonds and Pistachios are top notch. Extremely useful wellness bundle. Safe, pure, and very fast delivery.",
        "date": "2026-06-13"
      }
    ]
  },
  {
    "id": 320,
    "slug": "festive-dessert-special",
    "name": "Festive Dessert Special",
    "category": "combos",
    "unit": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
    "price": 224,
    "mrp": 419,
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Festive Dessert Special combining premium natural ingredients for healthy, vital living. High in nutrition and protein.",
    "stock": 27,
    "rating": 4.6,
    "tags": [
      "combo",
      "dryfruits",
      "buy-2-get-1-free",
      "festive-special"
    ],
    "comboIncludes": [
      {
        "name": "Cashews",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Raisins",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Dry Amla (Indian Gooseberry)",
        "qty": "1 unit",
        "isFree": true
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
        "price": 224,
        "mrp": 419
      },
      {
        "unit": "Pack of 3 (Buy 2 Get 1 Free - 200g)",
        "price": 424,
        "mrp": 811
      }
    ],
    "highlights": {
      "packType": "Buy 2 Get 1 Free",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
      "bulkAvailable": "Yes (200g each)",
      "strategy": "Festive Special",
      "bestFor": "Festive Dessert Prep, Immunity",
      "storage": "Store in a cool, dry place. Keep packets tightly sealed to avoid humidity.",
      "foodType": "100% Vegan"
    },
    "details": "Festive Dessert Special is a curated selection of premium organic whole foods. Stone-packed to seal in authentic freshness, crunchiness, and deep aromatic oils. 100% natural, free from preservatives or chemical additives. Safe for daily household use.",
    "reviews": [
      {
        "name": "Rajesh Tiwari",
        "rating": 5,
        "comment": "This Festive Dessert Special is amazing. Super fresh and high quality. The combination is very convenient and cost-effective.",
        "date": "2026-06-10"
      },
      {
        "name": "Neha Verma",
        "rating": 4.5,
        "comment": "Good value pack. Cashews and Raisins are top notch. Excellent packaging, both ingredients feel large and genuine. Highly recommended!",
        "date": "2026-06-15"
      }
    ]
  },
  {
    "id": 321,
    "slug": "weight-management-duo",
    "name": "Weight Management Duo",
    "category": "combos",
    "unit": "Pack of 2 (200g each)",
    "price": 335,
    "mrp": 487,
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Weight Management Duo combining premium natural raw seeds to support weight management, dietary fiber, and dynamic energy.",
    "stock": 35,
    "rating": 4.7,
    "tags": [
      "combo",
      "seeds",
      "2-product-combo",
      "trending"
    ],
    "comboIncludes": [
      {
        "name": "Chia Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Basil Seeds (Sabja)",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 2 (200g each)",
        "price": 335,
        "mrp": 487
      },
      {
        "unit": "Pack of 2 (500g each)",
        "price": 731,
        "mrp": 1115
      }
    ],
    "highlights": {
      "packType": "2-Product Combo",
      "totalProducts": "2 Packets",
      "recommendedSize": "Pack of 2 (200g each)",
      "bulkAvailable": "Yes (500g each)",
      "strategy": "Trending",
      "bestFor": "Weight Loss, Hydration",
      "storage": "Keep in an airtight jar in a cool, dry location.",
      "foodType": "100% Vegan"
    },
    "details": "Weight Management Duo includes direct organic farm-harvested whole superseeds. Loaded with omega-3 fatty acids, plant proteins, essential zinc, and iron. Cleaned and packaged under strict hygienic conditions.",
    "reviews": [
      {
        "name": "Arjun Kapoor",
        "rating": 5,
        "comment": "This Weight Management Duo is amazing. Great value combo for my daily health routine. Clean and prompt delivery.",
        "date": "2026-06-12"
      },
      {
        "name": "Karan Malhotra",
        "rating": 4.5,
        "comment": "Good value pack. Chia Seeds and Basil Seeds are top notch. Perfect mix. Sourced fresh, clean, and full of natural aroma. Definitely buying again.",
        "date": "2026-06-17"
      }
    ]
  },
  {
    "id": 322,
    "slug": "heart-healthy-mix",
    "name": "Heart Healthy Mix",
    "category": "combos",
    "unit": "Pack of 2 (200g each)",
    "price": 253,
    "mrp": 348,
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Heart Healthy Mix combining premium natural raw seeds to support weight management, dietary fiber, and dynamic energy.",
    "stock": 44,
    "rating": 4.7,
    "tags": [
      "combo",
      "seeds",
      "2-product-combo",
      "value-buy"
    ],
    "comboIncludes": [
      {
        "name": "Flax Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Sunflower Seeds",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 2 (200g each)",
        "price": 253,
        "mrp": 348
      },
      {
        "unit": "Pack of 2 (500g each)",
        "price": 554,
        "mrp": 801
      }
    ],
    "highlights": {
      "packType": "2-Product Combo",
      "totalProducts": "2 Packets",
      "recommendedSize": "Pack of 2 (200g each)",
      "bulkAvailable": "Yes (500g each)",
      "strategy": "Value Buy",
      "bestFor": "Cholesterol Support, Heart Care",
      "storage": "Keep in an airtight jar in a cool, dry location.",
      "foodType": "100% Vegan"
    },
    "details": "Heart Healthy Mix includes direct organic farm-harvested whole superseeds. Loaded with omega-3 fatty acids, plant proteins, essential zinc, and iron. Cleaned and packaged under strict hygienic conditions.",
    "reviews": [
      {
        "name": "Ananya Sen",
        "rating": 5,
        "comment": "This Heart Healthy Mix is amazing. Unbelievable discount compared to buying them individually. Perfect addition to the kitchen.",
        "date": "2026-06-14"
      },
      {
        "name": "Deepak Joshi",
        "rating": 4.5,
        "comment": "Good value pack. Flax Seeds and Sunflower Seeds are top notch. Authentic taste and absolute purity. Very fresh product.",
        "date": "2026-06-19"
      }
    ]
  },
  {
    "id": 323,
    "slug": "melon-and-pumpkin-power",
    "name": "Melon and Pumpkin Power",
    "category": "combos",
    "unit": "Pack of 2 (200g each)",
    "price": 379,
    "mrp": 511,
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Melon and Pumpkin Power combining premium natural raw seeds to support weight management, dietary fiber, and dynamic energy.",
    "stock": 48,
    "rating": 4.5,
    "tags": [
      "combo",
      "seeds",
      "2-product-combo",
      "nutrient-rich"
    ],
    "comboIncludes": [
      {
        "name": "Watermelon Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Pumpkin Seeds",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 2 (200g each)",
        "price": 379,
        "mrp": 511
      },
      {
        "unit": "Pack of 2 (500g each)",
        "price": 820,
        "mrp": 1163
      }
    ],
    "highlights": {
      "packType": "2-Product Combo",
      "totalProducts": "2 Packets",
      "recommendedSize": "Pack of 2 (200g each)",
      "bulkAvailable": "Yes (500g each)",
      "strategy": "Nutrient Rich",
      "bestFor": "Zinc & Iron, Salad Crunch",
      "storage": "Keep in an airtight jar in a cool, dry location.",
      "foodType": "100% Vegan"
    },
    "details": "Melon and Pumpkin Power includes direct organic farm-harvested whole superseeds. Loaded with omega-3 fatty acids, plant proteins, essential zinc, and iron. Cleaned and packaged under strict hygienic conditions.",
    "reviews": [
      {
        "name": "Pooja Mishra",
        "rating": 5,
        "comment": "This Melon and Pumpkin Power is amazing. Saves so much time in prep. Very clean ingredients, high quality standards.",
        "date": "2026-06-16"
      },
      {
        "name": "Sanjay Kumar",
        "rating": 4.5,
        "comment": "Good value pack. Watermelon Seeds and Pumpkin Seeds are top notch. Very high quality. Ground fine and smells amazing. Totally worth it.",
        "date": "2026-06-21"
      }
    ]
  },
  {
    "id": 324,
    "slug": "omega-3-core-duo",
    "name": "Omega-3 Core Duo",
    "category": "combos",
    "unit": "Pack of 2 (200g each)",
    "price": 306,
    "mrp": 428,
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Omega-3 Core Duo combining premium natural raw seeds to support weight management, dietary fiber, and dynamic energy.",
    "stock": 38,
    "rating": 4.6,
    "tags": [
      "combo",
      "seeds",
      "2-product-combo",
      "fitness-core"
    ],
    "comboIncludes": [
      {
        "name": "Chia Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Flax Seeds",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 2 (200g each)",
        "price": 306,
        "mrp": 428
      },
      {
        "unit": "Pack of 2 (500g each)",
        "price": 670,
        "mrp": 985
      }
    ],
    "highlights": {
      "packType": "2-Product Combo",
      "totalProducts": "2 Packets",
      "recommendedSize": "Pack of 2 (200g each)",
      "bulkAvailable": "Yes (500g each)",
      "strategy": "Fitness Core",
      "bestFor": "Healthy Fats, Brain Health",
      "storage": "Keep in an airtight jar in a cool, dry location.",
      "foodType": "100% Vegan"
    },
    "details": "Omega-3 Core Duo includes direct organic farm-harvested whole superseeds. Loaded with omega-3 fatty acids, plant proteins, essential zinc, and iron. Cleaned and packaged under strict hygienic conditions.",
    "reviews": [
      {
        "name": "Aditi Roy",
        "rating": 5,
        "comment": "This Omega-3 Core Duo is amazing. Perfect crunch and taste. Premium selection, highly satisfied.",
        "date": "2026-06-18"
      },
      {
        "name": "Varun Saxena",
        "rating": 4.5,
        "comment": "Good value pack. Chia Seeds and Flax Seeds are top notch. Extremely useful wellness bundle. Safe, pure, and very fast delivery.",
        "date": "2026-06-23"
      }
    ]
  },
  {
    "id": 325,
    "slug": "fiber-rich-refresh-pack",
    "name": "Fiber Rich Refresh Pack",
    "category": "combos",
    "unit": "Pack of 2 (200g each)",
    "price": 353,
    "mrp": 497,
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Fiber Rich Refresh Pack combining premium natural raw seeds to support weight management, dietary fiber, and dynamic energy.",
    "stock": 42,
    "rating": 4.5,
    "tags": [
      "combo",
      "seeds",
      "2-product-combo",
      "gut-health"
    ],
    "comboIncludes": [
      {
        "name": "Pumpkin Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Basil Seeds (Sabja)",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 2 (200g each)",
        "price": 353,
        "mrp": 497
      },
      {
        "unit": "Pack of 2 (500g each)",
        "price": 770,
        "mrp": 1138
      }
    ],
    "highlights": {
      "packType": "2-Product Combo",
      "totalProducts": "2 Packets",
      "recommendedSize": "Pack of 2 (200g each)",
      "bulkAvailable": "Yes (500g each)",
      "strategy": "Gut Health",
      "bestFor": "Digestive Relief, High Fiber",
      "storage": "Keep in an airtight jar in a cool, dry location.",
      "foodType": "100% Vegan"
    },
    "details": "Fiber Rich Refresh Pack includes direct organic farm-harvested whole superseeds. Loaded with omega-3 fatty acids, plant proteins, essential zinc, and iron. Cleaned and packaged under strict hygienic conditions.",
    "reviews": [
      {
        "name": "Simran Gill",
        "rating": 5,
        "comment": "This Fiber Rich Refresh Pack is amazing. Super fresh and high quality. The combination is very convenient and cost-effective.",
        "date": "2026-06-20"
      },
      {
        "name": "Manish Bansal",
        "rating": 4.5,
        "comment": "Good value pack. Pumpkin Seeds and Basil Seeds are top notch. Excellent packaging, both ingredients feel large and genuine. Highly recommended!",
        "date": "2026-06-25"
      }
    ]
  },
  {
    "id": 326,
    "slug": "summer-crunch-pair",
    "name": "Summer Crunch Pair",
    "category": "combos",
    "unit": "Pack of 2 (200g each)",
    "price": 309,
    "mrp": 421,
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Summer Crunch Pair combining premium natural raw seeds to support weight management, dietary fiber, and dynamic energy.",
    "stock": 33,
    "rating": 4.6,
    "tags": [
      "combo",
      "seeds",
      "2-product-combo",
      "summer-snack"
    ],
    "comboIncludes": [
      {
        "name": "Sunflower Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Watermelon Seeds",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 2 (200g each)",
        "price": 309,
        "mrp": 421
      },
      {
        "unit": "Pack of 2 (500g each)",
        "price": 666,
        "mrp": 956
      }
    ],
    "highlights": {
      "packType": "2-Product Combo",
      "totalProducts": "2 Packets",
      "recommendedSize": "Pack of 2 (200g each)",
      "bulkAvailable": "Yes (500g each)",
      "strategy": "Summer Snack",
      "bestFor": "Replacing Junk Food, Light Crunch",
      "storage": "Keep in an airtight jar in a cool, dry location.",
      "foodType": "100% Vegan"
    },
    "details": "Summer Crunch Pair includes direct organic farm-harvested whole superseeds. Loaded with omega-3 fatty acids, plant proteins, essential zinc, and iron. Cleaned and packaged under strict hygienic conditions.",
    "reviews": [
      {
        "name": "Tarun Goel",
        "rating": 5,
        "comment": "This Summer Crunch Pair is amazing. Great value combo for my daily health routine. Clean and prompt delivery.",
        "date": "2026-06-22"
      },
      {
        "name": "Divya Reddy",
        "rating": 4.5,
        "comment": "Good value pack. Sunflower Seeds and Watermelon Seeds are top notch. Perfect mix. Sourced fresh, clean, and full of natural aroma. Definitely buying again.",
        "date": "2026-06-27"
      }
    ]
  },
  {
    "id": 327,
    "slug": "protein-booster-duo",
    "name": "Protein Booster Duo",
    "category": "combos",
    "unit": "Pack of 2 (200g each)",
    "price": 297,
    "mrp": 418,
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Protein Booster Duo combining premium natural raw seeds to support weight management, dietary fiber, and dynamic energy.",
    "stock": 44,
    "rating": 4.4,
    "tags": [
      "combo",
      "seeds",
      "2-product-combo",
      "protein-boost"
    ],
    "comboIncludes": [
      {
        "name": "Chia Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Sunflower Seeds",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 2 (200g each)",
        "price": 297,
        "mrp": 418
      },
      {
        "unit": "Pack of 2 (500g each)",
        "price": 651,
        "mrp": 962
      }
    ],
    "highlights": {
      "packType": "2-Product Combo",
      "totalProducts": "2 Packets",
      "recommendedSize": "Pack of 2 (200g each)",
      "bulkAvailable": "Yes (500g each)",
      "strategy": "Protein Boost",
      "bestFor": "Vegans, Energy Maintenance",
      "storage": "Keep in an airtight jar in a cool, dry location.",
      "foodType": "100% Vegan"
    },
    "details": "Protein Booster Duo includes direct organic farm-harvested whole superseeds. Loaded with omega-3 fatty acids, plant proteins, essential zinc, and iron. Cleaned and packaged under strict hygienic conditions.",
    "reviews": [
      {
        "name": "Harsh Vardhan",
        "rating": 5,
        "comment": "This Protein Booster Duo is amazing. Unbelievable discount compared to buying them individually. Perfect addition to the kitchen.",
        "date": "2026-06-24"
      },
      {
        "name": "Swati Kulkarni",
        "rating": 4.5,
        "comment": "Good value pack. Chia Seeds and Sunflower Seeds are top notch. Authentic taste and absolute purity. Very fresh product.",
        "date": "2026-06-29"
      }
    ]
  },
  {
    "id": 328,
    "slug": "omega-3-rich-trio",
    "name": "Omega-3 Rich Trio",
    "category": "combos",
    "unit": "Pack of 3 (200g each)",
    "price": 451,
    "mrp": 666,
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Omega-3 Rich Trio combining premium natural raw seeds to support weight management, dietary fiber, and dynamic energy.",
    "stock": 35,
    "rating": 4.2,
    "tags": [
      "combo",
      "seeds",
      "3-product-combo",
      "trending-trio"
    ],
    "comboIncludes": [
      {
        "name": "Chia Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Flax Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Basil Seeds (Sabja)",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (200g each)",
        "price": 451,
        "mrp": 666
      },
      {
        "unit": "Pack of 3 (500g each)",
        "price": 982,
        "mrp": 1527
      }
    ],
    "highlights": {
      "packType": "3-Product Combo",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (200g each)",
      "bulkAvailable": "Yes (500g each)",
      "strategy": "Trending Trio",
      "bestFor": "Total Omega-3, Metabolism Boost",
      "storage": "Keep in an airtight jar in a cool, dry location.",
      "foodType": "100% Vegan"
    },
    "details": "Omega-3 Rich Trio includes direct organic farm-harvested whole superseeds. Loaded with omega-3 fatty acids, plant proteins, essential zinc, and iron. Cleaned and packaged under strict hygienic conditions.",
    "reviews": [
      {
        "name": "Kavita Deshmukh",
        "rating": 5,
        "comment": "This Omega-3 Rich Trio is amazing. Saves so much time in prep. Very clean ingredients, high quality standards.",
        "date": "2026-06-26"
      },
      {
        "name": "Nitin Khurana",
        "rating": 4.5,
        "comment": "Good value pack. Chia Seeds and Flax Seeds are top notch. Very high quality. Ground fine and smells amazing. Totally worth it.",
        "date": "2026-06-12"
      }
    ]
  },
  {
    "id": 329,
    "slug": "crunchy-salad-topping-pack",
    "name": "Crunchy Salad Topping Pack",
    "category": "combos",
    "unit": "Pack of 3 (200g each)",
    "price": 485,
    "mrp": 680,
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Crunchy Salad Topping Pack combining premium natural raw seeds to support weight management, dietary fiber, and dynamic energy.",
    "stock": 23,
    "rating": 4.2,
    "tags": [
      "combo",
      "seeds",
      "3-product-combo",
      "salad-pack"
    ],
    "comboIncludes": [
      {
        "name": "Pumpkin Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Sunflower Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Watermelon Seeds",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (200g each)",
        "price": 485,
        "mrp": 680
      },
      {
        "unit": "Pack of 3 (500g each)",
        "price": 1051,
        "mrp": 1552
      }
    ],
    "highlights": {
      "packType": "3-Product Combo",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (200g each)",
      "bulkAvailable": "Yes (500g each)",
      "strategy": "Salad Pack",
      "bestFor": "Soups & Salads, Seeds Garnish",
      "storage": "Keep in an airtight jar in a cool, dry location.",
      "foodType": "100% Vegan"
    },
    "details": "Crunchy Salad Topping Pack includes direct organic farm-harvested whole superseeds. Loaded with omega-3 fatty acids, plant proteins, essential zinc, and iron. Cleaned and packaged under strict hygienic conditions.",
    "reviews": [
      {
        "name": "Geeta Pillai",
        "rating": 5,
        "comment": "This Crunchy Salad Topping Pack is amazing. Perfect crunch and taste. Premium selection, highly satisfied.",
        "date": "2026-06-28"
      },
      {
        "name": "Rahul Bose",
        "rating": 4.5,
        "comment": "Good value pack. Pumpkin Seeds and Sunflower Seeds are top notch. Extremely useful wellness bundle. Safe, pure, and very fast delivery.",
        "date": "2026-06-14"
      }
    ]
  },
  {
    "id": 330,
    "slug": "breakfast-smoothie-crunchy-mix",
    "name": "Breakfast Smoothie Crunchy Mix",
    "category": "combos",
    "unit": "Pack of 3 (200g each)",
    "price": 468,
    "mrp": 670,
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Breakfast Smoothie Crunchy Mix combining premium natural raw seeds to support weight management, dietary fiber, and dynamic energy.",
    "stock": 23,
    "rating": 4.6,
    "tags": [
      "combo",
      "seeds",
      "3-product-combo",
      "smoothie-special"
    ],
    "comboIncludes": [
      {
        "name": "Chia Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Watermelon Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Sunflower Seeds",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (200g each)",
        "price": 468,
        "mrp": 670
      },
      {
        "unit": "Pack of 3 (500g each)",
        "price": 1014,
        "mrp": 1529
      }
    ],
    "highlights": {
      "packType": "3-Product Combo",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (200g each)",
      "bulkAvailable": "Yes (500g each)",
      "strategy": "Smoothie Special",
      "bestFor": "Smoothie Bowls, Overnight Oats",
      "storage": "Keep in an airtight jar in a cool, dry location.",
      "foodType": "100% Vegan"
    },
    "details": "Breakfast Smoothie Crunchy Mix includes direct organic farm-harvested whole superseeds. Loaded with omega-3 fatty acids, plant proteins, essential zinc, and iron. Cleaned and packaged under strict hygienic conditions.",
    "reviews": [
      {
        "name": "Jyoti Sharma",
        "rating": 5,
        "comment": "This Breakfast Smoothie Crunchy Mix is amazing. Super fresh and high quality. The combination is very convenient and cost-effective.",
        "date": "2026-06-10"
      },
      {
        "name": "Vijay Yadav",
        "rating": 4.5,
        "comment": "Good value pack. Chia Seeds and Watermelon Seeds are top notch. Excellent packaging, both ingredients feel large and genuine. Highly recommended!",
        "date": "2026-06-16"
      }
    ]
  },
  {
    "id": 331,
    "slug": "superfood-digestion-trio",
    "name": "Superfood Digestion Trio",
    "category": "combos",
    "unit": "Pack of 3 (200g each)",
    "price": 468,
    "mrp": 676,
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Superfood Digestion Trio combining premium natural raw seeds to support weight management, dietary fiber, and dynamic energy.",
    "stock": 32,
    "rating": 4.4,
    "tags": [
      "combo",
      "seeds",
      "3-product-combo",
      "digestion-active"
    ],
    "comboIncludes": [
      {
        "name": "Basil Seeds (Sabja)",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Flax Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Pumpkin Seeds",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (200g each)",
        "price": 468,
        "mrp": 676
      },
      {
        "unit": "Pack of 3 (500g each)",
        "price": 1020,
        "mrp": 1550
      }
    ],
    "highlights": {
      "packType": "3-Product Combo",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (200g each)",
      "bulkAvailable": "Yes (500g each)",
      "strategy": "Digestion Active",
      "bestFor": "Bloating Relief, Smooth Digestion",
      "storage": "Keep in an airtight jar in a cool, dry location.",
      "foodType": "100% Vegan"
    },
    "details": "Superfood Digestion Trio includes direct organic farm-harvested whole superseeds. Loaded with omega-3 fatty acids, plant proteins, essential zinc, and iron. Cleaned and packaged under strict hygienic conditions.",
    "reviews": [
      {
        "name": "Amit Sharma",
        "rating": 5,
        "comment": "This Superfood Digestion Trio is amazing. Great value combo for my daily health routine. Clean and prompt delivery.",
        "date": "2026-06-12"
      },
      {
        "name": "Sneha Patel",
        "rating": 4.5,
        "comment": "Good value pack. Basil Seeds and Flax Seeds are top notch. Perfect mix. Sourced fresh, clean, and full of natural aroma. Definitely buying again.",
        "date": "2026-06-18"
      }
    ]
  },
  {
    "id": 332,
    "slug": "ultimate-hydration-and-fiber-mix",
    "name": "Ultimate Hydration and Fiber Mix",
    "category": "combos",
    "unit": "Pack of 3 (200g each)",
    "price": 510,
    "mrp": 746,
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Ultimate Hydration and Fiber Mix combining premium natural raw seeds to support weight management, dietary fiber, and dynamic energy.",
    "stock": 43,
    "rating": 4.7,
    "tags": [
      "combo",
      "seeds",
      "3-product-combo",
      "hydration-plus"
    ],
    "comboIncludes": [
      {
        "name": "Chia Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Basil Seeds (Sabja)",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Pumpkin Seeds",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (200g each)",
        "price": 510,
        "mrp": 746
      },
      {
        "unit": "Pack of 3 (500g each)",
        "price": 1112,
        "mrp": 1711
      }
    ],
    "highlights": {
      "packType": "3-Product Combo",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (200g each)",
      "bulkAvailable": "Yes (500g each)",
      "strategy": "Hydration Plus",
      "bestFor": "Summer Cooling, High Fiber diet",
      "storage": "Keep in an airtight jar in a cool, dry location.",
      "foodType": "100% Vegan"
    },
    "details": "Ultimate Hydration and Fiber Mix includes direct organic farm-harvested whole superseeds. Loaded with omega-3 fatty acids, plant proteins, essential zinc, and iron. Cleaned and packaged under strict hygienic conditions.",
    "reviews": [
      {
        "name": "Rohan Gupta",
        "rating": 5,
        "comment": "This Ultimate Hydration and Fiber Mix is amazing. Unbelievable discount compared to buying them individually. Perfect addition to the kitchen.",
        "date": "2026-06-14"
      },
      {
        "name": "Priya Nair",
        "rating": 4.5,
        "comment": "Good value pack. Chia Seeds and Basil Seeds are top notch. Authentic taste and absolute purity. Very fresh product.",
        "date": "2026-06-20"
      }
    ]
  },
  {
    "id": 333,
    "slug": "ultimate-superseeds-combo",
    "name": "Ultimate Superseeds Combo",
    "category": "combos",
    "unit": "Pack of 4 (200g each)",
    "price": 549,
    "mrp": 835,
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Ultimate Superseeds Combo combining premium natural raw seeds to support weight management, dietary fiber, and dynamic energy.",
    "stock": 40,
    "rating": 4.4,
    "tags": [
      "combo",
      "seeds",
      "4-product-combo",
      "all-in-one-super"
    ],
    "comboIncludes": [
      {
        "name": "Chia Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Basil Seeds (Sabja)",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Flax Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Sunflower Seeds",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 4 (200g each)",
        "price": 549,
        "mrp": 835
      },
      {
        "unit": "Pack of 4 (500g each)",
        "price": 1197,
        "mrp": 1916
      }
    ],
    "highlights": {
      "packType": "4-Product Combo",
      "totalProducts": "4 Packets",
      "recommendedSize": "Pack of 4 (200g each)",
      "bulkAvailable": "Yes (500g each)",
      "strategy": "All-in-One Super",
      "bestFor": "Complete Seed Intake, High Nutrition",
      "storage": "Keep in an airtight jar in a cool, dry location.",
      "foodType": "100% Vegan"
    },
    "details": "Ultimate Superseeds Combo includes direct organic farm-harvested whole superseeds. Loaded with omega-3 fatty acids, plant proteins, essential zinc, and iron. Cleaned and packaged under strict hygienic conditions.",
    "reviews": [
      {
        "name": "Vikram Singh",
        "rating": 5,
        "comment": "This Ultimate Superseeds Combo is amazing. Saves so much time in prep. Very clean ingredients, high quality standards.",
        "date": "2026-06-16"
      },
      {
        "name": "Sonal Mehta",
        "rating": 4.5,
        "comment": "Good value pack. Chia Seeds and Basil Seeds are top notch. Very high quality. Ground fine and smells amazing. Totally worth it.",
        "date": "2026-06-22"
      }
    ]
  },
  {
    "id": 334,
    "slug": "daily-nutrition-seeds-pack",
    "name": "Daily Nutrition Seeds Pack",
    "category": "combos",
    "unit": "Pack of 4 (200g each)",
    "price": 639,
    "mrp": 939,
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Daily Nutrition Seeds Pack combining premium natural raw seeds to support weight management, dietary fiber, and dynamic energy.",
    "stock": 28,
    "rating": 4.8,
    "tags": [
      "combo",
      "seeds",
      "4-product-combo",
      "daily-nutrition"
    ],
    "comboIncludes": [
      {
        "name": "Pumpkin Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Watermelon Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Flax Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Chia Seeds",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 4 (200g each)",
        "price": 639,
        "mrp": 939
      },
      {
        "unit": "Pack of 4 (500g each)",
        "price": 1388,
        "mrp": 2148
      }
    ],
    "highlights": {
      "packType": "4-Product Combo",
      "totalProducts": "4 Packets",
      "recommendedSize": "Pack of 4 (200g each)",
      "bulkAvailable": "Yes (500g each)",
      "strategy": "Daily Nutrition",
      "bestFor": "Vitamins and Minerals, Snack Bowl",
      "storage": "Keep in an airtight jar in a cool, dry location.",
      "foodType": "100% Vegan"
    },
    "details": "Daily Nutrition Seeds Pack includes direct organic farm-harvested whole superseeds. Loaded with omega-3 fatty acids, plant proteins, essential zinc, and iron. Cleaned and packaged under strict hygienic conditions.",
    "reviews": [
      {
        "name": "Kunal Shah",
        "rating": 5,
        "comment": "This Daily Nutrition Seeds Pack is amazing. Perfect crunch and taste. Premium selection, highly satisfied.",
        "date": "2026-06-18"
      },
      {
        "name": "Shweta Rao",
        "rating": 4.5,
        "comment": "Good value pack. Pumpkin Seeds and Watermelon Seeds are top notch. Extremely useful wellness bundle. Safe, pure, and very fast delivery.",
        "date": "2026-06-24"
      }
    ]
  },
  {
    "id": 335,
    "slug": "nutrient-dense-trail-mix",
    "name": "Nutrient Dense Trail Mix",
    "category": "combos",
    "unit": "Pack of 4 (200g each)",
    "price": 617,
    "mrp": 918,
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Nutrient Dense Trail Mix combining premium natural raw seeds to support weight management, dietary fiber, and dynamic energy.",
    "stock": 41,
    "rating": 4.4,
    "tags": [
      "combo",
      "seeds",
      "4-product-combo",
      "trail-mix-special"
    ],
    "comboIncludes": [
      {
        "name": "Basil Seeds (Sabja)",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Watermelon Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Sunflower Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Pumpkin Seeds",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 4 (200g each)",
        "price": 617,
        "mrp": 918
      },
      {
        "unit": "Pack of 4 (500g each)",
        "price": 1338,
        "mrp": 2094
      }
    ],
    "highlights": {
      "packType": "4-Product Combo",
      "totalProducts": "4 Packets",
      "recommendedSize": "Pack of 4 (200g each)",
      "bulkAvailable": "Yes (500g each)",
      "strategy": "Trail Mix Special",
      "bestFor": "Keto snackers, Travel, Work desk",
      "storage": "Keep in an airtight jar in a cool, dry location.",
      "foodType": "100% Vegan"
    },
    "details": "Nutrient Dense Trail Mix includes direct organic farm-harvested whole superseeds. Loaded with omega-3 fatty acids, plant proteins, essential zinc, and iron. Cleaned and packaged under strict hygienic conditions.",
    "reviews": [
      {
        "name": "Rajesh Tiwari",
        "rating": 5,
        "comment": "This Nutrient Dense Trail Mix is amazing. Super fresh and high quality. The combination is very convenient and cost-effective.",
        "date": "2026-06-20"
      },
      {
        "name": "Neha Verma",
        "rating": 4.5,
        "comment": "Good value pack. Basil Seeds and Watermelon Seeds are top notch. Excellent packaging, both ingredients feel large and genuine. Highly recommended!",
        "date": "2026-06-26"
      }
    ]
  },
  {
    "id": 336,
    "slug": "complete-fitness-seed-mix",
    "name": "Complete Fitness Seed Mix",
    "category": "combos",
    "unit": "Pack of 4 (200g each)",
    "price": 608,
    "mrp": 918,
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Complete Fitness Seed Mix combining premium natural raw seeds to support weight management, dietary fiber, and dynamic energy.",
    "stock": 22,
    "rating": 4.4,
    "tags": [
      "combo",
      "seeds",
      "4-product-combo",
      "fitness-active"
    ],
    "comboIncludes": [
      {
        "name": "Chia Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Basil Seeds (Sabja)",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Flax Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Watermelon Seeds",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 4 (200g each)",
        "price": 608,
        "mrp": 918
      },
      {
        "unit": "Pack of 4 (500g each)",
        "price": 1320,
        "mrp": 2094
      }
    ],
    "highlights": {
      "packType": "4-Product Combo",
      "totalProducts": "4 Packets",
      "recommendedSize": "Pack of 4 (200g each)",
      "bulkAvailable": "Yes (500g each)",
      "strategy": "Fitness Active",
      "bestFor": "Gym recovery, Pure Plant Fats",
      "storage": "Keep in an airtight jar in a cool, dry location.",
      "foodType": "100% Vegan"
    },
    "details": "Complete Fitness Seed Mix includes direct organic farm-harvested whole superseeds. Loaded with omega-3 fatty acids, plant proteins, essential zinc, and iron. Cleaned and packaged under strict hygienic conditions.",
    "reviews": [
      {
        "name": "Arjun Kapoor",
        "rating": 5,
        "comment": "This Complete Fitness Seed Mix is amazing. Great value combo for my daily health routine. Clean and prompt delivery.",
        "date": "2026-06-22"
      },
      {
        "name": "Karan Malhotra",
        "rating": 4.5,
        "comment": "Good value pack. Chia Seeds and Basil Seeds are top notch. Perfect mix. Sourced fresh, clean, and full of natural aroma. Definitely buying again.",
        "date": "2026-06-28"
      }
    ]
  },
  {
    "id": 337,
    "slug": "diet-special-offer",
    "name": "Diet Special Offer",
    "category": "combos",
    "unit": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
    "price": 175,
    "mrp": 344,
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Diet Special Offer combining premium natural raw seeds to support weight management, dietary fiber, and dynamic energy.",
    "stock": 29,
    "rating": 4.2,
    "tags": [
      "combo",
      "seeds",
      "buy-2-get-1-free",
      "diet-special"
    ],
    "comboIncludes": [
      {
        "name": "Chia Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Flax Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Basil Seeds (Sabja)",
        "qty": "1 unit",
        "isFree": true
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
        "price": 175,
        "mrp": 344
      },
      {
        "unit": "Pack of 3 (Buy 2 Get 1 Free - 200g)",
        "price": 331,
        "mrp": 666
      }
    ],
    "highlights": {
      "packType": "Buy 2 Get 1 Free",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
      "bulkAvailable": "Yes (200g each)",
      "strategy": "Diet Special",
      "bestFor": "Weight Management, Fiber Intake",
      "storage": "Keep in an airtight jar in a cool, dry location.",
      "foodType": "100% Vegan"
    },
    "details": "Diet Special Offer includes direct organic farm-harvested whole superseeds. Loaded with omega-3 fatty acids, plant proteins, essential zinc, and iron. Cleaned and packaged under strict hygienic conditions.",
    "reviews": [
      {
        "name": "Ananya Sen",
        "rating": 5,
        "comment": "This Diet Special Offer is amazing. Unbelievable discount compared to buying them individually. Perfect addition to the kitchen.",
        "date": "2026-06-24"
      },
      {
        "name": "Deepak Joshi",
        "rating": 4.5,
        "comment": "Good value pack. Chia Seeds and Flax Seeds are top notch. Authentic taste and absolute purity. Very fresh product.",
        "date": "2026-06-11"
      }
    ]
  },
  {
    "id": 338,
    "slug": "snacks-corner-freebie",
    "name": "Snacks Corner Freebie",
    "category": "combos",
    "unit": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
    "price": 180,
    "mrp": 341,
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Snacks Corner Freebie combining premium natural raw seeds to support weight management, dietary fiber, and dynamic energy.",
    "stock": 30,
    "rating": 4.7,
    "tags": [
      "combo",
      "seeds",
      "buy-2-get-1-free",
      "snack-deal"
    ],
    "comboIncludes": [
      {
        "name": "Pumpkin Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Sunflower Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Watermelon Seeds",
        "qty": "1 unit",
        "isFree": true
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
        "price": 180,
        "mrp": 341
      },
      {
        "unit": "Pack of 3 (Buy 2 Get 1 Free - 200g)",
        "price": 340,
        "mrp": 680
      }
    ],
    "highlights": {
      "packType": "Buy 2 Get 1 Free",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
      "bulkAvailable": "Yes (200g each)",
      "strategy": "Snack Deal",
      "bestFor": "Crunchy Munching, Seed Lovers",
      "storage": "Keep in an airtight jar in a cool, dry location.",
      "foodType": "100% Vegan"
    },
    "details": "Snacks Corner Freebie includes direct organic farm-harvested whole superseeds. Loaded with omega-3 fatty acids, plant proteins, essential zinc, and iron. Cleaned and packaged under strict hygienic conditions.",
    "reviews": [
      {
        "name": "Pooja Mishra",
        "rating": 5,
        "comment": "This Snacks Corner Freebie is amazing. Saves so much time in prep. Very clean ingredients, high quality standards.",
        "date": "2026-06-26"
      },
      {
        "name": "Sanjay Kumar",
        "rating": 4.5,
        "comment": "Good value pack. Pumpkin Seeds and Sunflower Seeds are top notch. Very high quality. Ground fine and smells amazing. Totally worth it.",
        "date": "2026-06-13"
      }
    ]
  },
  {
    "id": 339,
    "slug": "weight-loss-super-combo",
    "name": "Weight Loss Super Combo",
    "category": "combos",
    "unit": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
    "price": 199,
    "mrp": 344,
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Weight Loss Super Combo combining premium natural raw seeds to support weight management, dietary fiber, and dynamic energy.",
    "stock": 34,
    "rating": 4.4,
    "tags": [
      "combo",
      "seeds",
      "buy-2-get-1-free",
      "weight-loss-deal"
    ],
    "comboIncludes": [
      {
        "name": "Chia Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Basil Seeds (Sabja)",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Flax Seeds",
        "qty": "1 unit",
        "isFree": true
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
        "price": 199,
        "mrp": 344
      },
      {
        "unit": "Pack of 3 (Buy 2 Get 1 Free - 200g)",
        "price": 362,
        "mrp": 666
      }
    ],
    "highlights": {
      "packType": "Buy 2 Get 1 Free",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
      "bulkAvailable": "Yes (200g each)",
      "strategy": "Weight Loss Deal",
      "bestFor": "Fat Loss, Detox Drinks",
      "storage": "Keep in an airtight jar in a cool, dry location.",
      "foodType": "100% Vegan"
    },
    "details": "Weight Loss Super Combo includes direct organic farm-harvested whole superseeds. Loaded with omega-3 fatty acids, plant proteins, essential zinc, and iron. Cleaned and packaged under strict hygienic conditions.",
    "reviews": [
      {
        "name": "Aditi Roy",
        "rating": 5,
        "comment": "This Weight Loss Super Combo is amazing. Perfect crunch and taste. Premium selection, highly satisfied.",
        "date": "2026-06-28"
      },
      {
        "name": "Varun Saxena",
        "rating": 4.5,
        "comment": "Good value pack. Chia Seeds and Basil Seeds are top notch. Extremely useful wellness bundle. Safe, pure, and very fast delivery.",
        "date": "2026-06-15"
      }
    ]
  },
  {
    "id": 340,
    "slug": "healthy-munching-offer",
    "name": "Healthy Munching Offer",
    "category": "combos",
    "unit": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
    "price": 216,
    "mrp": 341,
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Healthy Munching Offer combining premium natural raw seeds to support weight management, dietary fiber, and dynamic energy.",
    "stock": 21,
    "rating": 4.3,
    "tags": [
      "combo",
      "seeds",
      "buy-2-get-1-free",
      "healthy-munching"
    ],
    "comboIncludes": [
      {
        "name": "Watermelon Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Pumpkin Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Sunflower Seeds",
        "qty": "1 unit",
        "isFree": true
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
        "price": 216,
        "mrp": 341
      },
      {
        "unit": "Pack of 3 (Buy 2 Get 1 Free - 200g)",
        "price": 409,
        "mrp": 680
      }
    ],
    "highlights": {
      "packType": "Buy 2 Get 1 Free",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
      "bulkAvailable": "Yes (200g each)",
      "strategy": "Healthy Munching",
      "bestFor": "Low Calorie Snacking",
      "storage": "Keep in an airtight jar in a cool, dry location.",
      "foodType": "100% Vegan"
    },
    "details": "Healthy Munching Offer includes direct organic farm-harvested whole superseeds. Loaded with omega-3 fatty acids, plant proteins, essential zinc, and iron. Cleaned and packaged under strict hygienic conditions.",
    "reviews": [
      {
        "name": "Simran Gill",
        "rating": 5,
        "comment": "This Healthy Munching Offer is amazing. Super fresh and high quality. The combination is very convenient and cost-effective.",
        "date": "2026-06-10"
      },
      {
        "name": "Manish Bansal",
        "rating": 4.5,
        "comment": "Good value pack. Watermelon Seeds and Pumpkin Seeds are top notch. Excellent packaging, both ingredients feel large and genuine. Highly recommended!",
        "date": "2026-06-17"
      }
    ]
  },
  {
    "id": 341,
    "slug": "essential-onion-garlic-pair",
    "name": "Essential Onion-Garlic Pair",
    "category": "combos",
    "unit": "Pack of 2 (100g each)",
    "price": 271,
    "mrp": 368,
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Essential Onion-Garlic Pair - high performance premium kitchen masala/health package combining Red Onion Powder and Garlic Powder.",
    "stock": 31,
    "rating": 4.2,
    "tags": [
      "combo",
      "2-product-combo",
      "bestseller-value-buy"
    ],
    "comboIncludes": [
      {
        "name": "Red Onion Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Garlic Powder",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 2 (100g each)",
        "price": 271,
        "mrp": 368
      },
      {
        "unit": "Pack of 2 (200g each)",
        "price": 499,
        "mrp": 678
      },
      {
        "unit": "Pack of 2 (500g each)",
        "price": 1082,
        "mrp": 1546
      },
      {
        "unit": "Pack of 2 (1kg each)",
        "price": 2060,
        "mrp": 2944
      }
    ],
    "highlights": {
      "packType": "2-Product Combo",
      "totalProducts": "2 Packets",
      "recommendedSize": "Pack of 2 (100g each)",
      "bulkAvailable": "Yes (500g, 1kg)",
      "strategy": "Bestseller / Value Buy",
      "bestFor": "Curry Base, Quick Gravies, Tadka",
      "storage": "Airtight containers in dark and cool place.",
      "foodType": "100% Vegetarian"
    },
    "details": "Essential Onion-Garlic Pair is selected for its high potency, freshness, and delicious taste. 100% natural, certified spices, seeds, or herbs tailored for direct consumption or quick kitchen prep. Guaranteed premium experience.",
    "reviews": [
      {
        "name": "Tarun Goel",
        "rating": 5,
        "comment": "This Essential Onion-Garlic Pair is amazing. Great value combo for my daily health routine. Clean and prompt delivery.",
        "date": "2026-06-12"
      },
      {
        "name": "Divya Reddy",
        "rating": 4.5,
        "comment": "Good value pack. Red Onion Powder and Garlic Powder are top notch. Perfect mix. Sourced fresh, clean, and full of natural aroma. Definitely buying again.",
        "date": "2026-06-19"
      }
    ]
  },
  {
    "id": 342,
    "slug": "italian-pizza-duo",
    "name": "Italian Pizza Duo",
    "category": "combos",
    "unit": "Pack of 2 (100g each)",
    "price": 297,
    "mrp": 403,
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Italian Pizza Duo - high performance premium kitchen masala/health package combining Oregano and Red Chilli Flakes.",
    "stock": 49,
    "rating": 4.7,
    "tags": [
      "combo",
      "2-product-combo",
      "hot-selling-bestseller"
    ],
    "comboIncludes": [
      {
        "name": "Oregano",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Red Chilli Flakes",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 2 (100g each)",
        "price": 297,
        "mrp": 403
      },
      {
        "unit": "Pack of 2 (200g each)",
        "price": 524,
        "mrp": 716
      },
      {
        "unit": "Pack of 2 (500g each)",
        "price": 1188,
        "mrp": 1701
      }
    ],
    "highlights": {
      "packType": "2-Product Combo",
      "totalProducts": "2 Packets",
      "recommendedSize": "Pack of 2 (100g each)",
      "bulkAvailable": "Yes (500g)",
      "strategy": "Hot Selling / Bestseller",
      "bestFor": "Pizza & Pasta, Garlic Bread Seasoning",
      "storage": "Airtight containers in dark and cool place.",
      "foodType": "100% Vegetarian"
    },
    "details": "Italian Pizza Duo is selected for its high potency, freshness, and delicious taste. 100% natural, certified spices, seeds, or herbs tailored for direct consumption or quick kitchen prep. Guaranteed premium experience.",
    "reviews": [
      {
        "name": "Harsh Vardhan",
        "rating": 5,
        "comment": "This Italian Pizza Duo is amazing. Unbelievable discount compared to buying them individually. Perfect addition to the kitchen.",
        "date": "2026-06-14"
      },
      {
        "name": "Swati Kulkarni",
        "rating": 4.5,
        "comment": "Good value pack. Oregano and Red Chilli Flakes are top notch. Authentic taste and absolute purity. Very fresh product.",
        "date": "2026-06-21"
      }
    ]
  },
  {
    "id": 343,
    "slug": "immunity-weight-loss-seeds",
    "name": "Immunity Weight-Loss Seeds",
    "category": "combos",
    "unit": "Pack of 2 (200g each)",
    "price": 335,
    "mrp": 487,
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Immunity Weight-Loss Seeds - high performance premium kitchen masala/health package combining Chia Seeds and Basil Seeds.",
    "stock": 25,
    "rating": 4.7,
    "tags": [
      "combo",
      "2-product-combo",
      "trending-fast-moving"
    ],
    "comboIncludes": [
      {
        "name": "Chia Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Basil Seeds (Sabja)",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 2 (200g each)",
        "price": 335,
        "mrp": 487
      },
      {
        "unit": "Pack of 2 (500g each)",
        "price": 769,
        "mrp": 1115
      },
      {
        "unit": "Pack of 2 (1kg each)",
        "price": 1320,
        "mrp": 2013
      }
    ],
    "highlights": {
      "packType": "2-Product Combo",
      "totalProducts": "2 Packets",
      "recommendedSize": "Pack of 2 (200g each)",
      "bulkAvailable": "Yes (1kg)",
      "strategy": "Trending / Fast Moving",
      "bestFor": "Immunity Boost, Detox Water, Hydration",
      "storage": "Airtight containers in dark and cool place.",
      "foodType": "100% Vegetarian"
    },
    "details": "Immunity Weight-Loss Seeds is selected for its high potency, freshness, and delicious taste. 100% natural, certified spices, seeds, or herbs tailored for direct consumption or quick kitchen prep. Guaranteed premium experience.",
    "reviews": [
      {
        "name": "Kavita Deshmukh",
        "rating": 5,
        "comment": "This Immunity Weight-Loss Seeds is amazing. Saves so much time in prep. Very clean ingredients, high quality standards.",
        "date": "2026-06-16"
      },
      {
        "name": "Nitin Khurana",
        "rating": 4.5,
        "comment": "Good value pack. Chia Seeds and Basil Seeds are top notch. Very high quality. Ground fine and smells amazing. Totally worth it.",
        "date": "2026-06-23"
      }
    ]
  },
  {
    "id": 344,
    "slug": "premium-festive-dry-fruits",
    "name": "Premium Festive Dry Fruits",
    "category": "combos",
    "unit": "Pack of 2 (200g each)",
    "price": 491,
    "mrp": 646,
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Premium Festive Dry Fruits - high performance premium kitchen masala/health package combining Almonds and Cashews.",
    "stock": 37,
    "rating": 4.4,
    "tags": [
      "combo",
      "2-product-combo",
      "bestseller-premium"
    ],
    "comboIncludes": [
      {
        "name": "Almonds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Cashews",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 2 (200g each)",
        "price": 491,
        "mrp": 646
      },
      {
        "unit": "Pack of 2 (500g each)",
        "price": 1105,
        "mrp": 1454
      },
      {
        "unit": "Pack of 2 (1kg each)",
        "price": 1985,
        "mrp": 2748
      }
    ],
    "highlights": {
      "packType": "2-Product Combo",
      "totalProducts": "2 Packets",
      "recommendedSize": "Pack of 2 (200g each)",
      "bulkAvailable": "Yes (1kg)",
      "strategy": "Bestseller / Premium",
      "bestFor": "Festive Sweets, Premium Healthy Snacking",
      "storage": "Airtight containers in dark and cool place.",
      "foodType": "100% Vegetarian"
    },
    "details": "Premium Festive Dry Fruits is selected for its high potency, freshness, and delicious taste. 100% natural, certified spices, seeds, or herbs tailored for direct consumption or quick kitchen prep. Guaranteed premium experience.",
    "reviews": [
      {
        "name": "Geeta Pillai",
        "rating": 5,
        "comment": "This Premium Festive Dry Fruits is amazing. Perfect crunch and taste. Premium selection, highly satisfied.",
        "date": "2026-06-18"
      },
      {
        "name": "Rahul Bose",
        "rating": 4.5,
        "comment": "Good value pack. Almonds and Cashews are top notch. Extremely useful wellness bundle. Safe, pure, and very fast delivery.",
        "date": "2026-06-25"
      }
    ]
  },
  {
    "id": 345,
    "slug": "healthy-nutrition-seeds",
    "name": "Healthy Nutrition Seeds",
    "category": "combos",
    "unit": "Pack of 2 (200g each)",
    "price": 253,
    "mrp": 348,
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Healthy Nutrition Seeds - high performance premium kitchen masala/health package combining Flax Seeds and Sunflower Seeds.",
    "stock": 31,
    "rating": 4.5,
    "tags": [
      "combo",
      "2-product-combo",
      "value-buys"
    ],
    "comboIncludes": [
      {
        "name": "Flax Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Sunflower Seeds",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 2 (200g each)",
        "price": 253,
        "mrp": 348
      },
      {
        "unit": "Pack of 2 (500g each)",
        "price": 583,
        "mrp": 801
      },
      {
        "unit": "Pack of 2 (1kg each)",
        "price": 1012,
        "mrp": 1462
      }
    ],
    "highlights": {
      "packType": "2-Product Combo",
      "totalProducts": "2 Packets",
      "recommendedSize": "Pack of 2 (200g each)",
      "bulkAvailable": "Yes (1kg)",
      "strategy": "Value Buys",
      "bestFor": "Thyroid & Heart Care, Dietary Fiber",
      "storage": "Airtight containers in dark and cool place.",
      "foodType": "100% Vegetarian"
    },
    "details": "Healthy Nutrition Seeds is selected for its high potency, freshness, and delicious taste. 100% natural, certified spices, seeds, or herbs tailored for direct consumption or quick kitchen prep. Guaranteed premium experience.",
    "reviews": [
      {
        "name": "Jyoti Sharma",
        "rating": 5,
        "comment": "This Healthy Nutrition Seeds is amazing. Super fresh and high quality. The combination is very convenient and cost-effective.",
        "date": "2026-06-20"
      },
      {
        "name": "Vijay Yadav",
        "rating": 4.5,
        "comment": "Good value pack. Flax Seeds and Sunflower Seeds are top notch. Excellent packaging, both ingredients feel large and genuine. Highly recommended!",
        "date": "2026-06-27"
      }
    ]
  },
  {
    "id": 346,
    "slug": "herbal-wellness-duo",
    "name": "Herbal Wellness Duo",
    "category": "combos",
    "unit": "Pack of 2 (100g each)",
    "price": 377,
    "mrp": 508,
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Herbal Wellness Duo - high performance premium kitchen masala/health package combining Ashwagandha and Mulethi.",
    "stock": 26,
    "rating": 4.5,
    "tags": [
      "combo",
      "2-product-combo",
      "trending-ayurvedic"
    ],
    "comboIncludes": [
      {
        "name": "Ashwagandha Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Mulethi (Licorice) Powder",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 2 (100g each)",
        "price": 377,
        "mrp": 508
      },
      {
        "unit": "Pack of 2 (200g each)",
        "price": 693,
        "mrp": 935
      },
      {
        "unit": "Pack of 2 (500g each)",
        "price": 1503,
        "mrp": 2134
      }
    ],
    "highlights": {
      "packType": "2-Product Combo",
      "totalProducts": "2 Packets",
      "recommendedSize": "Pack of 2 (100g each)",
      "bulkAvailable": "Yes (500g)",
      "strategy": "Trending / Ayurvedic",
      "bestFor": "Stress Relief, Cough & Throat Care",
      "storage": "Airtight containers in dark and cool place.",
      "foodType": "100% Vegetarian"
    },
    "details": "Herbal Wellness Duo is selected for its high potency, freshness, and delicious taste. 100% natural, certified spices, seeds, or herbs tailored for direct consumption or quick kitchen prep. Guaranteed premium experience.",
    "reviews": [
      {
        "name": "Amit Sharma",
        "rating": 5,
        "comment": "This Herbal Wellness Duo is amazing. Great value combo for my daily health routine. Clean and prompt delivery.",
        "date": "2026-06-22"
      },
      {
        "name": "Sneha Patel",
        "rating": 4.5,
        "comment": "Good value pack. Ashwagandha and Mulethi are top notch. Perfect mix. Sourced fresh, clean, and full of natural aroma. Definitely buying again.",
        "date": "2026-06-29"
      }
    ]
  },
  {
    "id": 347,
    "slug": "kitchen-fast-food-masala-combo",
    "name": "Kitchen Fast-Food Masala Combo",
    "category": "combos",
    "unit": "Pack of 3 (100g each)",
    "price": 422,
    "mrp": 627,
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Kitchen Fast-Food Masala Combo - high performance premium kitchen masala/health package combining Pizza Pasta Masala and Oregano Seasoning and Peri-Peri Masala.",
    "stock": 23,
    "rating": 4.5,
    "tags": [
      "combo",
      "3-product-combo",
      "newly-products-hot-selling"
    ],
    "comboIncludes": [
      {
        "name": "Pizza Pasta Seasoning",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Oregano",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Peri Peri Masala",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (100g each)",
        "price": 422,
        "mrp": 627
      },
      {
        "unit": "Pack of 3 (200g each)",
        "price": 810,
        "mrp": 1193
      },
      {
        "unit": "Pack of 3 (500g each)",
        "price": 973,
        "mrp": 1495
      }
    ],
    "highlights": {
      "packType": "3-Product Combo",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (100g each)",
      "bulkAvailable": "Yes (500g)",
      "strategy": "Newly products / Hot Selling",
      "bestFor": "Fries, Pizza, Pasta, Continental snacks",
      "storage": "Airtight containers in dark and cool place.",
      "foodType": "100% Vegetarian"
    },
    "details": "Kitchen Fast-Food Masala Combo is selected for its high potency, freshness, and delicious taste. 100% natural, certified spices, seeds, or herbs tailored for direct consumption or quick kitchen prep. Guaranteed premium experience.",
    "reviews": [
      {
        "name": "Rohan Gupta",
        "rating": 5,
        "comment": "This Kitchen Fast-Food Masala Combo is amazing. Unbelievable discount compared to buying them individually. Perfect addition to the kitchen.",
        "date": "2026-06-24"
      },
      {
        "name": "Priya Nair",
        "rating": 4.5,
        "comment": "Good value pack. Pizza Pasta Masala and Oregano Seasoning are top notch. Authentic taste and absolute purity. Very fresh product.",
        "date": "2026-06-12"
      }
    ]
  },
  {
    "id": 348,
    "slug": "daily-cooking-base-powder",
    "name": "Daily Cooking Base Powder",
    "category": "combos",
    "unit": "Pack of 3 (200g each)",
    "price": 746,
    "mrp": 1044,
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Daily Cooking Base Powder - high performance premium kitchen masala/health package combining Red Onion Powder and Garlic Powder and Ginger Powder.",
    "stock": 37,
    "rating": 4.3,
    "tags": [
      "combo",
      "3-product-combo",
      "bulk-products-value-buys"
    ],
    "comboIncludes": [
      {
        "name": "Red Onion Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Garlic Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Ginger Powder",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (200g each)",
        "price": 746,
        "mrp": 1044
      },
      {
        "unit": "Pack of 3 (500g each)",
        "price": 1703,
        "mrp": 2382
      },
      {
        "unit": "Pack of 3 (1kg each)",
        "price": 3082,
        "mrp": 4536
      }
    ],
    "highlights": {
      "packType": "3-Product Combo",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (200g each)",
      "bulkAvailable": "Yes (1kg)",
      "strategy": "Bulk products / Value Buys",
      "bestFor": "Gravy Base, Everyday Indian Cooking, Marinades",
      "storage": "Airtight containers in dark and cool place.",
      "foodType": "100% Vegetarian"
    },
    "details": "Daily Cooking Base Powder is selected for its high potency, freshness, and delicious taste. 100% natural, certified spices, seeds, or herbs tailored for direct consumption or quick kitchen prep. Guaranteed premium experience.",
    "reviews": [
      {
        "name": "Vikram Singh",
        "rating": 5,
        "comment": "This Daily Cooking Base Powder is amazing. Saves so much time in prep. Very clean ingredients, high quality standards.",
        "date": "2026-06-26"
      },
      {
        "name": "Sonal Mehta",
        "rating": 4.5,
        "comment": "Good value pack. Red Onion Powder and Garlic Powder are top notch. Very high quality. Ground fine and smells amazing. Totally worth it.",
        "date": "2026-06-14"
      }
    ]
  },
  {
    "id": 349,
    "slug": "omega-3-super-seeds-trio",
    "name": "Omega-3 Super Seeds Trio",
    "category": "combos",
    "unit": "Pack of 3 (200g each)",
    "price": 482,
    "mrp": 687,
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Omega-3 Super Seeds Trio - high performance premium kitchen masala/health package combining Chia Seeds and Flax Seeds and Pumpkin Seeds.",
    "stock": 29,
    "rating": 4.8,
    "tags": [
      "combo",
      "3-product-combo",
      "trending-healthy"
    ],
    "comboIncludes": [
      {
        "name": "Chia Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Flax Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Pumpkin Seeds",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (200g each)",
        "price": 482,
        "mrp": 687
      },
      {
        "unit": "Pack of 3 (500g each)",
        "price": 1109,
        "mrp": 1581
      },
      {
        "unit": "Pack of 3 (1kg each)",
        "price": 1924,
        "mrp": 2886
      }
    ],
    "highlights": {
      "packType": "3-Product Combo",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (200g each)",
      "bulkAvailable": "Yes (1kg)",
      "strategy": "Trending / Healthy",
      "bestFor": "Omega-3 Fats, High Fiber, Morning Seed Mix",
      "storage": "Airtight containers in dark and cool place.",
      "foodType": "100% Vegetarian"
    },
    "details": "Omega-3 Super Seeds Trio is selected for its high potency, freshness, and delicious taste. 100% natural, certified spices, seeds, or herbs tailored for direct consumption or quick kitchen prep. Guaranteed premium experience.",
    "reviews": [
      {
        "name": "Kunal Shah",
        "rating": 5,
        "comment": "This Omega-3 Super Seeds Trio is amazing. Perfect crunch and taste. Premium selection, highly satisfied.",
        "date": "2026-06-28"
      },
      {
        "name": "Shweta Rao",
        "rating": 4.5,
        "comment": "Good value pack. Chia Seeds and Flax Seeds are top notch. Extremely useful wellness bundle. Safe, pure, and very fast delivery.",
        "date": "2026-06-16"
      }
    ]
  },
  {
    "id": 350,
    "slug": "royal-dry-fruits-mix",
    "name": "Royal Dry Fruits Mix",
    "category": "combos",
    "unit": "Pack of 3 (200g each)",
    "price": 813,
    "mrp": 1101,
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Royal Dry Fruits Mix - high performance premium kitchen masala/health package combining Almonds and Cashews and Pistachios.",
    "stock": 22,
    "rating": 4.7,
    "tags": [
      "combo",
      "3-product-combo",
      "bestseller-premium"
    ],
    "comboIncludes": [
      {
        "name": "Almonds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Cashews",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Pistachios",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (200g each)",
        "price": 813,
        "mrp": 1101
      },
      {
        "unit": "Pack of 3 (500g each)",
        "price": 1831,
        "mrp": 2478
      },
      {
        "unit": "Pack of 3 (1kg each)",
        "price": 3287,
        "mrp": 4683
      }
    ],
    "highlights": {
      "packType": "3-Product Combo",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (200g each)",
      "bulkAvailable": "Yes (1kg)",
      "strategy": "Bestseller / Premium",
      "bestFor": "Royal Desserts, Gifting, High Energy snacks",
      "storage": "Airtight containers in dark and cool place.",
      "foodType": "100% Vegetarian"
    },
    "details": "Royal Dry Fruits Mix is selected for its high potency, freshness, and delicious taste. 100% natural, certified spices, seeds, or herbs tailored for direct consumption or quick kitchen prep. Guaranteed premium experience.",
    "reviews": [
      {
        "name": "Rajesh Tiwari",
        "rating": 5,
        "comment": "This Royal Dry Fruits Mix is amazing. Super fresh and high quality. The combination is very convenient and cost-effective.",
        "date": "2026-06-10"
      },
      {
        "name": "Neha Verma",
        "rating": 4.5,
        "comment": "Good value pack. Almonds and Cashews are top notch. Excellent packaging, both ingredients feel large and genuine. Highly recommended!",
        "date": "2026-06-18"
      }
    ]
  },
  {
    "id": 351,
    "slug": "natural-detox-combo",
    "name": "Natural Detox Combo",
    "category": "combos",
    "unit": "Pack of 3 (100g each)",
    "price": 439,
    "mrp": 637,
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Natural Detox Combo - high performance premium kitchen masala/health package combining Moringa Powder and Beetroot Powder and Dry Amla.",
    "stock": 44,
    "rating": 4.4,
    "tags": [
      "combo",
      "3-product-combo",
      "trending-new-launch"
    ],
    "comboIncludes": [
      {
        "name": "Moringa Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Beetroot Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Dry Amla (Indian Gooseberry)",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (100g each)",
        "price": 439,
        "mrp": 637
      },
      {
        "unit": "Pack of 3 (200g each)",
        "price": 809,
        "mrp": 1173
      },
      {
        "unit": "Pack of 3 (500g each)",
        "price": 1754,
        "mrp": 2676
      }
    ],
    "highlights": {
      "packType": "3-Product Combo",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (100g each)",
      "bulkAvailable": "Yes (500g)",
      "strategy": "Trending / New Launch",
      "bestFor": "Blood Purification, Skin Detox, Vitality Drink",
      "storage": "Airtight containers in dark and cool place.",
      "foodType": "100% Vegetarian"
    },
    "details": "Natural Detox Combo is selected for its high potency, freshness, and delicious taste. 100% natural, certified spices, seeds, or herbs tailored for direct consumption or quick kitchen prep. Guaranteed premium experience.",
    "reviews": [
      {
        "name": "Arjun Kapoor",
        "rating": 5,
        "comment": "This Natural Detox Combo is amazing. Great value combo for my daily health routine. Clean and prompt delivery.",
        "date": "2026-06-12"
      },
      {
        "name": "Karan Malhotra",
        "rating": 4.5,
        "comment": "Good value pack. Moringa Powder and Beetroot Powder are top notch. Perfect mix. Sourced fresh, clean, and full of natural aroma. Definitely buying again.",
        "date": "2026-06-20"
      }
    ]
  },
  {
    "id": 352,
    "slug": "complete-continental-chef-kit",
    "name": "Complete Continental Chef Kit",
    "category": "combos",
    "unit": "Pack of 4 (100g each)",
    "price": 537,
    "mrp": 801,
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Complete Continental Chef Kit - high performance premium kitchen masala/health package combining Oregano and Oregano Seasoning and Pizza Pasta Masala and Red Chilli Flakes.",
    "stock": 29,
    "rating": 4.8,
    "tags": [
      "combo",
      "4-product-combo",
      "hot-selling-bestseller"
    ],
    "comboIncludes": [
      {
        "name": "Oregano",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Pizza Pasta Seasoning",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Peri Peri Masala",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Red Chilli Flakes",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 4 (100g each)",
        "price": 537,
        "mrp": 801
      },
      {
        "unit": "Pack of 4 (200g each)",
        "price": 1009,
        "mrp": 1510
      },
      {
        "unit": "Pack of 4 (500g each)",
        "price": 1478,
        "mrp": 2297
      }
    ],
    "highlights": {
      "packType": "4-Product Combo",
      "totalProducts": "4 Packets",
      "recommendedSize": "Pack of 4 (100g each)",
      "bulkAvailable": "Yes (500g)",
      "strategy": "Hot Selling / Bestseller",
      "bestFor": "Professional Kitchens, Gourmet Continental Dishes",
      "storage": "Airtight containers in dark and cool place.",
      "foodType": "100% Vegetarian"
    },
    "details": "Complete Continental Chef Kit is selected for its high potency, freshness, and delicious taste. 100% natural, certified spices, seeds, or herbs tailored for direct consumption or quick kitchen prep. Guaranteed premium experience.",
    "reviews": [
      {
        "name": "Ananya Sen",
        "rating": 5,
        "comment": "This Complete Continental Chef Kit is amazing. Unbelievable discount compared to buying them individually. Perfect addition to the kitchen.",
        "date": "2026-06-14"
      },
      {
        "name": "Deepak Joshi",
        "rating": 4.5,
        "comment": "Good value pack. Oregano and Oregano Seasoning are top notch. Authentic taste and absolute purity. Very fresh product.",
        "date": "2026-06-22"
      }
    ]
  },
  {
    "id": 353,
    "slug": "ultimate-4-wall-kitchen-powders",
    "name": "Ultimate 4-Wall Kitchen Powders",
    "category": "combos",
    "unit": "Pack of 4 (200g each)",
    "price": 930,
    "mrp": 1355,
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Ultimate 4-Wall Kitchen Powders - high performance premium kitchen masala/health package combining Red Onion Powder and White Onion Powder and Garlic Powder and Ginger Powder.",
    "stock": 25,
    "rating": 4.7,
    "tags": [
      "combo",
      "4-product-combo",
      "bulk-products-kitchen-king"
    ],
    "comboIncludes": [
      {
        "name": "Red Onion Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "White Onion Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Garlic Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Ginger Powder",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 4 (200g each)",
        "price": 930,
        "mrp": 1355
      },
      {
        "unit": "Pack of 4 (500g each)",
        "price": 2122,
        "mrp": 3092
      },
      {
        "unit": "Pack of 4 (1kg each)",
        "price": 3839,
        "mrp": 5888
      }
    ],
    "highlights": {
      "packType": "4-Product Combo",
      "totalProducts": "4 Packets",
      "recommendedSize": "Pack of 4 (200g each)",
      "bulkAvailable": "Yes (1kg)",
      "strategy": "Bulk products / Kitchen King",
      "bestFor": "Stocking pantry, Quick gravies & rubs, Restaurants",
      "storage": "Airtight containers in dark and cool place.",
      "foodType": "100% Vegetarian"
    },
    "details": "Ultimate 4-Wall Kitchen Powders is selected for its high potency, freshness, and delicious taste. 100% natural, certified spices, seeds, or herbs tailored for direct consumption or quick kitchen prep. Guaranteed premium experience.",
    "reviews": [
      {
        "name": "Pooja Mishra",
        "rating": 5,
        "comment": "This Ultimate 4-Wall Kitchen Powders is amazing. Saves so much time in prep. Very clean ingredients, high quality standards.",
        "date": "2026-06-16"
      },
      {
        "name": "Sanjay Kumar",
        "rating": 4.5,
        "comment": "Good value pack. Red Onion Powder and White Onion Powder are top notch. Very high quality. Ground fine and smells amazing. Totally worth it.",
        "date": "2026-06-24"
      }
    ]
  },
  {
    "id": 354,
    "slug": "healthy-salad-snack-seeds-kit",
    "name": "Healthy Salad & Snack Seeds Kit",
    "category": "combos",
    "unit": "Pack of 4 (200g each)",
    "price": 590,
    "mrp": 859,
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Healthy Salad & Snack Seeds Kit - high performance premium kitchen masala/health package combining Watermelon Seeds and Pumpkin Seeds and Flax Seeds and Sunflower Seeds.",
    "stock": 32,
    "rating": 4.2,
    "tags": [
      "combo",
      "4-product-combo",
      "value-buys-fitness"
    ],
    "comboIncludes": [
      {
        "name": "Watermelon Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Pumpkin Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Flax Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Sunflower Seeds",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 4 (200g each)",
        "price": 590,
        "mrp": 859
      },
      {
        "unit": "Pack of 4 (500g each)",
        "price": 1348,
        "mrp": 1964
      },
      {
        "unit": "Pack of 4 (1kg each)",
        "price": 2352,
        "mrp": 3608
      }
    ],
    "highlights": {
      "packType": "4-Product Combo",
      "totalProducts": "4 Packets",
      "recommendedSize": "Pack of 4 (200g each)",
      "bulkAvailable": "Yes (1kg)",
      "strategy": "Value Buys / Fitness",
      "bestFor": "Keto salad dressing, Crunchy snacks, Bread baking",
      "storage": "Airtight containers in dark and cool place.",
      "foodType": "100% Vegetarian"
    },
    "details": "Healthy Salad & Snack Seeds Kit is selected for its high potency, freshness, and delicious taste. 100% natural, certified spices, seeds, or herbs tailored for direct consumption or quick kitchen prep. Guaranteed premium experience.",
    "reviews": [
      {
        "name": "Aditi Roy",
        "rating": 5,
        "comment": "This Healthy Salad & Snack Seeds Kit is amazing. Perfect crunch and taste. Premium selection, highly satisfied.",
        "date": "2026-06-18"
      },
      {
        "name": "Varun Saxena",
        "rating": 4.5,
        "comment": "Good value pack. Watermelon Seeds and Pumpkin Seeds are top notch. Extremely useful wellness bundle. Safe, pure, and very fast delivery.",
        "date": "2026-06-26"
      }
    ]
  },
  {
    "id": 355,
    "slug": "luxury-dry-fruit-platter",
    "name": "Luxury Dry Fruit Platter",
    "category": "combos",
    "unit": "Pack of 4 (200g each)",
    "price": 731,
    "mrp": 1036,
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Luxury Dry Fruit Platter - high performance premium kitchen masala/health package combining Almonds and Cashews and Raisin and Apricot.",
    "stock": 36,
    "rating": 4.6,
    "tags": [
      "combo",
      "4-product-combo",
      "bestseller-gifting-bulk"
    ],
    "comboIncludes": [
      {
        "name": "Almonds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Cashews",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Raisins",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Apricots",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 4 (200g each)",
        "price": 731,
        "mrp": 1036
      },
      {
        "unit": "Pack of 4 (500g each)",
        "price": 1647,
        "mrp": 2332
      },
      {
        "unit": "Pack of 4 (1kg each)",
        "price": 2957,
        "mrp": 4408
      }
    ],
    "highlights": {
      "packType": "4-Product Combo",
      "totalProducts": "4 Packets",
      "recommendedSize": "Pack of 4 (200g each)",
      "bulkAvailable": "Yes (1kg)",
      "strategy": "Bestseller / Gifting Bulk",
      "bestFor": "Festival platters, Premium wedding/party Gifting",
      "storage": "Airtight containers in dark and cool place.",
      "foodType": "100% Vegetarian"
    },
    "details": "Luxury Dry Fruit Platter is selected for its high potency, freshness, and delicious taste. 100% natural, certified spices, seeds, or herbs tailored for direct consumption or quick kitchen prep. Guaranteed premium experience.",
    "reviews": [
      {
        "name": "Simran Gill",
        "rating": 5,
        "comment": "This Luxury Dry Fruit Platter is amazing. Super fresh and high quality. The combination is very convenient and cost-effective.",
        "date": "2026-06-20"
      },
      {
        "name": "Manish Bansal",
        "rating": 4.5,
        "comment": "Good value pack. Almonds and Cashews are top notch. Excellent packaging, both ingredients feel large and genuine. Highly recommended!",
        "date": "2026-06-28"
      }
    ]
  },
  {
    "id": 356,
    "slug": "tangy-and-warm-blend",
    "name": "Tangy and Warm Blend",
    "category": "combos",
    "unit": "Pack of 2 (100g each)",
    "price": 289,
    "mrp": 388,
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Tangy and Warm Blend — a premium curated pack of 2 essential spices & powders designed for authentic Indian and continental cooking.",
    "stock": 21,
    "rating": 4.3,
    "tags": [
      "combo",
      "spices",
      "powders",
      "2-product-combo"
    ],
    "comboIncludes": [
      {
        "name": "Tomato Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Ginger Powder",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 2 (100g each)",
        "price": 289,
        "mrp": 388
      },
      {
        "unit": "Pack of 2 (200g each)",
        "price": 532,
        "mrp": 714
      },
      {
        "unit": "Pack of 2 (500g each)",
        "price": 1152,
        "mrp": 1630
      }
    ],
    "highlights": {
      "packType": "2-Product Combo",
      "totalProducts": "2 Packets",
      "recommendedSize": "Pack of 2 (100g each)",
      "bulkAvailable": "Yes (500g)",
      "strategy": "Value Buy",
      "bestFor": "Soups, Gravies, Chutneys",
      "storage": "Store in a cool, dry place in airtight containers away from moisture.",
      "foodType": "100% Vegetarian / Vegan"
    },
    "details": "Tangy and Warm Blend bundles the finest quality Tomato Powder, Ginger Powder for your kitchen. All powders are stone-ground or naturally dried, free from artificial colours and preservatives. Packed airtight to preserve freshness and intense aroma.",
    "reviews": [
      {
        "name": "Ramesh K.",
        "rating": 5,
        "comment": "Perfect for Indian cooking. The powders are clean and pure. The Tangy and Warm Blend combo is a kitchen essential.",
        "date": "2026-06-14"
      },
      {
        "name": "Sunita M.",
        "rating": 4.5,
        "comment": "Loved the Tomato Powder in this pack. Exactly what I needed for my daily cooking. Highly recommend!",
        "date": "2026-06-17"
      }
    ]
  },
  {
    "id": 357,
    "slug": "rich-white-gravy-base",
    "name": "Rich White Gravy Base",
    "category": "combos",
    "unit": "Pack of 2 (100g each)",
    "price": 262,
    "mrp": 358,
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Rich White Gravy Base — a premium curated pack of 2 essential spices & powders designed for authentic Indian and continental cooking.",
    "stock": 22,
    "rating": 4.3,
    "tags": [
      "combo",
      "spices",
      "powders",
      "2-product-combo"
    ],
    "comboIncludes": [
      {
        "name": "Garlic Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "White Onion Powder",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 2 (100g each)",
        "price": 262,
        "mrp": 358
      },
      {
        "unit": "Pack of 2 (200g each)",
        "price": 483,
        "mrp": 659
      },
      {
        "unit": "Pack of 2 (500g each)",
        "price": 1047,
        "mrp": 1504
      },
      {
        "unit": "Pack of 2 (1kg each)",
        "price": 1993,
        "mrp": 2864
      }
    ],
    "highlights": {
      "packType": "2-Product Combo",
      "totalProducts": "2 Packets",
      "recommendedSize": "Pack of 2 (100g each)",
      "bulkAvailable": "Yes (500g, 1kg)",
      "strategy": "Bestseller",
      "bestFor": "White Gravy, Shahi Curries, Korma",
      "storage": "Store in a cool, dry place in airtight containers away from moisture.",
      "foodType": "100% Vegetarian / Vegan"
    },
    "details": "Rich White Gravy Base bundles the finest quality Garlic Powder, White Onion Powder for your kitchen. All powders are stone-ground or naturally dried, free from artificial colours and preservatives. Packed airtight to preserve freshness and intense aroma.",
    "reviews": [
      {
        "name": "Mohan D.",
        "rating": 5,
        "comment": "The spices are very authentic and enhance flavour beautifully. The Rich White Gravy Base combo is a kitchen essential.",
        "date": "2026-06-18"
      },
      {
        "name": "Priti G.",
        "rating": 4.5,
        "comment": "Loved the Garlic Powder in this pack. Premium quality at a great price. Love this pack.",
        "date": "2026-06-21"
      }
    ]
  },
  {
    "id": 358,
    "slug": "snack-fries-sprinkler-duo",
    "name": "Snack Fries Sprinkler Duo",
    "category": "combos",
    "unit": "Pack of 2 (100g each)",
    "price": 297,
    "mrp": 428,
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Snack Fries Sprinkler Duo — a premium curated pack of 2 essential spices & powders designed for authentic Indian and continental cooking.",
    "stock": 22,
    "rating": 4.6,
    "tags": [
      "combo",
      "spices",
      "powders",
      "2-product-combo"
    ],
    "comboIncludes": [
      {
        "name": "Pizza Pasta Seasoning",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Peri Peri Masala",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 2 (100g each)",
        "price": 297,
        "mrp": 428
      },
      {
        "unit": "Pack of 2 (200g each)",
        "price": 560,
        "mrp": 796
      },
      {
        "unit": "Pack of 2 (500g each)",
        "price": 808,
        "mrp": 1197
      }
    ],
    "highlights": {
      "packType": "2-Product Combo",
      "totalProducts": "2 Packets",
      "recommendedSize": "Pack of 2 (100g each)",
      "bulkAvailable": "Yes (500g)",
      "strategy": "Hot Selling",
      "bestFor": "Fries, Popcorn, Roasted Snacks",
      "storage": "Store in a cool, dry place in airtight containers away from moisture.",
      "foodType": "100% Vegetarian / Vegan"
    },
    "details": "Snack Fries Sprinkler Duo bundles the finest quality Pizza Pasta Seasoning, Peri Peri Masala for your kitchen. All powders are stone-ground or naturally dried, free from artificial colours and preservatives. Packed airtight to preserve freshness and intense aroma.",
    "reviews": [
      {
        "name": "Vikas R.",
        "rating": 5,
        "comment": "Great spice combo! Both products are very fresh and aromatic. The Snack Fries Sprinkler Duo combo is a kitchen essential.",
        "date": "2026-06-22"
      },
      {
        "name": "Lata B.",
        "rating": 4.5,
        "comment": "Loved the Pizza Pasta Seasoning in this pack. Perfect for Indian cooking. The powders are clean and pure.",
        "date": "2026-06-25"
      }
    ]
  },
  {
    "id": 359,
    "slug": "daily-detox-and-glow-duo",
    "name": "Daily Detox and Glow Duo",
    "category": "combos",
    "unit": "Pack of 2 (100g each)",
    "price": 341,
    "mrp": 478,
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Daily Detox and Glow Duo — a premium curated pack of 2 essential spices & powders designed for authentic Indian and continental cooking.",
    "stock": 35,
    "rating": 4.6,
    "tags": [
      "combo",
      "spices",
      "powders",
      "2-product-combo"
    ],
    "comboIncludes": [
      {
        "name": "Moringa Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Beetroot Powder",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 2 (100g each)",
        "price": 341,
        "mrp": 478
      },
      {
        "unit": "Pack of 2 (200g each)",
        "price": 628,
        "mrp": 880
      },
      {
        "unit": "Pack of 2 (500g each)",
        "price": 1362,
        "mrp": 2008
      }
    ],
    "highlights": {
      "packType": "2-Product Combo",
      "totalProducts": "2 Packets",
      "recommendedSize": "Pack of 2 (100g each)",
      "bulkAvailable": "Yes (500g)",
      "strategy": "Trending",
      "bestFor": "Detox Smoothies, Immunity Drinks",
      "storage": "Store in a cool, dry place in airtight containers away from moisture.",
      "foodType": "100% Vegetarian / Vegan"
    },
    "details": "Daily Detox and Glow Duo bundles the finest quality Moringa Powder, Beetroot Powder for your kitchen. All powders are stone-ground or naturally dried, free from artificial colours and preservatives. Packed airtight to preserve freshness and intense aroma.",
    "reviews": [
      {
        "name": "Yusuf A.",
        "rating": 5,
        "comment": "Exactly what I needed for my daily cooking. Highly recommend! The Daily Detox and Glow Duo combo is a kitchen essential.",
        "date": "2026-06-26"
      },
      {
        "name": "Meera V.",
        "rating": 4.5,
        "comment": "Loved the Moringa Powder in this pack. The spices are very authentic and enhance flavour beautifully.",
        "date": "2026-06-29"
      }
    ]
  },
  {
    "id": 360,
    "slug": "pure-cinnamon-bakers-pack",
    "name": "Pure Cinnamon Bakers Pack",
    "category": "combos",
    "unit": "Pack of 2 (100g each)",
    "price": 271,
    "mrp": 388,
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Pure Cinnamon Bakers Pack — a premium curated pack of 2 essential spices & powders designed for authentic Indian and continental cooking.",
    "stock": 46,
    "rating": 4.7,
    "tags": [
      "combo",
      "spices",
      "powders",
      "2-product-combo"
    ],
    "comboIncludes": [
      {
        "name": "Cinnamon Sticks",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Ginger Powder",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 2 (100g each)",
        "price": 271,
        "mrp": 388
      },
      {
        "unit": "Pack of 2 (200g each)",
        "price": 498,
        "mrp": 709
      },
      {
        "unit": "Pack of 2 (500g each)",
        "price": 1077,
        "mrp": 1615
      }
    ],
    "highlights": {
      "packType": "2-Product Combo",
      "totalProducts": "2 Packets",
      "recommendedSize": "Pack of 2 (100g each)",
      "bulkAvailable": "Yes (500g)",
      "strategy": "Newly In",
      "bestFor": "Baking, Chai Masala, Desserts",
      "storage": "Store in a cool, dry place in airtight containers away from moisture.",
      "foodType": "100% Vegetarian / Vegan"
    },
    "details": "Pure Cinnamon Bakers Pack bundles the finest quality Cinnamon Sticks, Ginger Powder for your kitchen. All powders are stone-ground or naturally dried, free from artificial colours and preservatives. Packed airtight to preserve freshness and intense aroma.",
    "reviews": [
      {
        "name": "Girish F.",
        "rating": 5,
        "comment": "Premium quality at a great price. Love this pack. The Pure Cinnamon Bakers Pack combo is a kitchen essential.",
        "date": "2026-06-10"
      },
      {
        "name": "Smita Q.",
        "rating": 4.5,
        "comment": "Loved the Cinnamon Sticks in this pack. Great spice combo! Both products are very fresh and aromatic.",
        "date": "2026-06-14"
      }
    ]
  },
  {
    "id": 361,
    "slug": "instant-soup-base-pair",
    "name": "Instant Soup Base Pair",
    "category": "combos",
    "unit": "Pack of 2 (100g each)",
    "price": 219,
    "mrp": 294,
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Instant Soup Base Pair — a premium curated pack of 2 essential spices & powders designed for authentic Indian and continental cooking.",
    "stock": 26,
    "rating": 4.5,
    "tags": [
      "combo",
      "spices",
      "powders",
      "2-product-combo"
    ],
    "comboIncludes": [
      {
        "name": "Potato Flakes",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Tomato Powder",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 2 (100g each)",
        "price": 219,
        "mrp": 294
      },
      {
        "unit": "Pack of 2 (200g each)",
        "price": 415,
        "mrp": 557
      },
      {
        "unit": "Pack of 2 (500g each)",
        "price": 903,
        "mrp": 1275
      }
    ],
    "highlights": {
      "packType": "2-Product Combo",
      "totalProducts": "2 Packets",
      "recommendedSize": "Pack of 2 (100g each)",
      "bulkAvailable": "Yes (500g)",
      "strategy": "Value Buy",
      "bestFor": "Instant Soup, Mashed Potato, Pav Bhaji",
      "storage": "Store in a cool, dry place in airtight containers away from moisture.",
      "foodType": "100% Vegetarian / Vegan"
    },
    "details": "Instant Soup Base Pair bundles the finest quality Potato Flakes, Tomato Powder for your kitchen. All powders are stone-ground or naturally dried, free from artificial colours and preservatives. Packed airtight to preserve freshness and intense aroma.",
    "reviews": [
      {
        "name": "Naresh O.",
        "rating": 5,
        "comment": "Perfect for Indian cooking. The powders are clean and pure. The Instant Soup Base Pair combo is a kitchen essential.",
        "date": "2026-06-14"
      },
      {
        "name": "Shruti I.",
        "rating": 4.5,
        "comment": "Loved the Potato Flakes in this pack. Exactly what I needed for my daily cooking. Highly recommend!",
        "date": "2026-06-18"
      }
    ]
  },
  {
    "id": 362,
    "slug": "chatpatta-raite-and-dip-mix",
    "name": "Chatpatta Raite and Dip Mix",
    "category": "combos",
    "unit": "Pack of 2 (100g each)",
    "price": 245,
    "mrp": 338,
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Chatpatta Raite and Dip Mix — a premium curated pack of 2 essential spices & powders designed for authentic Indian and continental cooking.",
    "stock": 22,
    "rating": 4.2,
    "tags": [
      "combo",
      "spices",
      "powders",
      "2-product-combo"
    ],
    "comboIncludes": [
      {
        "name": "Mint Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Green Chilli Powder",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 2 (100g each)",
        "price": 245,
        "mrp": 338
      },
      {
        "unit": "Pack of 2 (200g each)",
        "price": 451,
        "mrp": 623
      },
      {
        "unit": "Pack of 2 (500g each)",
        "price": 977,
        "mrp": 1420
      }
    ],
    "highlights": {
      "packType": "2-Product Combo",
      "totalProducts": "2 Packets",
      "recommendedSize": "Pack of 2 (100g each)",
      "bulkAvailable": "Yes (500g)",
      "strategy": "Trending",
      "bestFor": "Raita, Chutneys, Dips, Salads",
      "storage": "Store in a cool, dry place in airtight containers away from moisture.",
      "foodType": "100% Vegetarian / Vegan"
    },
    "details": "Chatpatta Raite and Dip Mix bundles the finest quality Mint Powder, Green Chilli Powder for your kitchen. All powders are stone-ground or naturally dried, free from artificial colours and preservatives. Packed airtight to preserve freshness and intense aroma.",
    "reviews": [
      {
        "name": "Arvind Y.",
        "rating": 5,
        "comment": "The spices are very authentic and enhance flavour beautifully. The Chatpatta Raite and Dip Mix combo is a kitchen essential.",
        "date": "2026-06-18"
      },
      {
        "name": "Shobha Z.",
        "rating": 4.5,
        "comment": "Loved the Mint Powder in this pack. Premium quality at a great price. Love this pack.",
        "date": "2026-06-22"
      }
    ]
  },
  {
    "id": 363,
    "slug": "all-in-one-onion-garlic-base",
    "name": "All-in-One Onion Garlic Base",
    "category": "combos",
    "unit": "Pack of 3 (100g each)",
    "price": 380,
    "mrp": 537,
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "All-in-One Onion Garlic Base — a premium curated pack of 3 essential spices & powders designed for authentic Indian and continental cooking.",
    "stock": 36,
    "rating": 4.7,
    "tags": [
      "combo",
      "spices",
      "powders",
      "3-product-combo"
    ],
    "comboIncludes": [
      {
        "name": "Red Onion Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "White Onion Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Garlic Powder",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (100g each)",
        "price": 380,
        "mrp": 537
      },
      {
        "unit": "Pack of 3 (200g each)",
        "price": 700,
        "mrp": 989
      },
      {
        "unit": "Pack of 3 (500g each)",
        "price": 1516,
        "mrp": 2256
      },
      {
        "unit": "Pack of 3 (1kg each)",
        "price": 2888,
        "mrp": 4296
      }
    ],
    "highlights": {
      "packType": "3-Product Combo",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (100g each)",
      "bulkAvailable": "Yes (500g, 1kg)",
      "strategy": "Kitchen Essential",
      "bestFor": "Everyday Curries, Restaurant Style Gravies",
      "storage": "Store in a cool, dry place in airtight containers away from moisture.",
      "foodType": "100% Vegetarian / Vegan"
    },
    "details": "All-in-One Onion Garlic Base bundles the finest quality Red Onion Powder, White Onion Powder, Garlic Powder for your kitchen. All powders are stone-ground or naturally dried, free from artificial colours and preservatives. Packed airtight to preserve freshness and intense aroma.",
    "reviews": [
      {
        "name": "Anil P.",
        "rating": 5,
        "comment": "Great spice combo! Both products are very fresh and aromatic. The All-in-One Onion Garlic Base combo is a kitchen essential.",
        "date": "2026-06-22"
      },
      {
        "name": "Kavita S.",
        "rating": 4.5,
        "comment": "Loved the Red Onion Powder in this pack. Perfect for Indian cooking. The powders are clean and pure.",
        "date": "2026-06-26"
      }
    ]
  },
  {
    "id": 364,
    "slug": "italian-restaurant-style-combo",
    "name": "Italian Restaurant Style Combo",
    "category": "combos",
    "unit": "Pack of 3 (100g each)",
    "price": 422,
    "mrp": 602,
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Italian Restaurant Style Combo — a premium curated pack of 3 essential spices & powders designed for authentic Indian and continental cooking.",
    "stock": 33,
    "rating": 4.4,
    "tags": [
      "combo",
      "spices",
      "powders",
      "3-product-combo"
    ],
    "comboIncludes": [
      {
        "name": "Pizza Pasta Seasoning",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Oregano",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Red Chilli Flakes",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (100g each)",
        "price": 422,
        "mrp": 602
      },
      {
        "unit": "Pack of 3 (200g each)",
        "price": 776,
        "mrp": 1113
      },
      {
        "unit": "Pack of 3 (500g each)",
        "price": 1340,
        "mrp": 1999
      }
    ],
    "highlights": {
      "packType": "3-Product Combo",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (100g each)",
      "bulkAvailable": "Yes (500g)",
      "strategy": "Hot Selling",
      "bestFor": "Pizza, Pasta, Garlic Bread, Continental",
      "storage": "Store in a cool, dry place in airtight containers away from moisture.",
      "foodType": "100% Vegetarian / Vegan"
    },
    "details": "Italian Restaurant Style Combo bundles the finest quality Pizza Pasta Seasoning, Oregano, Red Chilli Flakes for your kitchen. All powders are stone-ground or naturally dried, free from artificial colours and preservatives. Packed airtight to preserve freshness and intense aroma.",
    "reviews": [
      {
        "name": "Suresh J.",
        "rating": 5,
        "comment": "Exactly what I needed for my daily cooking. Highly recommend! The Italian Restaurant Style Combo combo is a kitchen essential.",
        "date": "2026-06-26"
      },
      {
        "name": "Nandita H.",
        "rating": 4.5,
        "comment": "Loved the Pizza Pasta Seasoning in this pack. The spices are very authentic and enhance flavour beautifully.",
        "date": "2026-06-11"
      }
    ]
  },
  {
    "id": 365,
    "slug": "superfood-health-shake-mix",
    "name": "Superfood Health Shake Mix",
    "category": "combos",
    "unit": "Pack of 3 (100g each)",
    "price": 541,
    "mrp": 777,
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Superfood Health Shake Mix — a premium curated pack of 3 essential spices & powders designed for authentic Indian and continental cooking.",
    "stock": 37,
    "rating": 4.6,
    "tags": [
      "combo",
      "spices",
      "powders",
      "3-product-combo"
    ],
    "comboIncludes": [
      {
        "name": "Moringa Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Beetroot Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Ashwagandha Powder",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (100g each)",
        "price": 541,
        "mrp": 777
      },
      {
        "unit": "Pack of 3 (200g each)",
        "price": 996,
        "mrp": 1430
      },
      {
        "unit": "Pack of 3 (500g each)",
        "price": 2161,
        "mrp": 3264
      }
    ],
    "highlights": {
      "packType": "3-Product Combo",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (100g each)",
      "bulkAvailable": "Yes (500g)",
      "strategy": "Trending / Healthy",
      "bestFor": "Morning Health Shakes, Smoothie Bowls",
      "storage": "Store in a cool, dry place in airtight containers away from moisture.",
      "foodType": "100% Vegetarian / Vegan"
    },
    "details": "Superfood Health Shake Mix bundles the finest quality Moringa Powder, Beetroot Powder, Ashwagandha Powder for your kitchen. All powders are stone-ground or naturally dried, free from artificial colours and preservatives. Packed airtight to preserve freshness and intense aroma.",
    "reviews": [
      {
        "name": "Deepak C.",
        "rating": 5,
        "comment": "Premium quality at a great price. Love this pack. The Superfood Health Shake Mix combo is a kitchen essential.",
        "date": "2026-06-10"
      },
      {
        "name": "Asha T.",
        "rating": 4.5,
        "comment": "Loved the Moringa Powder in this pack. Great spice combo! Both products are very fresh and aromatic.",
        "date": "2026-06-15"
      }
    ]
  },
  {
    "id": 366,
    "slug": "instant-chatpatta-tadka",
    "name": "Instant Chatpatta Tadka",
    "category": "combos",
    "unit": "Pack of 3 (100g each)",
    "price": 405,
    "mrp": 567,
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Instant Chatpatta Tadka — a premium curated pack of 3 essential spices & powders designed for authentic Indian and continental cooking.",
    "stock": 42,
    "rating": 4.8,
    "tags": [
      "combo",
      "spices",
      "powders",
      "3-product-combo"
    ],
    "comboIncludes": [
      {
        "name": "Tomato Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Green Chilli Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Ginger Powder",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (100g each)",
        "price": 405,
        "mrp": 567
      },
      {
        "unit": "Pack of 3 (200g each)",
        "price": 746,
        "mrp": 1044
      },
      {
        "unit": "Pack of 3 (500g each)",
        "price": 1618,
        "mrp": 2382
      }
    ],
    "highlights": {
      "packType": "3-Product Combo",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (100g each)",
      "bulkAvailable": "Yes (500g)",
      "strategy": "Bestseller",
      "bestFor": "Dal Tadka, Sabzi, Quick Marinades",
      "storage": "Store in a cool, dry place in airtight containers away from moisture.",
      "foodType": "100% Vegetarian / Vegan"
    },
    "details": "Instant Chatpatta Tadka bundles the finest quality Tomato Powder, Green Chilli Powder, Ginger Powder for your kitchen. All powders are stone-ground or naturally dried, free from artificial colours and preservatives. Packed airtight to preserve freshness and intense aroma.",
    "reviews": [
      {
        "name": "Harish L.",
        "rating": 5,
        "comment": "Perfect for Indian cooking. The powders are clean and pure. The Instant Chatpatta Tadka combo is a kitchen essential.",
        "date": "2026-06-14"
      },
      {
        "name": "Pallavi N.",
        "rating": 4.5,
        "comment": "Loved the Tomato Powder in this pack. Exactly what I needed for my daily cooking. Highly recommend!",
        "date": "2026-06-19"
      }
    ]
  },
  {
    "id": 367,
    "slug": "spicy-italian-twist-mix",
    "name": "Spicy Italian Twist Mix",
    "category": "combos",
    "unit": "Pack of 3 (100g each)",
    "price": 397,
    "mrp": 567,
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Spicy Italian Twist Mix — a premium curated pack of 3 essential spices & powders designed for authentic Indian and continental cooking.",
    "stock": 31,
    "rating": 4.4,
    "tags": [
      "combo",
      "spices",
      "powders",
      "3-product-combo"
    ],
    "comboIncludes": [
      {
        "name": "Pizza Pasta Seasoning",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Red Chilli Flakes",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Green Chilli Powder",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (100g each)",
        "price": 397,
        "mrp": 567
      },
      {
        "unit": "Pack of 3 (200g each)",
        "price": 740,
        "mrp": 1062
      },
      {
        "unit": "Pack of 3 (500g each)",
        "price": 1206,
        "mrp": 1799
      }
    ],
    "highlights": {
      "packType": "3-Product Combo",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (100g each)",
      "bulkAvailable": "Yes (500g)",
      "strategy": "Hot Selling",
      "bestFor": "Spicy Pizza, Continental Snacks, Fries",
      "storage": "Store in a cool, dry place in airtight containers away from moisture.",
      "foodType": "100% Vegetarian / Vegan"
    },
    "details": "Spicy Italian Twist Mix bundles the finest quality Pizza Pasta Seasoning, Red Chilli Flakes, Green Chilli Powder for your kitchen. All powders are stone-ground or naturally dried, free from artificial colours and preservatives. Packed airtight to preserve freshness and intense aroma.",
    "reviews": [
      {
        "name": "Bharat E.",
        "rating": 5,
        "comment": "The spices are very authentic and enhance flavour beautifully. The Spicy Italian Twist Mix combo is a kitchen essential.",
        "date": "2026-06-18"
      },
      {
        "name": "Rekha W.",
        "rating": 4.5,
        "comment": "Loved the Pizza Pasta Seasoning in this pack. Premium quality at a great price. Love this pack.",
        "date": "2026-06-23"
      }
    ]
  },
  {
    "id": 368,
    "slug": "immunity-and-throat-care-mix",
    "name": "Immunity and Throat Care Mix",
    "category": "combos",
    "unit": "Pack of 3 (100g each)",
    "price": 482,
    "mrp": 697,
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Immunity and Throat Care Mix — a premium curated pack of 3 essential spices & powders designed for authentic Indian and continental cooking.",
    "stock": 37,
    "rating": 4.4,
    "tags": [
      "combo",
      "spices",
      "powders",
      "3-product-combo"
    ],
    "comboIncludes": [
      {
        "name": "Ashwagandha Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Mulethi (Licorice) Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Cinnamon Sticks",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (100g each)",
        "price": 482,
        "mrp": 697
      },
      {
        "unit": "Pack of 3 (200g each)",
        "price": 887,
        "mrp": 1278
      },
      {
        "unit": "Pack of 3 (500g each)",
        "price": 1919,
        "mrp": 2913
      }
    ],
    "highlights": {
      "packType": "3-Product Combo",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (100g each)",
      "bulkAvailable": "Yes (500g)",
      "strategy": "Ayurvedic",
      "bestFor": "Immunity Kadha, Throat Soothing, Cough Relief",
      "storage": "Store in a cool, dry place in airtight containers away from moisture.",
      "foodType": "100% Vegetarian / Vegan"
    },
    "details": "Immunity and Throat Care Mix bundles the finest quality Ashwagandha Powder, Mulethi (Licorice) Powder, Cinnamon Sticks for your kitchen. All powders are stone-ground or naturally dried, free from artificial colours and preservatives. Packed airtight to preserve freshness and intense aroma.",
    "reviews": [
      {
        "name": "Uday U.",
        "rating": 5,
        "comment": "Great spice combo! Both products are very fresh and aromatic. The Immunity and Throat Care Mix combo is a kitchen essential.",
        "date": "2026-06-22"
      },
      {
        "name": "Vandana X.",
        "rating": 4.5,
        "comment": "Loved the Ashwagandha Powder in this pack. Perfect for Indian cooking. The powders are clean and pure.",
        "date": "2026-06-27"
      }
    ]
  },
  {
    "id": 369,
    "slug": "quick-creamy-tomato-soup-mix",
    "name": "Quick Creamy Tomato Soup Mix",
    "category": "combos",
    "unit": "Pack of 3 (100g each)",
    "price": 321,
    "mrp": 453,
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Quick Creamy Tomato Soup Mix — a premium curated pack of 3 essential spices & powders designed for authentic Indian and continental cooking.",
    "stock": 28,
    "rating": 4.7,
    "tags": [
      "combo",
      "spices",
      "powders",
      "3-product-combo"
    ],
    "comboIncludes": [
      {
        "name": "Tomato Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Potato Flakes",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Mint Powder",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (100g each)",
        "price": 321,
        "mrp": 453
      },
      {
        "unit": "Pack of 3 (200g each)",
        "price": 604,
        "mrp": 850
      },
      {
        "unit": "Pack of 3 (500g each)",
        "price": 1310,
        "mrp": 1943
      }
    ],
    "highlights": {
      "packType": "3-Product Combo",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (100g each)",
      "bulkAvailable": "Yes (500g)",
      "strategy": "Value Buy",
      "bestFor": "Creamy Soup, Tomato Curry, Quick Meals",
      "storage": "Store in a cool, dry place in airtight containers away from moisture.",
      "foodType": "100% Vegetarian / Vegan"
    },
    "details": "Quick Creamy Tomato Soup Mix bundles the finest quality Tomato Powder, Potato Flakes, Mint Powder for your kitchen. All powders are stone-ground or naturally dried, free from artificial colours and preservatives. Packed airtight to preserve freshness and intense aroma.",
    "reviews": [
      {
        "name": "Ramesh K.",
        "rating": 5,
        "comment": "Exactly what I needed for my daily cooking. Highly recommend! The Quick Creamy Tomato Soup Mix combo is a kitchen essential.",
        "date": "2026-06-26"
      },
      {
        "name": "Sunita M.",
        "rating": 4.5,
        "comment": "Loved the Tomato Powder in this pack. The spices are very authentic and enhance flavour beautifully.",
        "date": "2026-06-12"
      }
    ]
  },
  {
    "id": 370,
    "slug": "tandoori-marination-special",
    "name": "Tandoori Marination Special",
    "category": "combos",
    "unit": "Pack of 3 (100g each)",
    "price": 380,
    "mrp": 537,
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Tandoori Marination Special — a premium curated pack of 3 essential spices & powders designed for authentic Indian and continental cooking.",
    "stock": 34,
    "rating": 4.8,
    "tags": [
      "combo",
      "spices",
      "powders",
      "3-product-combo"
    ],
    "comboIncludes": [
      {
        "name": "Garlic Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Tomato Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Mint Powder",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (100g each)",
        "price": 380,
        "mrp": 537
      },
      {
        "unit": "Pack of 3 (200g each)",
        "price": 700,
        "mrp": 989
      },
      {
        "unit": "Pack of 3 (500g each)",
        "price": 1516,
        "mrp": 2256
      }
    ],
    "highlights": {
      "packType": "3-Product Combo",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (100g each)",
      "bulkAvailable": "Yes (500g)",
      "strategy": "Bestseller",
      "bestFor": "Tandoori Chicken, Kebabs, BBQ Marinades",
      "storage": "Store in a cool, dry place in airtight containers away from moisture.",
      "foodType": "100% Vegetarian / Vegan"
    },
    "details": "Tandoori Marination Special bundles the finest quality Garlic Powder, Tomato Powder, Mint Powder for your kitchen. All powders are stone-ground or naturally dried, free from artificial colours and preservatives. Packed airtight to preserve freshness and intense aroma.",
    "reviews": [
      {
        "name": "Mohan D.",
        "rating": 5,
        "comment": "Premium quality at a great price. Love this pack. The Tandoori Marination Special combo is a kitchen essential.",
        "date": "2026-06-10"
      },
      {
        "name": "Priti G.",
        "rating": 4.5,
        "comment": "Loved the Garlic Powder in this pack. Great spice combo! Both products are very fresh and aromatic.",
        "date": "2026-06-16"
      }
    ]
  },
  {
    "id": 371,
    "slug": "complete-gravy-base-pack",
    "name": "Complete Gravy Base Pack",
    "category": "combos",
    "unit": "Pack of 4 (100g each)",
    "price": 522,
    "mrp": 756,
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Complete Gravy Base Pack — a premium curated pack of 4 essential spices & powders designed for authentic Indian and continental cooking.",
    "stock": 29,
    "rating": 4.5,
    "tags": [
      "combo",
      "spices",
      "powders",
      "4-product-combo"
    ],
    "comboIncludes": [
      {
        "name": "Red Onion Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Garlic Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Ginger Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Tomato Powder",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 4 (100g each)",
        "price": 522,
        "mrp": 756
      },
      {
        "unit": "Pack of 4 (200g each)",
        "price": 960,
        "mrp": 1392
      },
      {
        "unit": "Pack of 4 (500g each)",
        "price": 2081,
        "mrp": 3176
      },
      {
        "unit": "Pack of 4 (1kg each)",
        "price": 3963,
        "mrp": 6048
      }
    ],
    "highlights": {
      "packType": "4-Product Combo",
      "totalProducts": "4 Packets",
      "recommendedSize": "Pack of 4 (100g each)",
      "bulkAvailable": "Yes (500g, 1kg)",
      "strategy": "Kitchen King",
      "bestFor": "All Indian Gravies, Restaurant Style Cooking",
      "storage": "Store in a cool, dry place in airtight containers away from moisture.",
      "foodType": "100% Vegetarian / Vegan"
    },
    "details": "Complete Gravy Base Pack bundles the finest quality Red Onion Powder, Garlic Powder, Ginger Powder, Tomato Powder for your kitchen. All powders are stone-ground or naturally dried, free from artificial colours and preservatives. Packed airtight to preserve freshness and intense aroma.",
    "reviews": [
      {
        "name": "Vikas R.",
        "rating": 5,
        "comment": "Perfect for Indian cooking. The powders are clean and pure. The Complete Gravy Base Pack combo is a kitchen essential.",
        "date": "2026-06-14"
      },
      {
        "name": "Lata B.",
        "rating": 4.5,
        "comment": "Loved the Red Onion Powder in this pack. Exactly what I needed for my daily cooking. Highly recommend!",
        "date": "2026-06-20"
      }
    ]
  },
  {
    "id": 372,
    "slug": "premium-superfood-wellness-kit",
    "name": "Premium Superfood Wellness Kit",
    "category": "combos",
    "unit": "Pack of 4 (100g each)",
    "price": 669,
    "mrp": 986,
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Premium Superfood Wellness Kit — a premium curated pack of 4 essential spices & powders designed for authentic Indian and continental cooking.",
    "stock": 42,
    "rating": 4.6,
    "tags": [
      "combo",
      "spices",
      "powders",
      "4-product-combo"
    ],
    "comboIncludes": [
      {
        "name": "Moringa Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Beetroot Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Ashwagandha Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Mulethi (Licorice) Powder",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 4 (100g each)",
        "price": 669,
        "mrp": 986
      },
      {
        "unit": "Pack of 4 (200g each)",
        "price": 1232,
        "mrp": 1815
      },
      {
        "unit": "Pack of 4 (500g each)",
        "price": 2670,
        "mrp": 4142
      }
    ],
    "highlights": {
      "packType": "4-Product Combo",
      "totalProducts": "4 Packets",
      "recommendedSize": "Pack of 4 (100g each)",
      "bulkAvailable": "Yes (500g)",
      "strategy": "Premium Wellness",
      "bestFor": "Complete Immunity, Daily Wellness Routine",
      "storage": "Store in a cool, dry place in airtight containers away from moisture.",
      "foodType": "100% Vegetarian / Vegan"
    },
    "details": "Premium Superfood Wellness Kit bundles the finest quality Moringa Powder, Beetroot Powder, Ashwagandha Powder, Mulethi (Licorice) Powder for your kitchen. All powders are stone-ground or naturally dried, free from artificial colours and preservatives. Packed airtight to preserve freshness and intense aroma.",
    "reviews": [
      {
        "name": "Yusuf A.",
        "rating": 5,
        "comment": "The spices are very authentic and enhance flavour beautifully. The Premium Superfood Wellness Kit combo is a kitchen essential.",
        "date": "2026-06-18"
      },
      {
        "name": "Meera V.",
        "rating": 4.5,
        "comment": "Loved the Moringa Powder in this pack. Premium quality at a great price. Love this pack.",
        "date": "2026-06-24"
      }
    ]
  },
  {
    "id": 373,
    "slug": "healthy-green-soup-and-smoothie-mix",
    "name": "Healthy Green Soup and Smoothie Mix",
    "category": "combos",
    "unit": "Pack of 4 (100g each)",
    "price": 546,
    "mrp": 816,
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Healthy Green Soup and Smoothie Mix — a premium curated pack of 4 essential spices & powders designed for authentic Indian and continental cooking.",
    "stock": 25,
    "rating": 4.7,
    "tags": [
      "combo",
      "spices",
      "powders",
      "4-product-combo"
    ],
    "comboIncludes": [
      {
        "name": "Moringa Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Beetroot Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Mint Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Green Chilli Powder",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 4 (100g each)",
        "price": 546,
        "mrp": 816
      },
      {
        "unit": "Pack of 4 (200g each)",
        "price": 1005,
        "mrp": 1503
      },
      {
        "unit": "Pack of 4 (500g each)",
        "price": 2179,
        "mrp": 3428
      }
    ],
    "highlights": {
      "packType": "4-Product Combo",
      "totalProducts": "4 Packets",
      "recommendedSize": "Pack of 4 (100g each)",
      "bulkAvailable": "Yes (500g)",
      "strategy": "Trending / Healthy",
      "bestFor": "Green Smoothies, Detox Soups, Juice Bars",
      "storage": "Store in a cool, dry place in airtight containers away from moisture.",
      "foodType": "100% Vegetarian / Vegan"
    },
    "details": "Healthy Green Soup and Smoothie Mix bundles the finest quality Moringa Powder, Beetroot Powder, Mint Powder, Green Chilli Powder for your kitchen. All powders are stone-ground or naturally dried, free from artificial colours and preservatives. Packed airtight to preserve freshness and intense aroma.",
    "reviews": [
      {
        "name": "Girish F.",
        "rating": 5,
        "comment": "Great spice combo! Both products are very fresh and aromatic. The Healthy Green Soup and Smoothie Mix combo is a kitchen essential.",
        "date": "2026-06-22"
      },
      {
        "name": "Smita Q.",
        "rating": 4.5,
        "comment": "Loved the Moringa Powder in this pack. Perfect for Indian cooking. The powders are clean and pure.",
        "date": "2026-06-28"
      }
    ]
  },
  {
    "id": 374,
    "slug": "instant-pav-bhaji-curry-base",
    "name": "Instant Pav Bhaji Curry Base",
    "category": "combos",
    "unit": "Pack of 4 (100g each)",
    "price": 457,
    "mrp": 662,
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Instant Pav Bhaji Curry Base — a premium curated pack of 4 essential spices & powders designed for authentic Indian and continental cooking.",
    "stock": 26,
    "rating": 4.4,
    "tags": [
      "combo",
      "spices",
      "powders",
      "4-product-combo"
    ],
    "comboIncludes": [
      {
        "name": "Tomato Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Potato Flakes",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Garlic Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Red Onion Powder",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "units": [
      {
        "unit": "Pack of 4 (100g each)",
        "price": 457,
        "mrp": 662
      },
      {
        "unit": "Pack of 4 (200g each)",
        "price": 852,
        "mrp": 1235
      },
      {
        "unit": "Pack of 4 (500g each)",
        "price": 1850,
        "mrp": 2821
      },
      {
        "unit": "Pack of 4 (1kg each)",
        "price": 3496,
        "mrp": 5334
      }
    ],
    "highlights": {
      "packType": "4-Product Combo",
      "totalProducts": "4 Packets",
      "recommendedSize": "Pack of 4 (100g each)",
      "bulkAvailable": "Yes (500g, 1kg)",
      "strategy": "Bestseller",
      "bestFor": "Pav Bhaji, Curry Base, Street Food Prep",
      "storage": "Store in a cool, dry place in airtight containers away from moisture.",
      "foodType": "100% Vegetarian / Vegan"
    },
    "details": "Instant Pav Bhaji Curry Base bundles the finest quality Tomato Powder, Potato Flakes, Garlic Powder, Red Onion Powder for your kitchen. All powders are stone-ground or naturally dried, free from artificial colours and preservatives. Packed airtight to preserve freshness and intense aroma.",
    "reviews": [
      {
        "name": "Naresh O.",
        "rating": 5,
        "comment": "Exactly what I needed for my daily cooking. Highly recommend! The Instant Pav Bhaji Curry Base combo is a kitchen essential.",
        "date": "2026-06-26"
      },
      {
        "name": "Shruti I.",
        "rating": 4.5,
        "comment": "Loved the Tomato Powder in this pack. The spices are very authentic and enhance flavour beautifully.",
        "date": "2026-06-13"
      }
    ]
  },
  {
    "id": 375,
    "slug": "daily-cooking-dhamaka",
    "name": "Daily Cooking Dhamaka",
    "category": "combos",
    "unit": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
    "price": 308,
    "mrp": 567,
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Daily Cooking Dhamaka — a premium curated pack of 3 essential spices & powders designed for authentic Indian and continental cooking.",
    "stock": 32,
    "rating": 4.2,
    "tags": [
      "combo",
      "spices",
      "powders",
      "buy-2-get-1-free"
    ],
    "comboIncludes": [
      {
        "name": "Red Onion Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Garlic Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Ginger Powder",
        "qty": "1 unit",
        "isFree": true
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
        "price": 308,
        "mrp": 567
      },
      {
        "unit": "Pack of 3 (Buy 2 Get 1 Free - 200g)",
        "price": 539,
        "mrp": 1044
      }
    ],
    "highlights": {
      "packType": "Buy 2 Get 1 Free",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
      "bulkAvailable": "Yes (200g)",
      "strategy": "Super Saver",
      "bestFor": "Daily Cooking, Gravy Prep, Tadka",
      "storage": "Store in a cool, dry place in airtight containers away from moisture.",
      "foodType": "100% Vegetarian / Vegan"
    },
    "details": "Daily Cooking Dhamaka bundles the finest quality Red Onion Powder, Garlic Powder, Ginger Powder for your kitchen. All powders are stone-ground or naturally dried, free from artificial colours and preservatives. Packed airtight to preserve freshness and intense aroma.",
    "reviews": [
      {
        "name": "Arvind Y.",
        "rating": 5,
        "comment": "Premium quality at a great price. Love this pack. The Daily Cooking Dhamaka combo is a kitchen essential.",
        "date": "2026-06-10"
      },
      {
        "name": "Shobha Z.",
        "rating": 4.5,
        "comment": "Loved the Red Onion Powder in this pack. Great spice combo! Both products are very fresh and aromatic.",
        "date": "2026-06-17"
      }
    ]
  },
  {
    "id": 376,
    "slug": "fast-food-special-offer",
    "name": "Fast Food Special Offer",
    "category": "combos",
    "unit": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
    "price": 337,
    "mrp": 642,
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Fast Food Special Offer — a premium curated pack of 3 essential spices & powders designed for authentic Indian and continental cooking.",
    "stock": 21,
    "rating": 4.8,
    "tags": [
      "combo",
      "spices",
      "powders",
      "buy-2-get-1-free"
    ],
    "comboIncludes": [
      {
        "name": "Pizza Pasta Seasoning",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Oregano",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Peri Peri Masala",
        "qty": "1 unit",
        "isFree": true
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
        "price": 337,
        "mrp": 642
      },
      {
        "unit": "Pack of 3 (Buy 2 Get 1 Free - 200g)",
        "price": 602,
        "mrp": 1177
      }
    ],
    "highlights": {
      "packType": "Buy 2 Get 1 Free",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
      "bulkAvailable": "Yes (200g)",
      "strategy": "Snack Deal",
      "bestFor": "Fast Food Seasoning, Snacks, Cafes",
      "storage": "Store in a cool, dry place in airtight containers away from moisture.",
      "foodType": "100% Vegetarian / Vegan"
    },
    "details": "Fast Food Special Offer bundles the finest quality Pizza Pasta Seasoning, Oregano, Peri Peri Masala for your kitchen. All powders are stone-ground or naturally dried, free from artificial colours and preservatives. Packed airtight to preserve freshness and intense aroma.",
    "reviews": [
      {
        "name": "Anil P.",
        "rating": 5,
        "comment": "Perfect for Indian cooking. The powders are clean and pure. The Fast Food Special Offer combo is a kitchen essential.",
        "date": "2026-06-14"
      },
      {
        "name": "Kavita S.",
        "rating": 4.5,
        "comment": "Loved the Pizza Pasta Seasoning in this pack. Exactly what I needed for my daily cooking. Highly recommend!",
        "date": "2026-06-21"
      }
    ]
  },
  {
    "id": 377,
    "slug": "herbal-wellness-gift",
    "name": "Herbal Wellness Gift",
    "category": "combos",
    "unit": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
    "price": 428,
    "mrp": 757,
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Herbal Wellness Gift — a premium curated pack of 3 essential spices & powders designed for authentic Indian and continental cooking.",
    "stock": 44,
    "rating": 4.3,
    "tags": [
      "combo",
      "spices",
      "powders",
      "buy-2-get-1-free"
    ],
    "comboIncludes": [
      {
        "name": "Ashwagandha Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Mulethi (Licorice) Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Moringa Powder",
        "qty": "1 unit",
        "isFree": true
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
        "price": 428,
        "mrp": 757
      },
      {
        "unit": "Pack of 3 (Buy 2 Get 1 Free - 200g)",
        "price": 749,
        "mrp": 1393
      }
    ],
    "highlights": {
      "packType": "Buy 2 Get 1 Free",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
      "bulkAvailable": "Yes (200g)",
      "strategy": "Wellness Deal",
      "bestFor": "Immunity Boosting, Herbal Kadha",
      "storage": "Store in a cool, dry place in airtight containers away from moisture.",
      "foodType": "100% Vegetarian / Vegan"
    },
    "details": "Herbal Wellness Gift bundles the finest quality Ashwagandha Powder, Mulethi (Licorice) Powder, Moringa Powder for your kitchen. All powders are stone-ground or naturally dried, free from artificial colours and preservatives. Packed airtight to preserve freshness and intense aroma.",
    "reviews": [
      {
        "name": "Suresh J.",
        "rating": 5,
        "comment": "The spices are very authentic and enhance flavour beautifully. The Herbal Wellness Gift combo is a kitchen essential.",
        "date": "2026-06-18"
      },
      {
        "name": "Nandita H.",
        "rating": 4.5,
        "comment": "Loved the Ashwagandha Powder in this pack. Premium quality at a great price. Love this pack.",
        "date": "2026-06-25"
      }
    ]
  },
  {
    "id": 378,
    "slug": "instant-soup-and-dip-deal",
    "name": "Instant Soup and Dip Deal",
    "category": "combos",
    "unit": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
    "price": 249,
    "mrp": 453,
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Instant Soup and Dip Deal — a premium curated pack of 3 essential spices & powders designed for authentic Indian and continental cooking.",
    "stock": 44,
    "rating": 4.8,
    "tags": [
      "combo",
      "spices",
      "powders",
      "buy-2-get-1-free"
    ],
    "comboIncludes": [
      {
        "name": "Tomato Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Potato Flakes",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Mint Powder",
        "qty": "1 unit",
        "isFree": true
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
        "price": 249,
        "mrp": 453
      },
      {
        "unit": "Pack of 3 (Buy 2 Get 1 Free - 200g)",
        "price": 448,
        "mrp": 850
      }
    ],
    "highlights": {
      "packType": "Buy 2 Get 1 Free",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
      "bulkAvailable": "Yes (200g)",
      "strategy": "Value Deal",
      "bestFor": "Instant Soups, Dips, Quick Snacks",
      "storage": "Store in a cool, dry place in airtight containers away from moisture.",
      "foodType": "100% Vegetarian / Vegan"
    },
    "details": "Instant Soup and Dip Deal bundles the finest quality Tomato Powder, Potato Flakes, Mint Powder for your kitchen. All powders are stone-ground or naturally dried, free from artificial colours and preservatives. Packed airtight to preserve freshness and intense aroma.",
    "reviews": [
      {
        "name": "Deepak C.",
        "rating": 5,
        "comment": "Great spice combo! Both products are very fresh and aromatic. The Instant Soup and Dip Deal combo is a kitchen essential.",
        "date": "2026-06-22"
      },
      {
        "name": "Asha T.",
        "rating": 4.5,
        "comment": "Loved the Tomato Powder in this pack. Perfect for Indian cooking. The powders are clean and pure.",
        "date": "2026-06-29"
      }
    ]
  },
  {
    "id": 379,
    "slug": "cafe-freebie-pack",
    "name": "Cafe Freebie Pack",
    "category": "combos",
    "unit": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
    "price": 338,
    "mrp": 617,
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Cafe Freebie Pack — a premium curated pack of 3 essential spices & powders designed for authentic Indian and continental cooking.",
    "stock": 31,
    "rating": 4.8,
    "tags": [
      "combo",
      "spices",
      "powders",
      "buy-2-get-1-free"
    ],
    "comboIncludes": [
      {
        "name": "Pizza Pasta Seasoning",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Peri Peri Masala",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Red Chilli Flakes",
        "qty": "1 unit",
        "isFree": true
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
        "price": 338,
        "mrp": 617
      },
      {
        "unit": "Pack of 3 (Buy 2 Get 1 Free - 200g)",
        "price": 604,
        "mrp": 1131
      }
    ],
    "highlights": {
      "packType": "Buy 2 Get 1 Free",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
      "bulkAvailable": "Yes (200g)",
      "strategy": "Cafe Special",
      "bestFor": "Cafe & Restaurant Seasoning",
      "storage": "Store in a cool, dry place in airtight containers away from moisture.",
      "foodType": "100% Vegetarian / Vegan"
    },
    "details": "Cafe Freebie Pack bundles the finest quality Pizza Pasta Seasoning, Peri Peri Masala, Red Chilli Flakes for your kitchen. All powders are stone-ground or naturally dried, free from artificial colours and preservatives. Packed airtight to preserve freshness and intense aroma.",
    "reviews": [
      {
        "name": "Harish L.",
        "rating": 5,
        "comment": "Exactly what I needed for my daily cooking. Highly recommend! The Cafe Freebie Pack combo is a kitchen essential.",
        "date": "2026-06-26"
      },
      {
        "name": "Pallavi N.",
        "rating": 4.5,
        "comment": "Loved the Pizza Pasta Seasoning in this pack. The spices are very authentic and enhance flavour beautifully.",
        "date": "2026-06-14"
      }
    ]
  },
  {
    "id": 380,
    "slug": "nutri-glow-wellness-offer",
    "name": "Nutri-Glow Wellness Offer",
    "category": "combos",
    "unit": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
    "price": 388,
    "mrp": 637,
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "Nutri-Glow Wellness Offer — a premium curated pack of 3 essential spices & powders designed for authentic Indian and continental cooking.",
    "stock": 21,
    "rating": 4.8,
    "tags": [
      "combo",
      "spices",
      "powders",
      "buy-2-get-1-free"
    ],
    "comboIncludes": [
      {
        "name": "Beetroot Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Moringa Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Mint Powder",
        "qty": "1 unit",
        "isFree": true
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
        "price": 388,
        "mrp": 637
      },
      {
        "unit": "Pack of 3 (Buy 2 Get 1 Free - 200g)",
        "price": 678,
        "mrp": 1173
      }
    ],
    "highlights": {
      "packType": "Buy 2 Get 1 Free",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
      "bulkAvailable": "Yes (200g)",
      "strategy": "Wellness Saver",
      "bestFor": "Detox, Skin Glow, Immunity",
      "storage": "Store in a cool, dry place in airtight containers away from moisture.",
      "foodType": "100% Vegetarian / Vegan"
    },
    "details": "Nutri-Glow Wellness Offer bundles the finest quality Beetroot Powder, Moringa Powder, Mint Powder for your kitchen. All powders are stone-ground or naturally dried, free from artificial colours and preservatives. Packed airtight to preserve freshness and intense aroma.",
    "reviews": [
      {
        "name": "Bharat E.",
        "rating": 5,
        "comment": "Premium quality at a great price. Love this pack. The Nutri-Glow Wellness Offer combo is a kitchen essential.",
        "date": "2026-06-10"
      },
      {
        "name": "Rekha W.",
        "rating": 4.5,
        "comment": "Loved the Beetroot Powder in this pack. Great spice combo! Both products are very fresh and aromatic.",
        "date": "2026-06-18"
      }
    ]
  },
  {
    "id": 381,
    "slug": "north-indian-tadka-special",
    "name": "North Indian Tadka Special",
    "category": "combos",
    "unit": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
    "price": 328,
    "mrp": 557,
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    ],
    "description": "North Indian Tadka Special — a premium curated pack of 3 essential spices & powders designed for authentic Indian and continental cooking.",
    "stock": 23,
    "rating": 4.7,
    "tags": [
      "combo",
      "spices",
      "powders",
      "buy-2-get-1-free"
    ],
    "comboIncludes": [
      {
        "name": "Garlic Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Ginger Powder",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "White Onion Powder",
        "qty": "1 unit",
        "isFree": true
      }
    ],
    "units": [
      {
        "unit": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
        "price": 328,
        "mrp": 557
      },
      {
        "unit": "Pack of 3 (Buy 2 Get 1 Free - 200g)",
        "price": 574,
        "mrp": 1025
      }
    ],
    "highlights": {
      "packType": "Buy 2 Get 1 Free",
      "totalProducts": "3 Packets",
      "recommendedSize": "Pack of 3 (Buy 2 Get 1 Free - 100g)",
      "bulkAvailable": "Yes (200g)",
      "strategy": "Regional Special",
      "bestFor": "North Indian Dal, Sabzi, Tadka",
      "storage": "Store in a cool, dry place in airtight containers away from moisture.",
      "foodType": "100% Vegetarian / Vegan"
    },
    "details": "North Indian Tadka Special bundles the finest quality Garlic Powder, Ginger Powder, White Onion Powder for your kitchen. All powders are stone-ground or naturally dried, free from artificial colours and preservatives. Packed airtight to preserve freshness and intense aroma.",
    "reviews": [
      {
        "name": "Uday U.",
        "rating": 5,
        "comment": "Perfect for Indian cooking. The powders are clean and pure. The North Indian Tadka Special combo is a kitchen essential.",
        "date": "2026-06-14"
      },
      {
        "name": "Vandana X.",
        "rating": 4.5,
        "comment": "Loved the Garlic Powder in this pack. Exactly what I needed for my daily cooking. Highly recommend!",
        "date": "2026-06-22"
      }
    ]
  }
];

// ---------- 3. HELPER FUNCTIONS ----------
export function getAllProducts() { return products; }

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}

export function getProductsByCategory(categoryId) {
  if (!categoryId || categoryId === "all") return products;
  return products.filter((p) => p.category === categoryId);
}

export function searchProducts(query) {
  const q = query.trim().toLowerCase();
  if (!q) return products;
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.tags?.some((t) => t.toLowerCase().includes(q))
  );
}

export function getCategoryName(categoryId) {
  return categories.find((c) => c.id === categoryId)?.name || "Other";
}

export function getTopSellers() {
  return products.filter((p) => p.rating >= 4.5);
}
