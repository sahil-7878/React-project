import React, { useState } from "react";

const EventRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "Developer"
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev, [name]: value
    }));

    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
      
      {/* Left Column: The Form */}
      <div className="flex-1">
        <h2 className="text-2xl font-black text-slate-800 mb-1">Event Registration 🎟️</h2>
        <p className="text-slate-500 mb-6 text-sm">Fill out the form to see controlled inputs in action.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Full Name</label>
            <input 
              type="text" 
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Jane Doe"
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Email Address</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. jane@example.com"
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Role</label>
            <select 
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            >
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Manager">Product Manager</option>
            </select>
          </div>

          <button 
            type="submit"
            className="w-full py-3 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-lg transition-all transform active:scale-95 shadow-lg mt-2"
          >
            {submitted ? "Registered!" : "Register Now"}
          </button>
        </form>
      </div>

      {/* Right Column: Real-time Visualization */}
      <div className="flex-1 bg-slate-50 rounded-xl p-6 border border-slate-100 flex flex-col justify-center">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Live Preview</h3>
        
        {/* Ticket Card Preview */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 relative overflow-hidden">
          {/* Decorative Top */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
          
          <div className="flex items-start justify-between mb-4">
             <div>
               <p className="text-xs text-slate-400 font-bold uppercase">Attendee</p>
               <h3 className="text-xl font-bold text-slate-800 break-all">
                 {formData.fullName || <span className="text-slate-300 italic">Your Name</span>}
               </h3>
             </div>
             <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-xl">
               {formData.role === "Designer" ? "🎨" : formData.role === "Manager" ? "💼" : "💻"}
             </div>
          </div>

          <div className="space-y-2">
            <div>
              <p className="text-xs text-slate-400 font-bold uppercase">Email</p>
              <p className="text-slate-600 text-sm break-all">
                {formData.email || <span className="text-slate-300 italic">email@address.com</span>}
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-400 font-bold uppercase">Role</p>
              <span className="inline-block mt-1 px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded">
                {formData.role}
              </span>
            </div>
          </div>

          {/* Submitted Stamp */}
          {submitted && (
            <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px] flex items-center justify-center z-10 animate-fadeIn">
              <div className="border-4 border-green-500 text-green-500 font-black text-2xl uppercase p-2 -rotate-12 rounded-lg opacity-80 select-none">
                Approved
              </div>
            </div>
          )}
        </div>
        
        <p className="text-xs text-center text-slate-400 mt-6">
          The card above updates in real-time as you type in the form state.
        </p>
      </div>

    </div>
  );
};

export default EventRegistration;