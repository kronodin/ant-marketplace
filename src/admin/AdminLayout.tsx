import { Link } from 'react-router-dom'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const links = [
    ['/admin', 'Dashboard'],
    ['/admin/products', 'Products'],
  ]
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="font-bold">ANT Admin</div>
          <nav className="text-sm flex gap-4">
            {links.map(([to, label]) => (
              <Link key={to} to={to} className="hover:underline">{label}</Link>
            ))}
            <Link to="/" className="hover:underline">Storefront</Link>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-6">{children}</main>
    </div>
  )
}
