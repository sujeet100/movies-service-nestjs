export class Movie {
  name: string;
  year: number;
  imageUrl: string;
  rating: number;

  constructor(name: string, year: number, imageUrl: string, rating: number) {
    this.name = name;
    this.year = year;
    this.imageUrl = imageUrl;
    this.rating = rating;
  }
}
