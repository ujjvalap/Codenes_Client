import React from 'react';

const Leaderboard = () => {
  const leaderboardData = [
    { rank: 1, name: 'John Doe', score: 950 },
    { rank: 2, name: 'Jane Smith', score: 920 },
    { rank: 3, name: 'Mike Johnson', score: 890 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Leaderboard</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#F5F5F5]">
              <th className="p-3 text-left">Rank</th>
              <th className="p-3 text-left">Student Name</th>
              <th className="p-3 text-left">Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((entry, index) => (
              <tr key={index} className="border-b">
                <td className="p-3">{entry.rank}</td>
                <td className="p-3">{entry.name}</td>
                <td className="p-3 font-medium">{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;