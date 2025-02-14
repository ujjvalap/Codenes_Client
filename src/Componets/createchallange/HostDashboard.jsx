import React, { useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaPlus,
  FaTasks,
  FaUserCircle,
  FaUsers,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ContestSetup from "./ChallengeSetup";

function HostDashboard() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [showContestSetup, setShowContestSetup] = useState(false);

  const host = {
    username: "Host Name",
    picture: "", // Add default or fetched picture
  };

  const myChallengesData = {
    challenges: [
      {
        _id: "1",
        title: "Sample Contest",
        startTime: new Date().toISOString(),
        endTime: new Date().toISOString(),
        questions: ["Q1", "Q2"],
        participants: ["User1", "User2"],
      },
    ],
  };

  const handleChallenge = (challengeID) => {
    navigate("/overview");
  };

  const handleCreateContest = () => {
    setShowContestSetup(true);
  };

  const handleCloseContestSetup = () => {
    setShowContestSetup(false);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen relative">
      <div className="flex flex-col md:flex-row">
        <aside className="md:w-1/4 p-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-indigo-200">
            <div className="flex items-center mb-6">
              {host?.picture ? (
                <img
                  src={host.picture}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ) : (
                <FaUserCircle className="text-indigo-600 text-6xl" />
              )}
              <div className="ml-4">
                <h1 className="text-2xl font-semibold text-gray-800">
                  {host.username}
                </h1>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-indigo-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-indigo-700"
            >
              Edit Details
            </button>
          </div>
        </aside>
        <main className="flex-1 p-6">
          <section className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
              Dashboard Overview
            </h2>
            <p className="text-gray-600">Manage contests and view insights.</p>
          </section>
          <section className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">
              Recent Quizes
            </h3>
            {myChallengesData.challenges.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {myChallengesData.challenges.map((challenge) => (
                  <div
                    key={challenge._id}
                    className="bg-gray-50 border border-indigo-200 rounded-lg p-4 hover:shadow-lg"
                  >
                    <button onClick={() => handleChallenge(challenge._id)}>
                      <h4 className="text-lg font-semibold text-indigo-700">
                        {challenge.title}
                      </h4>
                      <p className="flex items-center text-gray-500 mt-2">
                        <FaCalendarAlt className="mr-2 text-indigo-600" />
                        Start: {new Date(challenge.startTime).toLocaleString()}
                      </p>
                      <p className="flex items-center text-gray-500">
                        <FaCalendarAlt className="mr-2 text-indigo-600" />
                        End: {new Date(challenge.endTime).toLocaleString()}
                      </p>
                      <div className="flex items-center justify-between mt-4 text-gray-600">
                        <p className="flex items-center">
                          <FaTasks className="mr-2 text-blue-500" />
                          {challenge.questions.length} Problems
                        </p>
                        <p className="flex items-center">
                          <FaUsers className="mr-2 text-green-500" />
                          {challenge.participants.length} Participants
                        </p>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No contests created yet.</p>
            )}
          </section>
        </main>
      </div>
      <button
        onClick={handleCreateContest}
        className="fixed bottom-8 right-8 bg-indigo-600 text-white py-3 px-4 rounded-full shadow-lg hover:bg-indigo-700 flex items-center gap-2"
      >
        <FaPlus /> Create New Quize
      </button>
      {showContestSetup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <ContestSetup onClose={handleCloseContestSetup} />
        </div>
      )}
    </div>
  );
}

export default HostDashboard;
