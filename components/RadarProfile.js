import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
export default function RadarProfile({student}) {
  if(!student) return null;
  const data = [
    {subject: "comprehension", A: +student.comprehension},
    {subject: "attention", A: +student.attention},
    {subject: "focus", A: +student.focus},
    {subject: "retention", A: +student.retention},
    {subject: "engagement_time", A: +student.engagement_time},
    {subject: "assessment_score", A: +student.assessment_score},
  ];
  return (
    <div className="card">
      <h3 className="mb-2 font-semibold">{student.name} Profile</h3>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar name={student.name} dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.4} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
