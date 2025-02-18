import React from "react";

const SubjectList = ({ subjects, onDelete, onEdit }) => (
    <div className="p-4 bg-white rounded shadow w-full max-w-md h-80 flex flex-col">
        <h2 className="bg-gradient-to-r from-[#0066CC] to-[#004080] text-white px-6 py-2 rounded-lg mb-4 text-center">
            Subjects
        </h2>
        {subjects.length === 0 ? (
            <p className="text-gray-500 flex-grow">No subjects added yet.</p>
        ) : (
            <ul className="space-y-2 overflow-y-auto flex-grow">
                {subjects.map((subject, index) => (
                    <li key={index} className="flex justify-between bg-gray-100 p-2 rounded">
                        <span>{subject}</span>
                        <div className="flex gap-2">
                            <button
                                onClick={() => onEdit(index)}
                                className="px-2 bg-yellow-500 text-white rounded"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => onDelete(index)}
                                className="px-2 bg-red-500 text-white rounded"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        )}
    </div>
);

export default SubjectList;

