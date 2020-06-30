import React from 'react';
import { Avatar, Box, Flex, Text } from '@chakra-ui/core';

export function StatusIcon(props: any) {
  const { state, ...rest } = props;
  const color = state === false ? 'green' : 'grey';
  return <Box {...rest} background={color} borderRadius="50%" h={3} w={3}></Box>;
}

export default function TradeItem({ trade }: any) {
  return (
    <Box borderWidth={1} borderStyle="solid" p={4} pl={10}>
      <Flex flexDirection="row" justifyContent="space-between">
        <Box>
          <Flex flexDirection="row" alignItems="center">
            <StatusIcon state={trade.seen} ml={-5} />
            <Text color="grey" fontSize="sm" ml={2}>
              {`${trade?.seller?.userName}`} is{' '}
              <span style={{ fontWeight: 500 }}>{`${trade.type}ing`}</span>
            </Text>
          </Flex>
          <Text fontSize="lg" fontWeight="600" mt={2}>
            {trade.method}
          </Text>
          <Text color="grey">
            {`${trade.amount}`}{' '}
            <span style={{ textTransform: 'uppercase' }}>{`${trade.currency}`}</span>(
            {`${trade.amount / 10000}`} <span style={{ textTransform: 'uppercase' }}>{`BTC`}</span>)
          </Text>
        </Box>
        <Flex flexDirection="column" alignItems="center" justifyContent="center" minW="70px">
          <Avatar
            name={trade?.seller?.userName}
            src={`${process.env.PUBLIC_URL}/${trade?.seller?.img}`}
            size="sm"
            mb={2}
          />
          {trade.paid ? (
            <Text color="green.400" fontSize="sm" fontWeight="500" textTransform="uppercase">
              Paid
            </Text>
          ) : (
            <Text color="grey" fontSize="xs" fontWeight="500" textTransform="uppercase">
              Not paid
            </Text>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}
