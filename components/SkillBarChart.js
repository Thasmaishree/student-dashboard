import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

function computeByClass(data) {
  const map = {};
  data.forEach(r => {
    if(!map[r.class]) map[r.class] = {class: r.class, comprehension:0, attention:0, focus:0, retention:0, count:0};
    map[r.class].comprehension += +r.comprehension;
    map[r.class].attention += +r.attention;
    map[r.class].focus += +r.focus;
    map[r.class].retention += +r.retention;
    map[r.class].count++;
  });
  return Object.values(map).map(c => ({
    class: c.class,
    comprehension: +(c.comprehension/c.count).toFixed(1),
    attention: +(c.attention/c.count).toFixed(1),
    focus: +(c.focus/c.count).toFixed(1),
    retention: +(c.retention/c.count).toFixed(1),
  }));
}

export default function SkillBarChart({data = []}) {
  const chartData = computeByClass(data);
  return (
    <div className="card">
      <h3 className="mb-2 font-semibold">Average Skills by Class</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="class"/>
          <YAxis/>
          <Tooltip/>
          <Legend />
          <Bar dataKey="comprehension" fill="#8884d8" />
          <Bar dataKey="attention" fill="#82ca9d" />
          <Bar dataKey="focus" fill="#ffc658" />
          <Bar dataKey="retention" fill="#ff8042" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
