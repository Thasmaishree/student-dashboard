import { useState, useMemo } from "react";

export default function StudentTable({data=[], onSelectStudent}) {
  const [q, setQ] = useState("");
  const [sortKey, setSortKey] = useState("assessment_score");
  const [sortDir, setSortDir] = useState("desc");

  const filtered = useMemo(() => {
    const arr = data.filter(r => r.name.toLowerCase().includes(q.toLowerCase()) || r.student_id.toLowerCase().includes(q.toLowerCase()));
    arr.sort((a,b) => (sortDir==="asc" ? a[sortKey]-b[sortKey] : b[sortKey]-a[sortKey]));
    return arr;
  }, [data,q,sortKey,sortDir]);

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-2">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search name or id" className="p-2 border rounded"/>
        <div>
          <select value={sortKey} onChange={e=>setSortKey(e.target.value)} className="p-2 mr-2 border rounded">
            <option value="assessment_score">Score</option>
            <option value="attention">Attention</option>
            <option value="comprehension">Comprehension</option>
          </select>
          <button onClick={()=>setSortDir(s=> s==="asc" ? "desc" : "asc")} className="p-2 border rounded">{sortDir}</button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th>ID</th><th>Name</th><th>Class</th><th>Score</th><th>Persona</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(r => (
              <tr key={r.student_id} className="cursor-pointer hover:bg-gray-50" onClick={()=>onSelectStudent && onSelectStudent(r)}>
                <td>{r.student_id}</td><td>{r.name}</td><td>{r.class}</td><td>{r.assessment_score}</td><td>{r.persona}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
