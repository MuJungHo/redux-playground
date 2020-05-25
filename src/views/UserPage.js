import React from 'react'
import SelectableBoard from '../components/SelectableBoard'
import { makeStyles } from "@material-ui/core/styles"

const UserPage = () => {
    const useStyles = makeStyles(() => ({
        userPage: {
            position: 'relative',
            height: '100%'
        }
    })) 
    const classes = useStyles()
    return (
        <div className={classes.userPage}>
            <SelectableBoard></SelectableBoard>
            <div>user1</div>
            <div>user2</div>
            <div>user3</div>
            <div>user4</div>
        </div>
    )
}

export default UserPage