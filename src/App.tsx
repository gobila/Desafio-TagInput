import React, { useState, FocusEvent } from 'react'
import TagsInput from './TagsInput'

const App: React.FC = () => {
  function handleSelecetedTags(items: string[]) {
    return items
  }

  const [tags, setTags] = useState<string[]>([
    'contato@rarolabs.com.br',
    'nao-responda@rarolabs.com.br',
  ])
  const handleSeted = (item) => {
    // console.log(item.target.value)
    const evento = item.target.value
    setTags([...tags, evento])
  }
  return (
    <div className="App">
      <TagsInput
        // onBlur={handleSeted}
        onSelectTags={handleSelecetedTags}
        // fullWidth={true}
        // variant="outlined"
        // id="tags"
        // name="tags"
        // placeholder="add Tags"
        // placeholder={handleSeted}
        // label="tags"
        tags={tags}
      />
    </div>
  )
}

export default App
