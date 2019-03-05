import React from 'react'
import { createNew } from '../reducers/anecdoteReducer'
import { setNotification, hideNotification } from '../reducers/notificationReducer'

const AnecdoteForm = ({ store }) => {
  const create = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    store.dispatch(createNew(anecdote))

    store.dispatch(setNotification(`Created new anecdote: '${anecdote}'`))
    setTimeout(() => store.dispatch(hideNotification()), 5000)

    event.target.anecdote.value = ''
  }

  return (
    <form onSubmit={create}>
      <div><input name="anecdote" /></div>
      <button type="submit">create</button>
    </form>
  )
}

export default AnecdoteForm