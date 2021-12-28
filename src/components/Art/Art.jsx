import './Art.css'

import Hero from '../Hero/Hero';

import { getCollections } from '../Collection/PoppyArt';

export default function Art() {

  const collections = getCollections();

  return (
    <div className="ViewActivitiesComponent">
      {collections.reverse().map((collection, index) =>
        <Hero key={index} title={collection.title} description={collection.caption} thumbnail={collection.thumbnail} link={'/collection/' + (collections.length - index)} comingSoon={collection.comingSoon} />
      )}
    </div>
  )
}