import React, { useEffect, useState } from 'react'
import { Button } from '@material-ui/core'
import './styles'
import { EmailApi } from '@/service/EmailApi'

export default function ButtonSend({ dados, emails }) {
  const [message, setMessage] = useState(false)
  const [data, setData] = useState([])
  const [sendData, setSendData] = useState([])

  const SendEmails = async () => {
    const apiemail = await EmailApi.sendEmails(emails)
    console.log('apiemail', apiemail)
    setSendData(apiemail.emails)
    setMessage(!message)
    setData(apiemail)
  }

  console.log('data', data.emails)
  return (
    <>
      <div className="buttonSend">
        <Button
          variant="contained"
          className="buttonSend-confirm"
          style={{ marginTop: '10px', color: '#FFF' }}
          onClick={SendEmails}
        >
          Enviar
        </Button>
        {message && <span className="buttonSend__alert">Dados Enviados</span>}
      </div>
      {/* Lista para mostrar o retorno da api apos o envio
          está aqui apenas para questões de comparação com o postman 
          já que o retorno da soliciatação sempre é uma lista aleatoria*/}
      <List emailList={sendData} />
    </>
  )
}

function List({ emailList }) {
  const lista = []
  lista.push(...emailList)
  // Emails que a API retorna apos envio
  return (
    <ul>
      {lista.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  )
}
