import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { EmailApi } from '@/service/EmailApi'
import { Chip } from '@material-ui/core'

export default function EmailList({ initEmails }) {
  const [dados, setDados] = useState([])
  const [emails, setEmails] = useState([])
  const emailApi = EmailApi

  // const getEmails = async () => {
  //   const getEmail = await emailApi.getEmails()
  //   setDados(getEmail)
  // }
  useEffect(async () => {
    const getEmail = await emailApi.getEmails()
    setDados(getEmail)
    setEmails(getEmail.emails)
  }, [])

  return (
    <>
      <div>
        {/* {emails.map((i) => (
          <Chip key={i} tabIndex={-1} label={i} />
        ))} */}
      </div>

      {emails.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <div className="emailList__Tags">
          <Chip key={item} tabIndex={-1} label={item} />
        </div>
      ))}
      <div>{dados.subject}</div>
      <div>{dados.content}</div>
    </>
  )
}
EmailList.defaultProps = {
  initEmails: [],
}

EmailList.propTypes = {
  initEmails: PropTypes.array,
}
