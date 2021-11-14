import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Chip from '@material-ui/core/Chip'
import TextField from '@material-ui/core/TextField'

export default function TagsInput(props) {
  const { onSelectTags, tags, ...other } = props
  const [selectedItem, setSelectedItem] = React.useState([])
  useEffect(() => {
    setSelectedItem(tags)
  }, [tags])

  const handleDelete = (item) => () => {
    const lala = 'jajaja'
    // const Liked = postLiked.some((elem) => elem.user === user.id);
    // const newList = name.filter((item) => item.id !== itemId);
    console.log('deletando tag(item):', lala)
    setSelectedItem([lala])
    return item
  }

  return (
    <TextField
      InputProps={{
        startAdornment: selectedItem.map((item) => (
          <Chip key={item} tabIndex={-1} label={item} onDelete={handleDelete(item)} />
        )),
      }}
      {...other}
    />
  )
}
TagsInput.defaultProps = {
  tags: [],
}

TagsInput.propTypes = {
  onSelectTags: PropTypes.func,
  tags: PropTypes.array,
}
