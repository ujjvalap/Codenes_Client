// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ChallengeNavbar from "../../components/CreateChallenge/ChallengeNavbar";
// import QuestionForm from "../../components/CreateChallenge/QuestionForm";
// import LoadingSpinner from "../LoadingSpinner";

// function AddQuestion() {
//   // Simulate a question ID (set to null for new question)
//   const dummyQuestionID = null;
//   const navigate = useNavigate();

//   // Loading state simulation
//   const [isQuestionLoading, setIsQuestionLoading] = useState(false);

//   // Local state for problem details
//   const [problemDetails, setProblemDetails] = useState({
//     title: "",
//     problemStatement: "",
//     inputFormat: "",
//     outputFormat: "",
//     constraints: [],
//     maxScore: 0,
//     difficulty: "Easy",
//     createdAt: new Date(),
//     tags: [],
//     author: null,
//     hints: [],
//     timeLimit: 1,
//     memoryLimit: 256,
//     difficultyScore: 1,
//     likes: 0,
//     views: 0,
//     sampleSolution: "// write problem solution here",
//     isActive: true,
//     languagesAllowed: ["cpp", "python", "javascript", "java"],
//     estimatedSolveTime: 0,
//     boilerplateCode: {
//       cpp: "",
//       python: "",
//       javascript: "",
//       java: "",
//     },
//     examples: [],
//   });

//   // Simulate fetching question details if a dummy question ID exists
//   useEffect(() => {
//     if (dummyQuestionID) {
//       setIsQuestionLoading(true);
//       setTimeout(() => {
//         // Dummy fetched data for an existing question
//         const dummyData = {
//           title: "Dummy Title",
//           problemStatement: "This is a dummy problem statement.",
//           inputFormat: "Dummy input format",
//           outputFormat: "Dummy output format",
//           constraints: ["Constraint1", "Constraint2"],
//           maxScore: 100,
//           difficulty: "Medium",
//           createdAt: new Date(),
//           tags: ["dummy", "test"],
//           author: "Dummy Author",
//           hints: ["Hint1", "Hint2"],
//           timeLimit: 2,
//           memoryLimit: 512,
//           difficultyScore: 2,
//           likes: 0,
//           views: 0,
//           sampleSolution: "// dummy solution here",
//           isActive: true,
//           languagesAllowed: ["cpp", "python", "javascript", "java"],
//           estimatedSolveTime: 10,
//           boilerplateCode: {
//             cpp: "",
//             python: "",
//             javascript: "",
//             java: "",
//           },
//           examples: [{ input: "1", output: "1" }],
//         };
//         setProblemDetails(dummyData);
//         setIsQuestionLoading(false);
//       }, 1000);
//     }
//   }, [dummyQuestionID]);

//   // Handle save by simply logging the problem details and navigating away
//   const handleSaveProblem = () => {
//     console.log("Problem saved:", problemDetails);
//     navigate("/overview");
//   };

//   if (isQuestionLoading) {
//     return <LoadingSpinner />;
//   }

//   return (
//     <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100">
//       {/* Fixed Navbar */}
//       <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
//         <ChallengeNavbar handleSaveProblem={handleSaveProblem} />
//       </div>

//       {/* Main Content */}
//       <div className="flex h-full pt-24">
//         <QuestionForm
//           problemDetails={problemDetails}
//           setProblemDetails={setProblemDetails}
//         />
//       </div>
//     </div>
//   );
// }

// export default AddQuestion;
