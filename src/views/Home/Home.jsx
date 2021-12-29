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

import Countdown from 'react-countdown';

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

  const Completionist = () => <Button component={Link} to="/collection/11" size="Large" variant="contained" endIcon={<ArrowForwardIosIcon />}> Check it out now</Button>

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <span>{hours} hours, {minutes} minutes and {seconds} seconds</span>;
    }
  };

  return (
    <>
      <h2>We are a Hong Kong art collective 🇭🇰 </h2>

      <ImageGallery items={images} slideInterval={2500} showNav={false} showPlayButton={false} showFullscreenButton={false} autoPlay={true} slideDuration={600} />

      <Element name="about" className="element">

        <h3>⏱ Next Hong Kong NFT release:</h3>
        <Countdown date={'2021-12-30T19:00:00'} renderer={renderer} />

      </Element>

      <PhotoDividerComponent height='30px' thumbnail={getRandomThumbnail()} />

      <Element name="about" className="element">

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

        <Button component={Link} to="/art" size="Large" variant="contained" endIcon={<ArrowForwardIosIcon />}> Take a look at our art</Button>
      </Element>

      <PhotoDividerComponent thumbnail={getRandomThumbnail()} />

    </>
  )
}

export default withRouter(Home)