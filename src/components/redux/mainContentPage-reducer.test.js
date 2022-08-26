import mainContentReducer, { addPostActionCreator, delPostActionCreator } from "./mainContentPage-reducer"
let state ={
  postData : [{
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
]
}
it ('profile reducer add', () =>{

  let action = addPostActionCreator ('meeeee')
  
  let newState = mainContentReducer(state, action)

  expect(newState.postData.length).toBe(7)
}) 
it ('profile reducer del', () =>{

  let action = delPostActionCreator(1)
  
  let newState = mainContentReducer(state, action)

  expect(newState.postData[0].message).toBe('It\'s my first post')
}) 