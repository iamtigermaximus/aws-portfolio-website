import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: pink;
`
const Heading = styled.h1`
  fonst-size: 50px;
`

function App() {
  return (
    <Container>
      <Heading>Hello world</Heading>
    </Container>
  )
}

export default App
