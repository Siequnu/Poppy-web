/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link, withRouter } from 'react-router-dom';

import PhotoDividerComponent from '../../components/PhotoDivider/PhotoDividerComponent';

import Button from '@mui/material/Button';

import { Element } from 'react-scroll'

import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import MemoryIcon from '@mui/icons-material/Memory';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import './Home.css';

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

import { getCollections } from '../Collection/PoppyArt';

import _ from 'underscore';

function Home() {

  const getRandomThumbnail = () => `/nft-background.jpeg`

  const thumbnails = []
  getCollections().forEach(collection => {
    collection.items.forEach(item => {
      thumbnails.push({ original: item.thumbnail }
      )
    })
  })
  const images = _.sample(thumbnails, 20)

  return (
    <>

      <h1>Poppy</h1>


      <ImageGallery items={images} slideInterval={2500} showFullscreenButton={false} autoPlay={true} slideDuration={600} />
      
      <Button style={{ width: '180px', height: '40px', fontSize: '18px', marginTop: '20px' }} component={Link} to='/art' size="Large" variant="contained" endIcon={<ArrowForwardIosIcon />}> View our art</Button>

      <Element name="about" className="element">
        <div className="secondary-text">
          <h2>We are a Hong Kong art collective 🇭🇰 </h2>
          <div className="icon-grid">
            <div className="icon-grid-item">
              <LocalFireDepartmentIcon className="icon" />
              <p>We believe in meaning and truth.</p>
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

        <Button component={Link} to="/art" size="Large" variant="contained" endIcon={<ArrowForwardIosIcon />}> Take a look at our art</Button>
      </Element>

      <PhotoDividerComponent thumbnail={getRandomThumbnail()} />
    </>
  )
}

export default withRouter(Home)