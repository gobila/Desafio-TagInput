import { exists } from 'fs'
import React, { useState } from 'react'
import EmailList from './components/EmailList'
import TagsInput from './components/TagsInput'
import { useValidation } from './infra/hooks/validation'

function App() {
  // const [tag, setTag] = useState(['contato@rarolabs.com.br', 'nao-responda@rarolabs.com.br'])
  const [tag, setTag] = useState([])
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

  console.log(errors)
  const handleDelete = (item) => () => {
    const newList = tag.filter((listItem) => listItem !== item)
    setTag([...newList])
    console.log(newList)
  }

  return (
    <>
      <TagsInput
        tags={tag}
        changeValue={handleTag}
        deleting={(item) => handleDelete(item)}
        errors={errors}
      />
      <EmailList emails={tag} />
    </>
  )
}

export default App
