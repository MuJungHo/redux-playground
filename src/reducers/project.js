const defaultState = []

const project = (state = defaultState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT_SUCCESS':
      return [...state, action.project]
    case 'CREATE_PROJECT_FAILED':
      return state
    case 'GET_PROJECTS_SUCCESS':
      return [...action.projects]
    case 'GET_PROJECTS_FAILED':
      return state
    default:
      return state
  }
}

export default project
