import sidebarReducer from "./sidebar-reducer";
import mainContentReducer from "./mainContentPage-reducer";
import dialogsPageReducer from "./dialogsPage-reducer";


let store = {
  _state: {
    dialogsPage: {
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
      ],
      newMessageBody: ""
    },

    sidebar: [{
        name: 'Sveta',
        img: 'https://www.ejin.ru/wp-content/uploads/2018/11/avatarki_dlya_devushek_4_19105932.jpg'
      },
      {
        name: 'Andrew',
        img: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg'
      },
      {
        name: 'Sergei',
        img: 'https://uprostim.com/wp-content/uploads/2021/03/image157-25.jpg'
      },
    ],
    mainContentPage: {
      postData: [{
          id: 1,
          message: 'Hi, how are you',
          likesCount: 12,
          img: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg'
        },
        {
          id: 2,
          message: 'It\'s my first post',
          likesCount: 3,
          img: 'https://kartiny-po-nomeram.ru/assets/images/catalog/12648/ag004.jpg'
        },
        {
          id: 3,
          message: 'Yoeg',
          likesCount: 8,
          img: 'https://drasler.ru/wp-content/uploads/2019/05/%D0%A1%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D1%84%D0%BE%D1%82%D0%BE-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D1%81-%D0%BA%D0%BE%D1%82%D0%B0%D0%BC%D0%B8-%D0%B2-%D0%92%D0%9A-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BE%D0%BA-30.jpg'
        },
        {
          id: 4,
          message: 'srbnng',
          likesCount: 8,
          img: 'https://drasler.ru/wp-content/uploads/2019/05/%D0%A1%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D1%84%D0%BE%D1%82%D0%BE-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D1%81-%D0%BA%D0%BE%D1%82%D0%B0%D0%BC%D0%B8-%D0%B2-%D0%92%D0%9A-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BE%D0%BA-30.jpg'
        },
        {
          id: 5,
          message: 'LKGCjgv',
          likesCount: 8,
          img: 'https://drasler.ru/wp-content/uploads/2019/05/%D0%A1%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D1%84%D0%BE%D1%82%D0%BE-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D1%81-%D0%BA%D0%BE%D1%82%D0%B0%D0%BC%D0%B8-%D0%B2-%D0%92%D0%9A-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BE%D0%BA-30.jpg'
        },
        {
          id: 6,
          message: 'JTcxjhk',
          likesCount: 8,
          img: 'https://drasler.ru/wp-content/uploads/2019/05/%D0%A1%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D1%84%D0%BE%D1%82%D0%BE-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D1%81-%D0%BA%D0%BE%D1%82%D0%B0%D0%BC%D0%B8-%D0%B2-%D0%92%D0%9A-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BE%D0%BA-30.jpg'
        },
      ],
      newPostText: 'It-ka'
    }
  },
  _callsubscriber() {
    console.log('state changed');
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callsubscriber = observer;
  },
  dispatch(action) { // {type: 'ADD-POST'}

    this._state.mainContentPage = mainContentReducer(this._state.mainContentPage, action)
    this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callsubscriber(this._state);
  }
}

export default store;
window.store = store;