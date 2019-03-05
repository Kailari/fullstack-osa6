import React from 'react'
import { setFilter } from '../reducers/filterReducer'

const Filter = ({ store }) => {
  const style = {
    marginBottom: 10
  }

  const handleChange = (event) => {
    const newValue = event.target.value
    store.dispatch(setFilter(newValue))
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter