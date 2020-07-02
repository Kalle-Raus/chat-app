import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Flex } from '@chakra-ui/core';

import TradeList from './TradeList';
import TradeMessages from './TradeMessages';
import TradeDetails from './TradeDetails';
import {
  fetchTrade,
  fetchTrades,
  selectAllTrades,
  updateTrade,
  selectTradeById,
} from './tradesSlice';

function FetchTrades() {
  const dispatch = useDispatch();

  return (
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
  );
}

export default function Trades() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const trades: any = useSelector(selectAllTrades);
  const trade: any = useSelector((state) => selectTradeById(state, id));
  const [tradeDetailsVisible, setTradeDetailsVisible] = React.useState(false);

  React.useEffect(() => {
    if (!trades.length) {
      dispatch(fetchTrades());
    }
    dispatch(fetchTrade(id));
    dispatch(updateTrade({ ...trade, seen: true }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, id]);

  return (
    <Flex flexWrap="wrap" flexDirection="row" justifyContent="space-between" flex="auto" w="100%">
      {trades.length ? (
        <TradeList display={id ? ['none', 'flex'] : 'flex'} id={id} trades={trades} />
      ) : (
        <FetchTrades />
      )}
      {id ? (
        <>
          <TradeMessages id={id} setTradeDetailsVisible={setTradeDetailsVisible} />
          <TradeDetails
            id={id}
            display={id ? ['none', 'block'] : 'block'}
            tradeDetailsVisible={tradeDetailsVisible}
            setTradeDetailsVisible={setTradeDetailsVisible}
          />
        </>
      ) : (
        <></>
      )}
    </Flex>
  );
}
