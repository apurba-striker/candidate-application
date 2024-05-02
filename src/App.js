import React from 'react';
import JobCard from './JobCard';

function App() {
  // Sample job data
  const jobs = [
    {
      title: 'Software Engineer',
      company: 'Example Company',
      location: 'New York, NY',
      description: 'We are looking for a skilled software engineer to join our team. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu efficitur lorem.',
      experience: '2-5 years',
    },
    // {
    //   title: 'Data Scientist',
    //   company: 'Data Analytics Inc.',
    //   location: 'San Francisco, CA',
    //   description: 'Data Analytics Inc. is seeking a talented Data Scientist to help drive our data-driven approach to decision-making. Ut aliquet, magna vitae eleifend tincidunt, mi eros sagittis est, et pulvinar elit nulla vel odio.',
    //   experience: '3-7 years',
    // },
    // {
    //   title: 'Data Scientist',
    //   company: 'Data Analytics Inc.',
    //   location: 'San Francisco, CA',
    //   description: 'Data Analytics Inc. is seeking a talented Data Scientist to help drive our data-driven approach to decision-making. Ut aliquet, magna vitae eleifend tincidunt, mi eros sagittis est, et pulvinar elit nulla vel odio.',
    //   experience: '3-7 years',
    // },
    // {
    //   title: 'Data Scientist',
    //   company: 'Data Analytics Inc.',
    //   location: 'San Francisco, CA',
    //   description: 'Data Analytics Inc. is seeking a talented Data Scientist to help drive our data-driven approach to decision-making. Ut aliquet, magna vitae eleifend tincidunt, mi eros sagittis est, et pulvinar elit nulla vel odio.',
    //   experience: '3-7 years',
    // },
    // Add more job objects as needed
  ];

  return (
    <div className="App">
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
}

export default App;
