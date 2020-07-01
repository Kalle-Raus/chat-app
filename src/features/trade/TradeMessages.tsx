import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Flex,
  Avatar,
  Text,
  IconButton,
  Divider,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/core';
import { useHistory } from 'react-router-dom';

import Loader from 'components/Loader';
import {
  selectMessagesByTradeId,
  selectTradeById,
  selectUserByTradeId,
  removeTrade,
} from 'features/trade/tradesSlice';
import { selectUserEntities } from 'features/user/userSlice';
import TimeStamp from 'features/trade/TimeStamp';

export default function TradeMessages({ id }: any) {
  const history = useHistory();
  const dispatch = useDispatch();
  const tradesLoading = useSelector((state: any) => state.trades.loading);
  const trade: any = useSelector((state) => selectTradeById(state, id));
  const user: any = useSelector(selectUserByTradeId(id, false));
  const users: any = useSelector(selectUserEntities);
  const messages = useSelector(selectMessagesByTradeId(id));

  if (tradesLoading) return <Loader />;

  return (
    <Flex flexWrap="wrap" flexDirection="column" flexGrow={1} m={[4, 8]}>
      <Flex flexWrap="wrap" flexDirection="row" justifyContent="center" position="relative">
        <IconButton
          aria-label="Delete trade"
          icon="delete"
          isRound={true}
          bg="gray.200"
          color="white"
          size="lg"
          position="absolute"
          left={0}
          top={2}
          onClick={() => {
            dispatch(removeTrade(id));
            history.push('/trades');
          }}
        />
        <Text color="gray.700" fontSize="2xl">
          {trade.method}
        </Text>
      </Flex>
      <Box textAlign="center" m={4}>
        <Text color="gray.300" fontSize="xl" fontWeight="500">
          {user.userName}{' '}
          <Text as="span" color="green.400">
            +{user?.ratings?.positive}
          </Text>{' '}
          /{' '}
          <Text as="span" color="red.400">
            -{user?.ratings?.negative}
          </Text>
        </Text>
      </Box>
      <Divider borderWidth={1.5} borderColor="gray.100" />
      {messages?.map((message: any, key: number) => {
        const me = users[message.user]?.me;

        return (
          <Flex flexDirection="row" alignItems="center" key={key} mb={[4, 0]}>
            <Box order={me ? 0 : 2} w={['auto', '10%']}>
              <Avatar
                name={users[message.user]?.userName}
                src={`${process.env.PUBLIC_URL}/${users[message.user]?.img}`}
                fontSize={[2, 24]}
                backgroundColor="none"
                mb={2}
              />
            </Box>
            <Box
              borderWidth={2}
              borderStyle="solid"
              borderColor={me ? 'gray.100' : 'gray.500'}
              bg={me ? 'white' : 'gray.500'}
              color={me ? 'gray.500' : 'gray.100'}
              flexGrow={1}
              m={4}
              p={4}
              key={key}
              borderRadius={4}
              fontSize="lg"
              order={1}
              position="relative"
            >
              {`${message.text}`}
              <Text
                color="grey"
                fontSize="md"
                position="absolute"
                bottom={-30}
                left={me ? ['auto', 0] : [0, 'auto']}
                right={me ? [0, 'auto'] : ['auto', 0]}
              >
                {TimeStamp(message.timeStamp)}
              </Text>
            </Box>
            <Box order={me ? 2 : 0} w={['auto', '10%']}></Box>
          </Flex>
        );
      })}
      <Divider flexGrow={1} visibility="hidden" />
      <FormControl>
        <Flex
          flexDirection="row"
          bg="white"
          borderRadius={4}
          borderWidth={2}
          borderColor="gray.100"
          p={2}
          pl={[0, 8]}
          pr={[0, 4]}
          my={6}
        >
          <Input
            border="none"
            color="gray.700"
            fontWeight="500"
            placeholder="Type your message..."
            type="message"
            id="message"
            aria-describedby="message-user"
            _placeholder={{ color: 'gray.700', fontWeight: '500' }}
            _focus={{ border: 'none' }}
          />
          <Button
            color="green.400"
            variant="ghost"
            textTransform="uppercase"
            fontSize={['md', 'lg']}
          >
            Send
          </Button>
        </Flex>
      </FormControl>
    </Flex>
  );
}
