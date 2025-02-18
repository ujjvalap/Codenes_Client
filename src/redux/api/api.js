import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;  // Fetch from .env file

//  Fetch all subjects
export const getSubjects = async () => {
  return await axios.get(`${API_URL}/subjects`);
};

//  Create a new subject
export const createSubject = async (subjectName) => {
  return await axios.post(`${API_URL}/subjects`, { name: subjectName });
};

//  Update a subject
export const updateSubject = async (subjectId, newName) => {
  return await axios.put(`${API_URL}/subjects/${subjectId}`, { name: newName });
};

//  Delete a subject
export const deleteSubject = async (subjectId) => {
  return await axios.delete(`${API_URL}/subjects/${subjectId}`);
};

//  Fetch MCQs for a subject
export const getMCQsBySubject = async (subjectId) => {
  return await axios.get(`${API_URL}/mcqs/${subjectId}`);
};

//  Create an MCQ under a subject
export const createMCQ = async (subjectId, question, options, correctAnswer) => {
  return await axios.post(`${API_URL}/mcqs/${subjectId}`, {
    question,
    options,
    correctAnswer,
  });
};

//  Update an MCQ
export const updateMCQ = async (mcqId, question, options, correctAnswer) => {
  return await axios.put(`${API_URL}/mcqs/${mcqId}`, {
    question,
    options,
    correctAnswer,
  });
};

//  Delete an MCQ
export const deleteMCQ = async (mcqId) => {
  return await axios.delete(`${API_URL}/mcqs/${mcqId}`);
};
