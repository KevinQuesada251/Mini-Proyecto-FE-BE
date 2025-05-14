import React, { useEffect, useState } from 'react'
import { GetProductos, DeleteProductos, PatchProductos } from '../services/ProductosServices'
import Swal from 'sweetalert2'

function Ventana() {
    const [Productos, SetProductos] = useState([])
    const [recarga,setRecarga] = useState(false)


    useEffect(() => {
        async function traerInfo() {
            const TodosLosProductos = await GetProductos()
            SetProductos(TodosLosProductos)
        }
        traerInfo()
    }, [Productos])

    function eliminar(id) {
        DeleteProductos(id)
        setRecarga(!recarga)
    }

    async function editar(id) {
        const { value: formValues } = await Swal.fire({
            title: "Multiple inputs",
            html: `
    <input id="swal-input1" class="swal2-input" placeholder="Nombre">
    <input id="swal-input2" class="swal2-input" placeholder="Descripcion">
    <input id="swal-input3" class="swal3-input" placeholder="Precio">
    <input id="swal-input4" class="swal4-input" placeholder="Cantidad">
  `,
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById("swal-input1").value,
                    document.getElementById("swal-input2").value,
                    document.getElementById("swal-input3").value,
                    document.getElementById("swal-input4").value
                ];
            }
        });
        if (formValues) {
            const obj = {
                nombre: document.getElementById("swal-input1").value,
                descripcion: document.getElementById("swal-input2").value,
                precio: document.getElementById("swal-input3").value,
                cantidad: document.getElementById("swal-input4").value
            }
            console.log(obj)
            const respuesta = await PatchProductos(obj,id)
            setRecarga(!recarga)
        }
    }


    return (
        <div>
            <ul>
                {Productos.map((producto) => (
                    <li>{producto.nombre} - {producto.descripcion} - {producto.precio} - {producto.cantidad}
                        <button onClick={() => editar(producto.id)}>Editar</button>
                        <button onClick={() => eliminar(producto.id)}>Eliminar</button></li>

                ))}
            </ul>
        </div>
    )
}

export default Ventana