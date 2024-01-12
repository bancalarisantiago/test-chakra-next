
'use client'
import Image from 'next/image'
import styles from './page.module.css'
import {
  Stack,
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
  Tfoot,
  TableCaption,
  TableContainer,
  FormControl,
  FormLabel,
  Switch,
  Container,
  HStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Badge,
  Input,
  Tooltip
} from '@chakra-ui/react'
import { useState } from 'react'
import { DataTable } from '../components/DataTable'
import BarCharts from '../components/BarCharts'
import PieCharts from '../components/PieCharts';
import { useRef } from 'react'
import { createColumnHelper } from '@tanstack/react-table'
import { ChevronRightIcon } from '@chakra-ui/icons';


type UnitConversion = {
  fromUnit: string;
  toUnit: string;
  factor: number;
};

const data: UnitConversion[] = [
  {
    fromUnit: "inches",
    toUnit: "millimetres (mm)",
    factor: 25.4
  },
  {
    fromUnit: "feet",
    toUnit: "centimetres (cm)",
    factor: 30.48
  },
  {
    fromUnit: "yards",
    toUnit: "metres (m)",
    factor: 0.91444
  }
];

const columnHelper = createColumnHelper<UnitConversion>();

const columns = [
  columnHelper.accessor("fromUnit", {
    cell: (info) => info.getValue(),
    header: "To convert"
  }),
  columnHelper.accessor("toUnit", {
    cell: (info) => info.getValue(),
    header: "Into"
  }),
  columnHelper.accessor("factor", {
    cell: (info) => info.getValue(),
    header: "Multiply by",
    meta: {
      isNumeric: true
    }
  })
];

export default function Home() {

  const [isLoaded, setIsLoaded] = useState(false)
  const inputDateRef = useRef(null);
  const statusColor = (status) => {
    switch (status) {
      case 'Pendiente':
        return 'yellow';
      case 'En curso':
        return 'blue';
      case 'Cerrado':
        return 'green';
      case 'Desestimado':
        return 'gray';
      case 'A verificar':
      case 'En revisión':
        return 'orange';
      default:
        return 'gray';
    }
  };
  const reports = [
    {
      id: '0001',
      creation: '26/04/2022',
      assignedTo: 'Gervasio Bernal',
      title: 'Ineficiencia en la conectividad de la Sala de Reuniones piso 2',
      type: 'Observación',
      practice: 'QA',
      impact: 'Medio',
      status: 'Desestimado'
    },
    {
      id: '0002',
      creation: '21/11/2023',
      assignedTo: 'Gabriela Flores',
      title: 'Ineficiencia en la conectividad de la Sala de Reuniones piso PB',
      type: 'Observación',
      practice: 'Java',
      impact: 'Alto',
      status: 'En curso'
    },
    // ... más registros ...
    {
      id: '0010',
      creation: '02/02/2021',
      assignedTo: 'Gabriela Flores',
      title: 'Ineficiencia en la conectividad de la Sala de Reuniones piso PB',
      type: 'No Conformidad',
      practice: 'DevOps',
      impact: 'Alto',
      status: 'Desestimado'
    }
  ];
  return (
    <main >
      {/* <Stack padding={4} spacing={1}>
        <Skeleton height='40px' isLoaded={isLoaded}>
          <Box>Hello World!</Box>
        </Skeleton>

        <Skeleton
          height='40px'
          isLoaded={isLoaded}
          bg='green.500'
          color='white'
          fadeDuration={1}
        >
          <Box>Hello React!</Box>
        </Skeleton>
        <Skeleton
          height='40px'
          isLoaded={isLoaded}
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
          <Button onClick={() => setIsLoaded((v) => !v)}>toggle</Button>
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
      </Menu> */}
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
      {/* <Box>
                <DataTable columns={columns} data={data} />
            </Box>
            <FormControl display='flex' alignItems='center'>
                <FormLabel htmlFor='email-alerts' mb='0'>
                    Enable email alerts?
                </FormLabel>
                <Switch id='email-alerts' />
            </FormControl>
            <Stack direction='row'>
                <Badge variant='outline' colorScheme='gray'>
                    Desestimado
                </Badge>
                <Badge variant='solid' colorScheme='green'>
                    En curso
                </Badge>
                <Badge variant='subtle' colorScheme='blue'
                    padding={"2"}
                >
                    Pendiente
                </Badge>
            </Stack>
            <PieCharts />
            <BarCharts /> */}
      <Box overflowX="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Id</Th>
              <Th>Fecha de Creación</Th>
              <Th>Asignado a</Th>
              <Th>Título</Th>
              <Th>Tipo</Th>
              <Th>Práctica</Th>
              <Th>Impacto</Th>
              <Th>Estado</Th>
              <Th></Th>

            </Tr>
          </Thead>
          <Tbody>
            {reports.map((report, index) => (
              <Tr key={report.id}>
                <Td>{index}</Td>
                <Td>{report.id}</Td>
                <Td>{report.creation}</Td>
                <Td>{report.assignedTo}</Td>
                <Td>{report.title}</Td>
                <Td>{report.type}</Td>

                <Td>
                  {/* {report.practice} */}
                  <Badge
                    colorScheme='gray'
                    padding="1"
                    textTransform={"capitalize"}
                    style={{
                      borderLeftColor: "#6C757D",
                      borderLeftWidth: 6,
                      borderRadius: 6,
                      color: "#6C757D",
                      fontSize: 14,
                    }}
                  >
                    {report.practice}
                  </Badge>
                </Td>
                <Td

                >
                  {/* <Badge colorScheme="red" variant="subtle">
                    {report.impact}
                  </Badge> */}
                  <Tooltip label='Muy grave' hasArrow>
                    <Box
                      justifyContent="center"
                      alignItems="center"
                      justifySelf="center"
                      height="3"
                      width="3"
                      borderWidth="2px"
                      borderRadius="9999"
                      borderColor="red"
                    />
                  </Tooltip>
                </Td>
                <Td>
                  <Badge colorScheme={statusColor(report.status)} variant="solid">
                    {report.status}
                  </Badge>
                </Td>
                <Td>
                  <ChevronRightIcon
                    boxSize={6}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <Input
        ref={inputDateRef}
        // placeholder="Seleccione fecha"
        size="md"
        type="date"
        // onFocus={() => inputDateRef.current.type = "date"}
        data-placeholder="Date of birth"
      // onBlur={() => inputDateRef.current.value === ''
      //   ? inputDateRef.current.type = 'text'
      //   : inputDateRef.current.type = "date"
      // }
      />
    </main>
  )
}
