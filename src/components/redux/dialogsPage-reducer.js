const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
  dialog: [{
      id: 1,
      name: 'Masha',
      ava: 'https://kartinkin.net/uploads/posts/2022-02/1645799905_18-kartinkin-net-p-krasivie-kartinki-multyashnie-18.jpg'
    },
    {
      id: 2,
      name: 'Dasha',
      ava: 'https://uprostim.com/wp-content/uploads/2021/03/image018-95.jpg'
    },
    {
      id: 3,
      name: 'Sasha',
      ava: 'https://avatars.mds.yandex.net/i?id=684c731285521c8afd242625322a0317-4415285-images-thumbs&ref=rim&n=33&w=188&h=188'
    },
    {
      id: 4,
      name: 'Natasha',
      ava: 'https://avatars.mds.yandex.net/i?id=01215e9f15046affb565b00570bd8755-3750814-images-thumbs&ref=rim&n=33&w=188&h=188'
    },
    {
      id: 5,
      name: 'Lera',
      ava: 'https://yt3.ggpht.com/ytc/AKedOLT868CtkSR3R_GHkQnUy1tNtP1yHcNBFqqXtPrt=s900-c-k-c0x00ffffff-no-rj'
    },
    {
      id: 6,
      name: 'Anna',
      ava: 'https://i.pinimg.com/474x/45/a8/bd/45a8bd19ed3db5fd3305f198849c0b0d.jpg?nii=t'
    },
  ],

  messages: [{
      id: 1,
      message: 'Lorem ipsum dolor sit amet consectetur '
    },
    {
      id: 2,
      message: 'Adipisicing elit. O'
    },
    {
      id: 3,
      message: 'Omnis, distincti'
    },
    {
      id: 4,
      message: 'Natasha hi'
    },
    {
      id: 5,
      message: 'how are you'
    },
    {
      id: 6,
      message: 'i am fine'
    },
  ]
};

export const dialogsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, {id: 9, message: body}]
      };

    default:
      return state;
  }
}

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody
})

export default dialogsPageReducer