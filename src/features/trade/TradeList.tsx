import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Flex } from '@chakra-ui/core';

import TradeItem from './TradeItem';
import { PATHS } from 'app.constants';
import { selectUserEntities } from 'features/user/userSlice';

export default function TradeList({ display, id, trades }: any) {
  const users: any = useSelector(selectUserEntities);

  return (
    <Flex
      background="white"
      flexWrap="wrap"
      flexDirection="column"
      boxShadow="0px 0px 15px 0px lightgray"
      w={['100%', '27em']}
      display={display}
    >
      {trades?.map((trade: any, key: number) => (
        <Link to={`${PATHS.trades}/${trade.id}`} key={key}>
          <TradeItem trade={trade} user={users[trade.buyer]} selected={id === trade.id} />
        </Link>
      ))}
    </Flex>
  );
}
