import React, { useState } from "react";
import SubjectSelector from "./SubjectSelector";
import QuestionList from "./QuestionList";
import QuestionForm from "./QuestionForm";
import SubjectManager from "../Createsubject/SubjectManager"
const MCQQuestionManager = ({ subjects }) => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [questions, setQuestions] = useState({});

  const handleSaveQuestion = (newQuestionData) => {
    if (!selectedSubject) {
      alert("Please select a subject first.");
      return;
    }

    setQuestions(prev => ({
      ...prev,
      [selectedSubject]: [...(prev[selectedSubject] || []), newQuestionData],
    }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {/* Subject Selection */}
      <SubjectSelector
        subjects={subjects}
        selectedSubject={selectedSubject}
        setSelectedSubject={setSelectedSubject}
      />

      {/* Question Form */}
      {selectedSubject && <QuestionForm onSave={handleSaveQuestion} />}
      
      {/* Question List */}
      {selectedSubject && questions[selectedSubject] && (
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-md overflow-y-auto max-h-[400px]">
          <h3 className="text-xl font-semibold mb-4">Existing Questions</h3>
          <QuestionList questions={questions[selectedSubject]} />
         
          
        </div>
      )}
    </div>
  );
};

export default MCQQuestionManager; 
