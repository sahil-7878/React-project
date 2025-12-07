import React, { useState } from 'react';

function FeedbackForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    issueCategory: '',
    priority: '',
    description: '',
    stepsToReproduce: [''],
    suggestedImprovements: [''],
    screenshotUrl: '',
    additionalNotes: ''
  });

  const [submittedFeedback, setSubmittedFeedback] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleArrayChange = (index, value, field) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData(prev => ({
      ...prev,
      [field]: newArray
    }));
  };

  const addField = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeField = (index, field) => {
    const newArray = formData[field].filter((_, i) => i !== index);
    setFormData(prev => ({
      ...prev,
      [field]: newArray
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedFeedback(prev => [...prev, formData]);
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      issueCategory: '',
      priority: '',
      description: '',
      stepsToReproduce: [''],
      suggestedImprovements: [''],
      screenshotUrl: '',
      additionalNotes: ''
    });
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative max-w-2xl mx-auto">
        {/* Feedback Form */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Submit Your Feedback</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name & Email in Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                />
              </div>
            </div>

            {/* Category & Priority in Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="issueCategory" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Issue Category
                </label>
                <select
                  id="issueCategory"
                  name="issueCategory"
                  value={formData.issueCategory}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
                  required
                >
                  <option value="">Select...</option>
                  <option value="bug">Bug</option>
                  <option value="feature">Feature Request</option>
                  <option value="ui">UI/UX Issue</option>
                  <option value="performance">Performance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Priority
                </label>
                <select
                  id="priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
                  required
                >
                  <option value="">Select...</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="critical">Critical</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1.5">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                required
              />
            </div>

            {/* Steps to Reproduce */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Steps to Reproduce
              </label>
              {formData.stepsToReproduce.map((step, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={step}
                    onChange={(e) => handleArrayChange(index, e.target.value, 'stepsToReproduce')}
                    className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                  {formData.stepsToReproduce.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeField(index, 'stepsToReproduce')}
                      className="w-10 h-10 flex items-center justify-center bg-red-500 text-white text-xl rounded-lg hover:bg-red-600 transition"
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => addField('stepsToReproduce')}
                className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition font-medium"
              >
                + Add
              </button>
            </div>

            {/* Suggested Improvements */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Suggested Improvements
              </label>
              {formData.suggestedImprovements.map((improvement, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={improvement}
                    onChange={(e) => handleArrayChange(index, e.target.value, 'suggestedImprovements')}
                    className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                  {formData.suggestedImprovements.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeField(index, 'suggestedImprovements')}
                      className="w-10 h-10 flex items-center justify-center bg-red-500 text-white text-xl rounded-lg hover:bg-red-600 transition"
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => addField('suggestedImprovements')}
                className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition font-medium"
              >
                + Add
              </button>
            </div>

            {/* Screenshot URL */}
            <div>
              <label htmlFor="screenshotUrl" className="block text-sm font-medium text-gray-700 mb-1.5">
                Screenshot URL (Optional)
              </label>
              <input
                type="url"
                id="screenshotUrl"
                name="screenshotUrl"
                value={formData.screenshotUrl}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>

            {/* Additional Notes */}
            <div>
              <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-1.5">
                Additional Notes
              </label>
              <textarea
                id="additionalNotes"
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl"
            >
              Submit Feedback
            </button>
          </form>
        </div>

        {/* Submitted Feedback Section */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Submitted Feedback</h2>
          {submittedFeedback.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No feedback submitted yet.</p>
          ) : (
            <div className="space-y-4">
              {submittedFeedback.map((feedback, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
                  <p className="font-semibold text-gray-800 text-lg">{feedback.fullName}</p>
                  <p className="text-sm text-gray-600">{feedback.email}</p>
                  <div className="mt-3 flex gap-4 text-sm">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                      {feedback.issueCategory}
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                      {feedback.priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FeedbackForm;