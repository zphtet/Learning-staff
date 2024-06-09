import { FieldResolver, Query, Resolver, Root } from "type-graphql";
import db from "../data/db"
import { Review } from "../objtypes/review";


@Resolver(of=>Review)
export class ReviewResolver {
     
    private reviews  = db.reviews
    private dbAuthor = db.authors

    @Query(returns=> [Review])
    async Reviews() {
        return this.reviews;
    }

    @FieldResolver()
   async  author (@Root() parent : Review){
         return this.dbAuthor.find(author=> author.id === parent.author_id)
    }

}