import type { Film } from "../types/Film";

export type FilmCardProps = {
    film : Film;
};

export default function FilmCard({film} : FilmCardProps){

    return(
        <article className="card">
        <h2>{film.original_title}</h2>
        <img src={film.image} alt={`Póster de ${film.original_title}`}/>
        <p>{film.original_title_romanised}</p>
        </article>
    );
        
    

}