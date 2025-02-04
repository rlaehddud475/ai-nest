'use client'
import LoginForm from '../components/LoginForm'
import { processLogin } from '../services/actions'
import { useState, useActionState } from 'react'

type FormType = {
  email?: string
  password?: string
}

const LoginContainer = () => {
  const [form, setForm] = useState<{ email?: string; password?: string }>({})
  const actionState = useActionState(processLogin, {})

  const handleChange = (e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }))
  }

  return (
    <LoginForm actionState={actionState} onChange={handleChange} form={form} />
  )
}

export default LoginContainer
