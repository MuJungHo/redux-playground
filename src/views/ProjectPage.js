import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { doGetProjects, doCreateProject } from '../actions/project.js'
import Project from '../components/Project.js'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

export default () => {
  const { projects, projectList } = useSelector(state => state.project)

  const [open, setOpen] = React.useState(false)

  const [displayName, setDisplayName] = React.useState('')

  const [memo, setMemo] = React.useState('')

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleAddClick = e => {
    e.preventDefault()
    dispatch(doCreateProject({ displayName, memo }))
    setOpen(false)
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(doGetProjects())
  }, [dispatch])

  return (
  <div>
    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      Add Project
    </Button>
    {
      projectList.map(project => <Project key={project} id={project}></Project>)
    }
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Add Project</DialogTitle>
      <form onSubmit={handleAddClick}>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            label="Name"
            fullWidth
            onChange={e => setDisplayName(e.target.value)}
          />
          <TextField
            required
            margin="dense"
            label="Description"
            fullWidth
            onChange={e => setMemo(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Add
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  </div>
  )
}
