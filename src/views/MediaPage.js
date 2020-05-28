import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { doUploadMedia, doGetMediaFromFolder } from '../actions/media.js'
import { makeStyles } from "@material-ui/core/styles"
import Fab from "@material-ui/core/Fab"
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate"

export default () => {
    const useStyles = makeStyles(() => ({
        input: {
            display: "none"
        }
    }))
    const classes = useStyles()

    const dispatch = useDispatch()

    const handleUploadClick = e => {
        var file = e.target.files[0]
        dispatch(doUploadMedia(file))
    }

    useEffect(() => {
        dispatch(doGetMediaFromFolder())
    },[])
    return (
    <div>
        <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
            onChange={handleUploadClick}
        />
        <label htmlFor="contained-button-file">
          <Fab component="span" className={classes.button}>
            <AddPhotoAlternateIcon />
          </Fab>
        </label>
    </div>
    )
}


