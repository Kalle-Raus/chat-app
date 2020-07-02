import React, { Children } from 'react';
import { Flex, useColorMode, FlexProps } from '@chakra-ui/core';

type Children = React.ReactNode;

type ContainerProps = {
  [name: string]: FlexProps | Children;
};

export const Container = ({ children, ...rest }: ContainerProps) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: 'gray.50', dark: 'gray.900' };
  const color = { light: 'black', dark: 'white' };

  return (
    <Flex
      minH="100vh"
      direction="column"
      alignItems="center"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      justifyContent="center"
      flexGrow={1}
      {...rest}
    >
      {children}
    </Flex>
  );
};
