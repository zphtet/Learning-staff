import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import db from "../data/db";
import { Author } from "../objtypes/authors";
import { AuthorInput } from "../input/create-autho-input";
import { Review } from "../objtypes/review";
import { PaginationInput } from "../input/pagination-input";
import { SearchInput } from "../input/search-input";

@Resolver(of=>Author)
export class AuthorResolver {
    private authors = db.authors;
    private dbReviews = db.reviews
     @Query(returns => [Author])
     async Authors (
        @Arg("pagination", { nullable: true }) pagination?: PaginationInput,
        @Arg("search", { nullable: true }) search?: SearchInput
     ){
        let results = this.authors;

        // Apply search filter if searchTerm is provided
        if (search?.searchTerm) {
            const searchTerm = search.searchTerm.toLowerCase();
            results = results.filter(author =>
                author.name.toLowerCase().includes(searchTerm)
            );
        }

        // Apply pagination
        if (pagination) {
            const { skip, take } = pagination;
            results = results.slice(skip, skip + take);
        }

        return results;
     }

     @Query(returns=>Author)
     async Author(@Arg("id") id : string){
         return this.authors.find(author => author.id === id)
     }

     

     @Mutation(returns=> [Author])
     async addAuthor(@Arg("data") data : AuthorInput){
         this.authors.push({
             id: this.authors.length + 1 + '',
             ...data,
         })
         return this.authors;
     }

     @Mutation(returns => [Author], {description : 'remove from db'})
     async removeAuthor(@Arg("id") id : string){
         this.authors = this.authors.filter(author => author.id!== id)
         return this.authors;
     }

    @FieldResolver()
      reviews (@Root() parent : Author):Review[]{
          return this.dbReviews.filter(review => review.author_id === parent.id)as Review[]
     }
}