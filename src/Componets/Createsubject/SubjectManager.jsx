import React, { useState } from "react";
import CreateSubject from "./CreateSubject";
import SubjectList from "./SubjectList";

const SubjectManager = () => {
    const [subjects, setSubjects] = useState([]);

    const addSubject = (newSubject) => {
        if (subjects.includes(newSubject)) return alert("Subject already exists!");
        setSubjects([...subjects, newSubject]);
    };

    const deleteSubject = (index) => setSubjects(subjects.filter((_, i) => i !== index));

    return (
        <div className="flex flex-col md:flex-row gap-4 p-4 justify-center items-start w-full max-w-4xl mx-auto">
            <CreateSubject onSubjectAdd={addSubject} />
            <SubjectList subjects={subjects} onDelete={deleteSubject} />
        </div>
    );
};

export default SubjectManager;


