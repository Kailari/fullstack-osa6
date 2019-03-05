import React from 'react'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification, hideNotification } from '../reducers/notificationReducer'

const AnecdoteList = ({ store }) => {
  const anecdotes = store.getState().anecdotes
  const filter = store.getState().filter.toLocaleLowerCase()

  const vote = (id) => {
    store.dispatch(addVote(id))

    const anecdote = anecdotes.filter(a => a.id === id)[0]
    store.dispatch(setNotification(`You voted '${anecdote.content}'`))
    setTimeout(() => store.dispatch(hideNotification()), 5000)
  }

  const filteredAnecdotes = anecdotes.filter(a => a.content.toLocaleLowerCase().includes(filter))

  return (
    <>
      {filteredAnecdotes.sort((b, a) => a.votes - b.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList