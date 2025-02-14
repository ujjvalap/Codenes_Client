import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ConfirmationDeleteModal from "../../shared/ConfirmationDeleteModal";
import LoadingSpinner from "../LoadingSpinner";
import ChallengeHeader from "./ChallengeHeader";
import LeaderboardOrParticipationPanel from "./LeaderboardOrParticipationPanel";
import CreateSubject from "./CreateSubject";
import MCQQuestionManager from "./McqQuestionCreate";

import QuestionListModal from "./QuestionListModal";

function ChallengeOverviewPage() {
  const navigate = useNavigate();

  // Simulated states
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
  const [showQuestionList, setShowQuestionList] = useState(false);
  const [copied, setCopied] = useState(false);
  const [question, setQuestion] = useState("");

  // Dummy challenge data
  const [challengeData, setChallengeData] = useState(null);
  const [isChallengeLoading, setIsChallengeLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setChallengeData({
        title: "Sample Challenge",
        description: "This is a sample challenge description.",
        startTime: new Date().toISOString(),
        endTime: new Date(new Date().getTime() + 3600000).toISOString(),
        key: "SAMPLE123",
        problems: [
          { id: "1", title: "Problem 1" },
          { id: "2", title: "Problem 2" },
        ],
      });
      setIsChallengeLoading(false);
    }, 1000);
  }, []);

  // Handle copy challenge key
  const handleCopy = async () => {
    await navigator.clipboard.writeText(challengeData.key);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Navigate to Add Question Page
  const handleEditProblem = (questionID) => {
    console.log("Editing problem:", questionID);
    navigate("/add-question");
  };

  // Show Add Question Modal
  const handleAddNewProblem = () => {
    setShowQuestionList(true);
  };

  // Show Delete Confirmation Modal
  const DeleteProblemConform = (id) => {
    setQuestion(id);
    setIsQuestionModalOpen(true);
  };

  // Delete Challenge Handler (Simulated)
  const handleDeleteChallenge = () => {
    console.log("Challenge deleted");
    navigate("/host-dashboard");
  };

  // Delete Problem Handler (Simulated)
  const handleDeleteProblem = () => {
    console.log("Problem deleted:", question);
  };

  if (isChallengeLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex flex-col md:flex-row sm:p-4 lg:p-8 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      {/* Left Side: Challenge Header and Section */}
      <div className="w-full md:w-1/3 p-4">
        <ChallengeHeader
          challengeData={challengeData}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          setIsModalOpen={setIsModalOpen}
          handleCopy={handleCopy}
          copied={copied}
        />
        <LeaderboardOrParticipationPanel challengeData={challengeData} />
      </div>

      {/* Right Side: Problem List */}
      <div className="w-full md:w-2/3 p-4">
        < CreateSubject
          challengeData={challengeData}
          handleEditProblem={handleEditProblem}
          handleDeleteProblem={handleDeleteProblem}
          isQuestionModalOpen={isQuestionModalOpen}
          setIsQuestionModalOpen={setIsQuestionModalOpen}
          DeleteProblemConform={DeleteProblemConform}
        />
      </div>



      <div className="w-full md:w-2/3 p-4">
        < MCQQuestionManager
          challengeData={challengeData}
          handleEditProblem={handleEditProblem}
          handleDeleteProblem={handleDeleteProblem}
          isQuestionModalOpen={isQuestionModalOpen}
          setIsQuestionModalOpen={setIsQuestionModalOpen}
          DeleteProblemConform={DeleteProblemConform}
        />
      </div>

      {/* Modal for Delete Confirmation */}
      <ConfirmationDeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDeleteChallenge}
        title="Delete Challenge"
        message="Are you sure you want to delete this challenge? This action cannot be undone."
      />

      {/* Floating Add Problem Button */}
      <button
        onClick={handleAddNewProblem}
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-indigo-600 text-white py-3 px-4 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 flex items-center gap-2"
      >
        <FaPlus />
        Add Question
      </button>

      {/* Conditionally render QuestionList */}
      {showQuestionList && (
        <QuestionListModal
          showQuestionList={showQuestionList}
          setShowQuestionList={setShowQuestionList}
          challengeData={challengeData}
        />
      )}
    </div>
  );
}

export default ChallengeOverviewPage;
