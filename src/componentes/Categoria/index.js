import "./Categoria.css"
import Producto from "../Producto"
import hexToRgba from 'hex-to-rgba';

const Categoria = (props) => {
    //Destructuracion
    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const { productos, eliminarProducto, actualizarColor, like } = props
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.3) 
    }
   // console.log(productos.length > 0)

    const estiloTitulo = { borderColor: colorPrimario }

    return <>
        {
            productos.length > 0 &&
            <section className="categoria" style={obj}>
                <input
                    type="color"
                    className="input-color"
                   // value={hexToRgba(colorPrimario, 0.3) }
                   value={colorPrimario}
                    onChange={(evento)=> {
                        actualizarColor(evento.target.value, id)
                    }}
                />    

                <h3 style={estiloTitulo} >{titulo}</h3>
                <div className="productos">
                    {
                        productos.map((producto, index) => <Producto
                            datos={producto}
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarProducto={eliminarProducto}
                            like={like}
                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Categoria