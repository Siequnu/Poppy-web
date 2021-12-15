import React from "react"
import useSWR from 'swr'
import './Create.css'

import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

import FastForwardIcon from '@mui/icons-material/FastForward';
import CategoryIcon from '@mui/icons-material/Category';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import FingerprintIcon from '@mui/icons-material/Fingerprint';

import BubbleUI from './BubbleUI';
import CategoryButton from './CategoryButton';
import CreateTabs from './CreateTabs';

import config from '../../config';

export default function Create() {

    const [currentTab, setCurrentTab] = React.useState(0);

    const [currentCategory, setCurrentCategory] = React.useState({})
    const categories = [
        {
            title: 'Quick',
            tags: 'quick',
            description: 'Fast exercises you can do in less than five minutes',
            icon: <FastForwardIcon className="Icon" />
        },
        {
            title: 'Skill',
            tags: 'skill',
            description: 'Learn new techniques to improve your creativity',
            icon: <CategoryIcon className="Icon" />
        },
        {
            title: 'Play',
            tags: 'play',
            description: 'Let your mind free and have some fun',
            icon: <EmojiNatureIcon className="Icon" />
        },
        {
            title: 'Expression',
            tags: 'expression',
            description: 'Express yourself in new ways',
            icon: <FingerprintIcon className="Icon" />
        },
        {
            title: 'Imagination',
            tags: 'quick',
            description: 'Cultivate your imagination',
            icon: <EmojiObjectsIcon className="Icon" />
        }
    ]
    
    const [viewBubbles, setViewBubbles] = React.useState(false);
    const handleViewBubbles = (i) => {
        if (currentTab === 2) {
            setCurrentCategory(data?.creators[i]);
        } else {
            setCurrentCategory(categories[i]);
        }
        setViewBubbles(!viewBubbles);
    };

    const bounceLoaderCss = css`display: block; margin: 0 auto;`;
    const { data } = useSWR(config.activitiesListUrl)
    if (!data) return <BounceLoader color='#213459' loading={true} css={bounceLoaderCss} size={100} />

    return (
        <div className="CreateContainer">
            {viewBubbles ?
                <BubbleUI category={currentCategory} activities={data.activities} handleBack={() => setViewBubbles(false)}/> 
                :
                <>
                    <CreateTabs currentTab={currentTab} setCurrentTab={setCurrentTab}/>
                   
                    {currentTab === 2 ? 
                    data?.creators.map((creator, i) =>
                        <CategoryButton onClick={() => handleViewBubbles(i)} key={i} category={creator} activities={data.activities}/>
                    )
                    :
                    categories.map((category, i) => 
                        <CategoryButton onClick={() => handleViewBubbles(i)} key={i} category={category} activities={data.activities}/>
                    )
                    }
                </>
            }
        </div>
    )
}