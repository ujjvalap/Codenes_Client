import React, { useState, useEffect } from "react";

const Metrics = () => {
  const [stats, setStats] = useState([
    { title: "Total Test", value: 200 },
    { title: "Students", value: 2000 },
    { title: "Subjects", value: 8 },
  ]);

  useEffect(() => {
    const updateMetrics = () => {
      setStats((prevStats) =>
        prevStats.map((stat) => ({
          ...stat,
          value: stat.value + Math.floor(Math.random() * 10), // Simulated real-time update
        }))
      );
    };

    const interval = setInterval(updateMetrics, 5000); // Updates every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-[#F5F5F5] rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg text-gray-600">{stat.title}</h3>
            <div className="bg-gradient-to-r from-[#0066CC] to-[#004080] w-12 h-12 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">{stat.value}</span>
            </div>
          </div>
          <p className="text-2xl font-bold mt-4">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Metrics;



