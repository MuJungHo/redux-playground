import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { doDeleteProject, doEditProject } from '../actions/project.js'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'

import { FormattedMessage } from 'react-intl'

export default ({ id }) => {
  const { projects } = useSelector(state => state.project)

  const dispatch = useDispatch()

  const [isEditDialogOpen, setEditDialogOpen] = React.useState(false)

  const [isDeleteDialogOpen, setDeleteDialogOpen] = React.useState(false)

  const [displayName, setDisplayName] = React.useState(projects[id].displayName)

  const [memo, setMemo] = React.useState(projects[id].memo)

  const handleEditProjectClick = e => {
    setEditDialogOpen(true)
  }

  const handleEditDialogClose = () => {
    setEditDialogOpen(false)
  }

  const handleEditProject = e => {
    e.preventDefault()
    dispatch(doEditProject({ projectDID: id, memo, displayName }))
    setEditDialogOpen(false)
  }

  const handleDeleteProjectClick = e => {
    setDeleteDialogOpen(true)
  }

  const handleDeleteDialogClose = () => {
    setDeleteDialogOpen(false)
  }

  const handleDeleteProject = e => {
    dispatch(doDeleteProject({ projectDID: id }))
    setDeleteDialogOpen(false)
  }


  
  return (
    <div>
      <Typography variant="h6" onClick={handleEditProjectClick}>
        {projects[id].displayName}
      </Typography>
      <Button variant="outlined" color="primary" onClick={handleDeleteProjectClick}>
        delete
      </Button>
      <Dialog open={isEditDialogOpen} onClose={handleEditDialogClose} aria-labelledby="form-dialog-title">
        <DialogTitle>Edit Project</DialogTitle>
        <form onSubmit={handleEditProject}>
          <DialogContent>
            <TextField
              autoFocus
              required
              margin="dense"
              label="Name"
              fullWidth
              value={displayName}
              onChange={e => setDisplayName(e.target.value)}
            />
            <TextField
              required
              margin="dense"
              label="Description"
              fullWidth
              value={memo}
              onChange={e => setMemo(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleEditDialogClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Edit
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      <Dialog 
        open={isDeleteDialogOpen} 
        onClose={handleDeleteDialogClose} 
        aria-labelledby="form-dialog-title"
        >
        <DialogTitle>Delete Project</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <FormattedMessage id="deleteThingMessage" values={{ thing: <FormattedMessage id="project"/> }}/> {projects[id].displayName}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteProject} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

