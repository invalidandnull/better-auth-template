"use client"
import { useSession } from '@/lib/auth-client'
import React from 'react'

const DashboardPage = () => {
  const { data : session } = useSession()
    const user = session?.user
  return (
    <div>
      {user ? (
        <div>
          <h1>Dashboard</h1>
          <p>Welcome {user.name}</p>
        </div>
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  )
}

export default DashboardPage