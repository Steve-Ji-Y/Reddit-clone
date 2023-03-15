// Option 1
const COMMUNITY = {
  id: "commId",
  users: ["user1", "user2", ".....", "user123456789"],
};

const USER = {
  id: "userId",
  communities: ["comm1", "comm2"],
};

// Option 2  SQL appraoch
const USER_COMMUNITY = {
  userId: "userId1",
  communityId: "commId",
};

// Option 3: Best Appraoch
const User = {
  id: "userId",
  communitySnippets: [
    { communityId: "commId1" },
    { communityId: "commId2" },
    { communityId: "commId3" },
  ],
};

const Community = {
  id: "commId",
  numberOfUsers: "123456789",
};
