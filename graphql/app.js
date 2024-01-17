import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql';

var schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            hello: {
                type: GraphQLString,
                resolve() {
                    return 'world';
                },
            },
            greet: {
                type: GraphQLString,
                resolve() {
                    return 'Greetings from KeshavSoft';
                },
            },
        },
    }),
});

import express from "express";
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
});


app.get('/:inSource', function (req, res) {
    var source = `{ ${req.params.inSource} }`;

    graphql({ schema, source }).then((result) => {
        // Prints
        // {
        //   data: { hello: "world" }
        // }

        res.send(result);
    });
})

app.listen(3000)