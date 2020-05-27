import React from 'react'
import SelectableBoard from '../components/SelectableBoard'
import GridContainer from '../components/GridContainer'
import { makeStyles } from "@material-ui/core/styles"

const UserPage = () => {
    const useStyles = makeStyles(() => ({
        userPage: {
            position: 'relative',
            height: '100%'
        }
    }))

    const users = [
        { id: '1', name: 'user1' },
        { id: '2', name: 'user2' },
        { id: '3', name: 'user3' },
        { id: '4', name: 'user4' },
        { id: '5', name: 'user5' },
    ]

    const [selectedArea, setWrap] = React.useState({ left: 0, top: 0, width: 0, height: 0, x: 0, y: 0 })

    const classes = useStyles()

    return (
        <div className={classes.userPage}>
            <SelectableBoard getSelectArea={setWrap}></SelectableBoard>
            <GridContainer selectedArea={selectedArea} items={users}></GridContainer>
        </div>
    )
}

export default UserPage