// @ts-nocheck
import { Field, ObjectType } from "type-graphql";
@ObjectType()
export class Game {
    @Field()
    id: string;

    @Field()
    title: string;

    @Field(type=>[String])
    platform: string[];
}