export interface TMDBResult{
  id: number;
  title: string;
  release_date?: string;
}

export interface TMDBResponse{
  results: TMDBResult[];
}

export async function searchMovie(query: string): Promise<TMDBResult | null> {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY!;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`
  );
  if (!res.ok) throw new Error('TMDB fetch error');
  const data = await res.json();
  return data.results?.[0] ?? null; // Return the first match or null
}
