import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { EmailApi } from '@/service/EmailApi'
import { Chip, TextField } from '@material-ui/core'
import './styles'

export default function EmailList({ initEmails }) {
  const [dados, setDados] = useState([])
  const [emails, setEmails] = useState([])
  const emailApi = EmailApi

  const getEmails = async () => {
    const getEmail = await emailApi.getEmails()
    setDados(getEmail)
  }
  useEffect(() => {
    getEmails()
    const getEmail = emailApi.getEmails()
    setDados(getEmail)
    setEmails([...emails, ...initEmails])
  }, [initEmails])

  return (
    <>
      <div className="emailList">
        <p className="emailList__label">Emails Adicionados</p>
        {emails.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <Chip
            key={item}
            tabIndex={-1}
            label={item}
            className="emailList__chip"
            style={{ background: '#3f51b5', color: '#FFF' }}
          />
        ))}
      </div>
      <div className="emailList__subject">
        <TextField
          fullWidth
          variant="outlined"
          id="subject"
          name="Assunto"
          label="Assunto"
          placeholder={dados.subject}
          defaultValue={dados.subject}
        />
      </div>
      <div className="emailList__content">
        <TextField
          fullWidth
          variant="outlined"
          id="content"
          name="menssagem"
          label="Menssagem"
          placeholder={dados.content}
          // defaultValue={dados.content}
          multiline
          rows={4}
        />
      </div>
    </>
  )
}
EmailList.defaultProps = {
  initEmails: [],
}

EmailList.propTypes = {
  initEmails: PropTypes.array,
}
