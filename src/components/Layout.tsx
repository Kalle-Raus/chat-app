import React from 'react';
import { Container } from 'components/Container';

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  return (
    <Container pt="10" pb="20" minHeight="100vh" justifyContent={['flex-start', 'center']}>
      {props.children}
    </Container>
  );
}
