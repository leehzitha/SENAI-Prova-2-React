import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [cards, setCards] = useState([]);

  useEffect(()=> {
    getCards();
  }, []);

  const getCards = async ()=> {
    const response = await axios.get('https://avaliacao-bosch.onrender.com/all');
    setCards(response.data);
  };

  return (
    <div className=" flex-col flex justify-center items-center mt-10 gap-10">
      <h1 className=' font-mono'>Divas</h1>
      <div className='flex-wrap flex gap-5 m-7 justify-center items-center'>
      {cards.map(card => (
          <div className='flex flex-col justify-center items-center gap-1 font-mono rounded-md border w-100 p-4 h-full mb-10'>
            <img src={card.imagem} alt="" className='h-40 rounded-md mb-2' />
            <p className=' text-black font-medium'>{card.id}</p>
            <p className=' text-1xl mb-2 font-semibold  text-black'>{card.nome} {card.sobrenome}</p>
            <p className='mb-5'>{card.apelido}</p>
            {card.status == "Matriculado" ?  <p className=' text-green-600'>{card.status}</p> : <p className='text-red-600'>{card.status}</p>} 
          </div>
      

        ))}
      </div>
    </div>
  )
}

export default App
