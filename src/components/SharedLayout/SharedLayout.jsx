import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Wrapper,
  Container,
  Header,
  HeaderContainer,
  Logo,
  Link,
  Icon,
  Footer,
  API,
  Info,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Wrapper>
      <Header>
        <HeaderContainer>
          <Logo>
            <Icon role="img" aria-label="camera icon">
              🎞️
            </Icon>{' '}
            Сinema search
          </Logo>
          <nav>
            <Link to="/" end>
              Home
            </Link>
            <Link to="/movies">Movies</Link>
          </nav>
        </HeaderContainer>
      </Header>
      <Container>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </Container>
      <Footer>
        <Info>Copyright © 2023. Created by Prysiazhnaia Anastasiia</Info>
        <Info>
          Thanks for API <API>themoviedb.org</API>
        </Info>
      </Footer>
    </Wrapper>
  );
};
