import { InputType, Field, Int } from "type-graphql";

@InputType()
export class PaginationInput {
    @Field(type => Int, { defaultValue: 0 })
    skip: number;

    @Field(type => Int, { defaultValue: 2 })
    take: number;
}
