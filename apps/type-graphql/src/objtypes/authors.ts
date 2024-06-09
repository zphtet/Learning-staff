import { Field, ObjectType } from "type-graphql";
import { Review } from "./review";


@ObjectType()
export class Author {
    
    @Field()
    id : string

    @Field()
    name : string

    @Field()
    verified : boolean

    @Field(type=>[Review])
    reviews : Review[]
}