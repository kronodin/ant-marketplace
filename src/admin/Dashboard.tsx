export default function Dashboard() {
  const cards = [
    ['Today\'s sales', 'J$124,500'],
    ['Total revenue', 'J$2,134,000'],
    ['Orders', '87'],
    ['Customers', '1,204'],
    ['Sellers', '34'],
    ['Products', '412'],
    ['Low stock', '18'],
    ['Pending orders', '12'],
    ['Pending sellers', '3'],
    ['Returns', '4'],
    ['Refunds', '2'],
    ['Abandoned carts', '29'],
    ['Support tickets', '11'],
  ]
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Control Center</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map(([title, value]) => (
          <div key={title} className="rounded-xl border bg-white p-4">
            <div className="text-sm text-slate-600">{title}</div>
            <div className="mt-1 text-xl font-semibold">{value}</div>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-xl border bg-white p-4 h-64">Revenue</div>
        <div className="rounded-xl border bg-white p-4 h-64">Orders</div>
      </div>
    </div>
  )
}
