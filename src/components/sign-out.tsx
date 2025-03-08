import { authClient } from '@/lib/auth-client'
import React from 'react'

const SignOut = () => {
  const { data: session } = authClient.useSession()
  if (!session?.user) return null
  return (
    <div>
      <button onClick={async () => {
        await authClient.signOut()
      }} className='border rounded-2xl p-5 cursor-pointer'>Sign out</button>
    </div>
  )
}

export default SignOut