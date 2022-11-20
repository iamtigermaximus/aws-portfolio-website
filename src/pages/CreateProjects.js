import React from 'react'
import styled from 'styled-components'

import '@aws-amplify/ui-react/styles.css'
import { withAuthenticator, Heading } from '@aws-amplify/ui-react'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: pink;
  flex-direction: column;
`
const FormContainer = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: green;
`
const SignOutContainer = styled.div`
  background-color: yellow;
  margin: auto;
  width: 100%;
`
const SignOutButton = styled.button`
  background: yellow;
  margin: 30px;
`

const CreateProjects = ({ signOut }) => {
  return (
    <>
      <Container>
        <SignOutContainer>
          <SignOutButton onClick={signOut}>Sign Out</SignOutButton>
        </SignOutContainer>
        <FormContainer>
          <Heading level={1}>Add a new project</Heading>
          <label>Title</label>
          <input />
          <label>Brief Description</label>
          <input />
          <label>Result Description</label>
          <input />
          <label>Github</label>
          <input />
          <label>Demo Link</label>
          <input />
          <label>Tech Used</label>
          <input />
          <button>Upload Image</button>
        </FormContainer>
      </Container>
    </>
  )
}

export default withAuthenticator(CreateProjects)
