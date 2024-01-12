'use client'
import Image from 'next/image'
import styles from './page.module.css'
import {
  Stack,
  Box,
  Button,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Progress,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Input,
  Select,
  Avatar,
  useBoolean,
  Container,
  useBreakpointValue
} from '@chakra-ui/react'
import { useState } from 'react'
import { DataTable } from './components/DataTable';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PhoneIcon } from '@chakra-ui/icons'
import SideMenu from './components/SideMenu'
export default function Home() {

  const [isLoading, setIsLoading] = useBoolean();
  const [flag, setFlag] = useBoolean();

  const path = usePathname();
  console.log("PATH", path, path === "/Table")


  const variant = useBreakpointValue(
    {
      base: 'outline',
      md: 'solid',
    },
    {
      // Breakpoint to use when mediaqueries cannot be used, such as in server-side rendering
      // (Defaults to 'base')
      fallback: 'md',
    },
  )

  return (
    <main >
      <Box
        padding="20"
      >
        <h1> HOMEEEE</h1>
        <SideMenu />
        <Stack direction='row'
          padding="5"
        >
          <Avatar name='Oshigaki Kisame' src='https://bit.ly/broken-link' />
          <Avatar name='Sasuke Uchiha' src='https://bit.ly/broken-link' />
          <Avatar src='https://bit.ly/broken-link' />
          <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
          <div onMouseEnter={setFlag.on} onMouseLeave={setFlag.off}>
            {flag ? 'The flag is ON!' : 'Hover me to turn ON'}
          </div>
        </Stack>
        <Link
          href={'/Table'}
        >
          <Button
            style={path === "/" ? { backgroundColor: "gray" } : {}}
            isLoading={isLoading}
            loadingText='Calling'
            spinner={<PhoneIcon />}
            variant={variant}
          >
            TABLES

          </Button>
        </Link>
        <Link
          href={'/Badges'}
        >
          <Button
            style={path === "/" ? { backgroundColor: "gray" } : {}}
            isLoading={isLoading}
          >
            BADGES
          </Button>
        </Link>
        <Stack padding={4} spacing={1}>
          <Skeleton height='40px' isLoaded={isLoading}>
            <Box>Hello World!</Box>
          </Skeleton>

          <Skeleton
            height='40px'
            isLoaded={isLoading}
            bg='green.500'
            color='white'
            fadeDuration={1}
          >
            <Box>Hello React!</Box>
          </Skeleton>
          <Skeleton
            height='40px'
            isLoaded={isLoading}
            fadeDuration={4}
            bg='blue.500'
            color='white'
          >
            <Box>Hello ChakraUI!</Box>
          </Skeleton>
          <Box padding='6' boxShadow='lg' bg='white'>
            <SkeletonCircle size='10' />
            <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
          </Box>
          <Box textAlign='center'>
            <Button onClick={setIsLoading.toggle}>toggle</Button>
          </Box>
        </Stack>
        <h1>MENU</h1>
        <Menu>
          <MenuButton as={Button} >
            Your Cats
          </MenuButton>
          <MenuList>
            <MenuItem minH='48px'>
              <Image
                src='https://placekitten.com/100/100'
                alt='Fluffybuns the destroyer'
                width={100}
                height={100}

              />
              <span>Fluffybuns the Destroyer</span>
            </MenuItem>
            <MenuItem minH='40px'>
              <Image
                src='https://placekitten.com/120/120'
                alt='Simon the pensive'
                width={100}
                height={100}
              />
              <span>Simon the pensive</span>
            </MenuItem>
          </MenuList>
        </Menu>
        {/* <TableContainer>
  <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer> */}
        <Stack spacing={3}>
          <Input variant='outline' placeholder='Outline' />
          <Input variant='filled' placeholder='Filled' />
          <Input variant='flushed' placeholder='Flushed' />
          <Input variant='unstyled' placeholder='Unstyled' />
          <Input
            placeholder="Select Date and Time"
            size="md"
            type="datetime-local"
          />
        </Stack>
        <Box>

          <Select placeholder='Select option'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </Box>
      </Box>

    </main>
  )
}
