import React, { useState } from 'react'
import TagsInput from './teste2.jsx'

import * as Yup from 'yup'
const validationSchema = Yup.object().shape({
  tags: Yup.string().email('Required'),
})
export default function Teste() {
  function handleSelecetedTags(items) {
    return items
  }

  const [tags, setTags] = useState(['contato@rarolabs.com.br', 'nao-responda@rarolabs.com.br'])
  const [errors, setErrors] = useState()
  const handleSeted = (item) => {
    const evento = item.target.value
    // let reg = new RegExp(/^([\w.\-_]+)?\w+@[\w-_]+(\.\w+){1,2}$/).test(evento)

    // if (evento.length === 0) {
    //   setErrors('Digite um email')
    // } else if (!reg) {
    //   setErrors('nescessario um email valido')
    // }
    setTags([...tags, evento])
  }

  const handleDelete = (item) => () => {
    const newList = tags.filter((listItem) => listItem !== item)
    setTags([newList])
    return item
  }
  console.log(errors)
  return (
    <div className="App">
      <TagsInput
        onBlur={handleSeted}
        onSelectTags={handleSelecetedTags}
        fullWidth={true}
        variant="outlined"
        id="tags"
        name="tags"
        placeholder="add Tags"
        label="tags"
        tags={tags}
        inputRef={tags}
        error={validationSchema.tags}
        helperText={errors}
        delete={handleDelete}
      />
      {validationSchema.tags && <p>{validationSchema.tags.message}</p>}
    </div>
  )
}
