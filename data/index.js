// // 导入所有的json文件

// const reqJson = require.context("./json", false, /\.json$/);
// // console.log(reqJson);

// const requireAll = requireContext => requireContext.keys().map(requireContext)

// export default requireAll(reqJson);

const jsonNames = ["user", "user_verify", "role", "role_edit", "auth", "slider"];

const user = require("./json/user.json");
const user_verify = require("./json/user_verify.json");
const role = require("./json/role.json");
const role_edit = require("./json/role_edit.json");
const auth = require("./json/auth.json");
const slider = require("./json/slider.json");

const userFunc = (app) => app.get("/user", (req, res) => {
    res.json(user);
})

const userVerifyFunc = (app) => app.get("/user_verify", (req, res) => {
    res.json(user_verify);
})

const roleFunc = (app) => app.get("/role", (req, res) => {
    res.json(role);
})

const roleEditFunc = (app) => app.get("/role_edit", (req, res) => {
    res.json(role_edit);
})

const authFunc = (app) => app.get("/auth", (req, res) => {
    res.json(auth);
})

const sliderFunc = (app) => app.get("/slider", (req, res) => {
    res.json(slider);
})

function reqFunc(app) {
    userFunc(app);
    userVerifyFunc(app);
    roleFunc(app);
    roleEditFunc(app);
    authFunc(app);
    sliderFunc(app);
}


module.exports = reqFunc;
