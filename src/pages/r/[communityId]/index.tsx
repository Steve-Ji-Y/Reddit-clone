import React, { useEffect } from "react";
import { GetServerSidePropsContext } from "next";
import { auth, firestore } from "@/firebase/clientApp";
import { doc, getDoc } from "firebase/firestore";
import { Community, communityState } from "@/atoms/communitiesAtom";
import safeJsonStringify from "safe-json-stringify";
import CommunityNotFound from "@/components/Community/CommunityNotFound";
import Header from "@/components/Community/Header";
import PageContent from "@/components/Layout/PageContent";
import CreatePostLink from "@/components/Community/CreatePostLink";
import Posts from "@/components/Posts/Posts";
import { useSetRecoilState } from "recoil";
import About from "@/components/Community/About";
import { useAuthState } from "react-firebase-hooks/auth";

type CommunityPageProps = {
  communityData: Community;
};

const CommunityPage: React.FC<CommunityPageProps> = ({ communityData }) => {
  const [user] = useAuthState(auth);
  const setCommunityStateValue = useSetRecoilState(communityState);
  useEffect(() => {
    if (!communityData) return;
    setCommunityStateValue((prev) => ({
      ...prev,
      currentCommunity: communityData,
    }));
  }, []);

  if (!communityData) {
    return <CommunityNotFound />;
  }

  return (
    <>
      <Header communityData={communityData} />
      <PageContent>
        <>
          <CreatePostLink />
          <Posts communityData={communityData} userId={user?.uid} />
        </>
        <>
          <About communityData={communityData} />
        </>
      </PageContent>
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const communityDocRef = doc(
      firestore,
      "communities",
      context.query.communityId as string
    );
    const communityDoc = await getDoc(communityDocRef);
    return {
      props: {
        communityData: communityDoc.exists()
          ? JSON.parse(
              safeJsonStringify({
                id: communityDoc.id,
                ...communityDoc.data(),
              })
            )
          : "",
      },
    };
  } catch (error) {
    // could add error page here TODO
    console.log("getServerSideProps error", error);
  }
}
export default CommunityPage;
