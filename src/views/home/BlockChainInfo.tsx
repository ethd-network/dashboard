import React from 'react';
import { Box, Text } from '@primer/react';
import _ from 'lodash';

type BlockItemProps = {
  title: string,
  value: string | number
}

export function BlockItem(
  {
    title,
    value
  }: BlockItemProps
): React.ReactElement {
  return (
    <Box
      p={3}
      borderColor="border.default"
      borderWidth={1}
      borderStyle="dashed"
      borderRadius={6}
    >
      <Text fontSize={12} fontWeight="bold">
        {`${title}: `}
      </Text>
      <Text fontSize={12}>
        {value}
      </Text>
    </Box>
  );
}

export default function BlockChainInfo(): React.ReactElement {
  const Data = [
    {
      title: 'Chain ID',
      value: 65535
    },
    {
      title: 'Block Count',
      value: 12323
    },
    {
      title: 'Tx Count',
      value: 23423423
    },
    {
      title: 'Contract Count',
      value: 235
    },
    {
      title: 'Pending Count',
      value: 91
    },
    {
      title: 'TPS',
      value: 123
    }
  ];
  return (
    <Box
      display="grid"
      flexDirection="row"
      gridTemplateColumns="1fr 1fr 1fr"
      gridGap={1}
    >
      {
        _.map(Data, (item) => (
          <BlockItem key={item.title} title={item.title} value={item.value} />
        ))
      }
    </Box>
  );
}
