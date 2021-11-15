import { Console } from 'console'
import React, { useState } from 'react'
import EmailList from './components/EmailList'
import TagsInput from './components/TagsInput'

function App() {
  const [tag, setTag] = useState([])
  const [errors, setErrors] = useState('')

  const handleTag = (e) => {
    const inputValue = e.target.value
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    if (inputValue.length < 1 && tag.length === 0) {
      setErrors('insira um email')
    } else if (inputValue && !regex.test(inputValue)) {
      setErrors('insira um email valido')
    } else if (inputValue && regex.test(inputValue)) {
      setTag([...tag, inputValue.toLowerCase()])
      setErrors('')
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
      <TagsInput tags={tag} changeValue={handleTag} deleting={handleDelete} errors={errors} />
      <EmailList emails={tag} />
    </>
  )
}

export default App
