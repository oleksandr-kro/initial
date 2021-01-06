import MovieDetails from "@/components/MovieDetails";

import Home from "@/components/Home";

export const routes=[
    {
        path:'/', component:Home
    },
    {
        path:'/movie/:id', component:MovieDetails
    }
]
