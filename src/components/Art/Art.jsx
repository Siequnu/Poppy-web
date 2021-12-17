import './Art.css'

import Hero from '../Hero/Hero';

import { getCollections } from '../Collection/PoppyArt';

export default function Art() {

  const collections = getCollections();

  return (
    <div className="ViewActivitiesComponent">
      {collections.map((collection, index) =>
        <Hero key={index} title={collection.title} description={collection.caption} thumbnail={collection.thumbnail} link={'/collection/' + (index + 1)} />
      )}
    </div>
  )
}