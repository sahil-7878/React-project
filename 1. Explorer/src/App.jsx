import './App.css'
import ClassCounter from './component/ClassComponent'
import EventRegistration from './component/Form'
import Intro from './component/Intro'
import LifecycleSubject from './component/LifeCycle'
import FruitMarket from './component/List'
import StudentProfile from './component/StateProps'

function App() {

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      
      {/* 1. Component, JSX, Modules (Intro) */}
      <div className="bg-white border-b border-slate-200 mb-12">
        <Intro />
      </div>

      <div className="max-w-6xl mx-auto px-8 space-y-24">
        
        {/* 2. State & Props */}
        <section className="flex flex-col items-center">
          <div className="mb-8 text-center">
             <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">Module 01</span>
             <h2 className="text-3xl font-bold text-slate-900 mt-3">State & Properties</h2>
          </div>
          <StudentProfile name="Alex Johnson" course="React Development" />
        </section>

        {/* 3. List Rendering & Filter */}
        <section className="flex flex-col items-center">
          <div className="mb-8 text-center">
             <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full">Module 02</span>
             <h2 className="text-3xl font-bold text-slate-900 mt-3">List Filtering</h2>
          </div>
          <FruitMarket />
        </section>

        {/* 4. Forms & Event Handling */}
        <section className="flex flex-col items-center">
          <div className="mb-8 text-center">
             <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">Module 03</span>
             <h2 className="text-3xl font-bold text-slate-900 mt-3">Forms & Events</h2>
          </div>
          <EventRegistration />
        </section>

        {/* 5. LifeCycle */}
        <section className="flex flex-col items-center">
          <div className="mb-8 text-center">
             <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full">Module 04</span>
             <h2 className="text-3xl font-bold text-slate-900 mt-3">Component Lifecycle</h2>
          </div>
          <LifecycleSubject />
        </section>

        {/* 6. Class Components */}
        <section className="flex flex-col items-center">
          <div className="mb-8 text-center">
             <span className="text-xs font-bold text-slate-600 uppercase tracking-widest bg-slate-200 px-3 py-1 rounded-full">Module 05</span>
             <h2 className="text-3xl font-bold text-slate-900 mt-3">Class Components</h2>
             <p className="text-slate-500 mt-2 max-w-md">Legacy state management using <code>this.state</code> and lifecycle methods.</p>
          </div>
          <ClassCounter />
        </section>
      </div>
    </div>
  )
}

export default App