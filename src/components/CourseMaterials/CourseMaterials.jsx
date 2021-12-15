import React from "react";

import CardComponent from '../Card/CardComponent';
import Hero from '../Hero/Hero';

export default function CourseMaterials() {
    
    const courseMaterials = [

        {
            title: 'Business, careers and companies',
            description: 'Getting to grips with careers and business job vocabulary',
            thumbnail: '/thumbnails/bcp1.png',
            url: '/documents/Business, careers and companies.pdf'
        },
        {
            title: 'SWOT analysis',
            description: 'Thinking about strengths, weaknesses, threats and opportunities for your English',
            thumbnail: '/thumbnails/swot.png',
            url: '/documents/English SWOT analysis.pdf'
        },
        {
            title: 'GAAP',
            description: 'GAAP vocab exercises',
            thumbnail: '/thumbnails/gaap.png',
            url: '/documents/GAAP and finance vocab.pdf'
        },
        {
            title: 'Graph description',
            description: 'Describing trends',
            thumbnail: '/thumbnails/finance.png',
            url: '/documents/Graph description, trends and finance vocab.pdf'
        },
        {
            title: 'Case study: London brain drain',
            description: 'Understanding and projecting solutions to a problem',
            thumbnail: '/thumbnails/case_study.png',
            url: '/documents/Handout 4 - London brain-drain.pages.pdf'
        },
    ]

    return (
        <div className="ViewActivitiesComponent">
            <Hero thumbnail='/assets/tsinghua1.jpeg' title='Documents' description='World Project Holdings documents' />
            <CardComponent cards={courseMaterials} />
        </div>
    )
}