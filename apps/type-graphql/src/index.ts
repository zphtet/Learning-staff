import 'reflect-metadata'
import { buildSchema } from "type-graphql";
import resloverArray from './resolver';
import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from '@apollo/server/standalone'



async function boostartp (){

    const schema =await  buildSchema({
        resolvers: resloverArray
    })
    
     const server = new ApolloServer({
        schema : schema
     })

     const {url} = await startStandaloneServer(server , {listen: {port : 4000}})
     console.log(`🚀 Server ready at ${url}`)
}

boostartp();