import React, { useState } from 'react';
import { Card, CardContent, Typography, Button,Box} from '@mui/material';
import '../styles/JobCard.css'; // Import the CSS file for styling

const JobCard = ({ job }) => {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 200; // Maximum character limit for the company name

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="job-card" elevation={1}> 
      <CardContent className="job-card-content">
      <Box className="job-card-header">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/weekday-works.appspot.com/o/referal-website-assets%2Ffavicon-64.png?alt=media"
                        alt="Company Logo"
                    />
                    <div>
                        <div className="job-card-info">
                            <h3>Weekday</h3>
                            <h2>{job.jobRole || "Role Not Specified"}</h2>
                        </div>
                        <p className="job-card-info-location">
                            {job.location || "Location Not Specified"}
                        </p>
                    </div>
                </Box>
                <Typography variant="body2" className="job-card-salary">
                    {job.minJdSalary || job.maxJdSalary ? (
                        <>
                            {"Estimated Salary: "}
                            {job.minJdSalary ? `${job.minJdSalary} - ` : null}
                            {job.maxJdSalary ? job.maxJdSalary : null}{" "}
                            {job.salaryCurrencyCode || "USD"}
                            <span aria-label="Offered salary range"> ✅</span>
                        </>
                    ) : (
                        "Salary Not Specified"
                    )}
                </Typography>
        <div className="job-details">
          <Typography variant="h6" component="div" gutterBottom>
            {expanded ? job.jobDetailsFromCompany : job.jobDetailsFromCompany.slice(0, maxLength)}
          </Typography>
          {job.jobDetailsFromCompany.length > maxLength && (
            <Button onClick={toggleExpand} className="view-more" color="primary">
              {expanded ? 'View Less' : 'View More'}
            </Button>
          )}
        </div>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Minimum Experience: {job.minExp}
        </Typography>
        <Button variant="contained" color="primary" sx={{ borderRadius: '5px', marginTop: '1rem', backgroundColor: 'rgb(85, 239, 196)', fontWeight: 500, color: 'black' }}>
          Easy Apply
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;
