import { Image } from '@chakra-ui/react';
import { graphql } from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay';
import { ProfilePictureLarge_user$key } from './__generated__/ProfilePictureLarge_user.graphql';

const ProfilePictureLarge: React.FC<{
  user: ProfilePictureLarge_user$key;
}> = ({ user }) => {
  const data = useFragment(
    graphql`
      fragment ProfilePictureLarge_user on User {
        username
        profilePicture {
          large
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
      boxSize="256px"
      src={data?.profilePicture?.large || ''}
      alt={`${data?.username} profile picture`}
    />
  );
};

export default ProfilePictureLarge;
