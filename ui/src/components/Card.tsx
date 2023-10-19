import { Box } from '@chakra-ui/layout';
import { ChakraProps } from '@chakra-ui/react';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

// This weird type lets you pass stuff like style
// or onClick without explicitly calling out
// what you want to pass.
type CardProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  ChakraProps;

export const Card: React.FC<CardProps> = ({ children, ...props }) => {
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
  );
};
