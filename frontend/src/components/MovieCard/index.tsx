import MovieScore from "components/MovieScore";


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
                <div className="btn btn-primary dsmovie-btn">Avaliar</div>
            </div>
        </div>
    );
}
export default MovieCard;