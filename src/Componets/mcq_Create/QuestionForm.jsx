import React, { useState, useEffect } from "react";
import { XCircleIcon, CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const QuestionForm = ({ onSave, selectedSubject }) => {
  const [newQuestion, setNewQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    if (options.some(opt => opt.trim() !== "")) {
      setCorrectAnswers(prev => prev.filter(c => options.includes(c)));
    }
  }, [options]);

  const validateForm = () => {
    const newErrors = {};
    if (!newQuestion.trim()) newErrors.question = "Question is required";
    options.forEach((opt, index) => {
      if (!opt.trim()) newErrors[`option${index}`] = "Option is required";
    });
    if (correctAnswers.length === 0) newErrors.correctAnswers = "Select at least one correct answer";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCorrectAnswerChange = (option) => {
    setCorrectAnswers(prev => 
      prev.includes(option) 
        ? prev.filter(ans => ans !== option) 
        : [...prev, option]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    onSave({ 
      question: newQuestion, 
      options, 
      correctAnswers,
      subject: selectedSubject 
    }, editingIndex);
    
    resetForm();
  };

  const resetForm = () => {
    setNewQuestion("");
    setOptions(["", "", "", ""]);
    setCorrectAnswers([]);
    setEditingIndex(null);
    setErrors({});
    setTouched({});
  };

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    validateForm();
  };

  return (
    <motion.form 
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg border border-blue-50"
    >
      <div className="flex justify-between items-start">
        <h2 className="text-2xl font-bold text-gray-800">
          {editingIndex !== null ? "✏️ Edit Question" : "📝 New Question"}
          {selectedSubject && (
            <span className="block text-sm font-normal text-blue-600 mt-1">
              Subject: <span className="font-semibold">{selectedSubject}</span>
            </span>
          )}
        </h2>
        {editingIndex !== null && (
          <button
            type="button"
            onClick={resetForm}
            className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close editing"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        )}
      </div>

      {/* Question Input */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 flex items-center">
          <span className="mr-2">📌 Question</span>
          {errors.question && (
            <span className="text-red-500 text-sm flex items-center">
              <XCircleIcon className="h-4 w-4 mr-1" />
              {errors.question}
            </span>
          )}
        </label>
        <textarea
          placeholder="Enter your question..."
          className={`w-full p-3 border-2 ${
            errors.question ? "border-red-300" : "border-gray-200 hover:border-blue-200"
          } rounded-lg focus:ring-2 focus:ring-blue-500 transition-all`}
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          onBlur={() => handleBlur('question')}
          rows="3"
        />
      </div>

      {/* Options Input */}
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">🎯 Options</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {options.map((option, index) => (
            <div key={index} className="relative">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-500 absolute left-3 top-3.5">
                  {String.fromCharCode(65 + index)}.
                </span>
                <input
                  type="text"
                  placeholder={`Option ${index + 1}`}
                  className={`w-full pl-8 pr-3 py-2 border-2 ${
                    errors[`option${index}`] ? "border-red-300" : "border-gray-200 hover:border-blue-200"
                  } rounded-lg focus:ring-2 focus:ring-blue-500 transition-all`}
                  value={option}
                  onChange={(e) => {
                    const newOptions = [...options];
                    newOptions[index] = e.target.value;
                    setOptions(newOptions);
                  }}
                  onBlur={() => handleBlur(`option${index}`)}
                />
              </div>
              {errors[`option${index}`] && (
                <p className="text-red-500 text-sm mt-1 flex items-center ml-1">
                  <XCircleIcon className="h-4 w-4 mr-1" /> 
                  {errors[`option${index}`]}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Correct Answers Selection */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          ✅ Correct Answers
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {options.filter(opt => opt.trim() !== "").map((opt, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleCorrectAnswerChange(opt)}
              className={`flex items-center justify-center space-x-2 p-2 rounded-lg transition-all ${
                correctAnswers.includes(opt)
                  ? "bg-green-100 border-2 border-green-500 scale-[1.02]"
                  : "bg-gray-50 border-2 border-gray-200 hover:border-blue-200"
              }`}
            >
              <CheckCircleIcon 
                className={`h-5 w-5 ${
                  correctAnswers.includes(opt) ? "text-green-600" : "text-gray-400"
                }`}
              />
              <span className="font-medium text-gray-700">
                {String.fromCharCode(65 + index)}
              </span>
            </button>
          ))}
        </div>
        {errors.correctAnswers && (
          <p className="text-red-500 text-sm mt-1 flex items-center">
            <XCircleIcon className="h-4 w-4 mr-1" /> {errors.correctAnswers}
          </p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-3">
        {editingIndex !== null ? (
          <>
            <button
              type="button"
              onClick={resetForm}
              className="px-4 py-2 border-2 border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center shadow-md hover:shadow-lg"
            >
              <CheckCircleIcon className="h-5 w-5 mr-2" />
              Update Question
            </button>
          </>
        ) : (
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center shadow-md hover:shadow-lg w-full justify-center"
          >
            <CheckCircleIcon className="h-5 w-5 mr-2" />
            Save Question to {selectedSubject || "Subject"}
          </button>
        )}
      </div>
    </motion.form>
  );
};

export default QuestionForm;