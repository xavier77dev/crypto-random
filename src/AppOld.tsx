import { useEffect, useReducer, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [number, setNumber] = useState<number>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>()

  const [key, forceAxios] = useReducer((x) => x + 1, 0)

  const getRandomNumberFromApi = async (): Promise<number | undefined> => {
    try {
      const { data } = await axios("https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new");
      return data;

    } catch (error) {
      // throw new Error("Auxilio");
      setError("Auxilio");
    }
  }

  useEffect(() => {
    setNumber(0);
    getRandomNumberFromApi().then(setNumber)
  }, [key])

  useEffect(() => {
    setIsLoading(true)
    if (number || error) {
      setIsLoading(false);
    }
  }, [number, error])

  return (
    <>
      {
        <h2 style={{ display: "flex", alignItems: "center", gap: "1rem" }}> Número Aleatorio: {
          isLoading ? <p>Loading...</p>
            : error ? <p>Error</p> : <p>{number}</p>
        } </h2 >
      }
      <button onClick={forceAxios} disabled={isLoading}>
        {
          isLoading ? "....." : "new number"
        }</button>
    </>
  )
}

export default App
