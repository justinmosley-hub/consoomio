export interface BaseMedia {
  id: string;
  title: string;
  releaseDate: string;
  genres: string[];
  description?: string;
  imageUrl?: string;
  externalId?: string; // ID from external API (TMDB, Spotify, etc.)
  averageRating?: number;
  totalReviews?: number;
}

// Movie-specific properties
export interface Movie extends BaseMedia {
  type: 'movie';
  director: string;
  cast: string[];
  runtime: number; // in minutes
  budget?: number;
  boxOffice?: number;
}

// TV Show-specific properties
export interface TVShow extends BaseMedia {
  type: 'tv';
  creator: string;
  seasons: number;
  episodes: number;
  status: 'ongoing' | 'ended' | 'cancelled';
  network?: string;
}

// Book-specific properties
export interface Book extends BaseMedia {
  type: 'book';
  author: string;
  isbn?: string;
  pages: number;
  publisher?: string;
  language: string;
}

// Music-specific properties (albums)
export interface Album extends BaseMedia {
  type: 'music';
  artist: string;
  tracks: number;
  duration: number; // in seconds
  label?: string;
}

// Video game-specific properties
export interface Game extends BaseMedia {
    type: 'videogame';
    developer: string;
    publisher?: string;
    platforms: string[];
    genres: string[];
    releaseDate: string;
    esrbRating?: string;
    modes?: string[]; // e.g., ['Single-player', 'Multiplayer']
}

// Union type for all media types
export type Media = Movie | TVShow | Book | Album | Game;

// Media type enum for easier handling
export enum MediaType {
  MOVIE = 'movie',
  TV = 'tv',
  BOOK = 'book',
  MUSIC = 'music'
}


// Search result type that can handle partial data
export interface MediaSearchResult {
  id: string;
  title: string;
  type: MediaType;
  releaseDate: string;
  imageUrl?: string;
  description?: string;
}