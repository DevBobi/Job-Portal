import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useParams } from 'react-router';

const ViewJobs = () => {
    const { id } = useParams();
    return (
        <div>
            <Box sx={{ overflow: "hidden" }}>

                <Typography sx={{ color: 'white', fontSize: 30, overflow: "hidden" }} variant="h3">
                    Job Titile
                </Typography>

                <Typography container variant="h4" sx={{ my: 3 }}>
                    Single Jobs
                </Typography>

            </Box>
        </div>
    );
};

export default ViewJobs;