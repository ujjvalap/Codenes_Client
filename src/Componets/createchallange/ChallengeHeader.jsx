/* eslint-disable react/prop-types */
import clsx from "clsx";
import moment from "moment";
import {
  FaCalendarAlt,
  FaClipboard,
  FaClipboardCheck,
  FaKey,
  FaTasks,
  FaTrash,
  FaWhatsapp,
} from "react-icons/fa";

const ChallengeHeader = ({
  challengeData,
  handleCopy,
  copied,
  setIsEditing,
  setIsModalOpen,
}) => {
  const formatDisplayDateTime = (date) => moment(date).format("D MMMM YYYY, h:mm A");

  const shareOnWhatsApp = () => {
    const message = `
📢 *Invitation to Join the Challenge!* 
🔥 *Challenge Name*: ${challengeData.title}
💡 *Description*: ${challengeData.description}
🔑 *Challenge Key*: ${challengeData.key}
⏳ *Start Time:* ${formatDisplayDateTime(challengeData.startTime)}
⏳ *End Time:* ${formatDisplayDateTime(challengeData.endTime)}
1️⃣ *Visit:* ${import.meta.env.VITE_CLIENT}  
2️⃣ Login / Sign up & Enter Key to Join!
`;
    window.open(`https://api.whatsapp.com/send/?text=${encodeURIComponent(message)}`, "_blank");
  };

  const DateCard = ({ label, icon: Icon, date }) => (
    <div className="flex flex-col bg-indigo-200 text-indigo-800 p-4 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="text-indigo-600" />
        <span className="font-bold">{label}</span>
      </div>
      <span className="text-gray-700">{formatDisplayDateTime(date)}</span>
    </div>
  );

  return (
    <header className="p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">{challengeData.title}</h1>
      <p className="text-gray-700 mb-4">{challengeData.description}</p>

      <div className="flex gap-4 mb-4">
        <DateCard label="Start Date" icon={FaCalendarAlt} date={challengeData.startTime} />
        <DateCard label="End Date" icon={FaCalendarAlt} date={challengeData.endTime} />
      </div>

      <div className="flex items-center gap-4 mb-4 p-4 bg-indigo-100 rounded-lg">
        <FaKey className="text-indigo-600" />
        <span className="text-gray-700">{challengeData.key}</span>
        <button onClick={handleCopy} className="ml-auto bg-indigo-600 text-white px-4 py-2 rounded-md">
          {copied ? <FaClipboardCheck /> : <FaClipboard />} {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <div className="flex flex-wrap gap-4">
        <button onClick={shareOnWhatsApp} className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center gap-2">
          <FaWhatsapp /> Share on WhatsApp
        </button>
        <button onClick={() => setIsEditing(true)} className="bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center gap-2">
          <FaTasks /> Edit Challenge
        </button>
        <button onClick={() => setIsModalOpen(true)} className="bg-red-600 text-white px-4 py-2 rounded-md flex items-center gap-2">
          <FaTrash /> Delete Challenge
        </button>
      </div>
    </header>
  );
};

export default ChallengeHeader;
