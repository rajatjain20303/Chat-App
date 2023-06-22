import React from 'react'
import { Container,Box, Text,Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Login from '../components/authentication/Login'
import Signup from '../components/authentication/Signup'
const Homepage = () => {
  return (
    <Container maxW='xl' >
      <Box
      display="flex"
      justifyContent="center"
      width="100%"
      background="white"
      padding={3}
      margin="40px 0px 15px 0px"
      borderRadius={10}
      >
        <Text
        fontSize="3xl"
        fontFamily="Work sans"
        >
          Talk-A-Tive
        </Text>
      </Box>
      <Box
      width="100%"
      background="white"
      padding={3}
      margin="15px 0px 15px 0px"
      borderRadius={10}
      >
        <Tabs variant='soft-rounded' >
  <TabList mb="1em">
    <Tab width="50%">Login</Tab>
    <Tab width="50%">SignUp</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login></Login>
    </TabPanel>
    <TabPanel>
      <Signup></Signup>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>
    </Container>
  )
}

export default Homepage
