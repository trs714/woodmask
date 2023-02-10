import React from "react"
import { Link, Flex, Box, useColorMode, Button } from "theme-ui"

export default function Header() {
    const [mode, setMode] = useColorMode()
    const modes = ['light', 'ghost', 'snuff', 'pine', 'smoke', 'abyss']

    return (
        <header>
            <Flex>
                <Box p={2} sx={{ flex: '1 1 auto' }}>
                    <Link
                        href="/"
                        sx={{
                            fontSize: 4,
                            fontWeight: 'bold',
                            color: 'inherit',
                            textDecoration: 'none'
                        }}>
                        <span>WOODMASK</span>
                    </Link>
                </Box>
                <Box p={2}>
                    <Button
                        sx={{
                            color: 'text',
                            bg: 'muted'
                        }}
                        onClick={()=>{
                            const index = modes.indexOf(mode)
                            const next = modes[(index+1)%modes.length]
                            setMode(next)
                        }}
                    >{mode}</Button>
                </Box>
            </Flex>
        </header>
    )
}