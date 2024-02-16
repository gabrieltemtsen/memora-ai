import React from 'react'
import SidebarWithHeader from './layout'
import { Box,Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading, Button, Tooltip, Link } from '@chakra-ui/react'

const index = () => {
  return (
    <SidebarWithHeader>
      <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href='#'>Memora-AI</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href='#'>Dashboard</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>

    <Box mt={4} as={'section'}>

      <Heading>Welcome Gabriel</Heading>

      <Box display={'flex'} flexDirection={'column'} mt={10} p={'4px'}>
        <Text>
          What would you like to do today?
        </Text>

        <Box display={'flex'} flexDirection={'row'} gap={4} mt={10} p={'4px'}>

        <Tooltip maxW={'220px'} hasArrow label='Communicate with AI to gather data about you' bg='blue.600'>
          <Link href='/dashboard/create-memories'>
          <Button colorScheme='teal' size='lg'>
            Converse with AI
        </Button>
          </Link>
        
        </Tooltip>

        <Tooltip maxW={'220px'} hasArrow label='Interact with the Deceased AI-presence' bg='green.600'>
        <Button colorScheme='teal' size='lg'>
        Interact with an AI presence
        </Button>
        </Tooltip>
       

    
      </Box>
      </Box>
    </Box>

      
      

    </SidebarWithHeader>
  )
}

export default index