/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { withRouter } from 'react-router-dom';

import PhotoDividerComponent from '../PhotoDivider/PhotoDividerComponent';

import Button from '@mui/material/Button';

import { Element } from 'react-scroll'

import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import MemoryIcon from '@mui/icons-material/Memory';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

import './Home.css';

function Home(props) {

  const getRandomThumbnail = () => `/nft-background.jpeg`

  return (
    <>

      <h1>Poppy</h1>
      
      <a className="ButtonLink" href="https://opensea.io/POPPIES">
      <Button size="Large" variant="contained" endIcon={<LocalFloristIcon />}> Our OpenSea store</Button>
      </a>
  
      <PhotoDividerComponent thumbnail={getRandomThumbnail()} style={{ margin: '200px', display: 'block' }} />

      <Element name="about" className="element">
        <div className="secondary-text">
          <h2>We are an art collective</h2>
          <div className="icon-grid">
            <div className="icon-grid-item">
              <LocalFireDepartmentIcon className="icon" />
              <p>We are a small group of artists from 4 continents.</p>
            </div>
            <div className="icon-grid-item">
              <BubbleChartIcon className="icon" />
              <p>We are commited to digital art.</p>
            </div>
            <div className="icon-grid-item">
              <MemoryIcon className="icon" />
              <p>We seek to provoke, educate, and challenge.</p>
            </div>
          </div>
        </div>
      </Element>

      <PhotoDividerComponent thumbnail={getRandomThumbnail()} style={{ margin: '200px', display: 'block' }} />
    </>
  )
}

export default withRouter(Home)