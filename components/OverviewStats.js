export default function OverviewStats({data = []}) {
  if(!data.length) return <div className="card">Loading...</div>;
  const n = data.length;
  const avg = key => (data.reduce((s,d) => s + Number(d[key]||0),0)/n).toFixed(1);

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div className="card"><div className="text-sm">Students</div><div className="text-xl font-bold">{n}</div></div>
      <div className="card"><div className="text-sm">Avg Score</div><div className="text-xl font-bold">{avg('assessment_score')}</div></div>
      <div className="card"><div className="text-sm">Avg Attention</div><div className="text-xl font-bold">{avg('attention')}</div></div>
      <div className="card"><div className="text-sm">Avg Comprehension</div><div className="text-xl font-bold">{avg('comprehension')}</div></div>
    </div>
  )
}
