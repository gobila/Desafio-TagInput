import React, { useEffect, useState } from 'react'
import EmailList from './components/EmailList'
import TagsInput from './components/TagsInput'
import ButtonFake from './components/ButtonFake'
import { useValidation } from './infra/hooks/validation'
import { EmailApi } from './service/EmailApi'
import './test.scss'

function App() {
  const emailApi = EmailApi
  const [initTags, setInitTags] = useState()
  const [tag, setTag] = useState(['contato@rarolabs.com.br', 'nao-responda@rarolabs.com.br'])
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
  const addTags = async () => {
    setInitTags(tag)
    setTag([])
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
        onClick={addTags}
      />
      <EmailList initEmails={initTags} />
    </>
  )
}

export default App
