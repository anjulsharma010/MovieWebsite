



const MovieCard =({movie}) =>{
  const {moviemainphotos,movietitle,moviegenres,movielanguages, moviecountries} = movie;
    return(
        <div className="card">
                <img src={!moviemainphotos ? "https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg" : moviemainphotos} alt="No Image" />
                <h4>{movietitle}</h4>
                <h5>MovieGenres: {moviegenres.join(", ")}</h5>
            </div>
    )
}

export default MovieCard;