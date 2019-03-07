import React from 'react'
import { connect } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification, hideNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const { anecdotes } = props

  const vote = (id) => {
    props.addVote(id)

    const anecdote = anecdotes.filter(a => a.id === id)[0]
    props.setNotification(`You voted '${anecdote.content}'`, false, 5000)
  }

  return (
    <>
      {anecdotes
        .sort((b, a) => a.votes - b.votes)
        .map(anecdote =>
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

const visibleAnecdotesFor = props => {
  const filter = props.filter.toLocaleLowerCase()
  return props.anecdotes.filter(a => a.content.toLocaleLowerCase().includes(filter))
}

const mapStateToProps = state => {
  return {
    anecdotes: visibleAnecdotesFor(state)
  }
}

const mapDispatchToProps = {
  addVote,
  setNotification,
  hideNotification
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)