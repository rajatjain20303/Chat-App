const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: "Arpit Maheshwary",
        email: "Arpit@example.com",
      },
      {
        name: "Rajat",
        email: "Rajat@example.com",
      },
    ],
    _id: "617a077e18c25468bc7c4dd4",
    chatName: "Arpit Maheshwary",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Guest User",
        email: "guest@example.com",
      },
      {
        name: "Rajat",
        email: "Rajat@example.com",
      },
    ],
    _id: "617a077e18c25468b27c4dd4",
    chatName: "Guest User",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Kapil",
        email: "Kapil@example.com",
      },
      {
        name: "Rajat",
        email: "Rajat@example.com",
      },
    ],
    _id: "617a077e18c2d468bc7c4dd4",
    chatName: "Kapil",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Arpit Maheshwary",
        email: "jon@example.com",
      },
      {
        name: "Rajat",
        email: "Rajat@example.com",
      },
      {
        name: "Guest User",
        email: "guest@example.com",
      },
    ],
    _id: "617a518c4081150716472c78",
    chatName: "Friends",
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Sanyam Jain",
        email: "Sanyam@example.com",
      },
      {
        name: "Rajat",
        email: "Rajat@example.com",
      },
    ],
    _id: "617a077e18c25468bc7cfdd4",
    chatName: "Sanyam Jain",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Kapil",
        email: "kapil@example.com",
      },
      {
        name: "Rajat",
        email: "Rajat@example.com",
      },
      {
        name: "Sanyam Jain",
        email: "Sanyam@example.com",
      },
    ],
    _id: "617a518c4081150016472c78",
    chatName: "Chill Zone",
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
];

module.exports={chats}