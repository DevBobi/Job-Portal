import React from 'react';
import Box from '@mui/material/Box';
import { Button, Container, Typography } from '@mui/material';

const ViewJobs = () => {
    return (
        <div>
            <Box sx={{ overflow: "hidden" }}>

                <Typography sx={{ color: 'white', fontSize: 30, overflow: "hidden" }} variant="h3">
                    Job Titile
                </Typography>

                <Typography container variant="h6" sx={{ my: 3, fontSize: 13, fontWeigth: 300, color: 'gray' }}>
                    Whether you call them shoes, sneakers, runners, trainers, or kicks, we have you covered with the latest footwear to fit your style.
                </Typography>

            </Box>
        </div>
    );
};

export default ViewJobs;