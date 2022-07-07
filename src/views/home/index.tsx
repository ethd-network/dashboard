import React from 'react';
import { Box, Heading, Text } from '@primer/react';
import './index.scss';
import Search from './Search';
import BlockChainInfo from './BlockChainInfo';

export default function Home(): React.ReactElement {
  return (
    <Box
      display="flex"
      flexDirection="column"
      className="home"
      justifyContent="center"
      flex={1}
    >
      <Box
        p={12}
        className="search-wrapper"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-around"
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Heading as="h1">ETHD.NETWORK</Heading>
          <Text className="lead" textAlign="center">
            This is a handy ethereum development environment
            <br />
            that you can deploy locally and test transactions and contracts
          </Text>
        </Box>

        <Search />

        <div />

      </Box>

      <BlockChainInfo />
    </Box>
  );
}
