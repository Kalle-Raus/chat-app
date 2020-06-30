import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Flex, Avatar, Heading, Text, IconButton, Divider } from '@chakra-ui/core';

import Loader from 'components/Loader';
import {
  selectMessagesByTradeId,
  selectTradeById,
  selectUserByTradeId,
} from 'features/trade/tradesSlice';
import { selectUserEntities } from 'features/user/userSlice';

export default function TradeMessages({ id }: any) {
  const tradesLoading = useSelector((state: any) => state.trades.loading);
  const trade: any = useSelector((state) => selectTradeById(state, id));
  const user: any = useSelector(selectUserByTradeId(id, false));
  const users: any = useSelector(selectUserEntities);
  const messages = useSelector(selectMessagesByTradeId(id));

  if (tradesLoading) return <Loader />;

  return (
    <Flex flexWrap="wrap" flexDirection="column" flexGrow={1} m={8}>
      <Flex flexWrap="wrap" flexDirection="row" justifyContent="center" position="relative">
        <IconButton
          aria-label="Delete trade"
          icon="delete"
          isRound={true}
          bg="lightgrey"
          color="white"
          size="md"
          position="absolute"
          left={0}
          top={2}
        />
        <Heading color="grey" size="md">
          {trade.method}
        </Heading>
      </Flex>
      <Box textAlign="center" m={4}>
        <Text>
          {user.userName}{' '}
          <span style={{ color: 'green', fontWeight: 500 }}>+{user?.ratings?.positive}</span> /{' '}
          <span style={{ color: 'red', fontWeight: 500 }}>-{user?.ratings?.negative}</span>
        </Text>
      </Box>
      <Divider />
      {messages?.map((message: any, key: number) => {
        return (
          <Flex flexDirection="row" alignItems="center" key={key} position="relative">
            <Avatar
              name={users[message.user]?.userName}
              src={`${process.env.PUBLIC_URL}/${users[message.user]?.img}`}
              size="sm"
              mb={2}
            />
            <Box
              bg="grey"
              color="white"
              flexGrow={1}
              m={8}
              p={4}
              key={key}
              borderRadius={4}
            >{`${message.text}`}</Box>
            <Box position="absolute" bottom={2} right={8}>
              <Text color="grey" fontSize="sm">{`${message.timeStamp}`}</Text>
            </Box>
          </Flex>
        );
      })}
    </Flex>
  );
}
