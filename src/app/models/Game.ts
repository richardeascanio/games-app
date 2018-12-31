export interface Game {
    id?: number;  // ?: means not required
    title?: string;
    description?: string;
    image?: string;
    created_at?: Date
}