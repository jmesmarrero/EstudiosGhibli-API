import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import FilmCard from './components/FilmCard';
import type { Film } from './types/Film';

const API_URL = "https://ghibliapi.vercel.app/films";


function App() {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadFilms() {
      try {
        const response = await axios.get<Film[]>(API_URL);
        setFilms(response.data);
               
      } catch (error) {
        console.error(error);
        setError("no se pudo cargar el catálogo");
        
      }finally{
        setLoading(false);
      }
    }
    loadFilms();
  },[]);

  return (
    <main className="app">
      <h1>Estudios Ghibli</h1>
      <p>Cartelera principal</p>

      {loading && <p role="status">Cargando peliculas... </p>} {/*muestra mensaje de carga mientras: Loading sea true*/}

      {error && <p role="alert">{error}</p>}   {/*muestra mensaje de error si existe*/}

      {!loading && !error && films.length === 0 && ( //!loading: significa que ya no está cargando/ games.lenght ===0, la lista está vacía*/}
        <p>La API no ha devuelto peliculas.</p>
      )}

      {!loading && !error && films.length > 0 && (
        <section className="films">

          {films.map((film) => (
            <FilmCard key={film.id} film={film} />
          ))}

        </section>
      )}

    </main>
  )
  
}

export default App
