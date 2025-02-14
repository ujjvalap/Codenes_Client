import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HostDashboard from "./Componets/createchallange/HostDashboard";  
// Import the components
// import AddQuestion from "./Componets/createchallange/AddQuestions";

import ChallengeOverviewPage from "./Componets/createchallange/ChallengeOverviewPage";


const App = () => {
  return (
    <Router> {/* Use Router instead of BrowserRouter (both work) */}
      <Routes>
        {/* <Route path="/" element={<HostDashboard />} /> */}
        <Route path="/" element={<ChallengeOverviewPage/>} />
        
      </Routes>
    </Router>
  );
};

export default App;




























{/* // import React, { useState } from 'react';
// import Header from './Componets/adminpanle/Header';
// import Sidebar from './Componets/adminpanle/Sidebar';
// import Metrics from './Componets/adminpanle/Matrice';
// import CreateSubject from './Componets/adminpanle/CreateSubject';
// import ShowSubjects from './Componets/adminpanle/ManageSubject';
// import UpdateDeleteQuestions from './Componets/adminpanle/CreateQuestions';
// import Leaderboard from './Componets/adminpanle/Ledarboard'; */}

// const App = () => {
//   const [subjects, setSubjects] = useState(['English', 'Hindi', 'Math']);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Sidebar />
//       <div className="ml-64 p-8">
//         <Header username="Admin" />
//         <main className="space-y-8">
//           <Metrics />
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             <div className="space-y-8">
//               <CreateSubject />
//               <ShowSubjects subjects={subjects} setSubjects={setSubjects} />
//             </div>
//             <div className="space-y-8">
//               <UpdateDeleteQuestions subjects={subjects} />
//               <Leaderboard />
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default App;


// //question eadit


// // import React from "react";
// // import QuestionList from "./Componets/eaditquestion/QuestionList";
// // import QuestionsProvider from "./Componets/eaditquestion/QuestionsContext";

// // const App = () => {
// //   return (
// //     <QuestionsProvider>
// //       <div className="p-6">
// //         <h1 className="text-2xl font-bold mb-4">Question Management System</h1>
// //         <QuestionList />
// //       </div>
// //     </QuestionsProvider>
// //   );
// // };

// // export default App;



// import React, { useState } from "react";
// import Sidebar from "./Componets/adminpanle/Sidebar";
// import Header from "./Componets/adminpanle/Header";
// import Metrics from "./Componets/adminpanle/Matrice";
// import CreateSubject from "./Componets/adminpanle/CreateSubject";
// import Leaderboard from "./Componets/adminpanle/Ledarboard";

// import MCQQuestionCreate from "./Componets/adminpanle/McqQuestionCreate";
// const App = () => {
//   const [subjects, setSubjects] = useState(["Mathematics", "Physics", "Chemistry", "Biology", "Computer Science"]);
//   const [selectedSubject, setSelectedSubject] = useState("");

//   return (
//     <div className="min-h-screen bg-gray-100 flex">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="ml-64 p-8 w-full">
//         {/* Header */}
//         <Header username="Admin" />

//         {/* Admin Dashboard Sections */}
//         <main className="space-y-8">
//           <Metrics />

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {/* Left Section - Create Subject */}
//             <div className="space-y-8">
//               <CreateSubject />
//             </div>

//             {/* Right Section - Question Management + Leaderboard */}
//             <div className="space-y-4">
//               <div className="p-6 bg-white rounded-lg shadow-md">
//                 <h1 className="text-2xl font-bold mb-4 text-gray-800">Question Management System</h1>
//                 <MCQQuestionCreate subjects={subjects} />
//               </div>
//               <Leaderboard />
//             </div>
//           </div>

//         </main>
//       </div>
//     </div>
//   );
// };

// export default App;
