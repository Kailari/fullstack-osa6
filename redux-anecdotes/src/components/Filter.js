import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const Filter = (props) => {
  const style = {
    marginBottom: 10
  }

  const handleChange = (event) => {
    const newValue = event.target.value
    props.setFilter(newValue)
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const mapDispatchToProps = {
  setFilter
}

export default connect(
  null,
  mapDispatchToProps
)(Filter)