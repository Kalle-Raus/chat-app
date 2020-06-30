import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Flex } from '@chakra-ui/core';

import TradeList from './TradeList';
import TradeMessages from './TradeMessages';
import TradeDetails from './TradeDetails';
import { fetchTrade, fetchTrades, selectAllTrades } from './tradesSlice';

export default function Trades() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const trades: any = useSelector(selectAllTrades);

  React.useEffect(() => {
    dispatch(fetchTrades());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(fetchTrade(id));
  }, [dispatch, id]);

  return (
    <Flex flexWrap="wrap" flexDirection="row" justifyContent="space-between" flex="auto" w="100%">
      <TradeList trades={trades} />
      {id ? (
        <>
          <TradeMessages id={id} />
          <TradeDetails id={id} />
        </>
      ) : (
        <></>
      )}
    </Flex>
  );
}
