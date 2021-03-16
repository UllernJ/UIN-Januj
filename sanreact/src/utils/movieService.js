import client from "./client";

const movieListFields = `
title, 
actor,
`;

export const getMovies = async() => {
    const data = await client.fetch(`*[_type == "movie"]${movieListFields}`);
    return data;
}