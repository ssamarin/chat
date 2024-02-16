import { LOGIN_ROUTE, CHAT_ROUTE } from "../utils/consts";

import Login from '../Components/Login'
import Chat from '../Components/Chat'


export const publicRoutes = [
  {
      path: LOGIN_ROUTE,
      Component: <Login />
  }
]

export const privateRoutes = [
  {
      path: CHAT_ROUTE,
      Component: <Chat />
  }
]
