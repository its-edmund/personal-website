import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Box, Typography, Button, Grid } from '@material-ui/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import Resume from '../../assets/docs/resume.pdf';

library.add(fab);

const Title = styled(Typography)({
  color: 'white',
  fontSize: '60px',
  fontWeight: 'bold',
  marginBottom: '-0.1em',
});

const Subtitle = styled(Typography)({
  color: 'white',
  fontSize: '15px',
});

const ChubbyButton = styled(Button)({
  borderRadius: '5em',
  backgroundColor: 'rgb(255, 255, 255, 0.1)',
  fontSize: '15px',
  fontWeight: 'bold',
  textTransform: 'none',
  color: 'white',
  margin: '1em',
  padding: '0.4em',
  paddingLeft: '2em',
  paddingRight: '2em',

  backdropFilter: 'blur(3px)',

  '&:hover': {
    backgroundColor: 'rgb(255, 255, 255, 0.05)',
  },
});

const Home = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      height='80%'
    >
      <Title>I'm Edmund Xin.</Title>
      <Subtitle>
        {'Software Engineer \u2758 Competitive Programmer \u2758 Student'}
      </Subtitle>
      <Grid justify='center' container spacing={3}>
        <Grid item>
          <Link to='/projects' style={{ textDecoration: 'none' }}>
            <ChubbyButton target='_blank'>Portfolio</ChubbyButton>
          </Link>
        </Grid>
        <Grid item>
          <ChubbyButton target='_blank'>Resume</ChubbyButton>
        </Grid>
      </Grid>
      <Grid justify='center' container spacing={3}>
        <Grid item>
          <a href='https://www.github.com/mxinburritos' target='_blank'>
            <FontAwesomeIcon icon={['fab', 'github']} size='2x' color='white' />
          </a>
        </Grid>
        <Grid item>
          <a
            href='https://www.linkedin.com/in/edmund-xin-771937176/'
            target='_blank'
          >
            <FontAwesomeIcon
              icon={['fab', 'linkedin']}
              size='2x'
              color='white'
            />
          </a>
        </Grid>
        <Grid item>
          <a href='https://www.instagram.com/edmund.xin/' target='_blank'>
            <FontAwesomeIcon
              icon={['fab', 'instagram']}
              size='2x'
              color='white'
            />
          </a>
        </Grid>
        <Grid item>
          <a href='https://twitter.com/mxinburritos' target='_blank'>
            <FontAwesomeIcon
              icon={['fab', 'twitter']}
              size='2x'
              color='white'
            />
          </a>
        </Grid>
        <Grid item>
          <a href='https://www.facebook.com/mxinburritos/' target='_blank'>
            <FontAwesomeIcon
              icon={['fab', 'facebook']}
              size='2x'
              color='white'
            />
          </a>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
