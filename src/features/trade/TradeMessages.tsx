import React, { useEffect } from 'react';
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
import { useForm } from 'react-hook-form';
import { animateScroll } from 'react-scroll';

import {
  selectMessagesByTradeId,
  selectTradeById,
  selectUserByTradeId,
  removeTrade,
  updateTrade,
} from 'features/trade/tradesSlice';
import { selectUserEntities } from 'features/user/userSlice';
import TimeStamp from 'features/trade/TimeStamp';
import { updateMessage } from 'features/message/messageSlice';

export interface MessageInputProps {
  user: any;
  trade: any;
  messages: Array<Object>;
}

function MessageInput({ user, trade, messages }: MessageInputProps) {
  const dispatch = useDispatch();
  const { handleSubmit, errors, register, formState } = useForm();

  function validateMessage(value: string) {
    let error;
    if (!value) {
      error = 'Message is required';
    }
    return error || true;
  }

  async function onSubmit(values: any, e: any) {
    const updateMessages = [
      ...messages,
      {
        id: Math.floor(Math.random() * Math.floor(10000)).toString(),
        user: user,
        text: values.message,
        tradeId: trade.id,
        timeStamp: new Date().toISOString(),
      },
    ];

    await dispatch(updateMessage(updateMessages));
    await dispatch(updateTrade({ id: trade.id, messages: updateMessages, seen: false }));
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        flexDirection="row"
        bg="white"
        borderRadius={4}
        borderWidth={2}
        borderColor="gray.100"
        p={2}
        pl={[0, 8]}
        pr={[0, 4]}
        my={[2, 2]}
        zIndex={1}
      >
        <FormControl isInvalid={errors.name} flexGrow={1}>
          <Input
            border="none"
            color="gray.700"
            fontWeight="500"
            placeholder="Type your message..."
            name="message"
            aria-describedby="message-user"
            _placeholder={{ color: 'gray.700', fontWeight: '500' }}
            _focus={{ border: 'none' }}
            ref={register({ validate: validateMessage })}
          />
        </FormControl>
        <Button
          variantColor="green"
          variant="ghost"
          textTransform="uppercase"
          fontSize={['md', 'lg']}
          isLoading={formState.isSubmitting}
          type="submit"
        >
          Send
        </Button>
      </Flex>
    </form>
  );
}

export interface TradeMessagesProps {
  id: string;
  setTradeDetailsVisible: Function;
}

export default function TradeMessages({ id, setTradeDetailsVisible }: TradeMessagesProps) {
  const [me, setMe] = React.useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  const trade: any = useSelector((state) => selectTradeById(state, id));
  const currentUser: any = useSelector(selectUserByTradeId(id, me));
  const user: any = useSelector(selectUserByTradeId(id, false));
  const users: any = useSelector(selectUserEntities);
  const messages = useSelector(selectMessagesByTradeId(id));

  const scrollToBottom = () => {
    animateScroll.scrollToBottom({
      containerId: 'chat',
    });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <Flex flexWrap="wrap" flexDirection="column" flexGrow={1} m={[4, 8]} mb={[4, 4]}>
      <Flex display={['inherit', 'none']} flexDirection="row">
        <Box flexGrow={1}>
          <IconButton
            aria-label="Delete trade"
            icon="delete"
            isRound={true}
            bg="gray.200"
            color="white"
            size="lg"
            onClick={() => {
              dispatch(removeTrade(id));
              history.push('/trades');
            }}
          />
        </Box>
        <IconButton
          display={['inherit', 'none']}
          aria-label="Show trade details"
          icon="info-outline"
          isRound={true}
          bg="gray.200"
          color="white"
          size="lg"
          fontSize={24}
          onClick={() => {
            setTradeDetailsVisible(true);
          }}
        />
        <IconButton
          display={['inherit', 'none']}
          aria-label="Delete trade"
          icon="chevron-left"
          isRound={true}
          bg="gray.200"
          color="white"
          size="lg"
          fontSize={32}
          onClick={() => {
            history.push('/trades');
          }}
          ml={2}
        />
      </Flex>
      <Flex flexWrap="wrap" flexDirection="row" justifyContent="center" position="relative">
        <IconButton
          display={['none', 'inherit']}
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
        <Text color="gray.700" fontSize={['xl', '2xl']}>
          {trade.method}
        </Text>
      </Flex>
      <Box textAlign="center" m={[1, 4]}>
        <Text color="gray.300" fontSize={['md', 'xl']} fontWeight="500">
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

      <Box id="chat" h={'60vh'} overflowY={'scroll'}>
        {messages?.map((message: any, key: number) => {
          const me = users[message.user]?.me;

          return (
            <Flex flexDirection="row" alignItems="center" key={key} mb={4}>
              <Box order={me ? 0 : 2} w={['auto', '10%']} textAlign={me ? 'right' : 'left'}>
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
                width="min-content"
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
      </Box>
      <Divider flexGrow={1} visibility="hidden" />
      <Flex
        justify="flex-start"
        flexDirection="column"
        position={['fixed', 'inherit']}
        bottom={0}
        left={0}
        m={[2, 0]}
        w="calc(100% - 16px)"
      >
        <Button
          onClick={() => setMe(!me)}
          bg="gray.50"
          h={16}
          borderWidth={2}
          borderRadius={50}
          maxW={220}
        >
          <Avatar
            name={currentUser?.userName}
            src={`${process.env.PUBLIC_URL}/${currentUser?.img}`}
            fontSize={[2, 12]}
            backgroundColor="none"
            mr={2}
          />
          Typing as {currentUser?.userName}
        </Button>
        <MessageInput user={currentUser} trade={trade} messages={messages} />
      </Flex>
    </Flex>
  );
}
