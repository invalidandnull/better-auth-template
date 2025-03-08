"use client"
import { signIn, useSession,signInGoogle } from '@/lib/auth-client'
import React from 'react'

const SignInGoogle = () => {
  const {data: session
  } = useSession()
  console.log(session)
  return (
    <div className='flex flex-col items-center gap-5'>
      <button onClick={ async () => {
        await signIn.social({
          provider: 'google',
          callbackURL: '/'
        })
      }} className='border rounded-2xl p-5 cursor-pointer'>Sign in with google</button>

      <button onClick={signInGoogle} className='border rounded-2xl p-5 cursor-pointer'>Google</button>
    </div>
  )
}

export default SignInGoogle