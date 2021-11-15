import React from 'react'
import PropTypes from 'prop-types'

export default function EmailList({ emails }) {
  return (
    <ul>
      {emails.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  )
}
EmailList.defaultProps = {
  emails: [],
}

EmailList.propTypes = {
  emails: PropTypes.array,
}
