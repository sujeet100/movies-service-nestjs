import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Movie {
    @Field(type => Int)
    id: number;

    @Field({description: 'Name of the movie'})
    name: string;

    @Field({description: 'Year of release'})
    year: number;

    @Field({description: 'Image Url'})
    imageUrl: string;

    @Field({description: 'Rating of the movie'})
    rating: number
}