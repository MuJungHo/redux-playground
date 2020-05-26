import React, { useRef, useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles"
import clsx from 'clsx';

export default (props) => {

    const useStyles = makeStyles(() => ({
        user: {
            width: 100,
            height: 100,
            marginLeft: 20,
            userSelect: 'none',
            backgroundColor: '#bebebe'
        },
        userActive: {
            backgroundColor: 'red'
        }
    }))

    const classes = useStyles()

    const { selectedArea } = props

    const user = useRef()

    var [isActived, setIsActived] = React.useState(false)

    useEffect(() => {
        var { top, left, bottom, right } = user.current.getBoundingClientRect()
        top = top - selectedArea.y
        left = left - selectedArea.x
        right = right - selectedArea.x
        bottom = bottom - selectedArea.y
        selectedArea.bottom = selectedArea.top + selectedArea.height
        selectedArea.right = selectedArea.left + selectedArea.width
        setIsActived(!(right < selectedArea.left || left > selectedArea.right || top >selectedArea.bottom || bottom < selectedArea.top))
    }, [selectedArea])

    return (
        <div ref={user} className={clsx(classes.user, {
            [classes.userActive]: isActived
          })}>

        </div>
    )
}