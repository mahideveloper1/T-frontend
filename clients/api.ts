import {GraphQLClient} from "graphql-request"

const isClient = typeof window !=="undefined"

// export const graphqlClient =new GraphQLClient("http://localhost:8000/graphql",{
//     headers: ()=>({
//             Authorization: isClient 
//          ?`Bearer ${window.localStorage.getItem("token")}`:"",

//     })
// });
export const graphqlClient =new GraphQLClient("http://0.0.0.0:10000/graphql",{
    headers: ()=>({
            Authorization: isClient 
         ?`Bearer ${window.localStorage.getItem("token")}`:"",

    })
});
