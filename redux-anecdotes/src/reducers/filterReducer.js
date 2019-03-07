const initialState = ''

const setFilter = (filter) => {
  return {
    type: 'FILTER_SET',
    data: filter
  }
}

const clearFilter = (filter) => {
  return {
    type: 'FILTER_CLEAR',
    data: {}
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER_SET':
      return action.data
    case 'FILTER_CLEAR':
      return initialState
    default:
      return state
  }
}

export default reducer
export { setFilter, clearFilter }