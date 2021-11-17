import { Button, Chip, TextField } from '@material-ui/core'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import './styles/index.scss'

export default function TagsInput({ tags, changeValue, deleting, errors, onClick }) {
  const [emailTags, setEmailTags] = useState([])
  const deleted = deleting

  useEffect(() => {
    setEmailTags(tags)
  }, [tags])

  // console.log(errors)
  const styles = {
    root: {
      background: 'black',
    },
    input: {
      color: 'red',
    },
  }
  return (
    <div>
      <TextField
        tags={emailTags}
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
        InputProps={{
          className: 'tagInput__tag',
          startAdornment: emailTags.map((item) => (
            <Chip
              className="tagInput__chip"
              style={{ backgroundColor: '#4fa9f1', color: '#FFF' }}
              key={item}
              tabIndex={-1}
              label={item}
              onDelete={() => deleted(item)}
              // color="primary"
            />
          )),
        }}
      />
      <Button
        variant="contained"
        className="tagInput__button"
        style={{ backgroundColor: '#009688', color: '#FFF', marginBottom: '20px' }}
        onClick={onClick}
      >
        Enviar
      </Button>
    </div>
  )
}
TagsInput.defaultProps = {
  tags: [],
}

TagsInput.propTypes = {
  tags: PropTypes.array,
  changeValue: PropTypes.func,
  deleting: PropTypes.func,
  errors: PropTypes.string,
  onClick: PropTypes.func,
}
