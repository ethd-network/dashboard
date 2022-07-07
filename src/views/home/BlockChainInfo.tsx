import React, { PropsWithChildren } from 'react';
import { Box, Text } from '@primer/react';

export function BlockItem(
  { children }: PropsWithChildren<React.ReactNode>
): React.ReactElement {
  return (
    <Box
      p={6}
      flex={1}
      borderColor="border.default"
      borderWidth={1}
      borderStyle="dashed"
      borderRadius={6}
    >
      <Text fontSize={14}>
        {children}
      </Text>
    </Box>
  );
}

export default function BlockChainInfo(): React.ReactElement {
  return (

    <Box
      display="flex"
      gridGap={3}
    >

      <BlockItem>Chain ID: 65535</BlockItem>
      <BlockItem>Block Count: 12323</BlockItem>
      <BlockItem>Tx Count: 23423423</BlockItem>
      <BlockItem>Contract Count: 235</BlockItem>
      <BlockItem>Pending Count: 91</BlockItem>
      <BlockItem>TPS: 123</BlockItem>
    </Box>
  );
}
