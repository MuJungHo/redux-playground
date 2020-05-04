import { instance } from './base.js'

export const createProjectApi = async ({ displayName, memo }) => {
  try {
    const response = await instance.post('/project/create', { displayName, memo })
    return response.data
  } catch (e) {
    console.error(e)
  }
}

export const getProjectsApi = async () => {
  try {
    const response = await instance.post('/project/listAll')
    return response.data
  } catch (e) {
    console.error(e)
  }
}

export const getProjectById = async projectDID => {
  try {
    const response = await instance.post('/project/getProjectInfo', { projectDID })
    return response.data
  } catch (e) {
    console.error(e)
  }
}

export const deleteProjectApi = async projectDID => {
  try {
    const response = await instance.post('/project/deleteProject', { projectDID })
    return response.data
  } catch (e) {
    console.error(e)
  }
}