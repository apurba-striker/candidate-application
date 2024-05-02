import React, { useState } from 'react';


const JobCard = ({ job }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
  //   <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  //   <div className="bg-white shadow rounded-lg p-4 flex flex-col">
  //     <div className="flex justify-between items-center text-xs text-gray-500">
  //       <span>Posted 10 days ago</span>
  //       <span>🔒</span>
  //     </div>
  //     <div className="mt-2">
  //       <h3 className="font-semibold text-lg">Backend Engineer</h3>
  //       <p className="text-sm text-gray-700">Bangalore</p>
  //       <p className="text-sm font-medium text-green-600">Estimated Salary: ₹18 - 35 LPA 💸</p>
  //     </div>
  //     <div className="mt-4">
  //       <h4 className="font-semibold">About Company:</h4>
  //       <p className="text-sm text-gray-700">
  //         Fampay is building India's first neo-bank exclusively teens. Fampay helps teens make their own online and
  //         offline payments through UPI, Fampay App and FamCard. Our aim is to make banking cool for teens and to help
  //         them learn the value of money, savings and spending wisely. We are on a mission to raise a new, financially
  //         aware generation, and drive 250 million Indian teenagers to kickstart their financial journey super early in
  //         their life.
  //       </p>
  //       <a className="text-indigo-600 text-sm hover:underline" href="#">
  //         View job
  //       </a>
  //     </div>
  //     <div className="mt-4">
  //       <h4 className="font-semibold">Minimum Experience:</h4>
  //       <p className="text-sm text-gray-700">2 years</p>
  //     </div>
  //     <div className="mt-4">
  //       <button className="bg-indigo-600 text-white text-sm px-4 py-2 rounded hover:bg-indigo-500">Easy Apply</button>
  //       <button className="mt-2 bg-gray-100 text-gray-800 text-sm px-4 py-2 rounded hover:bg-gray-200">
  //         Unlock referral asks
  //       </button>
  //     </div>
  //   </div>
  // </div>
  <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-6">
      <div className="bg-white rounded-lg shadow-sm dark:bg-gray-950">
        <div className="p-6">
          <h3 className="text-xl font-semibold">Software Engineer</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Acme Inc</p>
          <p className="text-gray-500 dark:text-gray-400 mt-1">San Francisco, CA</p>
          <button className="mt-4" size="sm">
            Apply
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm dark:bg-gray-950">
        <div className="p-6">
          <h3 className="text-xl font-semibold">Product Designer</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Globex Corporation</p>
          <p className="text-gray-500 dark:text-gray-400 mt-1">New York, NY</p>
          <button className="mt-4" size="sm">
            Apply
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm dark:bg-gray-950">
        <div className="p-6">
          <h3 className="text-xl font-semibold">Data Analyst</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Stark Industries</p>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Seattle, WA</p>
          <button className="mt-4" size="sm">
            Apply
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobCard;
