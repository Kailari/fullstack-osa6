const initialState = {
  error: false,
  message: 'This is a notification',
  visible: false
}

const setNotification = (message, error) => {
  return {
    type: 'SET',
    data: { message, error, visible: true }
  }
}

const hideNotification = () => {
  return {
    type: 'HIDE',
    data: {}
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET':
      return { ...action.data }
    case 'HIDE':
      return { ...initialState }
    default:
      return state
  }
}

export default reducer
export { setNotification, hideNotification }