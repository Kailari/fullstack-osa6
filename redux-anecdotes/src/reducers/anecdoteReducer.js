import anecdoteService from '../services/anecdotes'

const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: 'ANECDOTES_INIT',
      data: anecdotes
    })
  }
}

const createNew = (anecdote) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(anecdote)
    dispatch({
      type: 'ANECDOTES_CREATE',
      data: newAnecdote
    })
  }
}

const addVote = (id) => {
  return async dispatch => {
    const anecdoteToUpdate = await anecdoteService.getById(id)
    const changedAnecdote = {...anecdoteToUpdate, votes: anecdoteToUpdate.votes + 1}
    const updatedAnecdote = await anecdoteService.update(changedAnecdote)
    dispatch({
      type: 'ANECDOTES_VOTE',
      data: updatedAnecdote
    })
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ANECDOTES_INIT':
      return action.data
    case 'ANECDOTES_CREATE':
      return state.concat(action.data)
    case 'ANECDOTES_VOTE':
      const id = action.data.id
      const updatedAnecdote = action.data
      return state.map(anecdote => anecdote.id !== id ? anecdote : updatedAnecdote)
    default:
      return state
  }
}

export default reducer
export { addVote, createNew, initializeAnecdotes }