import { Comic } from './comic'

export class Hero {
    id: number
    name: string
    imageLink: string
    featuredimageLink: string
    description: string
    date: Date
    isFavorite: boolean
    comics: Comic[]
    relatedHeroes: number[]
    favoriteLinks: string[]
}
