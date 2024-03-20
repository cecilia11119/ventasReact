import "./Producto.css"
import { AiFillCloseCircle} from "react-icons/ai"
import { AiFillHeart} from "react-icons/ai"
import { AiOutlineHeart } from "react-icons/ai";

const Producto = (props) => {
    const { nombre, descripcion, foto, categoria, id, fav } = props.datos
    const { colorPrimario, eliminarProducto, like } = props

    //condicion verdadero o falso

    return <div className="producto">
    <AiFillCloseCircle className="eliminar" onClick={() => eliminarProducto(id)} />
    <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
        <img src={foto} alt={nombre} />
    </div>
    <div className="info">
        <h4>{nombre}</h4>
        <h5>{descripcion}</h5>
        
       
        {fav ? <AiFillHeart color="red" onClick={ () => like(id)}/> :  <AiOutlineHeart onClick={ () => like(id)}/>}
    </div>
</div>
}

export default Producto