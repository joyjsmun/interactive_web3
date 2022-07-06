import styled from "styled-components";

const Container = styled.div``

function App() {
  return (
    <Container>
      <nav className="global-nav">
        <div className="global-nav-links">
          <a className="global-nav-item" href="#">Room</a>
          <a className="global-nav-item" href="#">Store</a>
          <a className="global-nav-item" href="#">Idea</a>
          <a className="global-nav-item" href="#">Contact</a>
        </div>
      </nav>
      <nav className="local-nav">
        <div className="local-nav-links">
          <a className="product-name" href="#">LifeIs Joy</a>
          <a href="#">About</a>
          <a href="#">Work</a>
          <a href="#">Purchase</a>
        </div>
      </nav>

    </Container>

  );
}

export default App;
