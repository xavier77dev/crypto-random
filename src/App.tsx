import './App.css'
import { useRandom } from './hooks/useRandom'

const App = () => {
  const query = useRandom();
  return (
    <>
      {
        <h2 style={{ display: "flex", alignItems: "center", gap: "1rem" }}> Número Aleatorio: {
          query.isFetching
            ? <p>Loading...</p>
            : <p>{query.data}</p>
        } </h2 >
      }
      {
        !query.isLoading && query.isError && <h3>{`${query.error}`}</h3>
      }

      <button onClick={() => query.refetch()} disabled={query.isFetching}>
        {
          query.isFetching ? "....." : "new number"
        }</button>
    </>
  )
}

export default App
