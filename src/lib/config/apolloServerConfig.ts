import apolloServerContext from '../config/apolloServerContext';
import schema from '../../graphql/schema/schema';

const apolloServerConfig = {
  schema,
  playground: process.env.NODE_ENV !== 'production',
  context: apolloServerContext,
};

export default apolloServerConfig;