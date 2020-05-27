import React, { useRef, useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles"
import clsx from 'clsx'

export default ({ selectedItems }) => {

    const useStyles = makeStyles(() => ({
        user: {
            width: 100,
            height: 100,
            marginLeft: 20,
            marginBottom: 20,
            userSelect: 'none',
            backgroundColor: '#bebebe'
        },
        userActive: {
            backgroundColor: 'red'
        }
    }))

    const classes = useStyles()


    const user = useRef()

    var [isActived, setIsActived] = React.useState(false)

    useEffect(() => {
        console.log(selectedItems)
    }, [selectedItems])

    return (
        <div className={classes.user}>
            user
        </div>
    )
}