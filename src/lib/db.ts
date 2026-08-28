import type { Product, Seller, SiteSettings } from '../types'

export const demoProducts: Product[] = Array.from({ length: 24 }).map((_, i) => ({
  id: `PRD-${1001 + i}`,
  sellerId: 'SEL-1',
  categoryId: i % 3 === 0 ? 'CAT-1' : i % 3 === 1 ? 'CAT-2' : 'CAT-3',
  name: `ANT Product ${1001 + i}`,
  slug: `ant-product-${1001 + i}`,
  description: 'Production-ready demo product with real editable fields.',
  shortDescription: 'Short demo description.',
  price: 1000 + i * 150,
  salePrice: i % 4 === 0 ? 800 + i * 120 : undefined,
  sku: `SKU-${1001 + i}`,
  barcode: `BAR-${1001 + i}`,
  weight: 0.5 + (i % 5) * 0.2,
  dimensions: '10x10x5',
  images: [],
  tags: ['ant', 'demo', i % 2 === 0 ? 'bestseller' : 'new'],
  inventory: 50 - i,
  reserved: 0,
  lowStock: 5,
  featured: i < 6,
  bestseller: i % 3 === 0,
  newArrival: i % 4 === 1,
  deal: i % 5 === 0,
  createdAt: new Date().toISOString(),
}))

export const demoSellers: Seller[] = [
  { id: 'SEL-1', userId: 'u1', storeName: 'Jamaica Solar Hub', slug: 'jamaica-solar-hub', rating: 4.8, verified: true, description: 'Solar and backup power.' },
  { id: 'SEL-2', userId: 'u2', storeName: 'Tech World', slug: 'tech-world', rating: 4.2, verified: true },
  { id: 'SEL-3', userId: 'u3', storeName: 'Home Secure Energy', slug: 'home-secure-energy', rating: 4.9, verified: true },
]

export const demoSettings: SiteSettings = {
  id: 'SET-1',
  storeName: 'ANT Marketplace',
  colors: { primary: '#0f172a', accent: '#f59e0b', bg: '#ffffff' },
  fonts: { heading: 'Inter', body: 'Inter' },
  seo: { title: 'ANT Marketplace', description: 'Multi-vendor marketplace.' },
  socials: {},
  currency: 'JMD',
}
