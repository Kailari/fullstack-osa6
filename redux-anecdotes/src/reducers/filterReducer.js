const initialState = ''

const setFilter = (filter) => {
  return {
    type: 'SET',
    data: filter
  }
}

const clearFilter = (filter) => {
  return {
    type: 'CLEAR',
    data: {}
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET':
      return action.data
    case 'CLEAR':
      return initialState
    default:
      return state
  }
}

export default reducer
export { setFilter, clearFilter }