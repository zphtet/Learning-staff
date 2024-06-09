import { InputType, Field } from "type-graphql";

@InputType()
export class SearchInput {
    @Field({ nullable: true })
    searchTerm?: string;
}
