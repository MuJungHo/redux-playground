import React from 'react'
import SelectableBoard from '../components/SelectableBoard'
import User from '../components/User'
import { makeStyles } from "@material-ui/core/styles"

const UserPage = () => {
    const useStyles = makeStyles(() => ({
        userPage: {
            position: 'relative',
            height: '100%'
        }
    }))

    const users = [
        { name: 'user1' },
        { name: 'user2' },
        { name: 'user3' },
        { name: 'user4' },
        { name: 'user5' }
    ]

    const [selectedArea, setWrap] = React.useState({ left: 0, top: 0, width: 0, height: 0, x: 0, y: 0 })

    const classes = useStyles()

    return (
        <div className={classes.userPage}>
            <SelectableBoard getSelectArea={setWrap}></SelectableBoard>
            {
                users.map(user => <User key={user.name} selectedArea={selectedArea}/>)
            }
        </div>
    )
}

export default UserPage