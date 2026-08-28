import { demoProducts } from '../lib/db'

export default function SellerProducts() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Products</h1>
        <button className="rounded-lg bg-slate-900 px-3 py-2 text-white text-sm">Add Product</button>
      </div>
      <div className="rounded-xl border bg-white overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left">
            <tr><th className="px-4 py-3">Product</th><th className="px-4 py-3">Price</th><th className="px-4 py-3">Inventory</th><th className="px-4 py-3">Status</th></tr>
          </thead>
          <tbody>
            {demoProducts.slice(0, 12).map(p => (
              <tr key={p.id} className="border-t">
                <td className="px-4 py-3">{p.name}</td>
                <td className="px-4 py-3">J${p.price.toLocaleString()}</td>
                <td className="px-4 py-3">{p.inventory}</td>
                <td className="px-4 py-3">{p.featured ? 'Featured' : 'Active'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
