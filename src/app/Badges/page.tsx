
'use client'
import Image from 'next/image'
import styles from './page.module.css'
import {
    Stack,
    Box,
    FormControl,
    FormLabel,
    Switch,
    Badge,
    Container,
    HStack,
} from '@chakra-ui/react'
import { useState } from 'react'
import { DataTable } from '../components/DataTable'
import BarCharts from '../components/BarCharts'
import PieCharts from '../components/PieCharts';



export default function Home() {

    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <main >
            <Stack
                direction='row'
                padding={"5"}
            >
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
                    Admin
                </Badge>
            </Stack>

        </main>
    )
}
