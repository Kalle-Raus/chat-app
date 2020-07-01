import React from 'react';
import { Skeleton } from '@chakra-ui/core';

export default function Loader(props: any) {
  return (
    <>
      <Skeleton m={2} minW={['full', 'xs', 'md']} {...props} />
    </>
  );
}
