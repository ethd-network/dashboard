import React from 'react';
import { Box, Text } from '@primer/react';
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
    >
      <Box
        p={12}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <h1 className="name">ETHD.NETWORK</h1>
        <p className="lead">
          This is a handy ethereum development environment
          <br />
          that you can deploy locally and test transactions and contracts
        </p>
        <Text color="fg.subtle">
          * The data will be reset from time to time :)
        </Text>

        <Search />

      </Box>

      <BlockChainInfo />
    </Box>
  );
}
