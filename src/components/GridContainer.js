import React from 'react'
import GridItem from './GridItem'

export default ({ selectedArea, items }) => {
    return (
        <div>
            {
                items
                .map(item => 
                    <GridItem 
                        key={item.id}
                        item={item}
                        selectedArea={selectedArea}
                    />
                )    
            }
        </div>
    )
}