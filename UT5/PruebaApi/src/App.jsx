import { useEffect, useState } from 'react'
import './App.css'
import { getImage, getNutrition } from './api/index'
import Card from './components/MyCard'

function App() {
  const [food, setFood] = useState("");

  useEffect(() => {
    const getFoodImage = async () => {
      const imageAndName = await getImage();
      setFood(imageAndName);
    }
  getFoodImage();
  }, [])

  return (
    <>
      <Card img={food.image} text={food.name} nutrition={food.data} />
    </>
  )
}

export default App
