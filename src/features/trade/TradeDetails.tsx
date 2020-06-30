import React from 'react';
import { useSelector } from 'react-redux';
import { Avatar, Box, Button, Text } from '@chakra-ui/core';

import { selectTradeById, selectUserByTradeId } from 'features/trade/tradesSlice';
import Loader from 'components/Loader';

export default function TradeDetails({ id }: any) {
  const tradesLoading = useSelector((state: any) => state.trades.loading);
  const trade: any = useSelector((state) => selectTradeById(state, id));
  const user: any = useSelector(selectUserByTradeId(id, false));

  if (tradesLoading) return <Loader />;

  return (
    <Box
      bg="white"
      borderWidth={1}
      borderStyle="solid"
      p={4}
      boxShadow="0px 0px 15px 0px lightgrey"
      minW="320px"
      textAlign="center"
    >
      <Box mb={8}>
        <Text fontSize="lg">
          You are trading with <span style={{ fontWeight: 500 }}>{user.userName}</span>
        </Text>
        <Text color="grey">Started 23 minutes ago</Text>
      </Box>
      <Button variantColor="green" borderRadius={50} mb={8} size="lg">
        Release bitcoins
      </Button>
      <Box
        display="grid"
        gridTemplateColumns="50% 50%"
        gridAutoRows="auto auto auto auto"
        gridGap={4}
      >
        <Box m={4}>
          <Avatar name={user?.userName} src={`${process.env.PUBLIC_URL}/${user?.img}`} size="sm" />
          <Box textAlign="center">
            <Text>
              <span style={{ color: 'green', fontWeight: 500 }}>+{user?.ratings?.positive}</span> /{' '}
              <span style={{ color: 'red', fontWeight: 500 }}>-{user?.ratings?.negative}</span>
            </Text>
          </Box>
        </Box>
        <Box m={4}>
          <Text fontWeight="500" textTransform="uppercase">
            # of trades
          </Text>
          <Text fontWeight="500">4</Text>
        </Box>
        <Box m={4}>
          <Text fontWeight="500" textTransform="uppercase">
            Trade status
          </Text>
          {trade.paid ? (
            <Text color="green.400" textTransform="uppercase">
              Paid
            </Text>
          ) : (
            <Text color="grey" textTransform="uppercase">
              Not paid
            </Text>
          )}
        </Box>
        <Box m={4}>
          <Text fontWeight="500" textTransform="uppercase">
            Trade hash
          </Text>
          <Text color="grey">{trade.tradeHash}</Text>
        </Box>
        <Box m={4}>
          <Text fontWeight="500" textTransform="uppercase">
            Amount USD
          </Text>
          <Text color="grey"> {trade.amount}</Text>
        </Box>
        <Box m={4}>
          <Text fontWeight="500" textTransform="uppercase">
            Amount BTC
          </Text>
          <Text color="grey">{trade.amount / 10000}</Text>
        </Box>
      </Box>
    </Box>
  );
}
