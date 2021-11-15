import * as yup from 'yup'

const tagSchema = yup.object().shape({
  tag: yup.string().email('Formato incorreto').required('E-mail is é nescessario'),
})

export default tagSchema
