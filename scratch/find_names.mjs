import { products } from '../src/data/products.js';

const keywords = ['oregano', 'pizza', 'pasta', 'basil', 'chilli', 'seeds', 'peri'];

products.forEach(p => {
  const nameLower = p.name.toLowerCase();
  if (keywords.some(k => nameLower.includes(k))) {
    console.log(`ID: ${p.id}, Slug: '${p.slug}', Name: '${p.name}'`);
  }
});
