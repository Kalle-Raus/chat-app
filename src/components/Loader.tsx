import React from 'react';
import { Skeleton } from '@chakra-ui/core';

export default function Loader() {
  return (
    <>
      <Skeleton h="sm" minW={['full', 'xs', 'md']} />
    </>
  );
}
