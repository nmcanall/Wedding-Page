const {gql} = require("apollo-server-express");

const typeDefs = gql`
    type Invitee {
        _id: ID
        name: String
        ageGroup: String
        dinner: String
        address: String
        email: String
        phone: String
        hotel: Boolean
        guests: [Guest]
    }

    type Guest {
        name: String
        ageGroup: String
        dinner: String
    }

    type Query {
        invitees: [Invitee]
        invitee(_id: ID!): Invitee
    }

    type Mutation {
        addInvitee(
            name: String!,
            ageGroup: String!,
            dinner: String!,
            address: String,
            email: String,
            phone: String,
            hotel: Boolean!
        ): Invitee

        addGuest(
            inviteeId: ID!,
            name: String!,
            ageGroup: String!,
            dinner: String!
        ): Invitee

        deleteInvitee(
            inviteeId: ID!
        ): Invitee

        deleteGuest(
            inviteeId: ID!,
            guestName: String!
        ): Invitee
    }
`;

module.exports = typeDefs;