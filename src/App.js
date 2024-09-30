import styled from "styled-components";
import ArticleFetcher from "./components/ArticleFetcher";

function App() {
  return (
    <main className="App">
      <Container>
        <ArticleFetcher />
      </Container>
    </main>
  );
}

export default App;

const Container = styled.div`
  min-height: 100vh;
  padding: 20px;
`;
