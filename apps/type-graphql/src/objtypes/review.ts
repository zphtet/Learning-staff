import { Field, ObjectType } from "type-graphql";
import { Author } from "./authors";

@ObjectType()
export class Review {

    @Field()
     id: string;

    @Field()
     rating : number

    @Field()
     content : string 

    @Field()
     author_id : string;

    @Field()
     game_id : string


     @Field(type=>Author)
     author : Author

}