import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'

import PublicLayout from '@/layouts/public-layout'
import HomePage from '@/Routes/home'
import AuthenticationLayout from '@/layouts/auth-layout'
import SignUpPage from './Routes/sign-up'
import SignInPage from './Routes/sign-in'
import ProtectRoutes from './layouts/protected-routes'
import MainLayout from './layouts/main-layout'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        </Route>

        {/* authentication layout */}
 <Route element={<AuthenticationLayout />}>
        <Route path="/signin/*" element={<SignInPage />} />
        <Route path="/signup/*" element={<SignUpPage />} />
        </Route>

        {/* protected routes */}
        <Route element={<ProtectRoutes><MainLayout /></ProtectRoutes>} >
        {/*  */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App