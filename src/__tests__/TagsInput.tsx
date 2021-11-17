import React from 'react'
import TagsInput from '@/components/TagsInput'
import { cleanup, render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'

describe('TagsInput Component', () => {
  afterEach(jest.clearAllMocks)
  afterEach(cleanup)

  it('cria o snapshot do component', () => {
    const container = render(<TagsInput />)
    expect(container.asFragment()).toMatchSnapshot()
  })

  it('deve renderizar as tags enviadas por atributos', () => {
    const emails = ['contato@rarolabs.com.br', 'nao-responda@rarolabs.com.br']

    const { debug } = render(<TagsInput tags={emails} />)

    debug()
  })

  it('deve ser capaz de preencher o campo', () => {
    const emails = ['contato@rarolabs.com.br', 'nao-responda@rarolabs.com.br']
    render(<TagsInput tags={emails} />)

    const inputName = screen.getByPlaceholderText(/add e\-mails/i)
    const newEmail = 'teste@teste.com'
    user.type(inputName, newEmail)
    expect(inputName).toHaveValue(newEmail)
  })

  it('deve renderizar tags quando preencher o input e pressionar enter', () => {
    // teste não implementado.
  })

  it('deve renderizar tags quando preencher o input e pressionar tab', () => {
    const emails = ['contato@rarolabs.com.br', 'nao-responda@rarolabs.com.br']
    const handleTag = jest.fn()
    const container = render(<TagsInput tags={emails} changeValue={handleTag} />)
    expect(container.asFragment()).toMatchSnapshot()

    const inputName = screen.getByPlaceholderText(/add e\-mails/i)
    const newEmail = 'teste@teste.com'
    user.type(inputName, newEmail)
    expect(inputName).toHaveValue(newEmail)
    expect(user.type(inputName, '{tab}')).toBe.call(handleTag)
  })

  it('deve deletar a útima tag criada ao pressionar o botão de backspace', async () => {})
  // teste não implementado.
})
