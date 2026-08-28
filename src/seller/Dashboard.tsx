export default function Dashboard() {
  const cards = [
    ['Sales', 'J$342,500'],
    ['Revenue', 'J$289,000'],
    ['Orders', '18'],
    ['Products', '64'],
    ['Inventory', '312'],
    ['Customers', '142'],
    ['Reviews', '27'],
    ['Payouts', 'J$41,200'],
  ]
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Seller Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map(([title, value]) => (
          <div key={title} className="rounded-xl border bg-white p-4">
            <div className="text-sm text-slate-600">{title}</div>
            <div className="mt-1 text-xl font-semibold">{value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
