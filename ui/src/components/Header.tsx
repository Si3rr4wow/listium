import { Box, Text } from '@chakra-ui/react'

import { graphql } from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay'
import Link from './Link';
import ProfilePictureSmall from './ProfilePicture';
import type { HeaderComponent_user$key } from './__generated__/HeaderComponent_user.graphql';

const Header: React.FC<{ 
  node: HeaderComponent_user$key 
}> = ({ node }) => {
  const data = useFragment(
    graphql`
      fragment HeaderComponent_user on User {
        id
        username
        ...ProfilePictureSmallComponent_user
      }
    `,
    node,
  )

  return (
    <Box 
      height="12"
      padding="4"
      borderBottom="1px" 
      borderBottomColor="pink.500"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Link 
        display="flex"
        alignItems="center"
        to={`/`}
      >
        <Text size="sm" mr="4">
          home
        </Text>
      </Link>
      <Link 
        display="flex"
        alignItems="center"
        to={`/users/${data.id}`}
      >
        <Text size="sm" mr="4">
          {data.username}
        </Text>
        <ProfilePictureSmall node={data}/>
      </Link>
    </Box>
  )
}

export default Header
