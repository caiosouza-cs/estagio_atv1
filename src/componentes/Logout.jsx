import React from 'react'
import supabase from '../utils/supabase'

const Logout = () => {

  const handleLogout = async () => {
    await supabase.auth.signOut()
  }
  return (
    <button onClick={handleLogout}>Logout</button>
  )
}

export default Logout