import React from 'react';
import { Container } from 'components/Container';

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  return (
    <Container minHeight="100vh" justifyContent={['flex-start']}>
      {props.children}
    </Container>
  );
}
