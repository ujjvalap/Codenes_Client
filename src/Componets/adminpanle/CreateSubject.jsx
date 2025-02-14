import React, { useState } from "react";

const CreateSubject = ({ onSubjectAdd }) => {
    const [subjectName, setSubjectName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (subjectName.trim() === "") {
            alert("Subject name cannot be empty!");
            return;
        }
        onSubjectAdd(subjectName);
        setSubjectName("");
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h2 className="text-xl font-semibold mb-4">Create New Subject</h2>
            <form onSubmit={handleSubmit} className="flex gap-4">
                <input
                    type="text"
                    placeholder="Subject Name"
                    className="flex-1 p-2 border rounded"
                    value={subjectName}
                    onChange={(e) => setSubjectName(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="bg-gradient-to-r from-[#0066CC] to-[#004080] text-white px-6 py-2 rounded hover:opacity-90 transition-opacity"
                >
                    Create Subject
                </button>
            </form>
        </div>
    );
};

const SubjectManager = () => {
    const [subjects, setSubjects] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editText, setEditText] = useState("");
    const [showSubjects, setShowSubjects] = useState(false); // Toggle state

    // Add a new subject
    const addSubject = (newSubject) => {
        if (subjects.includes(newSubject)) {
            alert("Subject already exists!");
            return;
        }
        setSubjects([...subjects, newSubject]);
    };

    // Delete a subject
    const deleteSubject = (index) => {
        const updatedSubjects = subjects.filter((_, i) => i !== index);
        setSubjects(updatedSubjects);
    };

    // Start editing a subject
    const startEditing = (index) => {
        setEditingIndex(index);
        setEditText(subjects[index]);
    };

    // Save the edited subject
    const saveEdit = (index) => {
        if (editText.trim() === "") {
            alert("Subject name cannot be empty!");
            return;
        }
        const updatedSubjects = subjects.map((subject, i) =>
            i === index ? editText : subject
        );
        setSubjects(updatedSubjects);
        setEditingIndex(null);
        setEditText("");
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <CreateSubject onSubjectAdd={addSubject} />

            <div className="bg-white p-6 rounded-lg shadow-sm">
                {/* Clickable Heading to Toggle Subjects */}
                <h2
                    className="bg-gradient-to-r from-[#0066CC] to-[#004080] text-white px-6 py-2 rounded hover:opacity-90 transition-opacity flex justify-between items-center"
                    onClick={() => setShowSubjects(!showSubjects)}
                >
                    <span>Available Subjects</span>
                    <span>{showSubjects ? "▲" : "▼"}</span>
                </h2>

                {showSubjects && (
                    subjects.length > 0 ? (
                        <ul className="list-disc pl-5">
                            {subjects.map((subject, index) => (
                                <li key={index} className="py-2 flex justify-between items-center">
                                    {editingIndex === index ? (
                                        <input
                                            type="text"
                                            className="border p-1 rounded"
                                            value={editText}
                                            onChange={(e) => setEditText(e.target.value)}
                                        />
                                    ) : (
                                        <span>{subject}</span>
                                    )}
                                    <div className="flex gap-2">
                                        {editingIndex === index ? (
                                            <button
                                                onClick={() => saveEdit(index)}
                                                className="bg-green-500 text-white px-3 py-1 rounded"
                                            >
                                                Save
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => startEditing(index)}
                                                className="bg-yellow-500 text-white px-3 py-1 rounded"
                                            >
                                                Edit
                                            </button>
                                        )}
                                        <button
                                            onClick={() => deleteSubject(index)}
                                            className="bg-red-500 text-white px-3 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">No subjects added yet.</p>
                    )
                )}
            </div>
        </div>
    );
};

export default SubjectManager;
