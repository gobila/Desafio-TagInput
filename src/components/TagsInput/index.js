import { TagService } from '@/service/TagService'
import { Chip, TextField } from '@material-ui/core'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { handleDelete } from './deleteService'

export default function TagsInput({ tags, changeValue, deleting, errors }, props) {
  const [emailTags, setEmailTags] = useState([])
  const deleted = deleting

  useEffect(() => {
    setEmailTags(tags)
  }, [tags])

  // console.log(errors)

  return (
    <>
      <TextField
        onBlur={changeValue}
        fullWidth
        variant="outlined"
        id="emailsTags"
        name="email"
        label="Email"
        placeholder="add e-mails"
        // inputRef={register}
        error={errors}
        helperText={errors ? errors : ' '}
        // {...props}
        InputProps={{
          startAdornment: emailTags.map((item) => (
            <Chip key={item} tabIndex={-1} label={item} onDelete={deleted(item)} />
          )),
        }}
      />
    </>
  )
}
TagsInput.defaultProps = {
  tags: [],
}

TagsInput.propTypes = {
  tags: PropTypes.array,
  changeValue: PropTypes.func,
  deleting: PropTypes.func,
}
