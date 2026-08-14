// products.js
// 🔹 SINGLE FILE for all product data — 132 products total from Excel sheet 'All Products' using official Cloudflare R2 images.

// ---------- 1. CATEGORIES ----------
export const categories = [
  {
    "id": "powders",
    "slug": "powders",
    "name": "Spice Powders",
    "image": "https://i.pinimg.com/736x/65/ae/dd/65aedd56ac63e9b98194b9f7c0bd0d74.jpg"
  },
  {
    "id": "seasoning",
    "slug": "seasoning",
    "name": "Seasoning & Herbs",
    "image": "https://i.pinimg.com/736x/b8/9c/8b/b89c8bbaf5a4db2b4fe13ca26e80b40c.jpg"
  },
  {
    "id": "seeds",
    "slug": "seeds",
    "name": "Seeds",
    "image": "https://i.pinimg.com/736x/b6/73/20/b67320741f3f44ab852a7749116af875.jpg"
  },
  {
    "id": "dryfruits",
    "slug": "dryfruits",
    "name": "Dry Fruits & Nuts",
    "image": "https://i.pinimg.com/736x/84/67/1a/84671af313c0c46f79f4757d8c62674e.jpg"
  },
  {
    "id": "wellness",
    "slug": "wellness",
    "name": "Herbal & Wellness",
    "image": "https://i.pinimg.com/1200x/1f/d7/59/1fd759d27f9098bc2fc7847a634c5e2a.jpg"
  },
  {
    "id": "combos",
    "slug": "combos",
    "name": "Combo Packs",
    "image": "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=180&h=180&q=80"
  },
  {
    "id": "bulk",
    "slug": "bulk",
    "name": "Bulk Products",
    "image": "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?auto=format&fit=crop&w=180&h=180&q=80"
  }
];

// ---------- 2. PRODUCTS ----------
export const products = [
  {
    "id": 1,
    "slug": "red-onion-powder",
    "name": "Red Onion Powder",
    "category": "powders",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "50g",
    "price": 75,
    "mrp": 149,
    "stock": 150,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "powders",
      "powder",
      "newlyin"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/456d70bb-3eb0-49d3-a2c3-debbfbd243e3.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/456d70bb-3eb0-49d3-a2c3-debbfbd243e3.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/8a1b2311-f7ac-4a9d-b13a-a7403ce2cf2b.jpg",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/5363dbc6-ec27-4ca0-ab21-45cf095971f0.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place in an airtight container.",
      "origin": "India",
      "form": "Powder",
      "ingredients": "100% Pure Red Onion Powder",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "50g / 100g / 200g options"
    },
    "description": "Premium quality Red Onion Powder sourced fresh and packaged hygienically to preserve intense aroma, taste and active properties.",
    "shopBy": "newlyIn",
    "units": [
      {
        "unit": "50g",
        "price": 75,
        "mrp": 149,
        "package": "Pouch"
      },
      {
        "unit": "100g",
        "price": 99,
        "mrp": 199,
        "package": "Pouch"
      },
      {
        "unit": "200g",
        "price": 189,
        "mrp": 379,
        "package": "Jar"
      }
    ]
  },
  {
    "id": 2,
    "slug": "white-onion-powder",
    "name": "White Onion Powder",
    "category": "powders",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "50g",
    "price": 75,
    "mrp": 149,
    "stock": 150,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "powders",
      "powder",
      "valuebuys"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/08bba875-d3a4-45a5-aac3-9ee1c65d960c.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/08bba875-d3a4-45a5-aac3-9ee1c65d960c.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/4844dd17-5415-4206-b72f-2f79c717373d.jpg"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place in an airtight container.",
      "origin": "India",
      "form": "Powder",
      "ingredients": "100% Pure White Onion Powder",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "50g / 100g / 200g options"
    },
    "description": "Premium quality White Onion Powder sourced fresh and packaged hygienically to preserve intense aroma, taste and active properties.",
    "shopBy": "valueBuys",
    "units": [
      {
        "unit": "50g",
        "price": 75,
        "mrp": 149,
        "package": "Pouch"
      },
      {
        "unit": "100g",
        "price": 99,
        "mrp": 199,
        "package": "Pouch"
      },
      {
        "unit": "200g",
        "price": 189,
        "mrp": 379,
        "package": "Jar"
      }
    ]
  },
  {
    "id": 3,
    "slug": "garlic-powder",
    "name": "Garlic Powder",
    "category": "powders",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "50g",
    "price": 75,
    "mrp": 149,
    "stock": 150,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "powders",
      "powder",
      "trending"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/457bb7d1-e10a-4bcd-9224-7999b6fb7303.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/457bb7d1-e10a-4bcd-9224-7999b6fb7303.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/2a5dc27f-fef8-4d9b-93e6-2ab93565919a.jpg"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place in an airtight container.",
      "origin": "India",
      "form": "Powder",
      "ingredients": "100% Pure Garlic Powder",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "50g / 100g / 200g options"
    },
    "description": "Premium quality Garlic Powder sourced fresh and packaged hygienically to preserve intense aroma, taste and active properties.",
    "shopBy": "trending",
    "units": [
      {
        "unit": "50g",
        "price": 75,
        "mrp": 149,
        "package": "Pouch"
      },
      {
        "unit": "100g",
        "price": 99,
        "mrp": 199,
        "package": "Pouch"
      },
      {
        "unit": "200g",
        "price": 189,
        "mrp": 379,
        "package": "Jar"
      }
    ]
  },
  {
    "id": 4,
    "slug": "ginger-powder",
    "name": "Ginger Powder",
    "category": "powders",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "50g",
    "price": 75,
    "mrp": 149,
    "stock": 150,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "powders",
      "powder",
      "bestseller"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/df3f91c8-ecd9-44ce-a399-3a73b294a1fa.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/df3f91c8-ecd9-44ce-a399-3a73b294a1fa.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/a0117908-8bcc-4a7e-851c-d7e1193a3121.jpg"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place in an airtight container.",
      "origin": "India",
      "form": "Powder",
      "ingredients": "100% Pure Ginger Powder",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "50g / 100g / 200g options"
    },
    "description": "Premium quality Ginger Powder sourced fresh and packaged hygienically to preserve intense aroma, taste and active properties.",
    "shopBy": "bestseller",
    "units": [
      {
        "unit": "50g",
        "price": 75,
        "mrp": 149,
        "package": "Pouch"
      },
      {
        "unit": "100g",
        "price": 99,
        "mrp": 199,
        "package": "Pouch"
      },
      {
        "unit": "200g",
        "price": 189,
        "mrp": 379,
        "package": "Jar"
      }
    ]
  },
  {
    "id": 5,
    "slug": "tomato-powder",
    "name": "Tomato Powder",
    "category": "powders",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "100g",
    "price": 99,
    "mrp": 199,
    "stock": 150,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "powders",
      "powder",
      "newlyin"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/f6ef4db2-3bad-460e-9e62-caf89ef59696.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/f6ef4db2-3bad-460e-9e62-caf89ef59696.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/93596de5-4c2c-40fb-a4e7-ae6b8a1420f2.jpg"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place in an airtight container.",
      "origin": "India",
      "form": "Powder",
      "ingredients": "100% Pure Tomato Powder",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "100g / 200g options"
    },
    "description": "Premium quality Tomato Powder sourced fresh and packaged hygienically to preserve intense aroma, taste and active properties.",
    "shopBy": "newlyIn",
    "units": [
      {
        "unit": "100g",
        "price": 99,
        "mrp": 199,
        "package": "Pouch"
      },
      {
        "unit": "200g",
        "price": 195,
        "mrp": 389,
        "package": "Jar"
      }
    ]
  },
  {
    "id": 6,
    "slug": "potato-flakes",
    "name": "Potato Flakes",
    "category": "seasoning",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "100g",
    "price": 79,
    "mrp": 159,
    "stock": 150,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "seasoning",
      "flakes",
      "valuebuys"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/5c34a4aa-eff5-4f82-a246-afc38a8c5715.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/5c34a4aa-eff5-4f82-a246-afc38a8c5715.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/89752dec-0d5e-417a-bc0d-daa7b49b1c28.jpg"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place in an airtight container.",
      "origin": "India",
      "form": "Flakes",
      "ingredients": "100% Pure Potato Flakes",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "100g / 200g / 500g options"
    },
    "description": "Premium quality Potato Flakes sourced fresh and packaged hygienically to preserve intense aroma, taste and active properties.",
    "shopBy": "valueBuys",
    "units": [
      {
        "unit": "100g",
        "price": 79,
        "mrp": 159,
        "package": "Pouch"
      },
      {
        "unit": "200g",
        "price": 149,
        "mrp": 299,
        "package": "Jar"
      },
      {
        "unit": "500g",
        "price": 335,
        "mrp": 669,
        "package": "Jar"
      }
    ]
  },
  {
    "id": 7,
    "slug": "mint-powder",
    "name": "Mint Powder",
    "category": "powders",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "50g",
    "price": 75,
    "mrp": 149,
    "stock": 150,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "powders",
      "powder",
      "trending"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/0b8876ef-e3eb-4968-bf6d-ec854fae46ed.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/0b8876ef-e3eb-4968-bf6d-ec854fae46ed.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/674fd8b3-0465-40a4-b102-d3ad8a3b58da.jpg"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place in an airtight container.",
      "origin": "India",
      "form": "Powder",
      "ingredients": "100% Pure Mint Powder",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "50g / 100g options"
    },
    "description": "Premium quality Mint Powder sourced fresh and packaged hygienically to preserve intense aroma, taste and active properties.",
    "shopBy": "trending",
    "units": [
      {
        "unit": "50g",
        "price": 75,
        "mrp": 149,
        "package": "Pouch"
      },
      {
        "unit": "100g",
        "price": 99,
        "mrp": 199,
        "package": "Jar"
      }
    ]
  },
  {
    "id": 8,
    "slug": "green-chilli-powder",
    "name": "Green Chilli Powder",
    "category": "powders",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "50g",
    "price": 75,
    "mrp": 149,
    "stock": 150,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "powders",
      "powder",
      "bestseller"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/3c04973e-187c-47e7-99af-c0fe2def4b2c.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/3c04973e-187c-47e7-99af-c0fe2def4b2c.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/53307cf4-30ed-4c2f-946a-44e6dd7d4387.jpg",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/eaf4a9e1-7eae-47b3-acd9-f7398c0b27ef.jpg"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place in an airtight container.",
      "origin": "India",
      "form": "Powder",
      "ingredients": "100% Pure Green Chilli Powder",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "50g / 100g / 200g options"
    },
    "description": "Premium quality Green Chilli Powder sourced fresh and packaged hygienically to preserve intense aroma, taste and active properties.",
    "shopBy": "bestseller",
    "units": [
      {
        "unit": "50g",
        "price": 75,
        "mrp": 149,
        "package": "Pouch"
      },
      {
        "unit": "100g",
        "price": 99,
        "mrp": 199,
        "package": "Pouch"
      },
      {
        "unit": "200g",
        "price": 189,
        "mrp": 379,
        "package": "Jar"
      }
    ]
  },
  {
    "id": 9,
    "slug": "oregano",
    "name": "Oregano",
    "category": "seasoning",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "50g",
    "price": 79,
    "mrp": 159,
    "stock": 150,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "seasoning",
      "herb",
      "newlyin"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/456d70bb-3eb0-49d3-a2c3-debbfbd243e3.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/456d70bb-3eb0-49d3-a2c3-debbfbd243e3.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place in an airtight container.",
      "origin": "India",
      "form": "Herb",
      "ingredients": "100% Pure Oregano",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "50g / 100g options"
    },
    "description": "Premium quality Oregano sourced fresh and packaged hygienically to preserve intense aroma, taste and active properties.",
    "shopBy": "newlyIn",
    "units": [
      {
        "unit": "50g",
        "price": 79,
        "mrp": 159,
        "package": "Pouch"
      },
      {
        "unit": "100g",
        "price": 105,
        "mrp": 209,
        "package": "Jar"
      }
    ]
  },
  {
    "id": 10,
    "slug": "oregano-seasoning",
    "name": "Oregano Seasoning",
    "category": "seasoning",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "100g",
    "price": 149,
    "mrp": 229,
    "stock": 150,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "seasoning",
      "seasoning",
      "valuebuys"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/f4da849d-15b4-4d1f-b427-c2c8527278d5.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/f4da849d-15b4-4d1f-b427-c2c8527278d5.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/90da5a9a-e1f1-44eb-b8c6-5bbdc0d6f5ab.jpg"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place in an airtight container.",
      "origin": "India",
      "form": "Seasoning",
      "ingredients": "100% Pure Oregano Seasoning",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "100g / 200g options"
    },
    "description": "Premium quality Oregano Seasoning sourced fresh and packaged hygienically to preserve intense aroma, taste and active properties.",
    "shopBy": "valueBuys",
    "units": [
      {
        "unit": "100g",
        "price": 149,
        "mrp": 229,
        "package": "Pouch"
      },
      {
        "unit": "200g",
        "price": 215,
        "mrp": 429,
        "package": "Jar"
      }
    ]
  },
  {
    "id": 11,
    "slug": "pizza-pasta-masala",
    "name": "Pizza Pasta Masala",
    "category": "seasoning",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "50g",
    "price": 89,
    "mrp": 179,
    "stock": 150,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "seasoning",
      "masala mix",
      "trending"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/0f9a417b-0a71-42f8-884d-ee83ded678e1.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/0f9a417b-0a71-42f8-884d-ee83ded678e1.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/4290e140-7d8e-4eb1-a344-bdf67829f8ca.jpg"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place in an airtight container.",
      "origin": "India",
      "form": "Masala Mix",
      "ingredients": "100% Pure Pizza Pasta Masala",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "50g / 100g / 200g options"
    },
    "description": "Premium quality Pizza Pasta Masala sourced fresh and packaged hygienically to preserve intense aroma, taste and active properties.",
    "shopBy": "trending",
    "units": [
      {
        "unit": "50g",
        "price": 89,
        "mrp": 179,
        "package": "Pouch"
      },
      {
        "unit": "100g",
        "price": 149,
        "mrp": 229,
        "package": "Pouch"
      },
      {
        "unit": "200g",
        "price": 215,
        "mrp": 429,
        "package": "Jar"
      }
    ]
  },
  {
    "id": 12,
    "slug": "moringa-powder",
    "name": "Moringa Powder",
    "category": "powders",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "200g",
    "price": 155,
    "mrp": 309,
    "stock": 150,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "powders",
      "wellness powder",
      "bestseller"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/456d70bb-3eb0-49d3-a2c3-debbfbd243e3.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/456d70bb-3eb0-49d3-a2c3-debbfbd243e3.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place in an airtight container.",
      "origin": "India",
      "form": "Wellness Powder",
      "ingredients": "100% Pure Moringa Powder",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "200g options"
    },
    "description": "Premium quality Moringa Powder sourced fresh and packaged hygienically to preserve intense aroma, taste and active properties.",
    "shopBy": "bestseller",
    "units": [
      {
        "unit": "200g",
        "price": 155,
        "mrp": 309,
        "package": "Jar"
      }
    ]
  },
  {
    "id": 13,
    "slug": "beetroot-powder",
    "name": "Beetroot Powder",
    "category": "powders",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "100g",
    "price": 99,
    "mrp": 199,
    "stock": 150,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "powders",
      "wellness powder",
      "newlyin"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/b338e9ae-49af-4598-8be7-8b61de5d97dd.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/b338e9ae-49af-4598-8be7-8b61de5d97dd.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/55cbbba4-3ce6-40e3-a631-273da1222351.jpg"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place in an airtight container.",
      "origin": "India",
      "form": "Wellness Powder",
      "ingredients": "100% Pure Beetroot Powder",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "100g / 200g options"
    },
    "description": "Premium quality Beetroot Powder sourced fresh and packaged hygienically to preserve intense aroma, taste and active properties.",
    "shopBy": "newlyIn",
    "units": [
      {
        "unit": "100g",
        "price": 99,
        "mrp": 199,
        "package": "Pouch"
      },
      {
        "unit": "200g",
        "price": 149,
        "mrp": 229,
        "package": "Jar"
      }
    ]
  },
  {
    "id": 14,
    "slug": "red-chilli-flakes",
    "name": "Red Chilli Flakes",
    "category": "seasoning",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "50g",
    "price": 75,
    "mrp": 149,
    "stock": 150,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "seasoning",
      "flakes",
      "valuebuys"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/6598ac82-021d-4309-b629-b6eced1843a2.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/6598ac82-021d-4309-b629-b6eced1843a2.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/2dc83499-cf56-406b-8673-41d19edcfc58.jpg"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place in an airtight container.",
      "origin": "India",
      "form": "Flakes",
      "ingredients": "100% Pure Red Chilli Flakes",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "50g / 100g / 200g options"
    },
    "description": "Premium quality Red Chilli Flakes sourced fresh and packaged hygienically to preserve intense aroma, taste and active properties.",
    "shopBy": "valueBuys",
    "units": [
      {
        "unit": "50g",
        "price": 75,
        "mrp": 149,
        "package": "Pouch"
      },
      {
        "unit": "100g",
        "price": 99,
        "mrp": 199,
        "package": "Pouch"
      },
      {
        "unit": "200g",
        "price": 189,
        "mrp": 379,
        "package": "Jar"
      }
    ]
  },
  {
    "id": 15,
    "slug": "peri-peri-masala",
    "name": "Peri-Peri Masala",
    "category": "seasoning",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "50g",
    "price": 75,
    "mrp": 149,
    "stock": 150,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "seasoning",
      "masala mix",
      "trending"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/76d75845-e7eb-4bb3-9879-235505ee7dd7.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/76d75845-e7eb-4bb3-9879-235505ee7dd7.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/72978bd3-5e06-4e5c-98f9-5d08a9814ca5.jpg"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place in an airtight container.",
      "origin": "India",
      "form": "Masala Mix",
      "ingredients": "100% Pure Peri-Peri Masala",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "50g / 100g / 200g options"
    },
    "description": "Premium quality Peri-Peri Masala sourced fresh and packaged hygienically to preserve intense aroma, taste and active properties.",
    "shopBy": "trending",
    "units": [
      {
        "unit": "50g",
        "price": 75,
        "mrp": 149,
        "package": "Pouch"
      },
      {
        "unit": "100g",
        "price": 99,
        "mrp": 199,
        "package": "Pouch"
      },
      {
        "unit": "200g",
        "price": 189,
        "mrp": 379,
        "package": "Jar"
      }
    ]
  },
  {
    "id": 16,
    "slug": "chia-seeds",
    "name": "Chia Seeds",
    "category": "seeds",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "200g",
    "price": 105,
    "mrp": 209,
    "stock": 150,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "seeds",
      "seeds",
      "bestseller"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/d48424b7-903f-48fd-804e-f005c85ddd96.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/d48424b7-903f-48fd-804e-f005c85ddd96.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/75d69c7b-a818-4636-ab9f-555e7f9f64ba.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place in an airtight container.",
      "origin": "India",
      "form": "Seeds",
      "ingredients": "100% Pure Chia Seeds",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "200g options"
    },
    "description": "Premium quality Chia Seeds sourced fresh and packaged hygienically to preserve intense aroma, taste and active properties.",
    "shopBy": "bestseller",
    "units": [
      {
        "unit": "200g",
        "price": 105,
        "mrp": 209,
        "package": "Jar"
      }
    ]
  },
  {
    "id": 17,
    "slug": "basil-seeds",
    "name": "Basil Seeds",
    "category": "seeds",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "200g",
    "price": 120,
    "mrp": 240,
    "stock": 150,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "seeds",
      "seeds",
      "newlyin"
    ],
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place in an airtight container.",
      "origin": "India",
      "form": "Seeds",
      "ingredients": "100% Pure Basil Seeds",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "200g options"
    },
    "description": "Premium quality Basil Seeds sourced fresh and packaged hygienically to preserve intense aroma, taste and active properties.",
    "shopBy": "newlyIn",
    "units": [
      {
        "unit": "200g",
        "price": 120,
        "mrp": 240,
        "package": "Jar"
      }
    ]
  },
  {
    "id": 18,
    "slug": "watermelon-seeds",
    "name": "Watermelon Seeds",
    "category": "seeds",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "200g",
    "price": 160,
    "mrp": 320,
    "stock": 150,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "seeds",
      "seeds",
      "valuebuys"
    ],
    "image": "https://i.pinimg.com/1200x/ef/5e/2c/ef5e2c5b376defcc29feb832b0071101.jpg",
    "images": [
      "https://i.pinimg.com/1200x/ef/5e/2c/ef5e2c5b376defcc29feb832b0071101.jpg"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place in an airtight container.",
      "origin": "India",
      "form": "Seeds",
      "ingredients": "100% Pure Watermelon Seeds",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "200g options"
    },
    "description": "Premium quality Watermelon Seeds sourced fresh and packaged hygienically to preserve intense aroma, taste and active properties.",
    "shopBy": "valueBuys",
    "units": [
      {
        "unit": "200g",
        "price": 160,
        "mrp": 320,
        "package": "Jar"
      }
    ]
  },
  {
    "id": 19,
    "slug": "pumpkin-seeds-pampkeen",
    "name": "Pumpkin Seeds (Pampkeen)",
    "category": "seeds",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "200g",
    "price": 119,
    "mrp": 239,
    "stock": 150,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "seeds",
      "seeds",
      "trending"
    ],
    "image": "https://i.pinimg.com/1200x/6e/f2/b4/6ef2b4bb98bc7ddfc76ab99a776752f8.jpg",
    "images": [
      "https://i.pinimg.com/1200x/6e/f2/b4/6ef2b4bb98bc7ddfc76ab99a776752f8.jpg",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/75d69c7b-a818-4636-ab9f-555e7f9f64ba.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place in an airtight container.",
      "origin": "India",
      "form": "Seeds",
      "ingredients": "100% Pure Pumpkin Seeds (Pampkeen)",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "200g options"
    },
    "description": "Premium quality Pumpkin Seeds (Pampkeen) sourced fresh and packaged hygienically to preserve intense aroma, taste and active properties.",
    "shopBy": "trending",
    "units": [
      {
        "unit": "200g",
        "price": 119,
        "mrp": 239,
        "package": "Jar"
      }
    ]
  },
  {
    "id": 20,
    "slug": "flax-seeds",
    "name": "Flax Seeds",
    "category": "seeds",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "200g",
    "price": 99,
    "mrp": 199,
    "stock": 150,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "seeds",
      "seeds",
      "bestseller"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/75d69c7b-a818-4636-ab9f-555e7f9f64ba.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/75d69c7b-a818-4636-ab9f-555e7f9f64ba.png",
      "https://i.pinimg.com/736x/7a/cb/68/7acb68f132d63fc52af2aa8f83de2201.jpg"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place in an airtight container.",
      "origin": "India",
      "form": "Seeds",
      "ingredients": "100% Pure Flax Seeds",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "200g options"
    },
    "description": "Premium quality Flax Seeds sourced fresh and packaged hygienically to preserve intense aroma, taste and active properties.",
    "shopBy": "bestseller",
    "units": [
      {
        "unit": "200g",
        "price": 99,
        "mrp": 199,
        "package": "Jar"
      }
    ]
  },
  {
    "id": 21,
    "slug": "sunflower-seeds",
    "name": "Sunflower Seeds",
    "category": "seeds",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "200g",
    "price": 105,
    "mrp": 209,
    "stock": 150,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "seeds",
      "seeds",
      "newlyin"
    ],
    "image": "https://i.pinimg.com/1200x/67/ed/a4/67eda453e41429a63cb98555c7703483.jpg",
    "images": [
      "https://i.pinimg.com/1200x/67/ed/a4/67eda453e41429a63cb98555c7703483.jpg"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place in an airtight container.",
      "origin": "India",
      "form": "Seeds",
      "ingredients": "100% Pure Sunflower Seeds",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "200g options"
    },
    "description": "Premium quality Sunflower Seeds sourced fresh and packaged hygienically to preserve intense aroma, taste and active properties.",
    "shopBy": "newlyIn",
    "units": [
      {
        "unit": "200g",
        "price": 105,
        "mrp": 209,
        "package": "Jar"
      }
    ]
  },
  {
    "id": 22,
    "slug": "dal-cheeni",
    "name": "Dal Cheeni",
    "category": "seasoning",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "50g",
    "price": 65,
    "mrp": 75,
    "stock": 150,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "seasoning",
      "whole spices",
      "valuebuys"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/d6e98044-212b-478e-a315-0355d5b21bd9.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/d6e98044-212b-478e-a315-0355d5b21bd9.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place in an airtight container.",
      "origin": "India",
      "form": "Whole Spices",
      "ingredients": "100% Pure Dal Cheeni",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "50g / 200g options"
    },
    "description": "Premium quality Dal Cheeni sourced fresh and packaged hygienically to preserve intense aroma, taste and active properties.",
    "shopBy": "valueBuys",
    "units": [
      {
        "unit": "50g",
        "price": 65,
        "mrp": 75,
        "package": "Pouch"
      },
      {
        "unit": "200g",
        "price": 165,
        "mrp": 190,
        "package": "Jar"
      }
    ]
  },
  {
    "id": 23,
    "slug": "cinnamon-sticks",
    "name": "Cinnamon Sticks",
    "category": "seasoning",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "50g",
    "price": 65,
    "mrp": 75,
    "stock": 150,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "seasoning",
      "whole spices",
      "trending"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/d6e98044-212b-478e-a315-0355d5b21bd9.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/d6e98044-212b-478e-a315-0355d5b21bd9.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place in an airtight container.",
      "origin": "India",
      "form": "Whole Spices",
      "ingredients": "100% Pure Cinnamon Sticks",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "50g / 200g options"
    },
    "description": "Premium quality Cinnamon Sticks sourced fresh and packaged hygienically to preserve intense aroma, taste and active properties.",
    "shopBy": "trending",
    "units": [
      {
        "unit": "50g",
        "price": 65,
        "mrp": 75,
        "package": "Pouch"
      },
      {
        "unit": "200g",
        "price": 165,
        "mrp": 190,
        "package": "Jar"
      }
    ]
  },
  {
    "id": 24,
    "slug": "dry-amla",
    "name": "Dry Amla",
    "category": "wellness",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "50g",
    "price": 35,
    "mrp": 45,
    "stock": 150,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "wellness",
      "herbal fruit",
      "bestseller"
    ],
    "image": "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=500&q=80"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place in an airtight container.",
      "origin": "India",
      "form": "Herbal Fruit",
      "ingredients": "100% Pure Dry Amla",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "50g / 200g options"
    },
    "description": "Premium quality Dry Amla sourced fresh and packaged hygienically to preserve intense aroma, taste and active properties.",
    "shopBy": "bestseller",
    "units": [
      {
        "unit": "50g",
        "price": 35,
        "mrp": 45,
        "package": "Pouch"
      },
      {
        "unit": "200g",
        "price": 95,
        "mrp": 110,
        "package": "Jar"
      }
    ]
  },
  {
    "id": 25,
    "slug": "ashwagandha-ashavgandha",
    "name": "Ashwagandha (Ashavgandha)",
    "category": "wellness",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "50g",
    "price": 75,
    "mrp": 85,
    "stock": 150,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "wellness",
      "herbal root",
      "newlyin"
    ],
    "image": "https://i.pinimg.com/1200x/79/ab/42/79ab4262e7e3ebad23d85634e7d1b23f.jpg",
    "images": [
      "https://i.pinimg.com/1200x/79/ab/42/79ab4262e7e3ebad23d85634e7d1b23f.jpg"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place in an airtight container.",
      "origin": "India",
      "form": "Herbal Root",
      "ingredients": "100% Pure Ashwagandha (Ashavgandha)",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "50g / 200g options"
    },
    "description": "Premium quality Ashwagandha (Ashavgandha) sourced fresh and packaged hygienically to preserve intense aroma, taste and active properties.",
    "shopBy": "newlyIn",
    "units": [
      {
        "unit": "50g",
        "price": 75,
        "mrp": 85,
        "package": "Pouch"
      },
      {
        "unit": "200g",
        "price": 200,
        "mrp": 230,
        "package": "Jar"
      }
    ]
  },
  {
    "id": 26,
    "slug": "mulethi",
    "name": "Mulethi",
    "category": "wellness",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "50g",
    "price": 50,
    "mrp": 60,
    "stock": 150,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "wellness",
      "herbal root",
      "valuebuys"
    ],
    "image": "https://i.pinimg.com/1200x/1c/cb/55/1ccb555844df088f67e52e6e1a90e8d1.jpg",
    "images": [
      "https://i.pinimg.com/1200x/1c/cb/55/1ccb555844df088f67e52e6e1a90e8d1.jpg"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place in an airtight container.",
      "origin": "India",
      "form": "Herbal Root",
      "ingredients": "100% Pure Mulethi",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "50g / 200g options"
    },
    "description": "Premium quality Mulethi sourced fresh and packaged hygienically to preserve intense aroma, taste and active properties.",
    "shopBy": "valueBuys",
    "units": [
      {
        "unit": "50g",
        "price": 50,
        "mrp": 60,
        "package": "Pouch"
      },
      {
        "unit": "200g",
        "price": 130,
        "mrp": 150,
        "package": "Jar"
      }
    ]
  },
  {
    "id": 27,
    "slug": "almond",
    "name": "Almond",
    "category": "dryfruits",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "50g",
    "price": 50,
    "mrp": 60,
    "stock": 150,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "dryfruits",
      "nuts",
      "trending"
    ],
    "image": "https://i.pinimg.com/736x/dd/3c/b1/dd3cb1a90ea516f35191c3684e4e63d1.jpg",
    "images": [
      "https://i.pinimg.com/736x/dd/3c/b1/dd3cb1a90ea516f35191c3684e4e63d1.jpg",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/9c984584-580d-40f9-a0c8-c81acab59b14.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place in an airtight container.",
      "origin": "India",
      "form": "Nuts",
      "ingredients": "100% Pure Almond",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "50g / 200g options"
    },
    "description": "Premium quality Almond sourced fresh and packaged hygienically to preserve intense aroma, taste and active properties.",
    "shopBy": "trending",
    "units": [
      {
        "unit": "50g",
        "price": 50,
        "mrp": 60,
        "package": "Pouch"
      },
      {
        "unit": "200g",
        "price": 215,
        "mrp": 240,
        "package": "Jar"
      }
    ]
  },
  {
    "id": 28,
    "slug": "kaju",
    "name": "Kaju",
    "category": "dryfruits",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "50g",
    "price": 55,
    "mrp": 65,
    "stock": 150,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "dryfruits",
      "nuts",
      "bestseller"
    ],
    "image": "https://i.pinimg.com/736x/37/d4/73/37d47378cfe8efc4f8c64aa50a832c18.jpg",
    "images": [
      "https://i.pinimg.com/736x/37/d4/73/37d47378cfe8efc4f8c64aa50a832c18.jpg",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/9c984584-580d-40f9-a0c8-c81acab59b14.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place in an airtight container.",
      "origin": "India",
      "form": "Nuts",
      "ingredients": "100% Pure Kaju",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "50g / 200g options"
    },
    "description": "Premium quality Kaju sourced fresh and packaged hygienically to preserve intense aroma, taste and active properties.",
    "shopBy": "bestseller",
    "units": [
      {
        "unit": "50g",
        "price": 55,
        "mrp": 65,
        "package": "Pouch"
      },
      {
        "unit": "200g",
        "price": 230,
        "mrp": 260,
        "package": "Jar"
      }
    ]
  },
  {
    "id": 29,
    "slug": "raisin-kashmish",
    "name": "Raisin (Kashmish)",
    "category": "dryfruits",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "50g",
    "price": 30,
    "mrp": 40,
    "stock": 150,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "dryfruits",
      "nuts",
      "newlyin"
    ],
    "image": "https://i.pinimg.com/736x/ff/ab/4b/ffab4becedf4d7f03207cafcb1d8da05.jpg",
    "images": [
      "https://i.pinimg.com/736x/ff/ab/4b/ffab4becedf4d7f03207cafcb1d8da05.jpg"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place in an airtight container.",
      "origin": "India",
      "form": "Nuts",
      "ingredients": "100% Pure Raisin (Kashmish)",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "50g / 200g options"
    },
    "description": "Premium quality Raisin (Kashmish) sourced fresh and packaged hygienically to preserve intense aroma, taste and active properties.",
    "shopBy": "newlyIn",
    "units": [
      {
        "unit": "50g",
        "price": 30,
        "mrp": 40,
        "package": "Pouch"
      },
      {
        "unit": "200g",
        "price": 95,
        "mrp": 110,
        "package": "Jar"
      }
    ]
  },
  {
    "id": 30,
    "slug": "apricot",
    "name": "Apricot",
    "category": "dryfruits",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "50g",
    "price": 65,
    "mrp": 75,
    "stock": 150,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "dryfruits",
      "nuts",
      "valuebuys"
    ],
    "image": "https://i.pinimg.com/736x/c6/02/50/c60250baec645a7c5345260713ec30ef.jpg",
    "images": [
      "https://i.pinimg.com/736x/c6/02/50/c60250baec645a7c5345260713ec30ef.jpg"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place in an airtight container.",
      "origin": "India",
      "form": "Nuts",
      "ingredients": "100% Pure Apricot",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "50g / 200g options"
    },
    "description": "Premium quality Apricot sourced fresh and packaged hygienically to preserve intense aroma, taste and active properties.",
    "shopBy": "valueBuys",
    "units": [
      {
        "unit": "50g",
        "price": 65,
        "mrp": 75,
        "package": "Pouch"
      },
      {
        "unit": "200g",
        "price": 220,
        "mrp": 250,
        "package": "Jar"
      }
    ]
  },
  {
    "id": 31,
    "slug": "pista",
    "name": "Pista",
    "category": "dryfruits",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "50g",
    "price": 75,
    "mrp": 85,
    "stock": 150,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "dryfruits",
      "nuts",
      "trending"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/554276ad-dca7-45dd-ba70-9bd0858b5eba.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/554276ad-dca7-45dd-ba70-9bd0858b5eba.png",
      "https://i.pinimg.com/736x/4c/0c/e4/4c0ce406e543a003f17f24c172d26be5.jpg"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place in an airtight container.",
      "origin": "India",
      "form": "Nuts",
      "ingredients": "100% Pure Pista",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "50g / 200g options"
    },
    "description": "Premium quality Pista sourced fresh and packaged hygienically to preserve intense aroma, taste and active properties.",
    "shopBy": "trending",
    "units": [
      {
        "unit": "50g",
        "price": 75,
        "mrp": 85,
        "package": "Pouch"
      },
      {
        "unit": "200g",
        "price": 290,
        "mrp": 320,
        "package": "Jar"
      }
    ]
  },
  {
    "id": 32,
    "slug": "premium-daily-nuts",
    "name": "Premium Daily Nuts",
    "category": "combos",
    "extraCategories": [
      "dryfruits"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 95,
    "mrp": 125,
    "stock": 99,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "bestseller",
      "dryfruits"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/5cab458c-a2d7-4871-9edf-de5475c0afce.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/5cab458c-a2d7-4871-9edf-de5475c0afce.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Almond, Kaju",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Premium Daily Nuts is a specially curated bundle including: Almond, Kaju. Designed for maximum value and convenience.",
    "shopBy": "bestseller",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 95,
        "mrp": 125,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Almond",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Kaju",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "comboType": "standard"
  },
  {
    "id": 33,
    "slug": "sweet-and-crunchy-pack",
    "name": "Sweet & Crunchy Pack",
    "category": "combos",
    "extraCategories": [
      "dryfruits"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 72,
    "mrp": 100,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "newlyin",
      "dryfruits"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Raisin (Kashmish), Almond",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Sweet & Crunchy Pack is a specially curated bundle including: Raisin (Kashmish), Almond. Designed for maximum value and convenience.",
    "shopBy": "newlyIn",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 72,
        "mrp": 100,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Raisin (Kashmish)",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Almond",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "comboType": "standard"
  },
  {
    "id": 34,
    "slug": "festive-treat-combo",
    "name": "Festive Treat Combo",
    "category": "combos",
    "extraCategories": [
      "dryfruits"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 117,
    "mrp": 150,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "valuebuys",
      "dryfruits"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Pista, Kaju",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Festive Treat Combo is a specially curated bundle including: Pista, Kaju. Designed for maximum value and convenience.",
    "shopBy": "valueBuys",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 117,
        "mrp": 150,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Pista",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Kaju",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "comboType": "standard"
  },
  {
    "id": 35,
    "slug": "sweet-and-salty-crunch",
    "name": "Sweet & Salty Crunch",
    "category": "combos",
    "extraCategories": [
      "dryfruits"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 95,
    "mrp": 125,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "trending",
      "dryfruits"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Pista, Raisin (Kashmish)",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Sweet & Salty Crunch is a specially curated bundle including: Pista, Raisin (Kashmish). Designed for maximum value and convenience.",
    "shopBy": "trending",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 95,
        "mrp": 125,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Pista",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Raisin (Kashmish)",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "comboType": "standard"
  },
  {
    "id": 36,
    "slug": "nutty-fiber-blend",
    "name": "Nutty Fiber Blend",
    "category": "combos",
    "extraCategories": [
      "dryfruits"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 104,
    "mrp": 135,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "bestseller",
      "dryfruits"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/280112eb-3957-4b32-b4da-61529f574995.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/280112eb-3957-4b32-b4da-61529f574995.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Almond, Apricot",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Nutty Fiber Blend is a specially curated bundle including: Almond, Apricot. Designed for maximum value and convenience.",
    "shopBy": "bestseller",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 104,
        "mrp": 135,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Almond",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Apricot",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "comboType": "standard"
  },
  {
    "id": 37,
    "slug": "hair-and-skin-care-pack",
    "name": "Hair & Skin Care Pack",
    "category": "combos",
    "extraCategories": [
      "dryfruits"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 77,
    "mrp": 105,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "newlyin",
      "dryfruits"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Dry Amla, Almond",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Hair & Skin Care Pack is a specially curated bundle including: Dry Amla, Almond. Designed for maximum value and convenience.",
    "shopBy": "newlyIn",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 77,
        "mrp": 105,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Dry Amla",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Almond",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "comboType": "standard"
  },
  {
    "id": 38,
    "slug": "royal-energy-bite",
    "name": "Royal Energy Bite",
    "category": "combos",
    "extraCategories": [
      "dryfruits"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 108,
    "mrp": 140,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "valuebuys",
      "dryfruits"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Kaju, Apricot",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Royal Energy Bite is a specially curated bundle including: Kaju, Apricot. Designed for maximum value and convenience.",
    "shopBy": "valueBuys",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 108,
        "mrp": 140,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Kaju",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Apricot",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "comboType": "standard"
  },
  {
    "id": 39,
    "slug": "classic-trio-pack",
    "name": "Classic Trio Pack",
    "category": "combos",
    "extraCategories": [
      "dryfruits"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 122,
    "mrp": 165,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "trending",
      "dryfruits"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/f17fd3d5-0e62-41b9-a239-068fede2f588.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/f17fd3d5-0e62-41b9-a239-068fede2f588.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Almond, Kaju, Raisin (Kashmish)",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Classic Trio Pack is a specially curated bundle including: Almond, Kaju, Raisin (Kashmish). Designed for maximum value and convenience.",
    "shopBy": "trending",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 122,
        "mrp": 165,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Almond",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Kaju",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Raisin (Kashmish)",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "comboType": "standard"
  },
  {
    "id": 40,
    "slug": "energy-booster-pack",
    "name": "Energy Booster Pack",
    "category": "combos",
    "extraCategories": [
      "dryfruits"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 171,
    "mrp": 220,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "bestseller",
      "dryfruits"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Pista, Apricot, Almond",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Energy Booster Pack is a specially curated bundle including: Pista, Apricot, Almond. Designed for maximum value and convenience.",
    "shopBy": "bestseller",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 171,
        "mrp": 220,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Pista",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Apricot",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Almond",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "comboType": "standard"
  },
  {
    "id": 41,
    "slug": "premium-rich-nuts-trio",
    "name": "Premium Rich Nuts Trio",
    "category": "combos",
    "extraCategories": [
      "dryfruits"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 162,
    "mrp": 210,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "newlyin",
      "dryfruits"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/de84e203-b0ab-460d-9528-d64f73afdb68.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/de84e203-b0ab-460d-9528-d64f73afdb68.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Almond, Kaju, Pista",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Premium Rich Nuts Trio is a specially curated bundle including: Almond, Kaju, Pista. Designed for maximum value and convenience.",
    "shopBy": "newlyIn",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 162,
        "mrp": 210,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Almond",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Kaju",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Pista",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "comboType": "standard"
  },
  {
    "id": 42,
    "slug": "tangy-sweet-antioxidant-pack",
    "name": "Tangy Sweet Antioxidant Pack",
    "category": "combos",
    "extraCategories": [
      "dryfruits"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 117,
    "mrp": 160,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "valuebuys",
      "dryfruits"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Raisin (Kashmish), Apricot, Dry Amla",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Tangy Sweet Antioxidant Pack is a specially curated bundle including: Raisin (Kashmish), Apricot, Dry Amla. Designed for maximum value and convenience.",
    "shopBy": "valueBuys",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 117,
        "mrp": 160,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Raisin (Kashmish)",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Apricot",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Dry Amla",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "comboType": "standard"
  },
  {
    "id": 43,
    "slug": "royal-dessert-mix",
    "name": "Royal Dessert Mix",
    "category": "combos",
    "extraCategories": [
      "dryfruits"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 176,
    "mrp": 225,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "trending",
      "dryfruits"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Kaju, Pista, Apricot",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Royal Dessert Mix is a specially curated bundle including: Kaju, Pista, Apricot. Designed for maximum value and convenience.",
    "shopBy": "trending",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 176,
        "mrp": 225,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Kaju",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Pista",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Apricot",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "comboType": "standard"
  },
  {
    "id": 44,
    "slug": "royal-dry-fruit-platter",
    "name": "Royal Dry Fruit Platter",
    "category": "combos",
    "extraCategories": [
      "dryfruits"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 189,
    "mrp": 250,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "bestseller",
      "dryfruits"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Almond, Kaju, Raisin (Kashmish), Pista",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Royal Dry Fruit Platter is a specially curated bundle including: Almond, Kaju, Raisin (Kashmish), Pista. Designed for maximum value and convenience.",
    "shopBy": "bestseller",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 189,
        "mrp": 250,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Almond",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Kaju",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Raisin (Kashmish)",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Pista",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "comboType": "standard"
  },
  {
    "id": 45,
    "slug": "healthy-immunity-combo",
    "name": "Healthy Immunity Combo",
    "category": "combos",
    "extraCategories": [
      "dryfruits"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 185,
    "mrp": 245,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "newlyin",
      "dryfruits"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Almond, Kaju, Apricot, Dry Amla",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Healthy Immunity Combo is a specially curated bundle including: Almond, Kaju, Apricot, Dry Amla. Designed for maximum value and convenience.",
    "shopBy": "newlyIn",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 185,
        "mrp": 245,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Almond",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Kaju",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Apricot",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Dry Amla",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "comboType": "standard"
  },
  {
    "id": 46,
    "slug": "elite-dry-fruit-feast",
    "name": "Elite Dry Fruit Feast",
    "category": "combos",
    "extraCategories": [
      "dryfruits"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 221,
    "mrp": 285,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "valuebuys",
      "dryfruits"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Almond, Kaju, Apricot, Pista",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Elite Dry Fruit Feast is a specially curated bundle including: Almond, Kaju, Apricot, Pista. Designed for maximum value and convenience.",
    "shopBy": "valueBuys",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 221,
        "mrp": 285,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Almond",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Kaju",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Apricot",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Pista",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "comboType": "standard"
  },
  {
    "id": 47,
    "slug": "vitality-antioxidant-pack",
    "name": "Vitality Antioxidant Pack",
    "category": "combos",
    "extraCategories": [
      "dryfruits"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 185,
    "mrp": 245,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "trending",
      "dryfruits"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Pista, Raisin (Kashmish), Apricot, Dry Amla",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Vitality Antioxidant Pack is a specially curated bundle including: Pista, Raisin (Kashmish), Apricot, Dry Amla. Designed for maximum value and convenience.",
    "shopBy": "trending",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 185,
        "mrp": 245,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Pista",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Raisin (Kashmish)",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Apricot",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Dry Amla",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "comboType": "standard"
  },
  {
    "id": 48,
    "slug": "super-saver-dry-fruit-deal",
    "name": "Super Saver Dry Fruit Deal",
    "category": "combos",
    "extraCategories": [
      "dryfruits"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 105,
    "mrp": 165,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "bestseller",
      "dryfruits"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/e89a4574-fede-476b-b034-967f1e0b448a.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/e89a4574-fede-476b-b034-967f1e0b448a.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Almond, Kaju, Raisin (Kashmish)",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Super Saver Dry Fruit Deal is a specially curated bundle including: Almond, Kaju, Raisin (Kashmish). Designed for maximum value and convenience.",
    "shopBy": "bestseller",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 105,
        "mrp": 165,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Almond",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Kaju",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Raisin (Kashmish)",
        "qty": "1 unit",
        "isFree": true
      }
    ],
    "comboType": "buy2get1"
  },
  {
    "id": 49,
    "slug": "healthy-bones-and-hair-offer",
    "name": "Healthy Bones & Hair Offer",
    "category": "combos",
    "extraCategories": [
      "dryfruits"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 125,
    "mrp": 190,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "newlyin",
      "dryfruits"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/0f88e166-65b6-43ae-b9e9-3f879c3062da.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/0f88e166-65b6-43ae-b9e9-3f879c3062da.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Pista, Almond, Dry Amla",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Healthy Bones & Hair Offer is a specially curated bundle including: Pista, Almond, Dry Amla. Designed for maximum value and convenience.",
    "shopBy": "newlyIn",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 125,
        "mrp": 190,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Pista",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Almond",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Dry Amla",
        "qty": "1 unit",
        "isFree": true
      }
    ],
    "comboType": "buy2get1"
  },
  {
    "id": 50,
    "slug": "gym-diet-premium-deal",
    "name": "Gym Diet Premium Deal",
    "category": "combos",
    "extraCategories": [
      "dryfruits"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 125,
    "mrp": 220,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "valuebuys",
      "dryfruits"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Almond, Pista, Apricot",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Gym Diet Premium Deal is a specially curated bundle including: Almond, Pista, Apricot. Designed for maximum value and convenience.",
    "shopBy": "valueBuys",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 125,
        "mrp": 220,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Almond",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Pista",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Apricot",
        "qty": "1 unit",
        "isFree": true
      }
    ],
    "comboType": "buy2get1"
  },
  {
    "id": 51,
    "slug": "festive-dessert-special",
    "name": "Festive Dessert Special",
    "category": "combos",
    "extraCategories": [
      "dryfruits"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 85,
    "mrp": 150,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "trending",
      "dryfruits"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Kaju, Raisin (Kashmish), Dry Amla",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Festive Dessert Special is a specially curated bundle including: Kaju, Raisin (Kashmish), Dry Amla. Designed for maximum value and convenience.",
    "shopBy": "trending",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 85,
        "mrp": 150,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Kaju",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Raisin (Kashmish)",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Dry Amla",
        "qty": "1 unit",
        "isFree": true
      }
    ],
    "comboType": "buy2get1"
  },
  {
    "id": 52,
    "slug": "weight-management-duo",
    "name": "Weight Management Duo",
    "category": "combos",
    "extraCategories": [
      "seeds"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 81,
    "mrp": 110,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "bestseller",
      "seeds"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Chia Seeds, Basil Seeds",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Weight Management Duo is a specially curated bundle including: Chia Seeds, Basil Seeds. Designed for maximum value and convenience.",
    "shopBy": "bestseller",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 81,
        "mrp": 110,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Chia Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Basil Seeds",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "comboType": "standard"
  },
  {
    "id": 53,
    "slug": "heart-healthy-mix",
    "name": "Heart Healthy Mix",
    "category": "combos",
    "extraCategories": [
      "seeds"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 68,
    "mrp": 95,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "newlyin",
      "seeds"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Flax Seeds, Sunflower Seeds",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Heart Healthy Mix is a specially curated bundle including: Flax Seeds, Sunflower Seeds. Designed for maximum value and convenience.",
    "shopBy": "newlyIn",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 68,
        "mrp": 95,
        "package": "Assorted Box"
      }
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
    "comboType": "standard"
  },
  {
    "id": 54,
    "slug": "melon-and-pumpkin-power",
    "name": "Melon & Pumpkin Power",
    "category": "combos",
    "extraCategories": [
      "seeds"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 86,
    "mrp": 115,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "valuebuys",
      "seeds"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Watermelon Seeds, Pumpkin Seeds (Pampkeen)",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Melon & Pumpkin Power is a specially curated bundle including: Watermelon Seeds, Pumpkin Seeds (Pampkeen). Designed for maximum value and convenience.",
    "shopBy": "valueBuys",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 86,
        "mrp": 115,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Watermelon Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Pumpkin Seeds (Pampkeen)",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "comboType": "standard"
  },
  {
    "id": 55,
    "slug": "omega-3-core-duo",
    "name": "Omega-3 Core Duo",
    "category": "combos",
    "extraCategories": [
      "seeds"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 63,
    "mrp": 90,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "trending",
      "seeds"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Chia Seeds, Flax Seeds",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Omega-3 Core Duo is a specially curated bundle including: Chia Seeds, Flax Seeds. Designed for maximum value and convenience.",
    "shopBy": "trending",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 63,
        "mrp": 90,
        "package": "Assorted Box"
      }
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
    "comboType": "standard"
  },
  {
    "id": 56,
    "slug": "fiber-rich-refresh-pack",
    "name": "Fiber Rich Refresh Pack",
    "category": "combos",
    "extraCategories": [
      "seeds"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 99,
    "mrp": 130,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "bestseller",
      "seeds"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Pumpkin Seeds (Pampkeen), Basil Seeds",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Fiber Rich Refresh Pack is a specially curated bundle including: Pumpkin Seeds (Pampkeen), Basil Seeds. Designed for maximum value and convenience.",
    "shopBy": "bestseller",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 99,
        "mrp": 130,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Pumpkin Seeds (Pampkeen)",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Basil Seeds",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "comboType": "standard"
  },
  {
    "id": 57,
    "slug": "summer-crunch-pair",
    "name": "Summer Crunch Pair",
    "category": "combos",
    "extraCategories": [
      "seeds"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 72,
    "mrp": 100,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "newlyin",
      "seeds"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Sunflower Seeds, Watermelon Seeds",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Summer Crunch Pair is a specially curated bundle including: Sunflower Seeds, Watermelon Seeds. Designed for maximum value and convenience.",
    "shopBy": "newlyIn",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 72,
        "mrp": 100,
        "package": "Assorted Box"
      }
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
    "comboType": "standard"
  },
  {
    "id": 58,
    "slug": "protein-booster-duo",
    "name": "Protein Booster Duo",
    "category": "combos",
    "extraCategories": [
      "seeds"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 77,
    "mrp": 105,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "valuebuys",
      "seeds"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Chia Seeds, Sunflower Seeds",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Protein Booster Duo is a specially curated bundle including: Chia Seeds, Sunflower Seeds. Designed for maximum value and convenience.",
    "shopBy": "valueBuys",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 77,
        "mrp": 105,
        "package": "Assorted Box"
      }
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
    "comboType": "standard"
  },
  {
    "id": 59,
    "slug": "omega-3-rich-trio",
    "name": "Omega-3 Rich Trio",
    "category": "combos",
    "extraCategories": [
      "seeds"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 108,
    "mrp": 150,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "trending",
      "seeds"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Chia Seeds, Flax Seeds, Basil Seeds",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Omega-3 Rich Trio is a specially curated bundle including: Chia Seeds, Flax Seeds, Basil Seeds. Designed for maximum value and convenience.",
    "shopBy": "trending",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 108,
        "mrp": 150,
        "package": "Assorted Box"
      }
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
        "name": "Basil Seeds",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "comboType": "standard"
  },
  {
    "id": 60,
    "slug": "crunchy-salad-topping-pack",
    "name": "Crunchy Salad Topping Pack",
    "category": "combos",
    "extraCategories": [
      "seeds"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 126,
    "mrp": 170,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "bestseller",
      "seeds"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Pumpkin Seeds (Pampkeen), Sunflower Seeds, Watermelon Seeds",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Crunchy Salad Topping Pack is a specially curated bundle including: Pumpkin Seeds (Pampkeen), Sunflower Seeds, Watermelon Seeds. Designed for maximum value and convenience.",
    "shopBy": "bestseller",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 126,
        "mrp": 170,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Pumpkin Seeds (Pampkeen)",
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
    "comboType": "standard"
  },
  {
    "id": 61,
    "slug": "breakfast-smoothie-crunchy-mix",
    "name": "Breakfast Smoothie Crunchy Mix",
    "category": "combos",
    "extraCategories": [
      "seeds"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 108,
    "mrp": 150,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "newlyin",
      "seeds"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Chia Seeds, Watermelon Seeds, Sunflower Seeds",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Breakfast Smoothie Crunchy Mix is a specially curated bundle including: Chia Seeds, Watermelon Seeds, Sunflower Seeds. Designed for maximum value and convenience.",
    "shopBy": "newlyIn",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 108,
        "mrp": 150,
        "package": "Assorted Box"
      }
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
    "comboType": "standard"
  },
  {
    "id": 62,
    "slug": "superfood-digestion-trio",
    "name": "Superfood Digestion Trio",
    "category": "combos",
    "extraCategories": [
      "seeds"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 126,
    "mrp": 170,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "valuebuys",
      "seeds"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Basil Seeds, Flax Seeds, Pumpkin Seeds (Pampkeen)",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Superfood Digestion Trio is a specially curated bundle including: Basil Seeds, Flax Seeds, Pumpkin Seeds (Pampkeen). Designed for maximum value and convenience.",
    "shopBy": "valueBuys",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 126,
        "mrp": 170,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Basil Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Flax Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Pumpkin Seeds (Pampkeen)",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "comboType": "standard"
  },
  {
    "id": 63,
    "slug": "ultimate-hydration-and-fiber-mix",
    "name": "Ultimate Hydration & Fiber Mix",
    "category": "combos",
    "extraCategories": [
      "seeds"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 135,
    "mrp": 180,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "trending",
      "seeds"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Chia Seeds, Basil Seeds, Pumpkin Seeds (Pampkeen)",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Ultimate Hydration & Fiber Mix is a specially curated bundle including: Chia Seeds, Basil Seeds, Pumpkin Seeds (Pampkeen). Designed for maximum value and convenience.",
    "shopBy": "trending",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 135,
        "mrp": 180,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Chia Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Basil Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Pumpkin Seeds (Pampkeen)",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "comboType": "standard"
  },
  {
    "id": 64,
    "slug": "ultimate-superseeds-combo",
    "name": "Ultimate Superseeds Combo",
    "category": "combos",
    "extraCategories": [
      "seeds"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 149,
    "mrp": 205,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "bestseller",
      "seeds"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Chia Seeds, Basil Seeds, Flax Seeds, Sunflower Seeds",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Ultimate Superseeds Combo is a specially curated bundle including: Chia Seeds, Basil Seeds, Flax Seeds, Sunflower Seeds. Designed for maximum value and convenience.",
    "shopBy": "bestseller",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 149,
        "mrp": 205,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Chia Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Basil Seeds",
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
    "comboType": "standard"
  },
  {
    "id": 65,
    "slug": "daily-nutrition-seeds-pack",
    "name": "Daily Nutrition Seeds Pack",
    "category": "combos",
    "extraCategories": [
      "seeds"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 149,
    "mrp": 205,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "newlyin",
      "seeds"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Pumpkin Seeds (Pampkeen), Watermelon Seeds, Flax Seeds, Chia Seeds",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Daily Nutrition Seeds Pack is a specially curated bundle including: Pumpkin Seeds (Pampkeen), Watermelon Seeds, Flax Seeds, Chia Seeds. Designed for maximum value and convenience.",
    "shopBy": "newlyIn",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 149,
        "mrp": 205,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Pumpkin Seeds (Pampkeen)",
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
    "comboType": "standard"
  },
  {
    "id": 66,
    "slug": "nutrient-dense-trail-mix",
    "name": "Nutrient-Dense Trail Mix",
    "category": "combos",
    "extraCategories": [
      "seeds"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 171,
    "mrp": 230,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "valuebuys",
      "seeds"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Basil Seeds, Watermelon Seeds, Sunflower Seeds, Pumpkin Seeds (Pampkeen)",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Nutrient-Dense Trail Mix is a specially curated bundle including: Basil Seeds, Watermelon Seeds, Sunflower Seeds, Pumpkin Seeds (Pampkeen). Designed for maximum value and convenience.",
    "shopBy": "valueBuys",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 171,
        "mrp": 230,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Basil Seeds",
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
        "name": "Pumpkin Seeds (Pampkeen)",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "comboType": "standard"
  },
  {
    "id": 67,
    "slug": "complete-fitness-seed-mix",
    "name": "Complete Fitness Seed Mix",
    "category": "combos",
    "extraCategories": [
      "seeds"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 140,
    "mrp": 195,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "trending",
      "seeds"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Chia Seeds, Basil Seeds, Flax Seeds, Watermelon Seeds",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Complete Fitness Seed Mix is a specially curated bundle including: Chia Seeds, Basil Seeds, Flax Seeds, Watermelon Seeds. Designed for maximum value and convenience.",
    "shopBy": "trending",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 140,
        "mrp": 195,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Chia Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Basil Seeds",
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
    "comboType": "standard"
  },
  {
    "id": 68,
    "slug": "diet-special-offer",
    "name": "Diet Special Offer",
    "category": "combos",
    "extraCategories": [
      "seeds"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 70,
    "mrp": 150,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "bestseller",
      "seeds"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Chia Seeds, Flax Seeds, Basil Seeds",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Diet Special Offer is a specially curated bundle including: Chia Seeds, Flax Seeds, Basil Seeds. Designed for maximum value and convenience.",
    "shopBy": "bestseller",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 70,
        "mrp": 150,
        "package": "Assorted Box"
      }
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
        "name": "Basil Seeds",
        "qty": "1 unit",
        "isFree": true
      }
    ],
    "comboType": "buy2get1"
  },
  {
    "id": 69,
    "slug": "snacks-corner-freebie",
    "name": "Snacks Corner Freebie",
    "category": "combos",
    "extraCategories": [
      "seeds"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 105,
    "mrp": 170,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "newlyin",
      "seeds"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Pumpkin Seeds (Pampkeen), Sunflower Seeds, Watermelon Seeds",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Snacks Corner Freebie is a specially curated bundle including: Pumpkin Seeds (Pampkeen), Sunflower Seeds, Watermelon Seeds. Designed for maximum value and convenience.",
    "shopBy": "newlyIn",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 105,
        "mrp": 170,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Pumpkin Seeds (Pampkeen)",
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
    "comboType": "buy2get1"
  },
  {
    "id": 70,
    "slug": "weight-loss-super-combo",
    "name": "Weight Loss Super Combo",
    "category": "combos",
    "extraCategories": [
      "seeds"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 90,
    "mrp": 150,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "valuebuys",
      "seeds"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Chia Seeds, Basil Seeds, Flax Seeds",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Weight Loss Super Combo is a specially curated bundle including: Chia Seeds, Basil Seeds, Flax Seeds. Designed for maximum value and convenience.",
    "shopBy": "valueBuys",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 90,
        "mrp": 150,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Chia Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Basil Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Flax Seeds",
        "qty": "1 unit",
        "isFree": true
      }
    ],
    "comboType": "buy2get1"
  },
  {
    "id": 71,
    "slug": "healthy-munching-offer",
    "name": "Healthy Munching Offer",
    "category": "combos",
    "extraCategories": [
      "seeds"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 95,
    "mrp": 170,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "trending",
      "seeds"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Watermelon Seeds, Pumpkin Seeds (Pampkeen), Sunflower Seeds",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Healthy Munching Offer is a specially curated bundle including: Watermelon Seeds, Pumpkin Seeds (Pampkeen), Sunflower Seeds. Designed for maximum value and convenience.",
    "shopBy": "trending",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 95,
        "mrp": 170,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Watermelon Seeds",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Pumpkin Seeds (Pampkeen)",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Sunflower Seeds",
        "qty": "1 unit",
        "isFree": true
      }
    ],
    "comboType": "buy2get1"
  },
  {
    "id": 72,
    "slug": "essential-kitchen-combo",
    "name": "Essential Kitchen Combo",
    "category": "combos",
    "extraCategories": [
      "powders",
      "seasoning"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 90,
    "mrp": 120,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "bestseller",
      "powders",
      "seasoning"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/4a0bc01a-00c6-4136-9f22-eb7932510c08.jpg",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/4a0bc01a-00c6-4136-9f22-eb7932510c08.jpg"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Red Onion Powder, Garlic Powder",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Essential Kitchen Combo is a specially curated bundle including: Red Onion Powder, Garlic Powder. Designed for maximum value and convenience.",
    "shopBy": "bestseller",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 90,
        "mrp": 120,
        "package": "Assorted Box"
      }
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
    "comboType": "standard"
  },
  {
    "id": 73,
    "slug": "tangy-and-warm-blend",
    "name": "Tangy & Warm Blend",
    "category": "combos",
    "extraCategories": [
      "powders",
      "seasoning"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 108,
    "mrp": 140,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "newlyin",
      "powders",
      "seasoning"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Tomato Powder, Ginger Powder",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Tangy & Warm Blend is a specially curated bundle including: Tomato Powder, Ginger Powder. Designed for maximum value and convenience.",
    "shopBy": "newlyIn",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 108,
        "mrp": 140,
        "package": "Assorted Box"
      }
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
    "comboType": "standard"
  },
  {
    "id": 74,
    "slug": "classic-pizza-partner",
    "name": "Classic Pizza Partner",
    "category": "combos",
    "extraCategories": [
      "powders",
      "seasoning"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 122,
    "mrp": 155,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "valuebuys",
      "powders",
      "seasoning"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Oregano, Red Chilli Flakes",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Classic Pizza Partner is a specially curated bundle including: Oregano, Red Chilli Flakes. Designed for maximum value and convenience.",
    "shopBy": "valueBuys",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 122,
        "mrp": 155,
        "package": "Assorted Box"
      }
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
    "comboType": "standard"
  },
  {
    "id": 75,
    "slug": "ayurvedic-immunity-duo",
    "name": "Ayurvedic Immunity Duo",
    "category": "combos",
    "extraCategories": [
      "powders",
      "seasoning"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 113,
    "mrp": 145,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "trending",
      "powders",
      "seasoning"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Ashwagandha (Ashavgandha), Mulethi",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Ayurvedic Immunity Duo is a specially curated bundle including: Ashwagandha (Ashavgandha), Mulethi. Designed for maximum value and convenience.",
    "shopBy": "trending",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 113,
        "mrp": 145,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Ashwagandha (Ashavgandha)",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Mulethi",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "comboType": "standard"
  },
  {
    "id": 76,
    "slug": "rich-white-gravy-base",
    "name": "Rich White Gravy Base",
    "category": "combos",
    "extraCategories": [
      "powders",
      "seasoning"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 95,
    "mrp": 125,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "bestseller",
      "powders",
      "seasoning"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: White Onion Powder, Garlic Powder",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Rich White Gravy Base is a specially curated bundle including: White Onion Powder, Garlic Powder. Designed for maximum value and convenience.",
    "shopBy": "bestseller",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 95,
        "mrp": 125,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
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
    "comboType": "standard"
  },
  {
    "id": 77,
    "slug": "snack-fries-sprinkler-duo",
    "name": "Snack Fries Sprinkler Duo",
    "category": "combos",
    "extraCategories": [
      "powders",
      "seasoning"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 131,
    "mrp": 170,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "newlyin",
      "powders",
      "seasoning"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Oregano Seasoning, Peri-Peri Masala",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Snack Fries Sprinkler Duo is a specially curated bundle including: Oregano Seasoning, Peri-Peri Masala. Designed for maximum value and convenience.",
    "shopBy": "newlyIn",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 131,
        "mrp": 170,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Oregano Seasoning",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Peri-Peri Masala",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "comboType": "standard"
  },
  {
    "id": 78,
    "slug": "daily-detox-and-glow-duo",
    "name": "Daily Detox & Glow Duo",
    "category": "combos",
    "extraCategories": [
      "powders",
      "seasoning"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 140,
    "mrp": 185,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "valuebuys",
      "powders",
      "seasoning"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Moringa Powder, Beetroot Powder",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Daily Detox & Glow Duo is a specially curated bundle including: Moringa Powder, Beetroot Powder. Designed for maximum value and convenience.",
    "shopBy": "valueBuys",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 140,
        "mrp": 185,
        "package": "Assorted Box"
      }
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
    "comboType": "standard"
  },
  {
    "id": 79,
    "slug": "pure-cinnamon-bakers-pack",
    "name": "Pure Cinnamon Baker's Pack",
    "category": "combos",
    "extraCategories": [
      "powders",
      "seasoning"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 117,
    "mrp": 150,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "trending",
      "powders",
      "seasoning"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Dal Cheeni, Cinnamon Sticks",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Pure Cinnamon Baker's Pack is a specially curated bundle including: Dal Cheeni, Cinnamon Sticks. Designed for maximum value and convenience.",
    "shopBy": "trending",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 117,
        "mrp": 150,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Dal Cheeni",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Cinnamon Sticks",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "comboType": "standard"
  },
  {
    "id": 80,
    "slug": "instant-soup-base-pair",
    "name": "Instant Soup Base Pair",
    "category": "combos",
    "extraCategories": [
      "powders",
      "seasoning"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 99,
    "mrp": 130,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "bestseller",
      "powders",
      "seasoning"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Potato Flakes, Tomato Powder",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Instant Soup Base Pair is a specially curated bundle including: Potato Flakes, Tomato Powder. Designed for maximum value and convenience.",
    "shopBy": "bestseller",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 99,
        "mrp": 130,
        "package": "Assorted Box"
      }
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
    "comboType": "standard"
  },
  {
    "id": 81,
    "slug": "chatpatta-raita-and-dip-mix",
    "name": "Chatpatta Raita & Dip Mix",
    "category": "combos",
    "extraCategories": [
      "powders",
      "seasoning"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 122,
    "mrp": 155,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "newlyin",
      "powders",
      "seasoning"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Mint Powder, Green Chilli Powder",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Chatpatta Raita & Dip Mix is a specially curated bundle including: Mint Powder, Green Chilli Powder. Designed for maximum value and convenience.",
    "shopBy": "newlyIn",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 122,
        "mrp": 155,
        "package": "Assorted Box"
      }
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
    "comboType": "standard"
  },
  {
    "id": 82,
    "slug": "all-in-one-onion-garlic-base",
    "name": "All-in-One Onion Garlic Base",
    "category": "combos",
    "extraCategories": [
      "powders",
      "seasoning"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 144,
    "mrp": 190,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "valuebuys",
      "powders",
      "seasoning"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Red Onion Powder, White Onion Powder, Garlic Powder",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "All-in-One Onion Garlic Base is a specially curated bundle including: Red Onion Powder, White Onion Powder, Garlic Powder. Designed for maximum value and convenience.",
    "shopBy": "valueBuys",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 144,
        "mrp": 190,
        "package": "Assorted Box"
      }
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
    "comboType": "standard"
  },
  {
    "id": 83,
    "slug": "italian-restaurant-style-combo",
    "name": "Italian Restaurant Style Combo",
    "category": "combos",
    "extraCategories": [
      "powders",
      "seasoning"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 180,
    "mrp": 230,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "trending",
      "powders",
      "seasoning"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Pizza Pasta Masala, Oregano Seasoning, Red Chilli Flakes",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Italian Restaurant Style Combo is a specially curated bundle including: Pizza Pasta Masala, Oregano Seasoning, Red Chilli Flakes. Designed for maximum value and convenience.",
    "shopBy": "trending",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 180,
        "mrp": 230,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Pizza Pasta Masala",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Oregano Seasoning",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Red Chilli Flakes",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "comboType": "standard"
  },
  {
    "id": 84,
    "slug": "superfood-health-shake-mix",
    "name": "Superfood Health Shake Mix",
    "category": "combos",
    "extraCategories": [
      "powders",
      "seasoning"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 198,
    "mrp": 260,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "bestseller",
      "powders",
      "seasoning"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Moringa Powder, Beetroot Powder, Mint Powder",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Superfood Health Shake Mix is a specially curated bundle including: Moringa Powder, Beetroot Powder, Mint Powder. Designed for maximum value and convenience.",
    "shopBy": "bestseller",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 198,
        "mrp": 260,
        "package": "Assorted Box"
      }
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
      }
    ],
    "comboType": "standard"
  },
  {
    "id": 85,
    "slug": "instant-chatpatta-tadka",
    "name": "Instant Chatpatta Tadka",
    "category": "combos",
    "extraCategories": [
      "powders",
      "seasoning"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 171,
    "mrp": 220,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "newlyin",
      "powders",
      "seasoning"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Tomato Powder, Green Chilli Powder, Ginger Powder",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Instant Chatpatta Tadka is a specially curated bundle including: Tomato Powder, Green Chilli Powder, Ginger Powder. Designed for maximum value and convenience.",
    "shopBy": "newlyIn",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 171,
        "mrp": 220,
        "package": "Assorted Box"
      }
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
    "comboType": "standard"
  },
  {
    "id": 86,
    "slug": "spicy-italian-twist-mix",
    "name": "Spicy Italian Twist Mix",
    "category": "combos",
    "extraCategories": [
      "powders",
      "seasoning"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 176,
    "mrp": 225,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "valuebuys",
      "powders",
      "seasoning"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Pizza Pasta Masala, Red Chilli Flakes, Green Chilli Powder",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Spicy Italian Twist Mix is a specially curated bundle including: Pizza Pasta Masala, Red Chilli Flakes, Green Chilli Powder. Designed for maximum value and convenience.",
    "shopBy": "valueBuys",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 176,
        "mrp": 225,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Pizza Pasta Masala",
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
    "comboType": "standard"
  },
  {
    "id": 87,
    "slug": "immunity-and-throat-care-mix",
    "name": "Immunity & Throat Care Mix",
    "category": "combos",
    "extraCategories": [
      "powders",
      "seasoning"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 171,
    "mrp": 220,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "trending",
      "powders",
      "seasoning"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Ashwagandha (Ashavgandha), Mulethi, Dal Cheeni",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Immunity & Throat Care Mix is a specially curated bundle including: Ashwagandha (Ashavgandha), Mulethi, Dal Cheeni. Designed for maximum value and convenience.",
    "shopBy": "trending",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 171,
        "mrp": 220,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Ashwagandha (Ashavgandha)",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Mulethi",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Dal Cheeni",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "comboType": "standard"
  },
  {
    "id": 88,
    "slug": "quick-creamy-tomato-soup-mix",
    "name": "Quick Creamy Tomato Soup Mix",
    "category": "combos",
    "extraCategories": [
      "powders",
      "seasoning"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 158,
    "mrp": 205,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "bestseller",
      "powders",
      "seasoning"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Tomato Powder, Potato Flakes, Mint Powder",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Quick Creamy Tomato Soup Mix is a specially curated bundle including: Tomato Powder, Potato Flakes, Mint Powder. Designed for maximum value and convenience.",
    "shopBy": "bestseller",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 158,
        "mrp": 205,
        "package": "Assorted Box"
      }
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
    "comboType": "standard"
  },
  {
    "id": 89,
    "slug": "tandoori-marination-special",
    "name": "Tandoori Marination Special",
    "category": "combos",
    "extraCategories": [
      "powders",
      "seasoning"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 144,
    "mrp": 190,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "newlyin",
      "powders",
      "seasoning"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Garlic Powder, Ginger Powder, Mint Powder",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Tandoori Marination Special is a specially curated bundle including: Garlic Powder, Ginger Powder, Mint Powder. Designed for maximum value and convenience.",
    "shopBy": "newlyIn",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 144,
        "mrp": 190,
        "package": "Assorted Box"
      }
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
        "name": "Mint Powder",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "comboType": "standard"
  },
  {
    "id": 90,
    "slug": "complete-gravy-base-pack",
    "name": "Complete Gravy Base Pack",
    "category": "combos",
    "extraCategories": [
      "powders",
      "seasoning"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 198,
    "mrp": 260,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "valuebuys",
      "powders",
      "seasoning"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Red Onion Powder, Garlic Powder, Ginger Powder, Tomato Powder",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Complete Gravy Base Pack is a specially curated bundle including: Red Onion Powder, Garlic Powder, Ginger Powder, Tomato Powder. Designed for maximum value and convenience.",
    "shopBy": "valueBuys",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 198,
        "mrp": 260,
        "package": "Assorted Box"
      }
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
    "comboType": "standard"
  },
  {
    "id": 91,
    "slug": "party-seasoning-pack",
    "name": "Party Seasoning Pack",
    "category": "combos",
    "extraCategories": [
      "powders",
      "seasoning"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 248,
    "mrp": 320,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "trending",
      "powders",
      "seasoning"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Oregano, Pizza Pasta Masala, Peri-Peri Masala, Red Chilli Flakes",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Party Seasoning Pack is a specially curated bundle including: Oregano, Pizza Pasta Masala, Peri-Peri Masala, Red Chilli Flakes. Designed for maximum value and convenience.",
    "shopBy": "trending",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 248,
        "mrp": 320,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Oregano",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Pizza Pasta Masala",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Peri-Peri Masala",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Red Chilli Flakes",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "comboType": "standard"
  },
  {
    "id": 92,
    "slug": "ultimate-herbal-wellness-kit",
    "name": "Ultimate Herbal Wellness Kit",
    "category": "combos",
    "extraCategories": [
      "powders",
      "seasoning"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 252,
    "mrp": 330,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "bestseller",
      "powders",
      "seasoning"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Moringa Powder, Beetroot Powder, Ashwagandha (Ashavgandha), Mulethi",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Ultimate Herbal Wellness Kit is a specially curated bundle including: Moringa Powder, Beetroot Powder, Ashwagandha (Ashavgandha), Mulethi. Designed for maximum value and convenience.",
    "shopBy": "bestseller",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 252,
        "mrp": 330,
        "package": "Assorted Box"
      }
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
        "name": "Ashwagandha (Ashavgandha)",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Mulethi",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "comboType": "standard"
  },
  {
    "id": 93,
    "slug": "master-culinary-base-kit",
    "name": "Master Culinary Base Kit",
    "category": "combos",
    "extraCategories": [
      "powders",
      "seasoning"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 189,
    "mrp": 250,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "newlyin",
      "powders",
      "seasoning"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Red Onion Powder, White Onion Powder, Garlic Powder, Ginger Powder",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Master Culinary Base Kit is a specially curated bundle including: Red Onion Powder, White Onion Powder, Garlic Powder, Ginger Powder. Designed for maximum value and convenience.",
    "shopBy": "newlyIn",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 189,
        "mrp": 250,
        "package": "Assorted Box"
      }
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
    "comboType": "standard"
  },
  {
    "id": 94,
    "slug": "ultimate-italian-cafe-kit",
    "name": "Ultimate Italian Cafe Kit",
    "category": "combos",
    "extraCategories": [
      "powders",
      "seasoning"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 252,
    "mrp": 320,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "valuebuys",
      "powders",
      "seasoning"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Oregano, Oregano Seasoning, Pizza Pasta Masala, Red Chilli Flakes",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Ultimate Italian Cafe Kit is a specially curated bundle including: Oregano, Oregano Seasoning, Pizza Pasta Masala, Red Chilli Flakes. Designed for maximum value and convenience.",
    "shopBy": "valueBuys",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 252,
        "mrp": 320,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Oregano",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Oregano Seasoning",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Pizza Pasta Masala",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Red Chilli Flakes",
        "qty": "1 unit",
        "isFree": false
      }
    ],
    "comboType": "standard"
  },
  {
    "id": 95,
    "slug": "healthy-green-soup-and-smoothie-mix",
    "name": "Healthy Green Soup & Smoothie Mix",
    "category": "combos",
    "extraCategories": [
      "powders",
      "seasoning"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 261,
    "mrp": 340,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "trending",
      "powders",
      "seasoning"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Moringa Powder, Beetroot Powder, Mint Powder, Green Chilli Powder",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Healthy Green Soup & Smoothie Mix is a specially curated bundle including: Moringa Powder, Beetroot Powder, Mint Powder, Green Chilli Powder. Designed for maximum value and convenience.",
    "shopBy": "trending",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 261,
        "mrp": 340,
        "package": "Assorted Box"
      }
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
    "comboType": "standard"
  },
  {
    "id": 96,
    "slug": "instant-pav-bhaji-curry-base",
    "name": "Instant Pav Bhaji / Curry Base",
    "category": "combos",
    "extraCategories": [
      "powders",
      "seasoning"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 189,
    "mrp": 250,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "bestseller",
      "powders",
      "seasoning"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Tomato Powder, Potato Flakes, Garlic Powder, Red Onion Powder",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Instant Pav Bhaji / Curry Base is a specially curated bundle including: Tomato Powder, Potato Flakes, Garlic Powder, Red Onion Powder. Designed for maximum value and convenience.",
    "shopBy": "bestseller",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 189,
        "mrp": 250,
        "package": "Assorted Box"
      }
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
    "comboType": "standard"
  },
  {
    "id": 97,
    "slug": "daily-cooking-dhamaka",
    "name": "Daily Cooking Dhamaka",
    "category": "combos",
    "extraCategories": [
      "powders",
      "seasoning"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 100,
    "mrp": 180,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "newlyin",
      "powders",
      "seasoning"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Red Onion Powder, Garlic Powder, Ginger Powder",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Daily Cooking Dhamaka is a specially curated bundle including: Red Onion Powder, Garlic Powder, Ginger Powder. Designed for maximum value and convenience.",
    "shopBy": "newlyIn",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 100,
        "mrp": 180,
        "package": "Assorted Box"
      }
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
    "comboType": "buy2get1"
  },
  {
    "id": 98,
    "slug": "fast-food-special-offer",
    "name": "Fast Food Special Offer",
    "category": "combos",
    "extraCategories": [
      "powders",
      "seasoning"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 150,
    "mrp": 255,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "valuebuys",
      "powders",
      "seasoning"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Pizza Pasta Masala, Oregano, Peri-Peri Masala",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Fast Food Special Offer is a specially curated bundle including: Pizza Pasta Masala, Oregano, Peri-Peri Masala. Designed for maximum value and convenience.",
    "shopBy": "valueBuys",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 150,
        "mrp": 255,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Pizza Pasta Masala",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Oregano",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Peri-Peri Masala",
        "qty": "1 unit",
        "isFree": true
      }
    ],
    "comboType": "buy2get1"
  },
  {
    "id": 99,
    "slug": "herbal-wellness-gift",
    "name": "Herbal Wellness Gift",
    "category": "combos",
    "extraCategories": [
      "powders",
      "seasoning"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 125,
    "mrp": 240,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "trending",
      "powders",
      "seasoning"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Ashwagandha (Ashavgandha), Mulethi, Moringa Powder",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Herbal Wellness Gift is a specially curated bundle including: Ashwagandha (Ashavgandha), Mulethi, Moringa Powder. Designed for maximum value and convenience.",
    "shopBy": "trending",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 125,
        "mrp": 240,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Ashwagandha (Ashavgandha)",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Mulethi",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Moringa Powder",
        "qty": "1 unit",
        "isFree": true
      }
    ],
    "comboType": "buy2get1"
  },
  {
    "id": 100,
    "slug": "instant-soup-and-dip-deal",
    "name": "Instant Soup & Dip Deal",
    "category": "combos",
    "extraCategories": [
      "powders",
      "seasoning"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 110,
    "mrp": 205,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "bestseller",
      "powders",
      "seasoning"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Tomato Powder, Potato Flakes, Mint Powder",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Instant Soup & Dip Deal is a specially curated bundle including: Tomato Powder, Potato Flakes, Mint Powder. Designed for maximum value and convenience.",
    "shopBy": "bestseller",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 110,
        "mrp": 205,
        "package": "Assorted Box"
      }
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
    "comboType": "buy2get1"
  },
  {
    "id": 101,
    "slug": "cafe-style-freebie-pack",
    "name": "Cafe Style Freebie Pack",
    "category": "combos",
    "extraCategories": [
      "powders",
      "seasoning"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 145,
    "mrp": 235,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "newlyin",
      "powders",
      "seasoning"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Oregano Seasoning, Peri-Peri Masala, Red Chilli Flakes",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Cafe Style Freebie Pack is a specially curated bundle including: Oregano Seasoning, Peri-Peri Masala, Red Chilli Flakes. Designed for maximum value and convenience.",
    "shopBy": "newlyIn",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 145,
        "mrp": 235,
        "package": "Assorted Box"
      }
    ],
    "comboIncludes": [
      {
        "name": "Oregano Seasoning",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Peri-Peri Masala",
        "qty": "1 unit",
        "isFree": false
      },
      {
        "name": "Red Chilli Flakes",
        "qty": "1 unit",
        "isFree": true
      }
    ],
    "comboType": "buy2get1"
  },
  {
    "id": 102,
    "slug": "nutri-glow-wellness-offer",
    "name": "Nutri-Glow Wellness Offer",
    "category": "combos",
    "extraCategories": [
      "powders",
      "seasoning"
    ],
    "brand": "Foodville",
    "unit": "Combo Pack",
    "price": 155,
    "mrp": 260,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "combo",
      "bundle",
      "valuebuys",
      "powders",
      "seasoning"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/cba17785-5b33-4bd1-84d6-80940dd47e8f.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/341c8326-a73f-48a5-8544-129e4c63d2c4.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place.",
      "origin": "India",
      "form": "Assorted Gift Pack / Combo",
      "ingredients": "Assorted: Beetroot Powder, Moringa Powder, Mint Powder",
      "foodType": "Vegetarian",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "Combined standard sizes"
    },
    "description": "Nutri-Glow Wellness Offer is a specially curated bundle including: Beetroot Powder, Moringa Powder, Mint Powder. Designed for maximum value and convenience.",
    "shopBy": "valueBuys",
    "units": [
      {
        "unit": "Combo Pack",
        "price": 155,
        "mrp": 260,
        "package": "Assorted Box"
      }
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
    "comboType": "buy2get1"
  },
  {
    "id": 103,
    "slug": "red-onion-powder-bulk-pack",
    "name": "Red Onion Powder \u2014 Bulk Pack",
    "category": "bulk",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "Pack of 2 (1kg each)",
    "price": 450,
    "mrp": 900,
    "stock": 100,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "bulk",
      "wholesale",
      "red-onion-powder"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/456d70bb-3eb0-49d3-a2c3-debbfbd243e3.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/456d70bb-3eb0-49d3-a2c3-debbfbd243e3.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/c4ec2b9c-5245-48f2-9d13-5edf42ab85f2.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place off the ground.",
      "origin": "India",
      "form": "Bulk Packages (Sacks)",
      "ingredients": "100% Pure Red Onion Powder",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "1kg packets in master sacks"
    },
    "description": "Commercial B2B package of Red Onion Powder designed for commercial kitchens, distributors, food chains and manufacturers. Wholesale pricing from mandi source.",
    "units": [
      {
        "unit": "Pack of 2",
        "mrp": 900,
        "package": "Pouch Sack",
        "perUnit": 441,
        "savings": 18
      },
      {
        "unit": "Pack of 5",
        "mrp": 2250,
        "package": "Pouch Sack",
        "perUnit": 428,
        "savings": 113
      },
      {
        "unit": "Pack of 10",
        "mrp": 4500,
        "package": "Woven Sack",
        "perUnit": 414,
        "savings": 360
      },
      {
        "unit": "Pack of 25",
        "mrp": 11250,
        "package": "Heavy Duty Sack",
        "perUnit": 396,
        "savings": 1350
      }
    ]
  },
  {
    "id": 104,
    "slug": "white-onion-powder-bulk-pack",
    "name": "White Onion Powder \u2014 Bulk Pack",
    "category": "bulk",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "Pack of 2 (1kg each)",
    "price": 480,
    "mrp": 960,
    "stock": 100,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "bulk",
      "wholesale",
      "white-onion-powder"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/08bba875-d3a4-45a5-aac3-9ee1c65d960c.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/08bba875-d3a4-45a5-aac3-9ee1c65d960c.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/c4ec2b9c-5245-48f2-9d13-5edf42ab85f2.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place off the ground.",
      "origin": "India",
      "form": "Bulk Packages (Sacks)",
      "ingredients": "100% Pure White Onion Powder",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "1kg packets in master sacks"
    },
    "description": "Commercial B2B package of White Onion Powder designed for commercial kitchens, distributors, food chains and manufacturers. Wholesale pricing from mandi source.",
    "units": [
      {
        "unit": "Pack of 2",
        "mrp": 960,
        "package": "Pouch Sack",
        "perUnit": 470,
        "savings": 19
      },
      {
        "unit": "Pack of 5",
        "mrp": 2400,
        "package": "Pouch Sack",
        "perUnit": 456,
        "savings": 120
      },
      {
        "unit": "Pack of 10",
        "mrp": 4800,
        "package": "Woven Sack",
        "perUnit": 442,
        "savings": 384
      },
      {
        "unit": "Pack of 25",
        "mrp": 12000,
        "package": "Heavy Duty Sack",
        "perUnit": 422,
        "savings": 1440
      }
    ]
  },
  {
    "id": 105,
    "slug": "garlic-powder-bulk-pack",
    "name": "Garlic Powder \u2014 Bulk Pack",
    "category": "bulk",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "Pack of 2 (1kg each)",
    "price": 380,
    "mrp": 760,
    "stock": 100,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "bulk",
      "wholesale",
      "garlic-powder"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/457bb7d1-e10a-4bcd-9224-7999b6fb7303.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/457bb7d1-e10a-4bcd-9224-7999b6fb7303.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/c4ec2b9c-5245-48f2-9d13-5edf42ab85f2.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place off the ground.",
      "origin": "India",
      "form": "Bulk Packages (Sacks)",
      "ingredients": "100% Pure Garlic Powder",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "1kg packets in master sacks"
    },
    "description": "Commercial B2B package of Garlic Powder designed for commercial kitchens, distributors, food chains and manufacturers. Wholesale pricing from mandi source.",
    "units": [
      {
        "unit": "Pack of 2",
        "mrp": 760,
        "package": "Pouch Sack",
        "perUnit": 372,
        "savings": 15
      },
      {
        "unit": "Pack of 5",
        "mrp": 1900,
        "package": "Pouch Sack",
        "perUnit": 361,
        "savings": 95
      },
      {
        "unit": "Pack of 10",
        "mrp": 3800,
        "package": "Woven Sack",
        "perUnit": 350,
        "savings": 304
      },
      {
        "unit": "Pack of 25",
        "mrp": 9500,
        "package": "Heavy Duty Sack",
        "perUnit": 334,
        "savings": 1140
      }
    ]
  },
  {
    "id": 106,
    "slug": "ginger-powder-bulk-pack",
    "name": "Ginger Powder \u2014 Bulk Pack",
    "category": "bulk",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "Pack of 2 (1kg each)",
    "price": 420,
    "mrp": 840,
    "stock": 100,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "bulk",
      "wholesale",
      "ginger-powder"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/df3f91c8-ecd9-44ce-a399-3a73b294a1fa.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/df3f91c8-ecd9-44ce-a399-3a73b294a1fa.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/c4ec2b9c-5245-48f2-9d13-5edf42ab85f2.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place off the ground.",
      "origin": "India",
      "form": "Bulk Packages (Sacks)",
      "ingredients": "100% Pure Ginger Powder",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "1kg packets in master sacks"
    },
    "description": "Commercial B2B package of Ginger Powder designed for commercial kitchens, distributors, food chains and manufacturers. Wholesale pricing from mandi source.",
    "units": [
      {
        "unit": "Pack of 2",
        "mrp": 840,
        "package": "Pouch Sack",
        "perUnit": 412,
        "savings": 17
      },
      {
        "unit": "Pack of 5",
        "mrp": 2100,
        "package": "Pouch Sack",
        "perUnit": 399,
        "savings": 105
      },
      {
        "unit": "Pack of 10",
        "mrp": 4200,
        "package": "Woven Sack",
        "perUnit": 386,
        "savings": 336
      },
      {
        "unit": "Pack of 25",
        "mrp": 10500,
        "package": "Heavy Duty Sack",
        "perUnit": 370,
        "savings": 1260
      }
    ]
  },
  {
    "id": 107,
    "slug": "tomato-powder-bulk-pack",
    "name": "Tomato Powder \u2014 Bulk Pack",
    "category": "bulk",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "Pack of 2 (1kg each)",
    "price": 550,
    "mrp": 1100,
    "stock": 100,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "bulk",
      "wholesale",
      "tomato-powder"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/f6ef4db2-3bad-460e-9e62-caf89ef59696.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/f6ef4db2-3bad-460e-9e62-caf89ef59696.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/c4ec2b9c-5245-48f2-9d13-5edf42ab85f2.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place off the ground.",
      "origin": "India",
      "form": "Bulk Packages (Sacks)",
      "ingredients": "100% Pure Tomato Powder",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "1kg packets in master sacks"
    },
    "description": "Commercial B2B package of Tomato Powder designed for commercial kitchens, distributors, food chains and manufacturers. Wholesale pricing from mandi source.",
    "units": [
      {
        "unit": "Pack of 2",
        "mrp": 1100,
        "package": "Pouch Sack",
        "perUnit": 539,
        "savings": 22
      },
      {
        "unit": "Pack of 5",
        "mrp": 2750,
        "package": "Pouch Sack",
        "perUnit": 523,
        "savings": 138
      },
      {
        "unit": "Pack of 10",
        "mrp": 5500,
        "package": "Woven Sack",
        "perUnit": 506,
        "savings": 440
      },
      {
        "unit": "Pack of 25",
        "mrp": 13750,
        "package": "Heavy Duty Sack",
        "perUnit": 484,
        "savings": 1650
      }
    ]
  },
  {
    "id": 108,
    "slug": "potato-flakes-bulk-pack",
    "name": "Potato Flakes \u2014 Bulk Pack",
    "category": "bulk",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "Pack of 2 (1kg each)",
    "price": 260,
    "mrp": 520,
    "stock": 100,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "bulk",
      "wholesale",
      "potato-flakes"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/5c34a4aa-eff5-4f82-a246-afc38a8c5715.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/5c34a4aa-eff5-4f82-a246-afc38a8c5715.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/c4ec2b9c-5245-48f2-9d13-5edf42ab85f2.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place off the ground.",
      "origin": "India",
      "form": "Bulk Packages (Sacks)",
      "ingredients": "100% Pure Potato Flakes",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "1kg packets in master sacks"
    },
    "description": "Commercial B2B package of Potato Flakes designed for commercial kitchens, distributors, food chains and manufacturers. Wholesale pricing from mandi source.",
    "units": [
      {
        "unit": "Pack of 2",
        "mrp": 520,
        "package": "Pouch Sack",
        "perUnit": 255,
        "savings": 10
      },
      {
        "unit": "Pack of 5",
        "mrp": 1300,
        "package": "Pouch Sack",
        "perUnit": 247,
        "savings": 65
      },
      {
        "unit": "Pack of 10",
        "mrp": 2600,
        "package": "Woven Sack",
        "perUnit": 239,
        "savings": 208
      },
      {
        "unit": "Pack of 25",
        "mrp": 6500,
        "package": "Heavy Duty Sack",
        "perUnit": 229,
        "savings": 780
      }
    ]
  },
  {
    "id": 109,
    "slug": "mint-powder-bulk-pack",
    "name": "Mint Powder \u2014 Bulk Pack",
    "category": "bulk",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "Pack of 2 (1kg each)",
    "price": 500,
    "mrp": 1000,
    "stock": 100,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "bulk",
      "wholesale",
      "mint-powder"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/0b8876ef-e3eb-4968-bf6d-ec854fae46ed.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/0b8876ef-e3eb-4968-bf6d-ec854fae46ed.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/c4ec2b9c-5245-48f2-9d13-5edf42ab85f2.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place off the ground.",
      "origin": "India",
      "form": "Bulk Packages (Sacks)",
      "ingredients": "100% Pure Mint Powder",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "1kg packets in master sacks"
    },
    "description": "Commercial B2B package of Mint Powder designed for commercial kitchens, distributors, food chains and manufacturers. Wholesale pricing from mandi source.",
    "units": [
      {
        "unit": "Pack of 2",
        "mrp": 1000,
        "package": "Pouch Sack",
        "perUnit": 490,
        "savings": 20
      },
      {
        "unit": "Pack of 5",
        "mrp": 2500,
        "package": "Pouch Sack",
        "perUnit": 475,
        "savings": 125
      },
      {
        "unit": "Pack of 10",
        "mrp": 5000,
        "package": "Woven Sack",
        "perUnit": 460,
        "savings": 400
      },
      {
        "unit": "Pack of 25",
        "mrp": 12500,
        "package": "Heavy Duty Sack",
        "perUnit": 440,
        "savings": 1500
      }
    ]
  },
  {
    "id": 110,
    "slug": "green-chilli-powder-bulk-pack",
    "name": "Green Chilli Powder \u2014 Bulk Pack",
    "category": "bulk",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "Pack of 2 (1kg each)",
    "price": 460,
    "mrp": 920,
    "stock": 100,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "bulk",
      "wholesale",
      "green-chilli-powder"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/3c04973e-187c-47e7-99af-c0fe2def4b2c.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/3c04973e-187c-47e7-99af-c0fe2def4b2c.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/c4ec2b9c-5245-48f2-9d13-5edf42ab85f2.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place off the ground.",
      "origin": "India",
      "form": "Bulk Packages (Sacks)",
      "ingredients": "100% Pure Green Chilli Powder",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "1kg packets in master sacks"
    },
    "description": "Commercial B2B package of Green Chilli Powder designed for commercial kitchens, distributors, food chains and manufacturers. Wholesale pricing from mandi source.",
    "units": [
      {
        "unit": "Pack of 2",
        "mrp": 920,
        "package": "Pouch Sack",
        "perUnit": 451,
        "savings": 18
      },
      {
        "unit": "Pack of 5",
        "mrp": 2300,
        "package": "Pouch Sack",
        "perUnit": 437,
        "savings": 115
      },
      {
        "unit": "Pack of 10",
        "mrp": 4600,
        "package": "Woven Sack",
        "perUnit": 423,
        "savings": 368
      },
      {
        "unit": "Pack of 25",
        "mrp": 11500,
        "package": "Heavy Duty Sack",
        "perUnit": 405,
        "savings": 1380
      }
    ]
  },
  {
    "id": 111,
    "slug": "oregano-bulk-pack",
    "name": "Oregano \u2014 Bulk Pack",
    "category": "bulk",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "Pack of 2 (1kg each)",
    "price": 680,
    "mrp": 1360,
    "stock": 100,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "bulk",
      "wholesale",
      "oregano"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/c4ec2b9c-5245-48f2-9d13-5edf42ab85f2.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/c4ec2b9c-5245-48f2-9d13-5edf42ab85f2.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place off the ground.",
      "origin": "India",
      "form": "Bulk Packages (Sacks)",
      "ingredients": "100% Pure Oregano",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "1kg packets in master sacks"
    },
    "description": "Commercial B2B package of Oregano designed for commercial kitchens, distributors, food chains and manufacturers. Wholesale pricing from mandi source.",
    "units": [
      {
        "unit": "Pack of 2",
        "mrp": 1360,
        "package": "Pouch Sack",
        "perUnit": 666,
        "savings": 27
      },
      {
        "unit": "Pack of 5",
        "mrp": 3400,
        "package": "Pouch Sack",
        "perUnit": 646,
        "savings": 170
      },
      {
        "unit": "Pack of 10",
        "mrp": 6800,
        "package": "Woven Sack",
        "perUnit": 626,
        "savings": 544
      },
      {
        "unit": "Pack of 25",
        "mrp": 17000,
        "package": "Heavy Duty Sack",
        "perUnit": 598,
        "savings": 2040
      }
    ]
  },
  {
    "id": 112,
    "slug": "oregano-seasoning-bulk-pack",
    "name": "Oregano Seasoning \u2014 Bulk Pack",
    "category": "bulk",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "Pack of 2 (1kg each)",
    "price": 620,
    "mrp": 1240,
    "stock": 100,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "bulk",
      "wholesale",
      "oregano-seasoning"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/f4da849d-15b4-4d1f-b427-c2c8527278d5.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/f4da849d-15b4-4d1f-b427-c2c8527278d5.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/c4ec2b9c-5245-48f2-9d13-5edf42ab85f2.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place off the ground.",
      "origin": "India",
      "form": "Bulk Packages (Sacks)",
      "ingredients": "100% Pure Oregano Seasoning",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "1kg packets in master sacks"
    },
    "description": "Commercial B2B package of Oregano Seasoning designed for commercial kitchens, distributors, food chains and manufacturers. Wholesale pricing from mandi source.",
    "units": [
      {
        "unit": "Pack of 2",
        "mrp": 1240,
        "package": "Pouch Sack",
        "perUnit": 608,
        "savings": 25
      },
      {
        "unit": "Pack of 5",
        "mrp": 3100,
        "package": "Pouch Sack",
        "perUnit": 589,
        "savings": 155
      },
      {
        "unit": "Pack of 10",
        "mrp": 6200,
        "package": "Woven Sack",
        "perUnit": 570,
        "savings": 496
      },
      {
        "unit": "Pack of 25",
        "mrp": 15500,
        "package": "Heavy Duty Sack",
        "perUnit": 546,
        "savings": 1860
      }
    ]
  },
  {
    "id": 113,
    "slug": "pizza-pasta-masala-bulk-pack",
    "name": "Pizza Pasta Masala \u2014 Bulk Pack",
    "category": "bulk",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "Pack of 2 (1kg each)",
    "price": 540,
    "mrp": 1080,
    "stock": 100,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "bulk",
      "wholesale",
      "pizza-pasta-masala"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/0f9a417b-0a71-42f8-884d-ee83ded678e1.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/0f9a417b-0a71-42f8-884d-ee83ded678e1.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/c4ec2b9c-5245-48f2-9d13-5edf42ab85f2.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place off the ground.",
      "origin": "India",
      "form": "Bulk Packages (Sacks)",
      "ingredients": "100% Pure Pizza Pasta Masala",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "1kg packets in master sacks"
    },
    "description": "Commercial B2B package of Pizza Pasta Masala designed for commercial kitchens, distributors, food chains and manufacturers. Wholesale pricing from mandi source.",
    "units": [
      {
        "unit": "Pack of 2",
        "mrp": 1080,
        "package": "Pouch Sack",
        "perUnit": 529,
        "savings": 22
      },
      {
        "unit": "Pack of 5",
        "mrp": 2700,
        "package": "Pouch Sack",
        "perUnit": 513,
        "savings": 135
      },
      {
        "unit": "Pack of 10",
        "mrp": 5400,
        "package": "Woven Sack",
        "perUnit": 497,
        "savings": 432
      },
      {
        "unit": "Pack of 25",
        "mrp": 13500,
        "package": "Heavy Duty Sack",
        "perUnit": 475,
        "savings": 1620
      }
    ]
  },
  {
    "id": 114,
    "slug": "moringa-powder-bulk-pack",
    "name": "Moringa Powder \u2014 Bulk Pack",
    "category": "bulk",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "Pack of 2 (1kg each)",
    "price": 720,
    "mrp": 1440,
    "stock": 100,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "bulk",
      "wholesale",
      "moringa-powder"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/c4ec2b9c-5245-48f2-9d13-5edf42ab85f2.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/c4ec2b9c-5245-48f2-9d13-5edf42ab85f2.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place off the ground.",
      "origin": "India",
      "form": "Bulk Packages (Sacks)",
      "ingredients": "100% Pure Moringa Powder",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "1kg packets in master sacks"
    },
    "description": "Commercial B2B package of Moringa Powder designed for commercial kitchens, distributors, food chains and manufacturers. Wholesale pricing from mandi source.",
    "units": [
      {
        "unit": "Pack of 2",
        "mrp": 1440,
        "package": "Pouch Sack",
        "perUnit": 706,
        "savings": 29
      },
      {
        "unit": "Pack of 5",
        "mrp": 3600,
        "package": "Pouch Sack",
        "perUnit": 684,
        "savings": 180
      },
      {
        "unit": "Pack of 10",
        "mrp": 7200,
        "package": "Woven Sack",
        "perUnit": 662,
        "savings": 576
      },
      {
        "unit": "Pack of 25",
        "mrp": 18000,
        "package": "Heavy Duty Sack",
        "perUnit": 634,
        "savings": 2160
      }
    ]
  },
  {
    "id": 115,
    "slug": "beetroot-powder-bulk-pack",
    "name": "Beetroot Powder \u2014 Bulk Pack",
    "category": "bulk",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "Pack of 2 (1kg each)",
    "price": 650,
    "mrp": 1300,
    "stock": 100,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "bulk",
      "wholesale",
      "beetroot-powder"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/b338e9ae-49af-4598-8be7-8b61de5d97dd.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/b338e9ae-49af-4598-8be7-8b61de5d97dd.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/c4ec2b9c-5245-48f2-9d13-5edf42ab85f2.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place off the ground.",
      "origin": "India",
      "form": "Bulk Packages (Sacks)",
      "ingredients": "100% Pure Beetroot Powder",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "1kg packets in master sacks"
    },
    "description": "Commercial B2B package of Beetroot Powder designed for commercial kitchens, distributors, food chains and manufacturers. Wholesale pricing from mandi source.",
    "units": [
      {
        "unit": "Pack of 2",
        "mrp": 1300,
        "package": "Pouch Sack",
        "perUnit": 637,
        "savings": 26
      },
      {
        "unit": "Pack of 5",
        "mrp": 3250,
        "package": "Pouch Sack",
        "perUnit": 618,
        "savings": 163
      },
      {
        "unit": "Pack of 10",
        "mrp": 6500,
        "package": "Woven Sack",
        "perUnit": 598,
        "savings": 520
      },
      {
        "unit": "Pack of 25",
        "mrp": 16250,
        "package": "Heavy Duty Sack",
        "perUnit": 572,
        "savings": 1950
      }
    ]
  },
  {
    "id": 116,
    "slug": "red-chilli-flakes-bulk-pack",
    "name": "Red Chilli Flakes \u2014 Bulk Pack",
    "category": "bulk",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "Pack of 2 (1kg each)",
    "price": 360,
    "mrp": 720,
    "stock": 100,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "bulk",
      "wholesale",
      "red-chilli-flakes"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/6598ac82-021d-4309-b629-b6eced1843a2.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/6598ac82-021d-4309-b629-b6eced1843a2.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/c4ec2b9c-5245-48f2-9d13-5edf42ab85f2.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place off the ground.",
      "origin": "India",
      "form": "Bulk Packages (Sacks)",
      "ingredients": "100% Pure Red Chilli Flakes",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "1kg packets in master sacks"
    },
    "description": "Commercial B2B package of Red Chilli Flakes designed for commercial kitchens, distributors, food chains and manufacturers. Wholesale pricing from mandi source.",
    "units": [
      {
        "unit": "Pack of 2",
        "mrp": 720,
        "package": "Pouch Sack",
        "perUnit": 353,
        "savings": 14
      },
      {
        "unit": "Pack of 5",
        "mrp": 1800,
        "package": "Pouch Sack",
        "perUnit": 342,
        "savings": 90
      },
      {
        "unit": "Pack of 10",
        "mrp": 3600,
        "package": "Woven Sack",
        "perUnit": 331,
        "savings": 288
      },
      {
        "unit": "Pack of 25",
        "mrp": 9000,
        "package": "Heavy Duty Sack",
        "perUnit": 317,
        "savings": 1080
      }
    ]
  },
  {
    "id": 117,
    "slug": "peri-peri-masala-bulk-pack",
    "name": "Peri-Peri Masala \u2014 Bulk Pack",
    "category": "bulk",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "Pack of 2 (1kg each)",
    "price": 490,
    "mrp": 980,
    "stock": 100,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "bulk",
      "wholesale",
      "peri-peri-masala"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/76d75845-e7eb-4bb3-9879-235505ee7dd7.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/76d75845-e7eb-4bb3-9879-235505ee7dd7.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/c4ec2b9c-5245-48f2-9d13-5edf42ab85f2.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place off the ground.",
      "origin": "India",
      "form": "Bulk Packages (Sacks)",
      "ingredients": "100% Pure Peri-Peri Masala",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "1kg packets in master sacks"
    },
    "description": "Commercial B2B package of Peri-Peri Masala designed for commercial kitchens, distributors, food chains and manufacturers. Wholesale pricing from mandi source.",
    "units": [
      {
        "unit": "Pack of 2",
        "mrp": 980,
        "package": "Pouch Sack",
        "perUnit": 480,
        "savings": 20
      },
      {
        "unit": "Pack of 5",
        "mrp": 2450,
        "package": "Pouch Sack",
        "perUnit": 466,
        "savings": 123
      },
      {
        "unit": "Pack of 10",
        "mrp": 4900,
        "package": "Woven Sack",
        "perUnit": 451,
        "savings": 392
      },
      {
        "unit": "Pack of 25",
        "mrp": 12250,
        "package": "Heavy Duty Sack",
        "perUnit": 431,
        "savings": 1470
      }
    ]
  },
  {
    "id": 118,
    "slug": "chia-seeds-bulk-pack",
    "name": "Chia Seeds \u2014 Bulk Pack",
    "category": "bulk",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "Pack of 2 (1kg each)",
    "price": 320,
    "mrp": 640,
    "stock": 100,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "bulk",
      "wholesale",
      "chia-seeds"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/d48424b7-903f-48fd-804e-f005c85ddd96.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/d48424b7-903f-48fd-804e-f005c85ddd96.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/c4ec2b9c-5245-48f2-9d13-5edf42ab85f2.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place off the ground.",
      "origin": "India",
      "form": "Bulk Packages (Sacks)",
      "ingredients": "100% Pure Chia Seeds",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "1kg packets in master sacks"
    },
    "description": "Commercial B2B package of Chia Seeds designed for commercial kitchens, distributors, food chains and manufacturers. Wholesale pricing from mandi source.",
    "units": [
      {
        "unit": "Pack of 2",
        "mrp": 640,
        "package": "Pouch Sack",
        "perUnit": 314,
        "savings": 13
      },
      {
        "unit": "Pack of 5",
        "mrp": 1600,
        "package": "Pouch Sack",
        "perUnit": 304,
        "savings": 80
      },
      {
        "unit": "Pack of 10",
        "mrp": 3200,
        "package": "Woven Sack",
        "perUnit": 294,
        "savings": 256
      },
      {
        "unit": "Pack of 25",
        "mrp": 8000,
        "package": "Heavy Duty Sack",
        "perUnit": 282,
        "savings": 960
      }
    ]
  },
  {
    "id": 119,
    "slug": "basil-seeds-bulk-pack",
    "name": "Basil Seeds \u2014 Bulk Pack",
    "category": "bulk",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "Pack of 2 (1kg each)",
    "price": 400,
    "mrp": 800,
    "stock": 100,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "bulk",
      "wholesale",
      "basil-seeds"
    ],
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/c4ec2b9c-5245-48f2-9d13-5edf42ab85f2.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place off the ground.",
      "origin": "India",
      "form": "Bulk Packages (Sacks)",
      "ingredients": "100% Pure Basil Seeds",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "1kg packets in master sacks"
    },
    "description": "Commercial B2B package of Basil Seeds designed for commercial kitchens, distributors, food chains and manufacturers. Wholesale pricing from mandi source.",
    "units": [
      {
        "unit": "Pack of 2",
        "mrp": 800,
        "package": "Pouch Sack",
        "perUnit": 392,
        "savings": 16
      },
      {
        "unit": "Pack of 5",
        "mrp": 2000,
        "package": "Pouch Sack",
        "perUnit": 380,
        "savings": 100
      },
      {
        "unit": "Pack of 10",
        "mrp": 4000,
        "package": "Woven Sack",
        "perUnit": 368,
        "savings": 320
      },
      {
        "unit": "Pack of 25",
        "mrp": 10000,
        "package": "Heavy Duty Sack",
        "perUnit": 352,
        "savings": 1200
      }
    ]
  },
  {
    "id": 120,
    "slug": "watermelon-seeds-bulk-pack",
    "name": "Watermelon Seeds \u2014 Bulk Pack",
    "category": "bulk",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "Pack of 2 (1kg each)",
    "price": 280,
    "mrp": 560,
    "stock": 100,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "bulk",
      "wholesale",
      "watermelon-seeds"
    ],
    "image": "https://i.pinimg.com/1200x/ef/5e/2c/ef5e2c5b376defcc29feb832b0071101.jpg",
    "images": [
      "https://i.pinimg.com/1200x/ef/5e/2c/ef5e2c5b376defcc29feb832b0071101.jpg",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/c4ec2b9c-5245-48f2-9d13-5edf42ab85f2.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place off the ground.",
      "origin": "India",
      "form": "Bulk Packages (Sacks)",
      "ingredients": "100% Pure Watermelon Seeds",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "1kg packets in master sacks"
    },
    "description": "Commercial B2B package of Watermelon Seeds designed for commercial kitchens, distributors, food chains and manufacturers. Wholesale pricing from mandi source.",
    "units": [
      {
        "unit": "Pack of 2",
        "mrp": 560,
        "package": "Pouch Sack",
        "perUnit": 274,
        "savings": 11
      },
      {
        "unit": "Pack of 5",
        "mrp": 1400,
        "package": "Pouch Sack",
        "perUnit": 266,
        "savings": 70
      },
      {
        "unit": "Pack of 10",
        "mrp": 2800,
        "package": "Woven Sack",
        "perUnit": 258,
        "savings": 224
      },
      {
        "unit": "Pack of 25",
        "mrp": 7000,
        "package": "Heavy Duty Sack",
        "perUnit": 246,
        "savings": 840
      }
    ]
  },
  {
    "id": 121,
    "slug": "pumpkin-seeds-pampkeen-bulk-pack",
    "name": "Pumpkin Seeds (Pampkeen) \u2014 Bulk Pack",
    "category": "bulk",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "Pack of 2 (1kg each)",
    "price": 520,
    "mrp": 1040,
    "stock": 100,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "bulk",
      "wholesale",
      "pumpkin-seeds-pampkeen"
    ],
    "image": "https://i.pinimg.com/1200x/6e/f2/b4/6ef2b4bb98bc7ddfc76ab99a776752f8.jpg",
    "images": [
      "https://i.pinimg.com/1200x/6e/f2/b4/6ef2b4bb98bc7ddfc76ab99a776752f8.jpg",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/c4ec2b9c-5245-48f2-9d13-5edf42ab85f2.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place off the ground.",
      "origin": "India",
      "form": "Bulk Packages (Sacks)",
      "ingredients": "100% Pure Pumpkin Seeds (Pampkeen)",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "1kg packets in master sacks"
    },
    "description": "Commercial B2B package of Pumpkin Seeds (Pampkeen) designed for commercial kitchens, distributors, food chains and manufacturers. Wholesale pricing from mandi source.",
    "units": [
      {
        "unit": "Pack of 2",
        "mrp": 1040,
        "package": "Pouch Sack",
        "perUnit": 510,
        "savings": 21
      },
      {
        "unit": "Pack of 5",
        "mrp": 2600,
        "package": "Pouch Sack",
        "perUnit": 494,
        "savings": 130
      },
      {
        "unit": "Pack of 10",
        "mrp": 5200,
        "package": "Woven Sack",
        "perUnit": 478,
        "savings": 416
      },
      {
        "unit": "Pack of 25",
        "mrp": 13000,
        "package": "Heavy Duty Sack",
        "perUnit": 458,
        "savings": 1560
      }
    ]
  },
  {
    "id": 122,
    "slug": "flax-seeds-bulk-pack",
    "name": "Flax Seeds \u2014 Bulk Pack",
    "category": "bulk",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "Pack of 2 (1kg each)",
    "price": 190,
    "mrp": 380,
    "stock": 100,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "bulk",
      "wholesale",
      "flax-seeds"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/75d69c7b-a818-4636-ab9f-555e7f9f64ba.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/75d69c7b-a818-4636-ab9f-555e7f9f64ba.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/c4ec2b9c-5245-48f2-9d13-5edf42ab85f2.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place off the ground.",
      "origin": "India",
      "form": "Bulk Packages (Sacks)",
      "ingredients": "100% Pure Flax Seeds",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "1kg packets in master sacks"
    },
    "description": "Commercial B2B package of Flax Seeds designed for commercial kitchens, distributors, food chains and manufacturers. Wholesale pricing from mandi source.",
    "units": [
      {
        "unit": "Pack of 2",
        "mrp": 380,
        "package": "Pouch Sack",
        "perUnit": 186,
        "savings": 8
      },
      {
        "unit": "Pack of 5",
        "mrp": 950,
        "package": "Pouch Sack",
        "perUnit": 181,
        "savings": 48
      },
      {
        "unit": "Pack of 10",
        "mrp": 1900,
        "package": "Woven Sack",
        "perUnit": 175,
        "savings": 152
      },
      {
        "unit": "Pack of 25",
        "mrp": 4750,
        "package": "Heavy Duty Sack",
        "perUnit": 167,
        "savings": 570
      }
    ]
  },
  {
    "id": 123,
    "slug": "sunflower-seeds-bulk-pack",
    "name": "Sunflower Seeds \u2014 Bulk Pack",
    "category": "bulk",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "Pack of 2 (1kg each)",
    "price": 340,
    "mrp": 680,
    "stock": 100,
    "isComingSoon": false,
    "rating": 4.8,
    "tags": [
      "bulk",
      "wholesale",
      "sunflower-seeds"
    ],
    "image": "https://i.pinimg.com/1200x/67/ed/a4/67eda453e41429a63cb98555c7703483.jpg",
    "images": [
      "https://i.pinimg.com/1200x/67/ed/a4/67eda453e41429a63cb98555c7703483.jpg",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/c4ec2b9c-5245-48f2-9d13-5edf42ab85f2.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place off the ground.",
      "origin": "India",
      "form": "Bulk Packages (Sacks)",
      "ingredients": "100% Pure Sunflower Seeds",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "1kg packets in master sacks"
    },
    "description": "Commercial B2B package of Sunflower Seeds designed for commercial kitchens, distributors, food chains and manufacturers. Wholesale pricing from mandi source.",
    "units": [
      {
        "unit": "Pack of 2",
        "mrp": 680,
        "package": "Pouch Sack",
        "perUnit": 333,
        "savings": 14
      },
      {
        "unit": "Pack of 5",
        "mrp": 1700,
        "package": "Pouch Sack",
        "perUnit": 323,
        "savings": 85
      },
      {
        "unit": "Pack of 10",
        "mrp": 3400,
        "package": "Woven Sack",
        "perUnit": 313,
        "savings": 272
      },
      {
        "unit": "Pack of 25",
        "mrp": 8500,
        "package": "Heavy Duty Sack",
        "perUnit": 299,
        "savings": 1020
      }
    ]
  },
  {
    "id": 124,
    "slug": "cinnamon-sticks-bulk-pack",
    "name": "Cinnamon Sticks \u2014 Bulk Pack",
    "category": "bulk",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "Pack of 2 (1kg each)",
    "price": 600,
    "mrp": 1200,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "bulk",
      "wholesale",
      "cinnamon-sticks"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/d6e98044-212b-478e-a315-0355d5b21bd9.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/d6e98044-212b-478e-a315-0355d5b21bd9.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/c4ec2b9c-5245-48f2-9d13-5edf42ab85f2.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place off the ground.",
      "origin": "India",
      "form": "Bulk Packages (Sacks)",
      "ingredients": "100% Pure Cinnamon Sticks",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "1kg packets in master sacks"
    },
    "description": "Commercial B2B package of Cinnamon Sticks designed for commercial kitchens, distributors, food chains and manufacturers. Wholesale pricing from mandi source.",
    "units": [
      {
        "unit": "Pack of 2",
        "mrp": 1200,
        "package": "Pouch Sack",
        "perUnit": 588,
        "savings": 24
      },
      {
        "unit": "Pack of 5",
        "mrp": 3000,
        "package": "Pouch Sack",
        "perUnit": 570,
        "savings": 150
      },
      {
        "unit": "Pack of 10",
        "mrp": 6000,
        "package": "Woven Sack",
        "perUnit": 552,
        "savings": 480
      },
      {
        "unit": "Pack of 25",
        "mrp": 15000,
        "package": "Heavy Duty Sack",
        "perUnit": 528,
        "savings": 1800
      }
    ]
  },
  {
    "id": 125,
    "slug": "dry-amla-bulk-pack",
    "name": "Dry Amla \u2014 Bulk Pack",
    "category": "bulk",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "Pack of 2 (1kg each)",
    "price": 240,
    "mrp": 480,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "bulk",
      "wholesale",
      "dry-amla"
    ],
    "image": "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=500&q=80",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/c4ec2b9c-5245-48f2-9d13-5edf42ab85f2.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place off the ground.",
      "origin": "India",
      "form": "Bulk Packages (Sacks)",
      "ingredients": "100% Pure Dry Amla",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "1kg packets in master sacks"
    },
    "description": "Commercial B2B package of Dry Amla designed for commercial kitchens, distributors, food chains and manufacturers. Wholesale pricing from mandi source.",
    "units": [
      {
        "unit": "Pack of 2",
        "mrp": 480,
        "package": "Pouch Sack",
        "perUnit": 235,
        "savings": 10
      },
      {
        "unit": "Pack of 5",
        "mrp": 1200,
        "package": "Pouch Sack",
        "perUnit": 228,
        "savings": 60
      },
      {
        "unit": "Pack of 10",
        "mrp": 2400,
        "package": "Woven Sack",
        "perUnit": 221,
        "savings": 192
      },
      {
        "unit": "Pack of 25",
        "mrp": 6000,
        "package": "Heavy Duty Sack",
        "perUnit": 211,
        "savings": 720
      }
    ]
  },
  {
    "id": 126,
    "slug": "ashwagandha-ashavgandha-bulk-pack",
    "name": "Ashwagandha (Ashavgandha) \u2014 Bulk Pack",
    "category": "bulk",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "Pack of 2 (1kg each)",
    "price": 750,
    "mrp": 1500,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "bulk",
      "wholesale",
      "ashwagandha-ashavgandha"
    ],
    "image": "https://i.pinimg.com/1200x/79/ab/42/79ab4262e7e3ebad23d85634e7d1b23f.jpg",
    "images": [
      "https://i.pinimg.com/1200x/79/ab/42/79ab4262e7e3ebad23d85634e7d1b23f.jpg",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/c4ec2b9c-5245-48f2-9d13-5edf42ab85f2.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place off the ground.",
      "origin": "India",
      "form": "Bulk Packages (Sacks)",
      "ingredients": "100% Pure Ashwagandha (Ashavgandha)",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "1kg packets in master sacks"
    },
    "description": "Commercial B2B package of Ashwagandha (Ashavgandha) designed for commercial kitchens, distributors, food chains and manufacturers. Wholesale pricing from mandi source.",
    "units": [
      {
        "unit": "Pack of 2",
        "mrp": 1500,
        "package": "Pouch Sack",
        "perUnit": 735,
        "savings": 30
      },
      {
        "unit": "Pack of 5",
        "mrp": 3750,
        "package": "Pouch Sack",
        "perUnit": 713,
        "savings": 188
      },
      {
        "unit": "Pack of 10",
        "mrp": 7500,
        "package": "Woven Sack",
        "perUnit": 690,
        "savings": 600
      },
      {
        "unit": "Pack of 25",
        "mrp": 18750,
        "package": "Heavy Duty Sack",
        "perUnit": 660,
        "savings": 2250
      }
    ]
  },
  {
    "id": 127,
    "slug": "mulethi-bulk-pack",
    "name": "Mulethi \u2014 Bulk Pack",
    "category": "bulk",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "Pack of 2 (1kg each)",
    "price": 450,
    "mrp": 900,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "bulk",
      "wholesale",
      "mulethi"
    ],
    "image": "https://i.pinimg.com/1200x/1c/cb/55/1ccb555844df088f67e52e6e1a90e8d1.jpg",
    "images": [
      "https://i.pinimg.com/1200x/1c/cb/55/1ccb555844df088f67e52e6e1a90e8d1.jpg",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/c4ec2b9c-5245-48f2-9d13-5edf42ab85f2.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place off the ground.",
      "origin": "India",
      "form": "Bulk Packages (Sacks)",
      "ingredients": "100% Pure Mulethi",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "1kg packets in master sacks"
    },
    "description": "Commercial B2B package of Mulethi designed for commercial kitchens, distributors, food chains and manufacturers. Wholesale pricing from mandi source.",
    "units": [
      {
        "unit": "Pack of 2",
        "mrp": 900,
        "package": "Pouch Sack",
        "perUnit": 441,
        "savings": 18
      },
      {
        "unit": "Pack of 5",
        "mrp": 2250,
        "package": "Pouch Sack",
        "perUnit": 428,
        "savings": 113
      },
      {
        "unit": "Pack of 10",
        "mrp": 4500,
        "package": "Woven Sack",
        "perUnit": 414,
        "savings": 360
      },
      {
        "unit": "Pack of 25",
        "mrp": 11250,
        "package": "Heavy Duty Sack",
        "perUnit": 396,
        "savings": 1350
      }
    ]
  },
  {
    "id": 128,
    "slug": "almond-bulk-pack",
    "name": "Almond \u2014 Bulk Pack",
    "category": "bulk",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "Pack of 2 (1kg each)",
    "price": 780,
    "mrp": 1560,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "bulk",
      "wholesale",
      "almond"
    ],
    "image": "https://i.pinimg.com/736x/dd/3c/b1/dd3cb1a90ea516f35191c3684e4e63d1.jpg",
    "images": [
      "https://i.pinimg.com/736x/dd/3c/b1/dd3cb1a90ea516f35191c3684e4e63d1.jpg",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/c4ec2b9c-5245-48f2-9d13-5edf42ab85f2.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place off the ground.",
      "origin": "India",
      "form": "Bulk Packages (Sacks)",
      "ingredients": "100% Pure Almond",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "1kg packets in master sacks"
    },
    "description": "Commercial B2B package of Almond designed for commercial kitchens, distributors, food chains and manufacturers. Wholesale pricing from mandi source.",
    "units": [
      {
        "unit": "Pack of 2",
        "mrp": 1560,
        "package": "Pouch Sack",
        "perUnit": 764,
        "savings": 31
      },
      {
        "unit": "Pack of 5",
        "mrp": 3900,
        "package": "Pouch Sack",
        "perUnit": 741,
        "savings": 195
      },
      {
        "unit": "Pack of 10",
        "mrp": 7800,
        "package": "Woven Sack",
        "perUnit": 718,
        "savings": 624
      },
      {
        "unit": "Pack of 25",
        "mrp": 19500,
        "package": "Heavy Duty Sack",
        "perUnit": 686,
        "savings": 2340
      }
    ]
  },
  {
    "id": 129,
    "slug": "kaju-bulk-pack",
    "name": "Kaju \u2014 Bulk Pack",
    "category": "bulk",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "Pack of 2 (1kg each)",
    "price": 840,
    "mrp": 1680,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "bulk",
      "wholesale",
      "kaju"
    ],
    "image": "https://i.pinimg.com/736x/37/d4/73/37d47378cfe8efc4f8c64aa50a832c18.jpg",
    "images": [
      "https://i.pinimg.com/736x/37/d4/73/37d47378cfe8efc4f8c64aa50a832c18.jpg",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/c4ec2b9c-5245-48f2-9d13-5edf42ab85f2.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place off the ground.",
      "origin": "India",
      "form": "Bulk Packages (Sacks)",
      "ingredients": "100% Pure Kaju",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "1kg packets in master sacks"
    },
    "description": "Commercial B2B package of Kaju designed for commercial kitchens, distributors, food chains and manufacturers. Wholesale pricing from mandi source.",
    "units": [
      {
        "unit": "Pack of 2",
        "mrp": 1680,
        "package": "Pouch Sack",
        "perUnit": 823,
        "savings": 34
      },
      {
        "unit": "Pack of 5",
        "mrp": 4200,
        "package": "Pouch Sack",
        "perUnit": 798,
        "savings": 210
      },
      {
        "unit": "Pack of 10",
        "mrp": 8400,
        "package": "Woven Sack",
        "perUnit": 773,
        "savings": 672
      },
      {
        "unit": "Pack of 25",
        "mrp": 21000,
        "package": "Heavy Duty Sack",
        "perUnit": 739,
        "savings": 2520
      }
    ]
  },
  {
    "id": 130,
    "slug": "raisin-kashmish-bulk-pack",
    "name": "Raisin (Kashmish) \u2014 Bulk Pack",
    "category": "bulk",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "Pack of 2 (1kg each)",
    "price": 320,
    "mrp": 640,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "bulk",
      "wholesale",
      "raisin-kashmish"
    ],
    "image": "https://i.pinimg.com/736x/ff/ab/4b/ffab4becedf4d7f03207cafcb1d8da05.jpg",
    "images": [
      "https://i.pinimg.com/736x/ff/ab/4b/ffab4becedf4d7f03207cafcb1d8da05.jpg",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/c4ec2b9c-5245-48f2-9d13-5edf42ab85f2.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place off the ground.",
      "origin": "India",
      "form": "Bulk Packages (Sacks)",
      "ingredients": "100% Pure Raisin (Kashmish)",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "1kg packets in master sacks"
    },
    "description": "Commercial B2B package of Raisin (Kashmish) designed for commercial kitchens, distributors, food chains and manufacturers. Wholesale pricing from mandi source.",
    "units": [
      {
        "unit": "Pack of 2",
        "mrp": 640,
        "package": "Pouch Sack",
        "perUnit": 314,
        "savings": 13
      },
      {
        "unit": "Pack of 5",
        "mrp": 1600,
        "package": "Pouch Sack",
        "perUnit": 304,
        "savings": 80
      },
      {
        "unit": "Pack of 10",
        "mrp": 3200,
        "package": "Woven Sack",
        "perUnit": 294,
        "savings": 256
      },
      {
        "unit": "Pack of 25",
        "mrp": 8000,
        "package": "Heavy Duty Sack",
        "perUnit": 282,
        "savings": 960
      }
    ]
  },
  {
    "id": 131,
    "slug": "apricot-bulk-pack",
    "name": "Apricot \u2014 Bulk Pack",
    "category": "bulk",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "Pack of 2 (1kg each)",
    "price": 800,
    "mrp": 1600,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "bulk",
      "wholesale",
      "apricot"
    ],
    "image": "https://i.pinimg.com/736x/c6/02/50/c60250baec645a7c5345260713ec30ef.jpg",
    "images": [
      "https://i.pinimg.com/736x/c6/02/50/c60250baec645a7c5345260713ec30ef.jpg",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/c4ec2b9c-5245-48f2-9d13-5edf42ab85f2.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place off the ground.",
      "origin": "India",
      "form": "Bulk Packages (Sacks)",
      "ingredients": "100% Pure Apricot",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "1kg packets in master sacks"
    },
    "description": "Commercial B2B package of Apricot designed for commercial kitchens, distributors, food chains and manufacturers. Wholesale pricing from mandi source.",
    "units": [
      {
        "unit": "Pack of 2",
        "mrp": 1600,
        "package": "Pouch Sack",
        "perUnit": 784,
        "savings": 32
      },
      {
        "unit": "Pack of 5",
        "mrp": 4000,
        "package": "Pouch Sack",
        "perUnit": 760,
        "savings": 200
      },
      {
        "unit": "Pack of 10",
        "mrp": 8000,
        "package": "Woven Sack",
        "perUnit": 736,
        "savings": 640
      },
      {
        "unit": "Pack of 25",
        "mrp": 20000,
        "package": "Heavy Duty Sack",
        "perUnit": 704,
        "savings": 2400
      }
    ]
  },
  {
    "id": 132,
    "slug": "pista-bulk-pack",
    "name": "Pista \u2014 Bulk Pack",
    "category": "bulk",
    "extraCategories": [],
    "brand": "Foodville",
    "unit": "Pack of 2 (1kg each)",
    "price": 1100,
    "mrp": 2200,
    "stock": 100,
    "isComingSoon": true,
    "rating": 4.8,
    "tags": [
      "bulk",
      "wholesale",
      "pista"
    ],
    "image": "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/554276ad-dca7-45dd-ba70-9bd0858b5eba.png",
    "images": [
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/554276ad-dca7-45dd-ba70-9bd0858b5eba.png",
      "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/c4ec2b9c-5245-48f2-9d13-5edf42ab85f2.png"
    ],
    "highlights": {
      "shelfLife": "12 Months from Packaging",
      "storage": "Store in a cool, dry place off the ground.",
      "origin": "India",
      "form": "Bulk Packages (Sacks)",
      "ingredients": "100% Pure Pista",
      "foodType": "Vegetarian / Vegan",
      "manufacturedBy": "Foodville Consumer Products Private Limited",
      "netWeight": "1kg packets in master sacks"
    },
    "description": "Commercial B2B package of Pista designed for commercial kitchens, distributors, food chains and manufacturers. Wholesale pricing from mandi source.",
    "units": [
      {
        "unit": "Pack of 2",
        "mrp": 2200,
        "package": "Pouch Sack",
        "perUnit": 1078,
        "savings": 44
      },
      {
        "unit": "Pack of 5",
        "mrp": 5500,
        "package": "Pouch Sack",
        "perUnit": 1045,
        "savings": 275
      },
      {
        "unit": "Pack of 10",
        "mrp": 11000,
        "package": "Woven Sack",
        "perUnit": 1012,
        "savings": 880
      },
      {
        "unit": "Pack of 25",
        "mrp": 27500,
        "package": "Heavy Duty Sack",
        "perUnit": 968,
        "savings": 3300
      }
    ]
  }
];
