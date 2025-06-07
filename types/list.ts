import {Media} from './media';

export interface List{
    name: string;
    description?: string;
    media: Media[];
    createdAt: string;
    updatedAt: string;
    userId: string;
    id: string;
    isPublic: boolean;
    
    // TODO v2: list type (e.g., 'watchlist', 'favorites', 'to-read', etc.)
    // type?: 'watchlist' | 'favorites' | 'to-read' | 'to-listen' | 'to-play';
    
    // TODO v2: add more metadata like cover image, tags, etc.
    // coverImage?: string;
    // tags?: string[];
    
    // TODO v2: add sorting and filtering options
    // sortBy?: 'createdAt' | 'updatedAt' | 'name';
    // filterBy?: 'all' | 'movies' | 'tvShows' | 'books' | 'music';
}