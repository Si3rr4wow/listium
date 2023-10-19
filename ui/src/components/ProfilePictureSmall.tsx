import { Image } from '@chakra-ui/react';
import { graphql } from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay';
import { ProfilePictureSmall_user$key } from './__generated__/ProfilePictureSmall_user.graphql';

const ProfilePictureSmall: React.FC<{
  user: ProfilePictureSmall_user$key;
}> = ({ user }) => {
  const data = useFragment(
    graphql`
      fragment ProfilePictureSmall_user on User {
        username
        profilePicture {
          small
        }
      }
    `,
    user
  );

  return (
    <Image
      borderRadius="full"
      border="2px"
      borderColor="pink.500"
      boxSize="32px"
      src={data?.profilePicture?.small || ''}
      alt={`${data?.username} profile picture`}
    />
  );
};

export default ProfilePictureSmall;
