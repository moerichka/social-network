import React from 'react'
import { Link } from 'react-router-dom'

import s from "./AuthContainer.module.scss"

function AuthContainer({children, isRegistration = false}) {
  return (
    <div className={s.authContainer}>
      <div className={s.container}>
        <div className={s.panel}>
          <div className={s.tab}>
            <Link to="/" className={`${s.link} ${isRegistration ? "" : s.active}`}>
              Sign up
            </Link>
            <Link to="/registration" className={`${s.link} ${isRegistration ? s.active : ""}`}>
              Register
            </Link>
            <div className={`${s.background} ${isRegistration ? s.toRight : ""}`} />
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default AuthContainer