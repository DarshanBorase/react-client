import {
    Box, Button, Card, CardContent, CardMedia, Typography,
  } from '@mui/material';
  import React from 'react';
  import PropTypes from 'prop-types';
  import { Link } from 'react-router-dom';
  import trainees from './data/trainee';
  import { getDateFormatted } from '../../lib/utils/helper';
  
  const TraineeDetail = (props) => {
    const { match } = props;
    const data = trainees.find((e) => e.id === match.params.id);
    const { name, email, createdAt } = data;
    return (
      <div>
        <Card style={{ margin: '20px' }} sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardMedia style={{
              backgroundColor: 'gray',
              height: '200px',
              width: '187px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            >
              <div>Thumbnail</div>
            </CardMedia>
  
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                <div>{name}</div>
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                <div>{getDateFormatted(createdAt)}</div>
                <div>{email}</div>
              </Typography>
            </CardContent>
          </Box>
        </Card>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button style={{ backgroundColor: 'gray' }} variant="contained">
            <Link
              style={{ color: 'black', textDecoration: 'none' }}
              to="/trainee"
            >
              Back
            </Link>
          </Button>
        </div>
      </div>
    );
  };
  
  TraineeDetail.propTypes = {
    match: PropTypes.objectOf.isRequired,
  };
  
  export default TraineeDetail;