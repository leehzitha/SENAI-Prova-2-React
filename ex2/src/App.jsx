import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { useEffect } from 'react'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [profile, setProfile] = useState({})
  const [habilidades, setHabilidades] = useState([])
  const [endereco, setEndereco] = useState([])
  const [projetos, setProjeto] = useState([])

  useEffect(()=>{
    getProfile();
  }, [])

  const getProfile = async () => {
    const response = await axios.get('https://avaliacao-bosch.onrender.com/usuario');
    setProfile(response.data);
    setHabilidades(response.data.habilidades);
    setEndereco(response.data.endereco);
    setProjeto(response.data.projetos);
  };

  return (
    <div className='flex flex-row justify-center items-center'>
      <div className='flex flex-row p-10 m-30 w-max h-100 justify-between items-center bg-fuchsia-200' >
        <div className='flex flex-col w-80 '>
          <p className=' text-5xl mb-5 font-mono  font-bold '>{profile.nome}</p>
          <div className='flex flex-row gap-3'>
              <p  className='mb-3 text-2xl font-bold font-mono'>Idade: </p>
              <p className=''>{profile.idade}</p>
          </div>
          <div className='flex flex-row gap-3'>
            <p  className=' mb-3 text-2xl font-bold font-mono'>Email:</p>
            <p className=''>{profile.email}</p>
          </div>
          <p  className=' mb-3 text-2xl font-bold font-mono'>Endereço:</p>
          <p className=''>{endereco.rua} {endereco.numero}</p>
          <p className=''>{endereco.cidade}</p>
          <p className=' mb-3'>{endereco.estado}</p>

          {profile.ativo &&
          <p className=' font-mono font-bold'>Ativo</p>}

        </div>
        
        <div className='flex flex-col gap-3 h-full'>
        <p className='text-2xl font-mono font-bold mt-5'>Habilidades</p>
          <div className='bg-white w-130 h-30 flex flex-row rounded-2xl p-5 justify-between items-center'>
            
            <p>{habilidades[0]}</p>
            <p>{habilidades[1]}</p>
            <p>{habilidades[2]}</p>
            <p>{habilidades[3]}</p>
          
          </div>
           <p className='text-2xl font-mono font-bold mt-5'>Projetos</p>
          <div className='bg-white w-full h-full flex flex-col rounded-2xl justify-center items-start p-4'>
            {projetos.map(projeto => (
              <div className='flex flex-row gap-2'>
              <p className='font-bold'>{projeto.id}</p>
              <p>{projeto.nome}</p>
              <p>- {projeto.status}</p>
              </div>
            ))}
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
