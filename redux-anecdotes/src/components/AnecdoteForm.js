import React from 'react'
import { connect } from 'react-redux'
import { createNew } from '../reducers/anecdoteReducer'
import { setNotification, hideNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const create = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    props.createNew(anecdote)

    props.setNotification(`Created new anecdote: '${anecdote}'`, false, 5000)

    event.target.anecdote.value = ''
  }

  return (
    <form onSubmit={create}>
      <div><input name="anecdote" /></div>
      <button type="submit">create</button>
    </form>
  )
}

export default connect(
  null,
  { createNew, setNotification, hideNotification }
)(AnecdoteForm)