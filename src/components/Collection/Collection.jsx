import { Link, withRouter, useParams } from 'react-router-dom';

import PhotoDividerComponent from '../PhotoDivider/PhotoDividerComponent';
import Card from '../Card/CardComponent';
import Button from '@mui/material/Button';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { getCollections } from './PoppyArt';

function Collection() {

    const { collectionId } = useParams();

    const getRandomThumbnail = () => `/nft-background.jpeg`

    const collection = getCollections(collectionId);

    return (
        <div className="CollectionComponent" style={{padding: '10px'}}>
            
            <Button component={Link} to="/art" size="Large" style={{margin: '10px 40px 40px 0', float: 'left'}} variant="contained" startIcon={<ArrowBackIosIcon />}> Back to collections</Button>
            <br />
            <br />

            <h2>{collection.title}</h2>

            {collection.description.map((paragraph, index) => <p key={index}>{paragraph}</p>)}

            <Button component={Link} to={collection.url} size="Large" style={{margin: '40px'}} variant="contained" endIcon={<ChevronRightIcon />}> View the entire collection on OpenSea</Button>

            <Card cards={collection.items} height='auto' />

            <PhotoDividerComponent thumbnail={getRandomThumbnail()} style={{ margin: '200px', display: 'block' }} />
        </div>
    )
}

export default withRouter(Collection)