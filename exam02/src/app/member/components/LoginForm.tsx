'use client'
import React from 'react'
import { useRef, useEffect } from 'react'
const LoginForm = ({ actionState, onChange, form }) => {
  const [errors, formAction, isPending] = actionState
  const emailEl = useRef<HTMLInputElement | undefined>(undefined)

  useEffect(() => {
    //console.log('emailEl', emailEl)
    if (emailEl) {
      emailEl.current?.focus()
    }
  }, [emailEl])
  return (
    <>
      <form action={formAction}>
        <dl>
          <dt>이메일</dt>
          <dd>
            <input
              type="text"
              name="email"
              onChange={onChange}
              value={form.email ?? ''}
            />
            {errors?.email && errors.email.map((m) => <div key={m}>{m}</div>)}
          </dd>
        </dl>
        <dl>
          <dt>비밀번호</dt>
          <dd>
            <input
              type="password"
              name="password"
              onChange={onChange}
              value={form.password}
            />
            {errors?.password &&
              errors.password.map((m) => <div key={m}>{m}</div>)}
          </dd>
        </dl>

        <button type="submit" disabled={isPending}>
          로그인 하기
        </button>
      </form>
    </>
  )
}

export default React.memo(LoginForm)
