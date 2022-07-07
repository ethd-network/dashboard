import React from 'react';
import { Header, StyledOcticon } from '@primer/react';
import { DependabotIcon } from '@primer/octicons-react';
import { BetterSystemStyleObject } from '@primer/react/lib/sx';
import _ from 'lodash';
import ConnectWallet from '../ConnectWallet';

type NavigationItem = {
  path: string;
  name: string
}

export default function Navigation(): React.ReactElement {
  const style: BetterSystemStyleObject = {
    borderRadius: 6,
    marginTop: 4
  };

  const RouteList: NavigationItem[] = [
    {
      path: '/blocks',
      name: 'Blocks'
    },
    {
      path: '/transactions',
      name: 'Transactions'
    },
    {
      path: '/contract',
      name: 'Contract'
    },
    {
      path: '/market',
      name: 'Market'
    },
    {
      path: '/tools',
      name: 'Tools'
    }
  ];

  return (
    <Header sx={style}>
      <Header.Item>
        <Header.Link href="/">
          <StyledOcticon icon={DependabotIcon} size={32} />
        </Header.Link>
      </Header.Item>

      {
        _.map(RouteList, (item: NavigationItem) => (
          <Header.Item key={item.path}>
            <Header.Link href={item.path}>{item.name}</Header.Link>
          </Header.Item>
        ))
      }
      <Header.Item full />
      <Header.Item>
        <ConnectWallet />
      </Header.Item>
    </Header>
  );
}
