import React, { useState } from 'react'
import { PostProductos } from '../services/ProductosServices'

function Inventario() {

  const[Nombre,SetNombre] = useState()
  const[Descripcion,SetDescripcion] = useState()
  const[Precio,SetPrecio] = useState()
  const[Cantidad,SetCantidad] = useState()
  const [recarga,setRecarga] = useState(false)

  function NombreProducto(e) {
    SetNombre(e.target.value)
  }

  function DescripcionProducto(e) {
    SetDescripcion(e.target.value)
  }

  function PrecioProducto(e) {
    SetPrecio(e.target.value)
  }

  function CantidadProducto(e) {
    SetCantidad(e.target.value)
  }

  async function CargarProducto() {
    const obj = {
      nombre : Nombre,
      descripcion : Descripcion,
      precio : Precio,
      cantidad: Cantidad
    }
    
    const RespuestaServer = await PostProductos(obj)
    
  }
  return (
    <div>
      <label htmlFor="">Nombre del Producto</label>
      <input value={Nombre} onChange={NombreProducto} type="text" />
      <label htmlFor="">Descripcion</label>
      <input value={Descripcion} onChange={DescripcionProducto} type="text" />
      <label htmlFor="">Precio</label>
      <input value={Precio} onChange={PrecioProducto} type="number" />
      <label htmlFor="">Cantidad</label>
      <input value={Cantidad} onChange={CantidadProducto} type="number" />
      <button onClick={CargarProducto}>Enviar</button>
    </div>
  )
}

export default Inventario