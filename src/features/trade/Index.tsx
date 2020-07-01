import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Flex } from '@chakra-ui/core';

import TradeList from './TradeList';
import TradeMessages from './TradeMessages';
import TradeDetails from './TradeDetails';
import { fetchTrade, fetchTrades, selectAllTrades, updateTrade } from './tradesSlice';

export default function Trades() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const trades: any = useSelector(selectAllTrades);

  React.useEffect(() => {
    dispatch(fetchTrade(id));
    dispatch(updateTrade({ id, seen: true }));
  }, [dispatch, id]);

  return (
    <Flex flexWrap="wrap" flexDirection="row" justifyContent="space-between" flex="auto" w="100%">
      {trades.length ? (
        <TradeList id={id} trades={trades} />
      ) : (
        <Flex
          background="white"
          flexWrap="wrap"
          flexDirection="column"
          boxShadow="0px 0px 15px 0px lightgray"
          w={['100%', '27em']}
        >
          <Button
            onClick={() => dispatch(fetchTrades())}
            size="lg"
            m={8}
            color="white"
            backgroundColor="green.300"
            borderRadius={50}
          >
            Fetch trades
          </Button>
        </Flex>
      )}
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
