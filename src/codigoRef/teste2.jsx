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
    const newList = selectedItem.filter((listItem) => listItem !== item)
    setSelectedItem([newList])
    return item
  }

  // const onBlur = (e) => {
  //   const tar = e.target.value
  //   setErrors({ teste: '' })
  //   setSelectedItem(e.target.value)
  //   let reg = new RegExp(/^([\w.\-_]+)?\w+@[\w-_]+(\.\w+){1,2}$/).test(tar)
  //   if (teste.length === 0) {
  //     setErrors({ teste: 'Email vazio' })
  //   } else if (!reg) {
  //     setErrors({ teste: 'nescessario um email valido' })
  //   }
  //   const repetido = selectedItem.some((e) => e === tar)
  //   if (repetido === true) {
  //     setErrors({ teste: 'email repetido' })
  //   }
  //   console.log(errors)
  // }
  return (
    <>
      <TextField
        InputProps={{
          startAdornment: tags.map((item) => (
            <Chip key={item} tabIndex={-1} label={item} onDelete={props.delete(item)} />
          )),
        }}
        {...other}
      />
      {/* <p>tags</p>
      {tags.map((i) => {
        return <p key={i}>{i}</p>
      })}
      <p>selectedItem</p>
      {selectedItem.map((i) => {
        return <p key={i}>{i}</p>
      })} */}
      {/* <TextField type="email" onBlur={onBlur} error={errors.length > 0} helperText={errors.teste} /> */}
    </>
  )
}
TagsInput.defaultProps = {
  tags: [],
}

TagsInput.propTypes = {
  onSelectTags: PropTypes.func,
  tags: PropTypes.array,
}
