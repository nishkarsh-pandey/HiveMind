import {Routes , Route } from 'react-router-dom'

import './global.css'
import SignInForm from './_auth/Forms/SignInForm'
import {Home} from './_root/pages'
import SignUpForm from './_auth/Forms/SignUpForm'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'

const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* Public Routes */}
        <Route element = {<AuthLayout/>}>

        <Route path="/sign-in" element={<SignInForm />}  />
        <Route path="/sign-up" element={<SignUpForm />}  />

        </Route>

        {/* private routes */}
          <Route element={<RootLayout />}>
              <Route index element ={<Home />}/>
          </Route>

        

      </Routes>
    </main>
  )
}

export default App
