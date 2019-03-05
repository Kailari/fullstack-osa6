import React from 'react';

const Notification = ({ store }) => {
  const notification = store.getState().notification

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    backgroundColor: (notification.error ? 'red' : 'green')
  }

  return (
    <>
      {notification.visible && (
        <div style={style}>
          {notification.message}
        </div>
      )}
    </>
  )
}

export default Notification
