import React from 'react'
import Messenger from './components/Messenger'
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
  const clientId = '904737782771-4l1hbmtc6gi8687pg3g2m57mb5ludcpl.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messenger />
    </GoogleOAuthProvider>
  )
}

export default App