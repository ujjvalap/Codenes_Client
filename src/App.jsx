import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HostDashboard from "./pages/host/HostDashboard";  
import ChallengeOverviewPage from "./Componets/CreateChallengeMcq/ChallengeOverviewPage";



const App = () => {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<HostDashboard />} />
        <Route path="/overview" element={<ChallengeOverviewPage/>} /> 
      </Routes>
    </Router>
  );
};

export default App;


// Mcq ROute 

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Mainmcq from "./pages/mcq/Mainmcq";

// const App = () => {
//     return (
//       <Router> 
//         <Routes>
//           <Route path="/" element={<Mainmcq/>} />
           
//         </Routes>
//       </Router>
//     );
//   };
  
//   export default App;

























