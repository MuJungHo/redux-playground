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
        projects: {...state.projects, [action.project.id]: action.project}
      }
    }
    case 'CREATE_PROJECT_FAILED':
      return state
    case 'GET_PROJECTS_SUCCESS': {
      if(!action.projects) return defaultState
      const { result, entities } = normalize(action.projects, [projectsSchema])
      return {
        projectList: [...result],
        projects: {...entities.projects}
      }
    }
    case 'GET_PROJECTS_FAILED':
      return state
    case 'DELETE_PROJECT_SUCCESS': {
      return {
        projectList: state.projectList.filter(project => project !== action.projectDID),
        projects: state.projectList.filter(project => project !== action.projectDID)
        .reduce((newProjects, id) => {
          return {...newProjects, [id]: state.projects[id]}
        }, {})
      }
    }
    case 'DELETE_PROJECT_FAILED':
      return state
    case 'EDIT_PROJECT_SUCCESS': {
      return {
        projectList: state.projectList,
        projects: {...state.projects, [action.project.id]: action.project}
      }
    }
    case 'EDIT_PROJECT_FAILED':
      return state
    default:
      return state
  }
}

export default project
