const Invitee = require("../models");

const resolvers = {
    Query: {
        invitees: async () => {
            return Invitee.find()
                .select("-__v");
        },
        invitee: async (parent, {_id}) => {
            return Invitee.findOne({_id})
                .select("-__v");
        }
    },

    Mutation: {
        addInvitee: async (parent, args) => {
            const invitee = await Invitee.create(args);
            return invitee;
        },

        addGuest: async (parent, args) => {
            const {name, ageGroup, dinner} = args;
            const invitee = await Invitee.findByIdAndUpdate(
                {_id: args.inviteeId},
                {$push: {guests: {name, ageGroup, dinner}}},
                {new: true}
            );
            return invitee;
        },

        deleteInvitee: async (parent, args) => {
            const invitee = await Invitee.findByIdAndDelete(
                {_id: args.inviteeId}
            );
            return invitee;
        },

        deleteGuest: async (parent, args) => {
            const guestName = args.guestName;
            const invitee = await Invitee.findByIdAndUpdate(
                {_id: args.inviteeId},
                {$pull: {guests: {"name": guestName}}},
                {new: true}
            );
            return invitee;
        }
    }
}

module.exports = resolvers;