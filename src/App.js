import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from "./componentes/Header/Header"
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
//import Equipo from './componentes/Equipo';
import Categoria from './componentes/Categoria';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [productos, actualizarProductos] = useState([
    {
    id: uuidv4(),
    categoria: "Refrigerador",
    foto: "https://blog-cdn.moneysmart.sg/wp-content/uploads/2018/10/refrigerators-samsung-rt22faradsp-samsung.png",
    nombre: "Refrigeradora Samsung",
    descripcion: "Instructor",
    fav: true
  },
  {
    id: uuidv4(),
    categoria: "Television",
    foto: "https://th.bing.com/th/id/R.64d6f2a781241b904c9ee6139db782b9?rik=X%2b5yIezclIMnKQ&riu=http%3a%2f%2fwww.chatso.com.tw%2fupload%2fproducts%2fLC-40Z5T-400-400.jpg&ehk=7j6hV3lXi1HUvWfosPgaB04siFldrgTeLHeIWyy0FSY%3d&risl=&pid=ImgRaw&r=0",
    nombre: "Television LG",
    descripcion: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuidv4(),
    categoria: "Lavadora",
    foto: "https://compara2.pe/wp/wp-content/uploads/2021/01/LAVADORA-WINIA-19KG-WLA-193GMG.jpg",
    nombre: "Lavadora Samsung",
    descripcion: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuidv4(),
    categoria: "Television",
    foto: "https://wikibaneh.com/wp-content/uploads/2019/12/1-2.jpg",
    nombre: "smart Tv Samsung",
    descripcion: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuidv4(),
    categoria: "Microhondas",
    foto: "https://falabella.scene7.com/is/image/FalabellaPE/16309185_1",
    nombre: "Horno Microhondas",
    descripcion: "Dev FullStack",
    fav: false
  }])

  const [categorias, actualizarCategorias] = useState([
    {
      id: uuidv4(),
      titulo:"Television",
      colorPrimario: "#76ABAE",
      colorSecundario: "#EEEEEE"
    },
    {
      id: uuidv4(),
      titulo:"Refrigerador",
    colorPrimario: "#637A9F",
    colorSecundario: "#E3F2C1"
    },
    {
      id: uuidv4(),
      titulo:"Lavadora",
      colorPrimario: "#B6BBC4",
      colorSecundario: "#F0ECE5"
    },
    {
      id: uuidv4(),
      titulo:"Microhondas",
      colorPrimario: "#747264",
      colorSecundario: "#DFF5FF"
    },
    {
      id: uuidv4(),
      titulo:"Licuadora",
      colorPrimario: "#DFF5FF",
      colorSecundario: "#B5C0D0"
    },
    {
      id: uuidv4(),
      titulo:"Plancha",
      colorPrimario: "#FF90BC",
      colorSecundario: "#F8E8EE"
    },
    {
      id: uuidv4(),
      titulo:"Cocina",
    colorPrimario: "#6D2932",
    colorSecundario: "#E8D8C4"
    }
  ])
  //Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar producto
  const registrarProducto = (producto) => {
    console.log("Nuevo producto", producto)
    //Spread operator
    actualizarProductos([...productos, producto])
  }

  //Eliminar producto
  const eliminarProducto = (id) => {
    console.log("Eliminar producto", id)
    const nuevosProductos = productos.filter((producto) => producto.id !== id)
    actualizarProductos(nuevosProductos)
  }

  
  //actualizar color de producto
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const categoriasActualizadas = categorias.map((categoria) => {
      if(categoria.id === id){
        categoria.colorPrimario = color
      }
      return categoria
    })
    actualizarCategorias(categoriasActualizadas)

  }

  //crear categoria
  const crearCategoria = (nuevaCategoria) => {
    console.log(nuevaCategoria)
    actualizarCategorias([ ...categorias, {...nuevaCategoria, id: uuidv4()}] )
  }
 
  const like = (id) => {
    console.log("like", id)
    const productosActualizados = productos.map((producto) => {
      if (producto.id === id){
        producto.fav = !producto.fav
      }
      return producto
    })
    actualizarProductos(productosActualizados)
  }


  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {
        mostrarFormulario && <Formulario
          categorias={categorias.map((categoria) => categoria.titulo)}
          registrarProducto={registrarProducto}
          crearCategoria = {crearCategoria} 
        />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        categorias.map((categoria) => <Categoria
          datos={categoria}
          key={categoria.titulo}
          productos={productos.filter(producto => producto.categoria === categoria.titulo)}
          eliminarProducto={eliminarProducto}
          actualizarColor={actualizarColor}
          like={like}
        />
        )
      }

      <Footer />


    </div>
  );
}

export default App;
