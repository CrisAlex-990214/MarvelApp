import { Comic } from './comic'

export class Character {
    id: number
    name: string
    thumbnail: Thumbnail
    description: string
    modified: Date
    isFavorite: boolean
    comics: Comic[]
    series: Serie
    
}

export class Thumbnail {
    path: string
    extension: string
}

class Serie {
    items: Item[]
}

class Item {
    resourceURI: string;
    name: string;
} 