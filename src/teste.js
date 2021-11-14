import React, { useState } from 'react'
import TagsInput from './TagsInput'

export default function Teste() {
  function handleSelecetedTags(items) {
    return items
  }

  const [tags, setTags] = useState(['contato@rarolabs.com.br', 'nao-responda@rarolabs.com.br'])
  const handleSeted = (item) => {
    // console.log(item.target.value)
    const evento = item.target.value
    setTags([...tags, evento])
  }
  return (
    <div className="App">
      <TagsInput
        onBlur={handleSeted}
        onSelectTags={handleSelecetedTags}
        fullWidth={true}
        variant="outlined"
        id="tags"
        name="tags"
        // placeholder="add Tags"
        placeholder={handleSeted}
        label="tags"
        tags={tags}
      />
    </div>
  )
}
