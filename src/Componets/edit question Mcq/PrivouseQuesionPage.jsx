import { useState } from 'react';

function ContestPage() {
  const [activeTab, setActiveTab] = useState('details');

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Contest Name - Subject</h1>
        <p className="text-lg text-gray-600">Contest Date</p>
      </div>

      {/* Tabs Section */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-lg ${activeTab === 'details' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('details')}
        >
          Contest Details
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${activeTab === 'questions' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('questions')}
        >
          Previous Questions
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${activeTab === 'instructions' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('instructions')}
        >
          Instructions
        </button>
      </div>

      {/* Tab Content Section */}
      <div>
        {/* Contest Details Tab */}
        {activeTab === 'details' && (
          <div className="mb-6">
            <p>Details about the contest.</p>
          </div>
        )}

        {/* Previous Questions Tab */}
        {activeTab === 'questions' && (
          <div className="space-y-4">
            <div className="border p-4 rounded-lg">
              <p>Q1: What is ...</p>
              <button className="text-blue-500 mt-2">Show Details</button>
            </div>
            <div className="border p-4 rounded-lg">
              <p>Q2: How to ...</p>
              <button className="text-blue-500 mt-2">Show Details</button>
            </div>
          </div>
        )}

        {/* Instructions Tab */}
        {activeTab === 'instructions' && (
          <div className="mb-6">
            <p>Instructions for participating in the contest.</p>
          </div>
        )}
      </div>

      {/* Sidebar Section for Previous Contests */}
      <div className="mt-12 p-4 border border-gray-300 rounded-lg">
        <h3 className="text-xl font-semibold">Previous Contests</h3>
        <ul className="mt-4 space-y-3">
          <li>
            <a href="#" className="text-blue-500 hover:underline">Contest 1 - Subject</a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">Contest 2 - Subject</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContestPage;
