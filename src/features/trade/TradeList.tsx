import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Flex } from '@chakra-ui/core';

import TradeItem from './TradeItem';
import Loader from 'components/Loader';
import { PATHS } from 'app.constants';

export default function TradeList({ trades }: any) {
  const tradesLoading = useSelector((state: any) => state.trades.loading);

  if (tradesLoading) return <Loader />;

  return (
    <Flex
      background="white"
      flexWrap="wrap"
      flexDirection="column"
      boxShadow="0px 0px 15px 0px lightgrey"
      minW="320px"
    >
      {trades?.map((trade: any, key: number) => (
        <Link to={`${PATHS.trades}/${trade.id}`} key={key}>
          <TradeItem trade={trade} />
        </Link>
      ))}
    </Flex>
  );
}
