import { InputType, Field } from "type-graphql";

@InputType()
export class AuthorInput {
    @Field()
    name: string;

    @Field()
    verified: boolean;
}
