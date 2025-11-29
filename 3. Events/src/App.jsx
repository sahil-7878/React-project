import { useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (name) => {
    const newStudent = {
      id: Date.now(),
      name: name,
      isPresent: null,
      showDetails: false,
    };
    setStudents([...students, newStudent]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const toggleDetails = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, showDetails: !student.showDetails }
          : student
      )
    );
  };

  const markAttendance = (id, status) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, isPresent: status === 'present' } : student
      )
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30 font-sans">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2.5 rounded-xl shadow-lg shadow-indigo-500/20">
                {/* SVG: GraduationCap */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <span className="text-indigo-400 font-bold tracking-wider text-sm uppercase">Dashboard</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Activity</span>
            </h1>
          </div>

          {/* Stats Dashboard */}
          <div className="flex gap-4">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 px-5 py-3 rounded-2xl min-w-[100px]">
              <span className="block text-2xl font-bold text-white">{students.length}</span>
              <span className="text-xs text-slate-500 uppercase font-semibold">Total</span>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 px-5 py-3 rounded-2xl min-w-[100px]">
              <span className="block text-2xl font-bold text-emerald-400">
                {students.filter(s => s.isPresent).length}
              </span>
              <span className="text-xs text-slate-500 uppercase font-semibold">Present</span>
            </div>
          </div>
        </header>

        {/* Components */}
        <StudentForm onAddStudent={addStudent} />
        <StudentList 
          students={students} 
          onDelete={deleteStudent}
          onToggle={toggleDetails}
          onMark={markAttendance}
        />
      </div>
    </div>
  );
}

export default App;