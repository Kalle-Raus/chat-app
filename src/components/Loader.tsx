import React from 'react';
import { Skeleton } from '@chakra-ui/core';

type LoaderProps = {
  children: React.ReactNode;
};

export default function Loader(props: LoaderProps) {
  return (
    <>
      <Skeleton m={2} minW={['full', 'xs', 'md']} {...props} />
    </>
  );
}
