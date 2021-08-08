import { Box } from "@chakra-ui/layout"
import { ChakraProps } from "@chakra-ui/react"

export const Card: React.FC<ChakraProps & { style?: any }> = ({ children, ...props }) => {
  return (
    <Box 
      mt={4} 
      py={2}
      px={4} 
      borderLeft="1px" 
      borderBottom="1px" 
      borderColor="pink.500"
      borderRadius="sm"
      {...props}
    >
      {children}
    </Box>
  )
}
