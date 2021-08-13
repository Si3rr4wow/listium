import { Image } from '@chakra-ui/react'
import { graphql } from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay'
import { ProfilePictureLargeComponent_user$key } from './__generated__/ProfilePictureLargeComponent_user.graphql'

const ProfilePictureLarge: React.FC<{ 
  user: ProfilePictureLargeComponent_user$key 
}> = ({
  user
}) => {
  const data = useFragment(
    graphql`
      fragment ProfilePictureLargeComponent_user on User {
        username
        profilePicture {
          large
        }
      }
    `,
    user
  )

  return (
    <Image
      borderRadius="full"
      border="2px"
      borderColor="pink.500"
      boxSize="128px"
      src={data?.profilePicture?.large || ''}
      alt={`${data?.username} profile picture`}
    />
  )
}

export default ProfilePictureLarge