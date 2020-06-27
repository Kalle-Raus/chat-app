import React from 'react';
import { Skeleton } from '@chakra-ui/core';

export default function Loader() {
  return (
    <>
      <Skeleton h="3xs" minW={['full', 'xs', '3xl']} my={2} />
      <Skeleton h="sm" minW={['full', 'xs', '3xl']} my={2} />
    </>
  );
}
