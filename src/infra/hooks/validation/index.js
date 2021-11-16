export const useValidation = (values, tag) => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  if (values.includes(';')) {
    const valuesSplint = values.split(/[ ;]+/)
    let newValues = valuesSplint.filter((tags) => !tag.includes(tags))
    // return setTag([...tag, ...newValues])
    return {
      valid: true,
      emails: [...newValues],
      errors: null,
    }
  }
  if (values.length < 1 && tag.length === 0) {
    // return setErrors('insira um email')
    return {
      valid: false,
      emails: null,
      errors: 'insira um email',
    }
  }
  if (!regex.test(values)) {
    return {
      valid: false,
      emails: null,
      errors: 'email invalido',
    }
  }
  if (regex.test(values)) {
    const equals = tag.some((listItem) => listItem === values)
    if (!equals) {
      return {
        valid: true,
        emails: [values],
        errors: null,
      }
    } else {
      return {
        valid: false,
        emails: null,
        errors: 'email repetido',
      }
    }
  }
  return true
}
