import { createProjectApi, getProjectsApi, deleteProjectApi, editProjectApi } from '../apis/project.js'
import { requestFinish, requestStart } from './loading.js'

const createProjectSuccess = project => ({
  type: 'CREATE_PROJECT_SUCCESS',
  project
})

const createProjectFailed = () => ({
  type: 'CREATE_PROJECT_Failed'
})

const deleteProjectSuccess = projectDID => ({
  type: 'DELETE_PROJECT_SUCCESS',
  projectDID
})

const deleteProjectFailed = () => ({
  type: 'DELETE_PROJECT_Failed'
})

const editProjectSuccess = project => ({
  type: 'EDIT_PROJECT_SUCCESS',
  project
})

const editProjectFailed = () => ({
  type: 'EDIT_PROJECT_Failed'
})

const getProjectsSuccess = projects => ({
  type: 'GET_PROJECTS_SUCCESS',
  projects
})

const getProjectsFailed = () => ({
  type: 'GET_PROJECTS_Failed'
})

export const doGetProjects = () => async dispatch => {

  dispatch(requestStart())
  
  try {
    const data = await getProjectsApi()
    if (data.message === 'SUCCESS') {
      dispatch(getProjectsSuccess(data.projects))
    } else {
      dispatch(getProjectsFailed())
    }
  } catch (e) {
    console.error(e)
  }

  dispatch(requestFinish())

}

export const doCreateProject = ({ displayName, memo }) => async dispatch => {

  dispatch(requestStart())
  
  try {
    const data = await createProjectApi({ displayName, memo })
    if (data.message === 'SUCCESS') {
      dispatch(createProjectSuccess(data.project))
    } else {
      dispatch(createProjectFailed())
    }
  } catch (e) {
    console.error(e)
  }
  
  dispatch(requestFinish())

}

export const doDeleteProject = ({ projectDID }) => async dispatch => {

  dispatch(requestStart())
  
  try {
    const data = await deleteProjectApi(projectDID)
    if (data.message === 'SUCCESS') {
      dispatch(deleteProjectSuccess(data.userDID))
    } else {
      dispatch(deleteProjectFailed())
    }
  } catch (e) {
    console.error(e)
  }
  
  dispatch(requestFinish())

}

export const doEditProject = ({ projectDID, displayName, memo }) => async dispatch => {

  dispatch(requestStart())
  
  try {
    const data = await editProjectApi({ projectDID, displayName, memo })
    if (data.message === 'SUCCESS') {
      dispatch(editProjectSuccess(data.project))
    } else {
      dispatch(editProjectFailed())
    }
  } catch (e) {
    console.error(e)
  }
  
  dispatch(requestFinish())

}

