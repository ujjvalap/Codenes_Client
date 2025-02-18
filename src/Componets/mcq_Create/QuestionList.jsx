 /* eslint-disable react/prop-types */
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ChevronDownIcon, ChevronUpIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

const QuestionDashboard = () => {
  const [questions, setQuestions] = useState([
    {
      id: uuidv4(),
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswers: ["4"],
      subject: "Math",
      type: "userCreated",
    },
    {
      id: uuidv4(),
      question: "Capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correctAnswers: ["Paris"],
      subject: "Geography",
      type: "previousTest",
    },
  ]);

  const handleEdit = (question) => {
    console.log("Edit Question:", question);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this question?")) {
      setQuestions(questions.filter((q) => q.id !== id));
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">MCQ Question Dashboard</h2>
      <QuestionList questions={questions} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

const SubjectContainer = ({ subject, questions, onEdit, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const userCreated = questions.filter((q) => q.type === "userCreated");
  const previousTest = questions.filter((q) => q.type === "previousTest");

  return (
    <div className="mb-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div 
        className="p-4 bg-blue-50 flex justify-between items-center cursor-pointer hover:bg-blue-100 transition-all duration-300"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-lg font-semibold text-gray-800">{subject}</h3>
        <div className="text-gray-500">{isExpanded ? <ChevronUpIcon className="h-6 w-6" /> : <ChevronDownIcon className="h-6 w-6" />}</div>
      </div>
      {isExpanded && (
        <div className="p-4 space-y-4">
          {userCreated.length > 0 && <QuestionSection title="User Created Questions" questions={userCreated} onEdit={onEdit} onDelete={onDelete} />}
          {previousTest.length > 0 && <QuestionSection title="Previously Conducted Test Questions" questions={previousTest} onEdit={onEdit} onDelete={onDelete} />}
        </div>
      )}
    </div>
  );
};

const QuestionSection = ({ title, questions, onEdit, onDelete }) => (
  <div>
    <h4 className="text-md font-semibold text-gray-700 mb-2">{title}</h4>
    <div className="space-y-3">
      {questions.map((q) => (
        <div key={q.id} className="p-4 border border-gray-200 rounded-lg bg-gray-50">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-medium text-gray-800">{q.question}</p>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {q.options.map((opt, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 text-sm rounded-lg ${q.correctAnswers.includes(opt) ? "bg-green-200 text-green-900" : "bg-gray-200 text-gray-800"}`}
                  >
                    {String.fromCharCode(65 + i)}. {opt}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => onEdit(q)} className="text-blue-500 hover:text-blue-700 transition p-1">
                <PencilIcon className="h-5 w-5" />
              </button>
              <button onClick={() => onDelete(q.id)} className="text-red-500 hover:text-red-700 transition p-1">
                <TrashIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const QuestionList = ({ questions, onEdit, onDelete }) => {
  const groupedQuestions = questions.reduce((acc, question) => {
    const subject = question.subject || "Uncategorized";
    if (!acc[subject]) acc[subject] = [];
    acc[subject].push(question);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      {Object.entries(groupedQuestions).map(([subject, questions]) => (
        <SubjectContainer key={subject} subject={subject} questions={questions} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default QuestionDashboard; 