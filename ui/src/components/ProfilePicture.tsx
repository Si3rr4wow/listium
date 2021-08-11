import { Image } from '@chakra-ui/react'
import { graphql } from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay'
import { ProfilePictureSmallComponent_user$key } from './__generated__/ProfilePictureSmallComponent_user.graphql'

const ProfilePictureSmall: React.FC<{ 
  node: ProfilePictureSmallComponent_user$key 
}> = ({
  node
}) => {
  const data = useFragment(
    graphql`
      fragment ProfilePictureSmallComponent_user on User {
        username
        profilePicture {
          small
        }
      }
    `,
    node
  )

  return (
    <Image
      borderRadius="full"
      border="2px"
      borderColor="pink.500"
      boxSize="32px"
      src={data?.profilePicture?.small || ''}
      alt={`${data?.username} profile picture`}
    />
  )
}

export default ProfilePictureSmall