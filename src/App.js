import styled from "styled-components";

const Container = styled.div``

const Title = styled.h1``

function App() {
  return (
    <Container id="show-scene-1">
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
      {/* scroll section */}
      <section className="scroll-section" id="scroll-section-0">
          <Title>LifeIs Joy</Title>
          <div className="sticky-elem main-message">
            <p>I Am Joy Mun</p>
          </div>
          <div className="sticky-elem main-message">
            <p>Born in Asia,<br/>raised by the world.</p>
          </div>
          <div className="sticky-elem main-message">
            <p>Currently living and working in Korea and <br/>sometime in San Francisco.</p>
          </div>
          <div className="sticky-elem main-message">
            <p>You're <br/>more than welcome</p>
          </div>
          <p></p>
      </section>

      <section className="scroll-section" id="scroll-section-1">
        <p className="description">
          <strong>About Me</strong>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </section>

      <section className="scroll-section" id="scroll-section-2">
      <div className="sticky-elem main-message">
        <p>
          <small>Work 1</small>
          Creative Project
        </p>
      </div>
      <div className="sticky-elem desc-message">
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        <div className="pin"></div>
      </div>
      <div className="sticky-elem desc-message">
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less</p>
        <div className="pin"></div>
      </div>
      </section>

      <section className="scroll-section" id="scroll-section-3">
        <p className="mid-message">
          <strong>Contact</strong><br/>
          There are many variations of passages of Lorem Ipsum available.
        </p>
        <p className="canvas-caption">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
      </section>
      <footer className="footer">
        2022,LifeIsJoy
      </footer>
    </Container>

  );
}

export default App;
