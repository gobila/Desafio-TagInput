import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import './styles'

export default function ButtonFake() {
  const [message, setMessage] = useState(false)

  const toggleMenssage = () => {
    setMessage(!message)
  }
  return (
    <div className="buttonFake">
      <Button
        variant="contained"
        // disabled
        className="buttonFake-cancel"
        style={{ marginTop: '10px', color: '#FFF' }}
        onClick={toggleMenssage}
      >
        Cancelar
      </Button>
      {message && <span className="buttonFake__alert">Botões não implementados</span>}
      <Button
        variant="contained"
        // disabled
        className="buttonFake-confirm"
        style={{ marginTop: '10px', color: '#FFF' }}
        onClick={toggleMenssage}
      >
        Enviar
      </Button>
    </div>
  )
}
