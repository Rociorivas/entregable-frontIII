// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

import React from 'react'
import Cabecera from './components/Cabecera'
import Listado from './components/Listado'

/*function App() {

  return (
    <div className="App">
      <Cabecera />
      <Listado />
    </div>
  );
}*/


function App() {
  const [elementos, setElementos] = React.useState(0)

  function updateCarrito(){
    setElementos(elementos + 1)
  }

  return (
    <div className="App">
      <Cabecera quantityCarrito={elementos}/>
      <Listado funcionCarrito={updateCarrito}/>
    </div>
  );
}

export default App;