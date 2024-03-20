import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {
//para cada input del formulario producto
    const [nombre, actualizarNombre] = useState("")
    const [descripcion, actualizarDescripcion] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [categoria, actualizarCategoria] = useState("")

//para cada input del formulario categorias
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const { registrarProducto, crearCategoria } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            nombre,
            descripcion,
            foto,
            categoria
        }
        registrarProducto (datosAEnviar)
    }

    const manejarNuevaCategoria= (e) => {
        e.preventDefault()
        crearCategoria({titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear un producto.</h2>
            <Campo
                titulo="Nombre"
                placeholder="Ingresar nombre"
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
            />
            <Campo
                titulo="Descripcion"
                placeholder="Ingresar descripcion"
                required
                valor={descripcion}
                actualizarValor={actualizarDescripcion}
            />
            <Campo
                titulo="Foto"
                placeholder="Ingresar enlace de foto"
                required
                valor={foto}
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones
                valor={categoria}
                actualizarCategoria={actualizarCategoria}
                categorias={props.categorias}
            />
            <Boton>
                Crear
            </Boton>
        </form>

        <form onSubmit={manejarNuevaCategoria}>
            <h2>Rellena el formulario para crear una categoria</h2>
            <Campo
                titulo="Titulo"
                placeholder="Ingresar titulo"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <Campo
                titulo="Color"
                placeholder="Ingresar el color en hex"
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
            />
             <Boton>
                Registrar categoria
            </Boton>
        </form>

    </section>
}

export default Formulario