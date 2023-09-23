import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import Router from 'next/router'
import { ApiService as api } from '../services/api'
import { setCookie } from 'nookies'

interface IUserData {
  username: string
  password: string
}

interface AuthContextData {
  user: IUserData
  loading: boolean
  signIn(data: IUserData): Promise<void>
  signOut(): Promise<void>
}
interface Props {
  children: ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<IUserData>({} as IUserData)

  useEffect(() => {}, [])

  const signIn = useCallback(
    async ({ username, password }: IUserData) => {
      const token = await api.post('auth/login', { username, password })
      setCookie(undefined, 'nextauth-token', token.data.token, {
        maxAge: 60 * 60 * 4 // expira em 4 horas
      })

      api.setToken(token.data.token)

      setUser({ username, password })

      setLoading(!!user)

      Router.push('/dashboard')
    },
    [user]
  )

  const signOut = useCallback(async () => {
    setUser({} as IUserData)
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
