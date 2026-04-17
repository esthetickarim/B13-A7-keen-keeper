export default function StatsCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border text-center hover:shadow-md transition">
      <h2 className="text-2xl font-semibold">{value}</h2>
      <p className="text-sm text-gray-500 mt-1">{title}</p>
    </div>
  );
}