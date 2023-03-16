import NewPostForm from "@/components/Posts/NewPostForm";
import { Box, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilValue } from "recoil";
import { communityState } from "../../../atoms/communitiesAtom";
import PageContentLayout from "../../../components/Layout/PageContent";
import { auth } from "../../../firebase/clientApp";
import useCommunityData from "../../../hooks/useCommunityData";

const CreateCommmunityPostPage: NextPage = () => {
  return (
    <PageContentLayout>
      <>
        <Box p="14px 0px" borderBottom="1px solid white">
          <Text>Create Community Post</Text>
        </Box>
        <NewPostForm />
      </>
      <></>
    </PageContentLayout>
  );
};

export default CreateCommmunityPostPage;
