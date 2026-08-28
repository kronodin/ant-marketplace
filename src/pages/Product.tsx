import { useParams, Link } from 'react-router-dom'
import { demoProducts } from '../lib/db'

export default function Product() {
  const { id } = useParams()
  const product = demoProducts.find(p => p.id === id) || demoProducts[0]
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">ANT</Link>
          <nav className="flex gap-6 text-sm">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/cart" className="hover:underline">Cart</Link>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
        <div className="aspect-square rounded-2xl bg-slate-100" />
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-slate-600">{product.shortDescription}</p>
          <div className="text-2xl font-semibold">J${product.price.toLocaleString()}</div>
          <p className="text-sm text-slate-600">SKU: {product.sku} | Stock: {product.inventory}</p>
          <div className="flex gap-3">
            <button className="rounded-lg bg-slate-900 px-4 py-2 text-white">Add to cart</button>
            <button className="rounded-lg border px-4 py-2">Buy now</button>
          </div>
        </div>
      </main>
    </div>
  )
}
