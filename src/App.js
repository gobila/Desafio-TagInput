import React, { useEffect, useState } from 'react'
import EmailList from './components/EmailList'
import TagsInput from './components/TagsInput'
import ButtonFake from './components/ButtonFake'
import { useValidation } from './infra/hooks/validation'
import { EmailApi } from './service/EmailApi'
import './test.scss'

function App() {
  // const [tag, setTag] = useState(['contato@rarolabs.com.br', 'nao-responda@rarolabs.com.br'])
  const emailApi = EmailApi
  const [initTags, setInitTags] = useState([])
  // const [tag, setTag] = useState(initTags)
  const [tag, setTag] = useState([
    'Gabriella17@yahoo.com',
    'Amelie_Walsh@gmail.com',
    'Paula_Abbott20@hotmail.com',
    'Nash.Rath61@hotmail.com',
    'Lemuel.Conn@yahoo.com',
    'Mavis48@yahoo.com',
  ])
  const [errors, setErrors] = useState('')
  // contato@rarolabs.com.br;nao-responda@rarolabs.com.br

  const handleTag = (e) => {
    const inputValue = e.target.value
    const { valid } = useValidation(inputValue, tag)
    const { emails } = useValidation(inputValue, tag)
    const { errors } = useValidation(inputValue, tag)
    if (valid) {
      setTag([...tag, ...emails])
    } else {
      setErrors(errors)
    }
  }
  const sendTags = () => {
    const getEmail = emailApi.sendEmails({ tag })
    setInitTags(tag)
  }
  const handleDelete = (item) => {
    const newList = tag.filter((listItem) => listItem !== item)
    setTag([...newList])
    console.log(newList)
  }
  useEffect(async () => {
    const getEmail = await emailApi.getEmails()
    setInitTags([...getEmail.emails])
  }, [])

  return (
    <>
      <TagsInput
        tags={tag}
        changeValue={handleTag}
        deleting={(item) => handleDelete(item)}
        errors={errors}
        onClick={sendTags}
      />
      <EmailList initEmails={initTags} />
      <ButtonFake />
    </>
  )
}

export default App
