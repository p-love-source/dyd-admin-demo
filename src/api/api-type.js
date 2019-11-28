/**
 * 用户json数据
 * */ 
const login = {
    LOGIN_IN: "/userlist"
}

const jsonFile = ["userlist", "auth", "sliderlist", "test"];

export function getJsonFile (api) {
  jsonFile.map(val => {
    if (api == val) return `./data/${val}.json`;
  })
}