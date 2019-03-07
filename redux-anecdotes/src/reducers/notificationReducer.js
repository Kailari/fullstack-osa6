const initialState = {
  error: false,
  message: 'This is a notification',
  visible: false
}

const setNotification = (message, error, timeout) => {
  return dispatch => {
    dispatch({
      type: 'NOTIFICATION_SET',
      data: { message, error, visible: true }
    })
    setTimeout(() => dispatch(hideNotification()), timeout)
  }
}

const hideNotification = () => {
  return {
    type: 'NOTIFICATION_HIDE',
    data: {}
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NOTIFICATION_SET':
      return { ...action.data }
    case 'NOTIFICATION_HIDE':
      return { ...initialState }
    default:
      return state
  }
}

export default reducer
export { setNotification, hideNotification }