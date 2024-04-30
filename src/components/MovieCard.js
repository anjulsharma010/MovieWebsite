



const MovieCard =({movie}) =>{
  const {moviemainphotos,movietitle,moviegenres,movielanguages, moviecountries} = movie;
    return(
        <div className="card">
                <img src={!moviemainphotos ? "https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg" : moviemainphotos} alt="No Image" />
                <h2>{movietitle}</h2>
                <h5><span>MovieGenres: </span>{moviegenres.join(", ")}</h5>
                <h5><span>MovieLanguages: </span>{movielanguages.join(", ")}</h5>
                <h5><span>MovieCountries: </span>{moviecountries.join(", ")}</h5>
            </div>
    )
}

export default MovieCard;