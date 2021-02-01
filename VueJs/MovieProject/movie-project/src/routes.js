import MovieDetails from "@/components/MovieDetails";

import Home from "@/components/Home";
import FoundMovies from "@/components/FoundMovies";

export const routes=[
    {
        path:'/', component:Home
    },
    {
        path:'/movie/:id', component:MovieDetails
    },
    {
        path:'/foundmovies', component:FoundMovies
    }
]
