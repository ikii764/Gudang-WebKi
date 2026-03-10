export default function Sidebar({setPage}){

return(
<div style={{width:220,background:"#111",color:"#fff",height:"100vh",padding:20}}>
<h2>Gudang</h2>
<p style={{cursor:"pointer"}} onClick={()=>setPage("dashboard")}>Dashboard</p>
<p style={{cursor:"pointer"}} onClick={()=>setPage("stock")}>Stock</p>
<p style={{cursor:"pointer"}} onClick={()=>setPage("history")}>History</p>
</div>
)
}