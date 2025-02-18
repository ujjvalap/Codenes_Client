import React, { useState } from "react";

const CreateSubject = ({ onSubjectAdd }) => {
    const [subjectName, setSubjectName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!subjectName.trim()) return alert("Subject name cannot be empty!");
        onSubjectAdd(subjectName);
        setSubjectName("");
    };

    return (
        <div className="p-4 bg-white rounded shadow w-full max-w-sm">
            <h2 className="bg-gradient-to-r from-[#0066CC] to-[#004080] text-white px-6 py-2 rounded-lg mb-4 text-center">Create New Subject</h2>
            <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                    type="text"
                    className="flex-1 p-2 border rounded"
                    placeholder="Enter Subject Name"
                    value={subjectName}
                    onChange={(e) => setSubjectName(e.target.value)}
                />
                <button type="submit" className="bg-gradient-to-r from-[#0066CC] to-[#004080] text-white px-6 py-2 rounded-lg">Add</button>
            </form>
        </div>
    );
};

export default CreateSubject;
