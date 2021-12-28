import { useState } from 'react';
import { Link, withRouter, useParams } from 'react-router-dom';

import PhotoDividerComponent from '../../components/PhotoDivider/PhotoDividerComponent';
import Button from '@mui/material/Button';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { getCollections } from './PoppyArt';

import './Collection.css';

import ProductThumbnail from '../../components/ProductThumbnail/ProductThumbnail';
import ProductPreviewDialog from '../../components/ProductPreviewDialog/ProductPreviewDialog';

function Collection() {

    const { collectionId } = useParams();

    const getRandomThumbnail = () => `/nft-background.jpeg`

    const collection = getCollections(collectionId);

    const [dialogOpen, setDialogOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState([])

    const handleOpenCard = (i) => {
        setSelectedProduct(collection.items[i])
        setDialogOpen(true)
    }

    return (
        <div>
            <ProductPreviewDialog product={selectedProduct} open={dialogOpen} onClose={() => setDialogOpen(false)} />

            <Button component={Link} to="/art" size="Large" style={{ margin: '10px 40px 40px 0', float: 'left' }} variant="contained" startIcon={<ArrowBackIosIcon />}> Back to collections</Button>
            <br />
            <br />

            <h2 style={{ marginTop: '35px' }}>{collection.title}</h2>

            {collection.description.map((paragraph, index) => <p key={index}>{paragraph}</p>)}

            <Button component={Link} to={{ pathname: collection.url }} target="_blank" size="Large" style={{ margin: '40px' }} variant="contained" endIcon={<ChevronRightIcon />}> View the entire collection on OpenSea</Button>

            <div style={{ display: 'block', margin: '0 auto' }}>
                <div className="ProductCards">
                    {collection.items.map((product, i) => <ProductThumbnail product={product} key={i} i={i} onClick={handleOpenCard} />)}
                </div>
            </div>

            <PhotoDividerComponent thumbnail={getRandomThumbnail()} />
        </div>
    )
}

export default withRouter(Collection)