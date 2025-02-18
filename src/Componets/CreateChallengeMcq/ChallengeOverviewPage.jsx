import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ConfirmationDeleteModal from "../../shared/ConfirmationDeleteModal";
import LoadingSpinner from "../LoadingSpinner";
import ChallengeHeader from "./ChallengeHeader";
import LeaderboardOrParticipationPanel from "./LeaderboardOrParticipationPanel";
import SubjectManager from "../Createsubject/SubjectManager";
import MCQQuestionManager from "../mcq_Create/MCQQuestionManager";
import ChallengeNavbar from "./ChallengeNavbar"

const subjectsList = ["Math", "Science", "History", "DSA", "DBMS", "ML", "CN"];

function ChallengeOverviewPage() {
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
  const [showQuestionList, setShowQuestionList] = useState(false);
  const [copied, setCopied] = useState(false);
  const [question, setQuestion] = useState("");

  const [challengeData, setChallengeData] = useState(null);
  const [isChallengeLoading, setIsChallengeLoading] = useState(true);

  useEffect(() => {
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

  const handleCopy = async () => {
    await navigator.clipboard.writeText(challengeData.key);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEditProblem = (questionID) => {
    console.log("Editing problem:", questionID);
    navigate("/add-question");
  };

  const DeleteProblemConform = (id) => {
    setQuestion(id);
    setIsQuestionModalOpen(true);
  };

  const handleDeleteChallenge = () => {
    console.log("Challenge deleted");
    navigate("/host-dashboard");
  };

  const handleDeleteProblem = () => {
    console.log("Problem deleted:", question);
  };

  if (isChallengeLoading) {
    return <LoadingSpinner />;
  }

  return (

    <div>
      <ChallengeNavbar />
      {/* Rest of your ChallengeOverviewPage code */}


      <div className="flex flex-col md:flex-row p-4 lg:p-8 min-h-screen gap-6 bg-gray-100">



        <div className="w-full md:w-1/3 flex flex-col gap-4">
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

        {/* Right Side: Subjects & Questions */}
        <div className="w-full md:w-2/3 flex flex-col gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <SubjectManager 
            challengeData={challengeData}
            handleEditProblem={handleEditProblem}
            handleDeleteProblem={handleDeleteProblem}
            isQuestionModalOpen={isQuestionModalOpen}
            setIsQuestionModalOpen={setIsQuestionModalOpen}
            DeleteProblemConform={DeleteProblemConform}

           
          />
          
        </div>


          {/*  Question manager  */}
          <div>
          <MCQQuestionManager subjects={subjectsList} />

          

          </div>
          


        </div>

        {/* Modal for Delete Confirmation */}
        <ConfirmationDeleteModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleDeleteChallenge}
          title="Delete Challenge"
          message="Are you sure you want to delete this challenge? This action cannot be undone."
        />



      </div>

    </div>
  );
}

export default ChallengeOverviewPage;



