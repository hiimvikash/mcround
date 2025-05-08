export const data = [
  {
    id: "f4a9h2k1",
    name: "Vikash Gupta",
    text: "Nice Video, need more such content, please make videos on useEffect",
    replies: [
      {
        id: "c92fa4wq",
        name: "Akash Randhawa",
        text: "You're truee, I vote too.",
        replies: [
          {
            id: "j21sld89",
            name: "Naina Kapoor",
            text: "Same here, useEffect confuses me every time.",
            replies: [
              {
                id: "wqr9u14x",
                name: "Harsh Yadav",
                text: "Don’t worry, it gets better once you understand the dependency array.",
                replies: [
                  {
                    id: "qx8fl39d",
                    name: "Naina Kapoor",
                    text: "True, I always forget the cleanup part 😅",
                    replies: []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "n3xdl7mz",
        name: "Riya Kapoor",
        text: "useEffect can be confusing, a deep dive video would help a lot!",
        replies: []
      }
    ]
  },
  {
    id: "v97smd2z",
    name: "Ashish Gupta",
    text: "Thankyou so much for the detailed explanation",
    replies: [
      {
        id: "b09gklq5",
        name: "Suman Kumari",
        text: "You're false, he can teach better too, this was just a trailer",
        replies: [
          {
            id: "l0f8x9wy",
            name: "Alok Jha",
            text: "Aree aree, you guys are fighting",
            replies: [
              {
                id: "ztc83hkw",
                name: "Anupmam Mishra",
                text: "Yes they're fighting, you too want some punches",
                replies: [
                  {
                    id: "f92mj0el",
                    name: "Nikita Singh",
                    text: "🤣 This comment section is more entertaining than the video!",
                    replies: [
                      {
                        id: "hx91cs5r",
                        name: "Ravi Prasad",
                        text: "😂 Agreed. I stayed for the comments!",
                        replies: []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "m8zkdq34",
        name: "Kajal Singh",
        text: "I think both are right in their own way. Let’s appreciate the effort 🙌",
        replies: []
      }
    ]
  },
  {
    id: "r1xcz0k3",
    name: "Dev Sharma",
    text: "This was really helpful for my interview prep, thanks a ton!",
    replies: [
      {
        id: "kb0upg5n",
        name: "Rajat Mehta",
        text: "Same here, I took notes while watching!",
        replies: [
          {
            id: "o84nrc7d",
            name: "Tanisha Gupta",
            text: "Can you share those notes somewhere?",
            replies: [
              {
                id: "pd7qwh91",
                name: "Rajat Mehta",
                text: "Sure! I'll upload them to GitHub later today.",
                replies: [
                  {
                    id: "u9vxslmg",
                    name: "Tanisha Gupta",
                    text: "Thanks a lot! That’ll be super helpful 😊",
                    replies: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "j93cz1me",
    name: "Preeti Verma",
    text: "Loved the way you explained with real-world examples.",
    replies: [
      {
        id: "v92kq4ef",
        name: "Ankit Chauhan",
        text: "Yeah! Visuals were super clean too.",
        replies: [
          {
            id: "c72uylg1",
            name: "Preeti Verma",
            text: "Exactly, better than many paid courses!",
            replies: []
          }
        ]
      }
    ]
  },
  {
    id: "a93qmeu8",
    name: "Ramesh Yadav",
    text: "At 13:45, you explained dependencies perfectly, thank you 🙏",
    replies: [
      {
        id: "y9pzm1vt",
        name: "Devika Sharma",
        text: "OMG, yes! That example finally made things click for me.",
        replies: [
          {
            id: "q06vteys",
            name: "Ramesh Yadav",
            text: "Glad to hear that! Learning together is the best.",
            replies: []
          }
        ]
      }
    ]
  },
  {
    id: "n4whgkxp",
    name: "Tarun Kumar",
    text: "Can someone explain why useEffect runs twice in strict mode?",
    replies: [
      {
        id: "dxk8qvt1",
        name: "Poonam Jha",
        text: "It’s because React simulates mount-unmount-remount to detect bugs.",
        replies: [
          {
            id: "mkt32nle",
            name: "Tarun Kumar",
            text: "Oh! That makes sense. Thanks 🙏",
            replies: []
          }
        ]
      }
    ]
  }
];

export const generateRandomid = ()=> Math.random().toString(36).slice(2, 10);
