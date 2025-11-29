import StudentCard from './StudentCard'

const StudentList = ({ students, onDelete, onToggle, onMark }) => {
  //Conditional Rendering for Empty State
  if (students.length === 0) {
    return (
      <div className="text-center py-20 px-4 rounded-3xl border-2 border-dashed border-slate-700/50 bg-slate-800/20">
        <div className="bg-slate-800/50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          {/* SVG: LayoutGrid */}
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-300 mb-2">No Students Found</h3>
        <p className="text-slate-500 max-w-sm mx-auto">
          The list is currently empty. Use the form above to add students to the dashboard.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onDelete={onDelete}
          onToggle={onToggle}
          onMark={onMark}
        />
      ))}
    </div>
  );
};

export default StudentList;