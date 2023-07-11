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
            CINEMA SEARCH
          </Logo>
          <nav>
            <Link to="/" end>
              HOME
            </Link>
            <Link to="/movies">MOVIES</Link>
          </nav>
        </HeaderContainer>
      </Header>
      <Container>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </Container>
      <Footer>
        <Info>2023</Info>
        <Info>
          Thanks for API <API>themoviedb.org</API>
        </Info>
      </Footer>
    </Wrapper>
  );
};
