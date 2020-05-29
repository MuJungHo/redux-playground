import React from 'react'
import GridItem from './GridItem'

export default ({ selectedArea, items }) => {
    return (
        <div>
            {
                items
                .map((item, index) => 
                    <GridItem 
                        key={index}
                        item={item}
                        selectedArea={selectedArea}
                    />
                )    
            }
        </div>
    )
}