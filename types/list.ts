import {Media, MediaType} from './media';

export interface List{
    name: string;
    description?: string;
    media: Media[];
    createdAt: string;
    updatedAt: string;
    userId: string;
    id: string;
    isPublic: boolean;
    itemCount: number;
    items: ListItem[];
    
    // TODO v2: list type (e.g., 'watchlist', 'favorites', 'to-read', etc.)
    // type?: 'watchlist' | 'favorites' | 'to-read' | 'to-listen' | 'to-play';
    
    // TODO v2: add more metadata like cover image, tags, etc.
    // coverImage?: string;
    // tags?: string[];
    
    // TODO v2: add sorting and filtering options
    // sortBy?: 'createdAt' | 'updatedAt' | 'name';
    // filterBy?: 'all' | 'movies' | 'tvShows' | 'books' | 'music';
}

export interface ListItem {
 id: string;
 listId: string;
 mediaId: string;
 mediaType: MediaType;
 position: number; // for ordering
 addedAt: string;
 notes?: string; // user's personal notes about this item in the list
}

// For creating new lists
export interface CreateListInput {
 title: string;
 description?: string;
 isPublic: boolean;
}

// For updating lists
export interface UpdateListInput {
 title?: string;
 description?: string;
 isPublic?: boolean;
}

// For adding items to lists
export interface AddToListInput {
 mediaId: string;
 mediaType: MediaType;
 notes?: string;
}

// List with populated media data for display
export interface PopulatedList extends Omit<List, 'items'> {
 items: PopulatedListItem[];
}

export interface PopulatedListItem extends ListItem {
 media: Media; // Full media object instead of just ID
}

// TODO v2: List sharing and collaboration (Issue #TBD)
// export interface ListShare {
//   id: string;
//   listId: string;
//   sharedWithUserId: string;
//   permission: 'view' | 'edit';
//   sharedAt: string;
// }

// TODO v3: List categories and tags (Issue #TBD)
// export interface ListCategory {
//   id: string;
//   name: string;
//   color?: string;
// }