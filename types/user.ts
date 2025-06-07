// types/user.ts

import { MediaType } from "./media";

export interface User {
 id: string;
 username: string;
 email: string;
 displayName?: string;
 bio?: string;
 avatarUrl?: string;
 createdAt: string;
 updatedAt: string;
 isVerified: boolean;
 preferences: UserPreferences;
}

export interface UserPreferences {
 defaultMediaType?: MediaType;
 publicProfile: boolean;
 publicReviews: boolean;
 publicLists: boolean;
 emailNotifications: boolean;
 //TODO v2: dark / light theme
 //theme: 'light' | 'dark' | 'system';
}

export interface UserProfile {
 user: User;
 stats: UserStats;
}

export interface UserStats {
 totalReviews: number;
 totalLists: number;
 moviesReviewed: number;
 tvShowsReviewed: number;
 booksReviewed: number;
 musicReviewed: number;
 averageRating: number;
 //TODO v2: social metrics
 //followers: User[];
 //followersCount: number;
 //followingCount: number;
}

//TODO v2: social features
/* export interface UserFollow {
 id: string;
 followerId: string;
 followingId: string;
 createdAt: string;
}*/

// Auth-related types
export interface AuthUser {
 id: string;
 username: string;
 email: string;
 displayName?: string;
 avatarUrl?: string;
}

export interface LoginCredentials {
 email: string;
 password: string;
}

export interface RegisterCredentials {
 username: string;
 email: string;
 password: string;
 displayName?: string;
}