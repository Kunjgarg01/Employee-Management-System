import React from "react";

const TaskList = ({ cardHeight = "350px" }) => {
  return (
    <div
      id="tasklist"
      className="flex overflow-x-auto scroll-smooth py-4 px-6 space-x-6 flex-1"
      style={{ scrollbarWidth: "none" }} // for Firefox
    >
      {/* Card 1 */}
      <div
        className="flex-shrink-0 w-80 bg-black/20 backdrop-blur-md rounded-2xl p-6 shadow-lg flex flex-col justify-start"
        style={{ height: cardHeight }}
      >
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-red-500 font-bold text-lg">High</h3>
          <h4 className="text-gray-200 text-base">28 Aug 2025</h4>
        </div>
        <h2 className="text-gray-100 text-3xl font-semibold mt-4 mb-2">
          Make a YouTube Video
        </h2>
        <p className="text-gray-300 text-base">
          Record and edit a tutorial on building a responsive React dashboard with TailwindCSS and Framer Motion.
        </p>
      </div>

      {/* Card 2 */}
      <div
        className="flex-shrink-0 w-80 bg-black/20 backdrop-blur-md rounded-2xl p-6 shadow-lg flex flex-col justify-start"
        style={{ height: cardHeight }}
      >
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-yellow-400 font-bold text-lg">Medium</h3>
          <h4 className="text-gray-200 text-base">29 Aug 2025</h4>
        </div>
        <h2 className="text-gray-100 text-3xl font-semibold mt-4 mb-2">
          Design Login Page
        </h2>
        <p className="text-gray-300 text-base">
          Create an interactive login page using React, TailwindCSS, and Framer Motion with proper validation.
        </p>
      </div>

      {/* Card 3 */}
      <div
        className="flex-shrink-0 w-80 bg-black/20 backdrop-blur-md rounded-2xl p-6 shadow-lg flex flex-col justify-start"
        style={{ height: cardHeight }}
      >
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-red-500 font-bold text-lg">High</h3>
          <h4 className="text-gray-200 text-base">30 Aug 2025</h4>
        </div>
        <h2 className="text-gray-100 text-3xl font-semibold mt-4 mb-2">
          Fix Bug #342
        </h2>
        <p className="text-gray-300 text-base">
          Investigate and resolve the responsive issue on the dashboard cards when viewed on mobile devices.
        </p>
      </div>

      {/* Card 4 */}
      <div
        className="flex-shrink-0 w-80 bg-black/20 backdrop-blur-md rounded-2xl p-6 shadow-lg flex flex-col justify-start"
        style={{ height: cardHeight }}
      >
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-green-400 font-bold text-lg">Low</h3>
          <h4 className="text-gray-200 text-base">31 Aug 2025</h4>
        </div>
        <h2 className="text-gray-100 text-3xl font-semibold mt-4 mb-2">
          Update Docs
        </h2>
        <p className="text-gray-300 text-base">
          Revise and update documentation for the new components and hooks added in the last sprint.
        </p>
      </div>

      {/* Card 5 */}
      <div
        className="flex-shrink-0 w-80 bg-black/20 backdrop-blur-md rounded-2xl p-6 shadow-lg flex flex-col justify-start"
        style={{ height: cardHeight }}
      >
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-yellow-400 font-bold text-lg">Medium</h3>
          <h4 className="text-gray-200 text-base">01 Sep 2025</h4>
        </div>
        <h2 className="text-gray-100 text-3xl font-semibold mt-4 mb-2">
          Team Meeting
        </h2>
        <p className="text-gray-300 text-base">
          Discuss project progress, review upcoming tasks, and assign responsibilities for the next week.
        </p>
      </div>

      {/* Card 6 */}
      <div
        className="flex-shrink-0 w-80 bg-black/20 backdrop-blur-md rounded-2xl p-6 shadow-lg flex flex-col justify-start"
        style={{ height: cardHeight }}
      >
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-red-500 font-bold text-lg">High</h3>
          <h4 className="text-gray-200 text-base">02 Sep 2025</h4>
        </div>
        <h2 className="text-gray-100 text-3xl font-semibold mt-4 mb-2">
          Deploy App
        </h2>
        <p className="text-gray-300 text-base">
          Push the latest version of the application to production, ensuring all tests pass and CI/CD pipeline runs smoothly.
        </p>
      </div>
    </div>
  );
};

export default TaskList;
