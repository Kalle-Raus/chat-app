import React from 'react';
import { useSelector } from 'react-redux';
import { Avatar, Box, Button, Text, Flex, IconButton } from '@chakra-ui/core';

import { selectTradeById, selectUserByTradeId } from 'features/trade/tradesSlice';

export interface Props {
  display: any;
  id: string;
  tradeDetailsVisible: boolean;
  setTradeDetailsVisible: Function;
}

export default function TradeDetails({
  display,
  id,
  tradeDetailsVisible,
  setTradeDetailsVisible,
}: Props) {
  const trade: any = useSelector((state) => selectTradeById(state, id));
  const user: any = useSelector(selectUserByTradeId(id, false));

  return (
    <Box
      bg="white"
      p={4}
      boxShadow="0px 0px 15px 0px lightgray"
      textAlign="center"
      w={['100%', '27em']}
      display={tradeDetailsVisible ? 'block' : display}
      zIndex={2}
      position={tradeDetailsVisible ? ['fixed', 'inherit'] : 'inherit'}
      top={0}
      left={0}
      h={['100vh', 'auto']}
    >
      <Flex flexWrap="wrap" w="100%" justifyContent="flex-end">
        <IconButton
          display={['inherit', 'none']}
          aria-label="Show trade details"
          icon="close"
          isRound={true}
          bg="gray.200"
          color="white"
          size="lg"
          fontSize={16}
          onClick={() => {
            setTradeDetailsVisible(false);
          }}
        />
      </Flex>
      <Box mt={4} mb={8}>
        <Text color="gray.700" fontSize="2xl">
          You are trading with <span style={{ fontWeight: 500 }}>{user.userName}</span>
        </Text>
        <Text color="gray.300">Started 34 minutes ago</Text>
      </Box>
      <Button
        // bg="green.300"
        boxShadow="0 0 3px 0 lightgray"
        // color="white"
        variantColor="green"
        fontSize="xl"
        fontWeight="400"
        borderRadius={50}
        mb={8}
        px={12}
        size="lg"
      >
        Release bitcoins
      </Button>
      <Box
        alignItems="end"
        display="grid"
        gridTemplateColumns="50% 50%"
        gridAutoRows="auto auto auto auto"
        gridGap={4}
      >
        <Box m={4}>
          <Avatar
            name={user?.userName}
            src={`${process.env.PUBLIC_URL}/${user?.img}`}
            fontSize={24}
            backgroundColor="none"
            mb={2}
          />
          <Box textAlign="center">
            <Text color="gray.300" fontSize="lg" fontWeight="500">
              <Text as="span" color="green.400">
                +{user?.ratings?.positive}
              </Text>{' '}
              /{' '}
              <Text as="span" color="red.400">
                -{user?.ratings?.negative}
              </Text>
            </Text>
          </Box>
        </Box>
        <Box m={4} fontSize="lg">
          <Text fontWeight="500" textTransform="uppercase">
            # of trades
          </Text>
          <Text fontWeight="700">{user?.trades}</Text>
        </Box>
        <Box m={4} fontSize="lg">
          <Text fontWeight="500" textTransform="uppercase">
            Trade status
          </Text>
          {trade.paid ? (
            <Text color="green.400" fontWeight="500" textTransform="uppercase">
              Paid
            </Text>
          ) : (
            <Text color="gray.400" textTransform="uppercase">
              Not paid
            </Text>
          )}
        </Box>
        <Box m={4} fontSize="lg">
          <Text fontWeight="500" textTransform="uppercase">
            Trade hash
          </Text>
          <Text color="gray.300">{trade.tradeHash}</Text>
        </Box>
        <Box m={4} fontSize="lg">
          <Text fontWeight="500" textTransform="uppercase">
            Amount USD
          </Text>
          <Text color="gray.700"> {trade.amount}</Text>
        </Box>
        <Box m={4} fontSize="lg">
          <Text fontWeight="500" textTransform="uppercase">
            Amount BTC
          </Text>
          <Text color="gray.300">{(trade.amount / 9200).toPrecision(5)}</Text>
        </Box>
      </Box>
    </Box>
  );
}
