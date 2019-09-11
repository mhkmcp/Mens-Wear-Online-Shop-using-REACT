import React from 'react'

import './preview-collection.scss'
import CollectionItem from '../collection-item/collection-item.component'

const PreviewCollection = ({title, items}) => (
    <div className='preview-collection'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
        {
            items
            .filter((item, idx) => idx < 4)
            .map(({ id, ...otherItemProp }) =>(
                <CollectionItem key={ id }{ ...otherItemProp }/>
                ))
        }
        </div>
    </div>
);

export default PreviewCollection