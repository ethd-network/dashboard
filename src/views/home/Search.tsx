import { Box, Button, TextInput } from '@primer/react';
import { SearchIcon } from '@primer/octicons-react';
import React from 'react';

export default function Search(): React.ReactElement {
  return (
    <Box className="box-search" p={4} display="flex" alignItems="center">
      <TextInput
        leadingVisual={SearchIcon}
        size="large"
        width={600}
        placeholder="block / tx / address"
      />
      <Button className="btn-search" size="large">Search</Button>
    </Box>
  );
}
