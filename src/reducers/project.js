import { normalize, schema } from 'normalizr'

const defaultState = {
  projectList: [],
  projects: {}
}

const projectsSchema = new schema.Entity('projects')

const project = (state = defaultState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT_SUCCESS': {
      return {
        projectList: [...state.projectList, action.project.id],
        projects: {...state.projects, ...action.project}
      }
    }
    case 'CREATE_PROJECT_FAILED':
      return state
    case 'GET_PROJECTS_SUCCESS': {
      const { result, entities } = normalize(action.projects, [projectsSchema])
      return {
        projectList: [...result],
        projects: {...entities.projects}
      }
    }
    case 'GET_PROJECTS_FAILED':
      return state
    default:
      return state
  }
}

export default project
