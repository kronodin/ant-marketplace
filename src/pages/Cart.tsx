import { Link } from 'react-router-dom'

export default function Cart() {
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
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-4">Your cart</h1>
        <div className="rounded-xl border p-6 text-slate-600">Your cart is empty.</div>
        <Link to="/" className="mt-4 inline-block underline">Continue shopping</Link>
      </main>
    </div>
  )
}
