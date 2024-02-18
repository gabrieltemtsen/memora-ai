import React, { useEffect } from 'react'
import SidebarWithHeader from './layout'
import { Box,Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading, Button, Tooltip, Link, FormControl, FormLabel, Avatar, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import Multistep from '@/components/MultiStepForm'
import { useQuery } from 'convex/react'
import { api } from '../../../convex/_generated/api'
import { useAuthentication } from '@/lib/hooks/use-authentication'
import { UserInfo } from '@/types/types'





const CreateMemories = () => {
        const { user, isAuthenticated, isLoading, userId } = useAuthentication();

        const data: any = useQuery(api.users.getUser, { did: userId ?? '' });
        const [userData, setUserData] = useState<any>();
        const [onBoarded, setOnboarded] = React.useState(false);
        const conversation = [
            { sender: 'AI', message: 'That is awesome. I think our users will really appreciate the improvements.' },
            { sender: 'User', message: 'Thank you! I\'m glad you like it.' }
        ];
        
    return (
        <SidebarWithHeader>
          <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href='#'>Memora-AI</BreadcrumbLink>
          </BreadcrumbItem>
    
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Create Memories</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
    
        <Box mt={4} as={'section'}>
                {/* Render the multi-step form if onboarded state is false */}
                {data?.length === 0 && Multistep()}
        </Box>

       {data?.length !==0 && (
        <>
         <Box mb={5} display={'flex'} alignContent={'center'} alignItems={'center'} flexDirection={'column'} justifyContent={'center'}>
            <Heading fontSize={'24px'}>
                Memora-AI
            </Heading>
            <Text>
                Communicate with AI to gather data about you
            </Text>
        </Box>

        <Box maxW={'1300px'} mb={1} maxH={'600px'} overflowY={'auto'} p={3} m={1}>
            {conversation.map((msg, index) => (
                <Flex key={index} mb={9} justifyContent={msg.sender === 'AI' ? 'flex-start' : 'flex-end'}>
                    <Avatar name={msg.sender} src={`https://bit.ly/${msg.sender.toLowerCase()}`} />
                    <Box ml={3} mr={3} maxW={['70%', '320px']} p={4} borderWidth="1px" bg={msg.sender === 'AI' ? 'gray.500' : 'gray.300'} rounded="xl">
                        <Flex justify="space-between" alignItems="center" mb={2}>
                            <span className="text-sm font-semibold text-gray-900">{msg.sender}</span>
                        </Flex>
                        <p className="text-sm font-normal py-2.5 text-gray-900">{msg.message}</p>
                    </Box>
                </Flex>
            ))}
            {/* Chat input */}
            <Box
                bottom={4}
                width={['calc(100% - 40px)', '100%']}
                position={'fixed'}
                maxWidth={'700px'}
                left={0}
                right={0}
                marginX={'auto'}
            >
                <FormControl>
                    <FormLabel className="sr-only">Your message</FormLabel>
                    <Box className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                        <textarea
                            id="chat"
                            rows={1}
                            className="flex-grow px-4 py-2.5 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Your message..."
                            style={{ resize: 'none' }}
                        ></textarea>
                        <button
                            type="submit"
                            className="p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                        >
                            <svg
                                className="w-5 h-5 rotate-90 rtl:-rotate-90"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 18 20"
                            >
                                <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
                            </svg>
                            <span className="sr-only">Send message</span>
                        </button>
                    </Box>
                </FormControl>
            </Box>
        </Box>
        </>
       )}        
          
    
        </SidebarWithHeader>
      )
}

export default CreateMemories