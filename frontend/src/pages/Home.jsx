import MovieCard from "../components/MovieCard";
import { useState } from "react";
import '../css/Home.css'

function Home(){

    const [searchQuery, setSearchQuery] = useState("");

    const movie = [
        { id: 1, title: "Dileesha", relase_date: "2024"},
        { id: 2, title: "Lakshan", relase_date: "2024"},
        { id: 3, title: "Iresha", relase_date: "2024"},

    ]

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
                {movie.map(
                    (movie) =>  (
                        <MovieCard  movie={movie} key={movie.id}/>
             ))}
            </div>

        </div>
    )
}

export default Home;