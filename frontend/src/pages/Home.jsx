import MovieCard from "../components/MovieCard";
import { useState , useEffect} from "react";
import { searchMovies, getPopularMovies } from "../assets/services/api";
import '../css/Home.css'

function Home(){

    const [searchQuery, setSearchQuery] = useState("");
    const[movies, setMovies] = useState([]);
    const[error, setError] = useState(null);
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
          try {
            const popularMovies = await getPopularMovies();
            setMovies(popularMovies);
            console.log(popularMovies);  // Log the fetched movies
          } catch (err) {
            console.log(err);
            setError("Failed to load the movie...");
          } finally {
            setLoading(false);
          }
        };
      
        loadPopularMovies();
      }, []);

    const onSearch = (e) =>  {
        e.preventDefault()
        alert(searchQuery);
        setSearchQuery("");
    }



    return(
        <div className="home">
            <form onSubmit={onSearch} className="search-form">
                <input 
                type="text" 
                placeholder="Search for a movie"  
                className="Search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type = "submit" className="Search-button">Search</button>
            </form>
            <div className="movie-grid">
                {movies.map(
                    (movie) =>  (
                        <MovieCard  movie={movie} key={movie.id}/>
             ))}
            </div>

        </div>
    )
}

export default Home;