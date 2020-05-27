import React, { useRef, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

export default ({ selectedArea, item }) => {

    const useStyles = makeStyles(() => ({
        card: {
            width: 100,
            height: 100,
            marginLeft: 20,
            marginBottom: 20,
            userSelect: 'none',
            backgroundColor: '#bebebe'
        },
        actived: {
            backgroundColor: 'red'
        }
    }))

    const classes = useStyles()

    const card = useRef()

    var [isActived, setActive] = React.useState(false)

    useEffect(() => {
        var { top, left, bottom, right } = card.current.getBoundingClientRect()
        top = top - selectedArea.y
        left = left - selectedArea.x
        right = right - selectedArea.x
        bottom = bottom - selectedArea.y
        selectedArea.bottom = selectedArea.top + selectedArea.height
        selectedArea.right = selectedArea.left + selectedArea.width
        setActive(!(right < selectedArea.left || left > selectedArea.right || top >selectedArea.bottom || bottom < selectedArea.top))
    }, [selectedArea])

    return (
        <div ref={card} className={clsx(classes.card, {
            [classes.actived]: isActived
          })}>
            {item.name}
        </div>
    )
}