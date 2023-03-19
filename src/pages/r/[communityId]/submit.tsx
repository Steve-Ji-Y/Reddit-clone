import About from "@/components/Community/About";
import NewPostForm from "@/components/Posts/NewPostForm";
import useCommunityData from "@/hooks/useCommunityData";
import { Box, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { useAuthState } from "react-firebase-hooks/auth";
import PageContentLayout from "../../../components/Layout/PageContent";
import { auth } from "../../../firebase/clientApp";

const CreateCommmunityPostPage: NextPage = () => {
  const [user] = useAuthState(auth);
  const { communityStateValue } = useCommunityData();
  return (
    <PageContentLayout>
      <>
        <Box p="14px 0px" borderBottom="1px solid white">
          <Text>Create Community Post</Text>
        </Box>
        {user && <NewPostForm user={user} />}
      </>
      {communityStateValue.currentCommunity && (
        <>
          <About communityData={communityStateValue.currentCommunity} />
        </>
      )}
    </PageContentLayout>
  );
};

export default CreateCommmunityPostPage;
