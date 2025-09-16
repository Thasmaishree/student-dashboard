import { useEffect, useState } from "react";
import OverviewStats from "../components/OverviewStats";
import SkillBarChart from "../components/SkillBarChart";
import AttentionScatter from "../components/AttentionScatter";
import RadarProfile from "../components/RadarProfile";
import StudentTable from "../components/StudentTable";

export default function Home() {
  const [data, setData] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    fetch("/data/students_with_personas.json")
      .then(res => res.json())
      .then(j => setData(j));
  }, []);

  return (
    <div className="p-6 mx-auto max-w-7xl">
      <h1 className="mb-4 text-2xl font-bold">🧠 Cognitive Skills Dashboard</h1>
      <OverviewStats data={data} />
      <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2">
        <SkillBarChart data={data} />
        <AttentionScatter data={data} />
      </div>
      <div className="mt-6">
        {selectedStudent ? (
          <RadarProfile student={selectedStudent} />
        ) : (
          <p className="text-sm text-gray-500">Select a student to see radar profile.</p>
        )}
      </div>
      <div className="mt-6">
        <StudentTable data={data} onSelectStudent={setSelectedStudent} />
      </div>
    </div>
  );
}