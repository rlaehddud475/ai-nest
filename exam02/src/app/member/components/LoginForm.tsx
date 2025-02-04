'use client'
import { FaRegSquareCheck, FaSquareCheck } from 'react-icons/fa6'

const LoginForm = ({ actionState, onChange, form }) => {
  const [errors, formAction, isPending] = actionState
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

export default LoginForm
