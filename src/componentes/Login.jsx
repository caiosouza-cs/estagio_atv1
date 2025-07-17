import { useState } from "react"
import supabase from "../utils/supabase"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState("")

  const handleRegister = async () => {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: 'http://localhost:3000',
        },
      })

      if (error) {
        setSuccess(data)
        setError(error)
      }

      if (data) {
        setError('')
        setSuccess('')
      } 
  }

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setSuccess('')
      setError(error)
    }

    if (data) {
      setSuccess(data)
      setError('')
    }
  }
  

  console.log('success: ', success)

  return (
    <div style={{display: "flex", flexDirection:"column", padding: "24px", margin: "0 auto", width: "400px"}}>
      <div style={{display: "flex", flexDirection:"column", padding: "12px"}}>
        <div style={{display: "flex", flexDirection:"column", gap: "8px"}} >
          <label>E-mail:</label>
          <input 
            type="email" 
            placeholder="jose@teste.com"
            onChange={({target}) => setEmail(target.value)}
          />
        </div>
        <div style={{display: "flex", flexDirection:"column", gap: "8px"}} >
          <label>Senha:</label>
          <input 
            type="password" 
            placeholder="Uma senha legal"
            onChange={({target}) => setPassword(target.value)}
          />
        </div>
        <div style={{display: "flex", gap: "12px"}}>
          <button onClick={handleRegister}>Cadastrar</button>
          <button onClick={handleLogin}>Entrar</button>
        </div>  
      </div>
      {
        error && <p>Erro: {error}</p>
      }
      {
        success && <p>Successo. </p>
      }
    </div>
  )
}

export default Login