import { useState } from "react"

export default function Stock(){

const [items,setItems] = useState([])
const [name,setName] = useState("")
const [qty,setQty] = useState("")

function add(){
if(!name || !qty) return
setItems([...items,{id:Date.now(),name,qty}])
setName("")
setQty("")
}

return(
<div>
<h1>Stock Barang</h1>
<input placeholder="nama barang" value={name} onChange={e=>setName(e.target.value)}/>
<input placeholder="jumlah" value={qty} onChange={e=>setQty(e.target.value)}/>
<button onClick={add}>Tambah</button>
<hr/>
{items.map(i=>(
<div key={i.id}>{i.name} - {i.qty}</div>
))}
</div>
)
}