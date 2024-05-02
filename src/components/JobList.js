import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

import { Grid } from "@mui/material";


const JobList = ({ jobs }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (windowHeight + scrollTop >= documentHeight - 20) {
        loadMoreJobs();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [jobs]); // Include jobs in the dependency array

  const loadMoreJobs = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    // <div className="job-list">
    //   {jobs.map(job => (
    //     <JobCard key={job.id} job={job} />
    //   ))}
    //   {isLoading && <p>Loading more jobs...</p>}
    // </div>
    <Grid container spacing={8}>
      {jobs.map((job, index) => (
        <Grid
          item
          key={`${job.jdUid}-${job.location}-${index}`}
          xs={12}
          sm={6}
          md={4}
        >
          <JobCard job={job} />
        </Grid>
      ))}
      {isLoading && <p>Loading more jobs...</p>}
    </Grid>
  );
};

export default JobList;
