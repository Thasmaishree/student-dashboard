import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

export default function AttentionScatter({data=[]}) {
  const points = data.map(r => ({ attention: +r.attention, score: +r.assessment_score, persona: r.persona, name: r.name }));
  return (
    <div className="card">
      <h3 className="mb-2 font-semibold">Attention vs Performance</h3>
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart>
          <CartesianGrid />
          <XAxis dataKey="attention" name="Attention" />
          <YAxis dataKey="score" name="Score" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="Students" data={points} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
