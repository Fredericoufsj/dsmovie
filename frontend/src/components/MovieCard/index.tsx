import MovieScore from "components/MovieScore";
import { Link } from "react-router-dom";


function MovieCard() {

    const movie = {
        id: 1,
        image: "https://feriasdecinema.com/wp-content/uploads/2017/04/breaking-bad-capa.jpg",
        title: "Breaking Bad",
        count: 2,
        score: 4.5
    };

    return (
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />
                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-warning dsmovie-btn">Avaliar</div>

                </Link>
            </div>
        </div>
    );
}
export default MovieCard;