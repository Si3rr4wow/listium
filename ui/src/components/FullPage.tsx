import { Box } from "@chakra-ui/layout"

export const FullPage: React.FC = ({ children }) => {
  return (
    <Box 
      height="100vh" 
      width="100vw" 
      bgGradient="linear(to-b, gray.900 35%, gray.700 100%)"
      color="white"
      overflowY="scroll"
      py="12"
    >
      {children}
    </Box>
  )
}