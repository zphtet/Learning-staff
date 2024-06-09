import { Query, Resolver } from "type-graphql";
import db from "../data/db";
import { Game } from "../objtypes/games";

@Resolver()
export class GameResolver {
      private games  = db.games;

      @Query(returns=> [Game])
      async Games() {
          return this.games;
      }
}