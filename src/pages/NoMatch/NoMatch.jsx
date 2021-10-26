import { Typography } from '@mui/material';
import React from 'react';

const NotMatch = () => (
  <div style={{
    height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
  }}
  >
    <div>
      <Typography color="gray" variant="h2" component="h3">
        Not Found
      </Typography>
    </div>
    <div>
      <Typography color="gray" variant="h5" component="h3">
        Seems like the page you are looking after does not exits
      </Typography>
    </div>
  </div>
);

export default NotMatch;