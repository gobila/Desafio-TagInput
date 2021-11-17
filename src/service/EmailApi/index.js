import { HTTPClient } from '@/infra/httpClient'

const token = '56b17ef7-5f58-4e63-a717-3e6489cebd94'
const BASE_URL = 'http://localhost:4010/mailing-lists'
const id = '54ef959d-4d7a-bd1e-2495-947fb0ffde7b'
export const EmailApi = {
  async getEmails() {
    return HTTPClient(`${BASE_URL}/${id}`, {
      headers: {
        token: `${token}`,
      },
    }).then((response) => {
      return response
    })
  },
  async sendEmails(data) {
    const url = 'http://localhost:4010/mailing-lists/54ef959d-4d7a-bd1e-2495-947fb0ffde7b'
    return HTTPClient(url, {
      method: 'PATCH',
      headers: {
        token: `${token}`,
        'Content-Type': 'application/json',
      },
      body: data,
    }).then((response) => {
      return response
    })
  },
}
