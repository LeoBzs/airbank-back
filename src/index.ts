import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv-safe';
import { performAstCodegen } from './codegen';
import apolloServerConfig from 'C:/Users/leonardo.rodrigues/Documents/Projects/airbank-back/src/lib/config/apolloServerConfig';

dotenv.config();

const startServer = () => {
  performAstCodegen();

  const server = new ApolloServer(apolloServerConfig);

  server
    .listen()
    .then(({ url }) => {
      console.log(`🚀  Server running -> ${url}graphql`);
    })
    .catch(err => console.log('Error launching server', err));
};

startServer();