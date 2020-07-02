import React from 'react';
import { Avatar, Box, Flex, Text } from '@chakra-ui/core';

export interface TradeItemProps {
  trade: any;
  user: any;
  selected: boolean;
}

export default function TradeItem({ trade, user, selected }: TradeItemProps) {
  return (
    <Box
      backgroundColor={selected ? 'gray.50' : 'none'}
      borderRadius={selected ? 3 : 0}
      borderLeftWidth={0}
      borderRightWidth={selected ? [0, 1.5] : 0}
      borderTopWidth={0}
      borderBottomWidth={1.5}
      borderStyle="solid"
      borderColor="gray.100"
      p={[4, 6]}
      pl={selected ? [8, 16] : [8, 12]}
      w={selected ? ['auto', 'calc(100% + 10px)'] : 'auto'}
    >
      <Flex flexDirection="row" justifyContent="space-between">
        <Box>
          <Flex flexDirection="row" alignItems="center">
            <Box
              backgroundColor={selected ? 'gray.100' : trade.seen ? 'gray.300' : 'green.300'}
              borderRadius="50%"
              h={3}
              w={3}
              ml={-5}
            />
            <Text color={selected ? 'gray.600' : 'gray.400'} fontSize="lg" ml={2}>
              {`${user?.userName}`} is <Text as="span" fontWeight="500">{`${trade.type}ing`}</Text>
            </Text>
          </Flex>
          <Text color="gray.700" fontSize="2xl" fontWeight={selected ? '400' : '600'} mt={2}>
            {trade.method}
          </Text>
          <Text color={selected ? 'gray.700' : 'gray.300'}>
            {`${trade.amount}`}{' '}
            <span style={{ textTransform: 'uppercase' }}>{`${trade.currency}`}</span> (
            {`${(trade.amount / 9200).toPrecision(5)}`}{' '}
            <span style={{ textTransform: 'uppercase' }}>{`BTC`}</span>)
          </Text>
        </Box>
        <Flex flexDirection="column" alignItems="center" justifyContent="center" minW="70px">
          <Avatar
            name={user?.userName}
            src={`${process.env.PUBLIC_URL}/${user?.img}`}
            fontSize={24}
            mb={2}
            backgroundColor="none"
          />
          {trade.paid ? (
            <Text color="green.400" fontSize="lg" fontWeight="700" textTransform="uppercase">
              Paid
            </Text>
          ) : (
            <Text color="gray.400" fontSize="md" fontWeight="500" textTransform="uppercase">
              Not paid
            </Text>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}
