import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class updateRatingInput {
  @Field()
  id: number;

  @Field()
  rating: number;
}