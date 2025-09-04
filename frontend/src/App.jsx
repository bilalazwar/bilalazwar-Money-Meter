import React from 'react'
import Login from './pages/auth/Login'
import ExpenseDashboard from './pages/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import AppLayout from './components/appLayout'
import RegisterPage from './pages/auth/Register'

function App() {

  return (
    <Provider store={store}>
        <BrowserRouter>
        <Routes>
          {/* Public route - login page */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Protected routes - wrapped in AppLayout */}
          <Route path="/" element={<AppLayout />}>
          <Route index element={<ExpenseDashboard />} />

          </Route>
          
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
// npm run dev  