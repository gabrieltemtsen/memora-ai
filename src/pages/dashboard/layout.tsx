import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    HStack,
    VStack,
    Icon,
    useColorModeValue,
    Text,
    Drawer,
    DrawerContent,
    useDisclosure,
    BoxProps,
    FlexProps,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Link,
  } from '@chakra-ui/react'
  import { ReactNode } from "react";
  
  import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
    FiBell,
    FiChevronDown,
  } from 'react-icons/fi'
  import { IconType } from 'react-icons'
import { useAuthentication } from '@/lib/hooks/use-authentication';
import { signOut } from 'next-auth/react';
  
  interface LinkItemProps {
    name: string
    url: string
    icon: IconType
  }
  
  interface NavItemProps extends FlexProps {
    icon: IconType
    url: string
    children: React.ReactNode
  }
  
  interface MobileProps extends FlexProps {
    onOpen: () => void
  }
  
  interface SidebarProps extends BoxProps {
    onClose: () => void
  }
  
  const LinkItems: Array<LinkItemProps> = [
    { name: 'Home', icon: FiHome, url: '/dashboard' },
    { name: 'Create Memories', icon: FiTrendingUp, url: '/dashboard/create-memories'  },
    { name: 'Memories', icon: FiCompass, url: '/dashboard/memories'  },
    { name: 'Settings', icon: FiSettings, url: '/dashboard/settings'},
  ]
  
  const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
      <Box
       
        bg={useColorModeValue('white', 'gray.900')}
        borderRight="1px"
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        w={{ base: 'full', md: 60 }}
        pos="fixed"
        h="full"
        {...rest}>
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Link href='/'  textDecoration={'blue'}>
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            Memora-AI
          </Text>
        </Link>
          <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
        </Flex>
        {LinkItems.map((link) => (
          <>
          
          <NavItem key={link.name} icon={link.icon} url={link.url}>
            {link.name}
          </NavItem>
          </>
        ))}
      </Box>
    )
  }
  
  const NavItem = ({ url, icon, children, ...rest }: NavItemProps) => {
    return (
      <Box
        as="a"
        href={url}
        style={{ textDecoration: 'none' }}
        _focus={{ boxShadow: 'none' }}>
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: 'cyan.400',
            color: 'white',
          }}
          {...rest}>
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white',
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Box>
    )
  }
  
  const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    const { user, isAuthenticated, isLoading } = useAuthentication();

    return (
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bg={useColorModeValue('white', 'gray.900')}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
        justifyContent={{ base: 'space-between', md: 'flex-end' }}
        {...rest}>
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />
  
        <Text
          display={{ base: 'flex', md: 'none' }}
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold">
          MEMORA-AI
        </Text>
  
        <HStack spacing={{ base: '0', md: '6' }}>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton py={2} _focus={{ boxShadow: 'none' }}>
                <HStack mr={7}>
                  <Avatar
                    size={'sm'}
                    src={user?.picture}
                  /> 
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2">
                    <Text fontSize="sm">{user?.firstName}</Text>
                    
                  </VStack>
                  <Box display={{ base: 'none', md: 'flex' }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList
                bg={useColorModeValue('white', 'gray.900')}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <MenuItem>Settings</MenuItem>
                <MenuDivider />
                <MenuItem as={'button'} onClick={logout}>Log out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </Flex>
    )
  }
  const logout = async() => {
    await signOut();
  };
  const SidebarWithHeader = ({children}:{children:ReactNode}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
        <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full">
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <MobileNav onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
        </Box>
      </Box>
    )
  }
  
  export default SidebarWithHeader