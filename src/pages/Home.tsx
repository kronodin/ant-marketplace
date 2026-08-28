import { Link } from 'react-router-dom'
import { demoProducts, demoSettings } from '../lib/db'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tight">ANT</Link>
          <nav className="hidden md:flex gap-6 text-sm">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/cart" className="hover:underline">Cart</Link>
            <Link to="/admin" className="hover:underline">Admin</Link>
            <Link to="/seller" className="hover:underline">Seller</Link>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-10 space-y-10">
        <section className="rounded-2xl border bg-slate-50 p-10">
          <h1 className="text-4xl font-bold mb-2">{demoSettings.storeName}</h1>
          <p className="text-slate-600 mb-6">Multi-vendor marketplace. Real products. Real control.</p>
          <div className="flex gap-3">
            <Link to="/" className="rounded-lg bg-slate-900 px-4 py-2 text-white">Shop now</Link>
            <Link to="/admin" className="rounded-lg border px-4 py-2">Open control center</Link>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Featured products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {demoProducts.filter(p => p.featured).slice(0, 8).map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="rounded-xl border p-4 hover:shadow-md transition">
                <div className="aspect-square rounded-lg bg-slate-100 mb-3" />
                <div className="text-sm font-medium line-clamp-2">{p.name}</div>
                <div className="mt-2 text-sm font-semibold">J${p.price.toLocaleString()}</div>
                {p.salePrice && <div className="text-xs text-slate-500 line-through">J${p.salePrice.toLocaleString()}</div>}
              </Link>
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t py-10 text-center text-sm text-slate-600">ANT Marketplace. Built for real operations.</footer>
    </div>
  )
}
