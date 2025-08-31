import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl mt-5 shadow-lg">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-700 to-sky-600 mb-4 py-4 px-4 flex justify-between rounded-lg shadow-md text-gray-200">
        <h2 className="text-base font-bold w-1/5 tracking-wide">Employee Name</h2>
        <h3 className="text-base font-bold w-1/5 tracking-wide text-center text-purple-300">New</h3>
        <h5 className="text-base font-bold w-1/5 tracking-wide text-center text-yellow-400">Active</h5>
        <h5 className="text-base font-bold w-1/5 tracking-wide text-center text-green-400">Completed</h5>
        <h5 className="text-base font-bold w-1/5 tracking-wide text-center text-red-500">Failed</h5>
      </div>

      {/* Employee rows */}
      <div className="space-y-3 max-h-96 overflow-y-auto pr-1" style={{ scrollbarWidth: 'none' }}>
        {authData.employees.map((elem, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center bg-gradient-to-r bg-black/50 text-gray-300 rounded-lg px-4 py-2 shadow-md h-14 hover:scale-[1.02] transition-all duration-200 ease-in-out"
          >
            <h2 className="text-sm font-bold w-1/5 truncate">{elem.firstName}</h2>
            <h3 className="text-sm font-bold w-1/5 text-purple-400 text-center">{elem.taskStats.newTask}</h3>
            <h5 className="text-sm font-bold w-1/5 text-yellow-500 text-center">{elem.taskStats.active}</h5>
            <h5 className="text-sm font-semibold w-1/5 text-green-500 text-center">{elem.taskStats.completed}</h5>
            <h5 className="text-sm font-semibold w-1/5 text-red-600 text-center">{elem.taskStats.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
