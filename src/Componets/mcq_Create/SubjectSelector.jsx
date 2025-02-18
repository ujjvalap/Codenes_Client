/* eslint-disable react/prop-types */
import React from "react";
import SubjectManager from "../Createsubject/SubjectManager"



const SubjectSelector = ({ subjects, selectedSubject, setSelectedSubject }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-64 flex flex-col w-full max-w-md"> 
      {/* Title */}
      <h2 className="bg-gradient-to-r from-[#0066CC] to-[#004080] text-white px-6 py-2 rounded-lg mb-4 text-center">
        Select Subject
       
      </h2>

      {/* Scrollable Subject List */}
      <div className="flex-1 overflow-y-auto pr-2">
        <ul className="space-y-2">
          {subjects.map((subject, index) => (
            <li key={index}>
              <button
                className={`w-full p-3 rounded-lg border border-gray-300 text-gray-800 text-left font-medium transition duration-300 flex items-center justify-between ${
                  selectedSubject === subject
                    ? "bg-gray-100 shadow-md border-[#0066CC] font-semibold"
                    : "hover:bg-gray-50 hover:shadow"

                    
                }`}
                onClick={() => setSelectedSubject(subject)}
              >
                {subject}
                {selectedSubject === subject && (
                  <span className="text-[#0066CC] font-bold">✔</span>
                  
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubjectSelector;




