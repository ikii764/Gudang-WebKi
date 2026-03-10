import { useState } from "react"
import Dashboard from "./pages/Dashboard"
import Stock from "./pages/Stock"
import History from "./pages/History"
import Login from "./components/Login"
import Sidebar from "./components/Sidebar"

export default function App(){

const [login,setLogin] = useState(false)
const [page,setPage] = useState("dashboard")

if(!login){
return <Login setLogin={setLogin}/>
}

return(
<div style={{display:"flex"}}>
<Sidebar setPage={setPage}/>
<div style={{flex:1,padding:30}}>
{page==="dashboard" && <Dashboard/>}
{page==="stock" && <Stock/>}
{page==="history" && <History/>}
</div>
</div>
)
}