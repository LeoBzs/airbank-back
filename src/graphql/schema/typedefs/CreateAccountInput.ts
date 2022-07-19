import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

const CreateAccountInput: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'CreateAccountInput',
  description: 'Create account input',
  fields: {
    username: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Account username',
    },
  },
});

export default CreateAccountInput;