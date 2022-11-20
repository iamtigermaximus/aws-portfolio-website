//import styled from 'styled-components'
import '@aws-amplify/ui-react/styles.css'
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from '@aws-amplify/ui-react'

// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: pink;
// `
// const Heading1 = styled.h1`
//   fonst-size: 50px;
// `

function App({ signOut }) {
  return (
    <View className='App'>
      <Card>
        <Image className='App-logo' alt='logo' />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  )
}

export default withAuthenticator(App)
