import { useState } from "react"

export default function Login({setLogin}){

const [user,setUser] = useState("")
const [pass,setPass] = useState("")

function login(){
if(user==="admin" && pass==="admin"){
setLogin(true)
}
}

return(
<div style={{display:"flex",height:"100vh",alignItems:"center",justifyContent:"center"}}>
<div>
<h2>Login Gudang</h2>
<input placeholder="username" onChange={e=>setUser(e.target.value)}/>
<br/><br/>
<input placeholder="password" type="password" onChange={e=>setPass(e.target.value)}/>
<br/><br/>
<button onClick={login}>Login</button>
<p>demo: admin / admin</p>
</div>
</div>
)
}