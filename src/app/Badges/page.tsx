
'use client'
import {
    Stack,
    Badge,
} from '@chakra-ui/react'

export default function Home() {
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
