import axios, { AxiosError, AxiosResponse } from 'axios'
import { parseCookies } from 'nookies'

const apiUrl =
  process.env.NODE_ENV == 'development'
    ? 'http://localhost:8080'
    : process.env.REACT_APP_API_URL

export const api = axios.create({
  timeout: 10000,
  withCredentials: true,
  baseURL: apiUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'x-origem': 'WEB'
  }
})
api.interceptors.response.use(
  res => {
    if (res.status === 200) {
      ApiService.setToken(res.data.token)
    } else {
      console.log(
        'Sua sessão expirou, você precisará entrar com suas credenciais novamente'
      )
      // messageService.error('Sua sessão expirou, você precisará entrar com suas credenciais novamente', () => {
      //   useAuth.signOut()
      //   window.location.href = '/'
      // })
    }

    return Promise.resolve(res)
  },
  (error: AxiosError) => {
    // if (error.response?.status === 400) {
    //   if (error.response.data.message === null) {
    //     return Promise.reject(error.response.data.validation)
    //   }
    //   return Promise.reject(error.response.data.message)
    // }
    if (error.response?.status === 403) {
      console.log('Usuário ou senha inválidos')
      //messageService.error(error.response.data.message)
    }
    if (error.response?.status === 401) {
      console.log('Error 401')
      //messageService.error(error.response.data.message)
    }
    if (error.response?.status === 404) {
      throw new Error('Não encontrado.')
    }
    if (error.response?.status === 500) {
      const msg = 'Erro interno no servidor, entre em contato com o suporte.'
      console.log(msg)
      // messageService.error(msg)
      // return Promise.reject(msg)
    }
    if (!error.response) {
      const mensagem = 'Não foi possível se comunicar com os servidores.'
      console.log(mensagem)
      // messageService.error(mensagem)
      // return Promise.reject(mensagem)
    }
    // throw error
  }
)

class ApiAxios {
  setToken(token: string | null): void {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  get(url: string): Promise<AxiosResponse> {
    return api.get(url)
  }

  post(url: string, data: any): Promise<AxiosResponse> {
    return api.post(url, data)
  }

  downloadFile(url: string, data: any): Promise<AxiosResponse> {
    return api.post(url, data, {
      responseType: 'blob' as 'json'
    })
  }

  getFile(url: string): Promise<AxiosResponse> {
    return api.get(url, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      responseType: 'blob' as 'json'
    })
  }

  patch(url: string, data: any): Promise<AxiosResponse> {
    return api.patch(url, data)
  }

  delete(url: string): Promise<AxiosResponse> {
    return api.delete(url)
  }
}

export const ApiService = new ApiAxios()
