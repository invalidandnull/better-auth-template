import { authClient } from '@/lib/auth-client'
import React from 'react'
import { Button } from './ui/button'

const SignOut = () => {
  const { data: session } = authClient.useSession()
  if (!session?.user) return null
  return (
    <div>
      <Button onClick={async () => {
        await authClient.signOut()
      }}>Sign out</Button>
    </div>
  )
}

export default SignOut