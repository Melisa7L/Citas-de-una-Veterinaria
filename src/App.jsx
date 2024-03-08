import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header"
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'
Formulario 
ListadoPacientes
//aca se definen las funciones que se van a utilizar en el return

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

useEffect(()=>{
   const obtenerLS=()=> {
    const pacientesLS=JSON.parse(localStorage.getItem('pacientes')) ?? [];
   setPacientes(pacientesLS)
   }
   obtenerLS();
},[]);


  useEffect(( )=>{
    localStorage.setItem('pacientes',JSON.stringify(pacientes));
  },[pacientes])


  const eliminarPaciente=id =>{
    const pacientesActualizados=pacientes.filter(paciente=>paciente.id !==id);
    setPacientes(pacientesActualizados);
  }

//todo lo que este dentro del return es lo que va en la pantalla,no van funciones 
  return (
    <div className="container mx-auto mt-20">
       <Header

       />
       <div className="mt-12 flex">
         <Formulario
             pacientes={pacientes}
             setPacientes={setPacientes}
             paciente={paciente}
             setPaciente={setPaciente}
         />
         <ListadoPacientes
         pacientes={pacientes}
         setPaciente={setPaciente}
         eliminarPaciente={eliminarPaciente}
         />
       </div>

    </div>
  )
}

export default App
