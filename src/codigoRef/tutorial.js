// tutorial usando  react-hook-form/resolvers
import React, { Fragment } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { Button, Chip, TextField, Typography } from '@material-ui/core'

export default function Tuto() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
  })

  const [items, setItems] = React.useState([])

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  })
  const onSubmit = (data) => {
    console.log(JSON.stringify(data.email, null, 2))
    setItems([...items, data.email])
  }

  return (
    <>
      <TextField
        required
        id="email"
        name="email"
        label="Email"
        fullWidth
        margin="dense"
        {...register('email')}
        error={errors.email ? true : false}
        onBlur={handleSubmit(onSubmit)}
        InputProps={{
          startAdornment: items.map((item) => <Chip key={item} tabIndex={-1} label={item} />),
        }}
      />
      <Typography variant="inherit" color="textSecondary">
        {errors.email?.message}
      </Typography>
      <Button variant="contained" color="primary" onClick={handleSubmit(onSubmit)}>
        Register
      </Button>
    </>
  )
}
