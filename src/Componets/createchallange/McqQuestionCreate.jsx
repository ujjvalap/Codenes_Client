import React, { useState } from "react";

const MCQQuestionManager = ({ subjects }) => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [questions, setQuestions] = useState({});
  const [newQuestion, setNewQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [showContent, setShowContent] = useState(false);

  // Toggle content visibility
  const toggleContent = () => {
    setShowContent(!showContent);
  };

  // Handle adding or updating a question
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedSubject) {
      alert("Please select a subject first.");
      return;
    }

    if (newQuestion.trim() === "" || options.some(opt => opt.trim() === "")) {
      alert("Please fill all fields before submitting.");
      return;
    }

    const questionData = { question: newQuestion, options, correctAnswer };
    const updatedQuestions = { ...questions };

    if (!updatedQuestions[selectedSubject]) {
      updatedQuestions[selectedSubject] = [];
    }

    if (editingIndex !== null) {
      updatedQuestions[selectedSubject][editingIndex] = questionData;
      setEditingIndex(null);
    } else {
      updatedQuestions[selectedSubject].push(questionData);
    }

    setQuestions(updatedQuestions);
    setNewQuestion("");
    setOptions(["", "", "", ""]);
    setCorrectAnswer("");
  };

  // Handle question deletion
  const handleDelete = (index) => {
    const updatedQuestions = { ...questions };
    updatedQuestions[selectedSubject] = updatedQuestions[selectedSubject].filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  // Handle editing an existing question
  const handleEdit = (index) => {
    const q = questions[selectedSubject][index];
    setNewQuestion(q.question);
    setOptions(q.options);
    setCorrectAnswer(q.correctAnswer);
    setEditingIndex(index);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 
        className="flex justify-between items-center bg-gradient-to-r from-[#0066CC] to-[#004080] text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity cursor-pointer" 
        onClick={toggleContent}
      >
        Manage MCQ Questions
      </h2>

      {showContent && (
        <>
          {/* Subject Selection */}
          <select
            className="w-full p-2 border border-gray-300 rounded mb-4"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            <option value="">Select Subject</option>
            {subjects.map((subject, index) => (
              <option key={index} value={subject}>{subject}</option>
            ))}
          </select>

          {/* Form for Adding or Updating Question */}
          {selectedSubject && (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Question Input */}
              <input
                type="text"
                placeholder="Enter Question"
                className="w-full p-2 border border-gray-300 rounded"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                required
              />

              {/* Options Input */}
              {options.map((option, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={`Option ${index + 1}`}
                  className="w-full p-2 border border-gray-300 rounded"
                  value={option}
                  onChange={(e) => {
                    const newOptions = [...options];
                    newOptions[index] = e.target.value;
                    setOptions(newOptions);
                  }}
                  required
                />
              ))}

              {/* Correct Answer Selection */}
              <select
                className="w-full p-2 border border-gray-300 rounded"
                value={correctAnswer}
                onChange={(e) => setCorrectAnswer(e.target.value)}
                required
              >
                <option value="" disabled>Select Correct Answer</option>
                {options.map((opt, index) => (
                  <option key={index} value={opt}>{opt}</option>
                ))}
              </select>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:opacity-90 transition"
              >
                {editingIndex !== null ? "Update Question" : "Add Question"}
              </button>
            </form>
          )}

          {/* Display Questions */}
          {selectedSubject && questions[selectedSubject] && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">{selectedSubject} - Questions List</h3>
              <ul className="space-y-4">
                {questions[selectedSubject].map((q, index) => (
                  <li key={index} className="p-4 bg-gray-100 rounded-lg">
                    <p className="font-semibold">{q.question}</p>
                    <ul className="ml-4 mt-2 list-disc">
                      {q.options.map((opt, i) => (
                        <li key={i} className={opt === q.correctAnswer ? "text-green-600 font-semibold" : ""}>
                          {opt}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-2 flex gap-4">
                      <button
                        onClick={() => handleEdit(index)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded hover:opacity-90 transition"
                      >
                        ✏ Edit
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:opacity-90 transition"
                      >
                        🗑 Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MCQQuestionManager;


