// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect, Route} from 'react-router-dom'
import Home from '../Home'

const ProtectedRoute = props => {
  const jwtTokens = Cookies.get('jwt_token')
  if (jwtTokens === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}
export default ProtectedRoute
