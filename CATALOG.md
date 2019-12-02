### 说明文档地址

```
https://juejin.im/post/59097cd7a22b9d0065fb61d2
```

### 项目目录
```
此处为项目目录结构和说明
```
### src
```

```

#### view和api
```
从方便维护方面来考虑 ==> 根据业务模块来划分 views，并且 将views 和 api 两个模块名一一对应.                
```

#### components
```
components 放置的都是全局公用的一些组件，如上传组件，富文本等等。一些页面级的子组件放在各自views文件下，方便管理。
```

#### store(不要为了用 vuex 而用 vuex)
```
假如两个模块互不相关的话，还是在独自的data中存储数据好些，但是例如登录token,用户信息，或者是一些全局个人偏好设置等，还是用vuex管理更加的方便，具体当然还是要结合自己的业务场景的。总之还是那句话，不要为了用vuex而用vuex！
```

#### alias(别名)


#### ESLint
```
不管是多人合作还是个人项目，代码规范是很重要的。这样做不仅可以很大程度地避免基本语法错误，也保证了代码的可读性。这所谓工欲善其事，必先利其器，个人推荐 eslint+vscode 来写 vue，绝对有种飞一般的感觉。
```

##### 第一步
```
安装eslint插件；
```

```
安装并配置完成 ESLint 后，我们继续回到 VSCode 进行扩展设置，依次点击 文件 > 首选项 > 设置 打开 VSCode 配置文件,添加如下配置
```

##### 第二步
```json
 "files.autoSave":"off",
    "eslint.validate": [
       "javascript",
       "javascriptreact",
       "html",
       { "language": "vue", "autoFix": true }
     ],
     "eslint.options": {
        "plugins": ["html"]
     }
```

```
这样每次保存的时候就可以根据根目录下.eslintrc.js你配置的eslint规则来检查和做一些简单的fix。这里提供了一份我平时的eslint规则地址，都简单写上了注释。每个人和团队都有自己的代码规范，统一就好了，去打造一份属于自己的eslint 规则上传到npm吧，如饿了么团队的 config，vue的 config。
```

#### webpack

```
自行查找
```



### 项目目录
```
│  .browserslistrc
│  .eslintrc.js
│  .gitignore
│  babel.config.js
│  contents.txt
│  package-lock.json
│  package.json
│  permission.js
│  postcss.config.js
│  README.md
│  role.md
│  vue.config.js
│  后台管理各个模块.txt
│  开发流程.txt
│
├─data
│  │  index.js
│  │
│  └─json
│          auth.json
│          role.json
│          role_edit.json
│          slider.json
│          user.json
│          user_verify.json
│
├─mock
│      index.js
│
├─public
│  │  favicon.ico
│  │  index.html
│  │
│  └─json
│          control.json
│          nav.json
│          role.json
│          userlist.json
│
├─src
│  │  App.vue
│  │  importElement.js
│  │  main.js
│  │  permission.js
│  │
│  ├─api
│  │      api-type.js
│  │      index.js
│  │      login.js
│  │      remote-search.js
│  │      role.js
│  │
│  ├─assets
│  │  │  base.css
│  │  │  base.js
│  │  │  global.less
│  │  │  logo.png
│  │  │
│  │  └─styles
│  ├─components
│  │  ├─base
│  │  ├─chart
│  │  ├─commodity
│  │  │      Head.vue
│  │  │
│  │  ├─common
│  │  │      InfiniteScroll.vue
│  │  │
│  │  ├─home
│  │  │      MainContent.vue
│  │  │      ManageNav.vue
│  │  │      Nav.vue
│  │  │
│  │  └─search
│  ├─filters
│  │      index.js
│  │
│  ├─icons
│  │  │  index.js
│  │  │  svgo.yml
│  │  │
│  │  └─svg
│  │
│  ├─layout
│  │  │  Footer.vue
│  │  │  Header.vue
│  │  │  Slider.vue
│  │  │
│  │  └─components
│  │          Theme.vue
│  │
│  ├─net
│  │      http.js
│  │      md5.js
│  │
│  ├─router
│  │  │  auth.js
│  │  │  index.js
│  │  │
│  │  └─modules
│  │          components.js
│  │
│  ├─service
│  │      cityCode.js
│  │      common.js
│  │      format.js
│  │      httpData.js
│  │      index.js
│  │      native.js
│  │
│  ├─static
│  │  │  role.js
│  │  │
│  │  ├─image
│  │  └─json
│  │          control.json
│  │          nav.json
│  │          role.json
│  │          userlist.json
│  │
│  ├─store
│  │  │  getters.js
│  │  │  index.js
│  │  │  mutation_types.js
│  │  │
│  │  └─modules
│  │          app.js
│  │          errorlog.js
│  │          permission.js
│  │          settings.js
│  │          tag.js
│  │          user.js
│  │
│  ├─styles
│  │      global.less
│  │      index.less
│  │      mixin.less
│  │
│  ├─test-net
│  │      test-http.js
│  │
│  ├─utils
│  │      auth.js
│  │      baseFunc.js
│  │      bus.js
│  │      calcu.js
│  │      error-log.js
│  │      flexible.js
│  │      index.js
│  │      tools.js
│  │      vconsole.js
│  │
│  └─views
│      │  404.vue
│      │  Index.vue
│      │  Login.vue
│      │  NoAuth.vue
│      │
│      ├─activity
│      │  │  ActivityApplet.vue
│      │  │  Bargain.vue
│      │  │  PennyBuy.vue
│      │  │
│      │  └─components
│      ├─commodity
│      │      Bidding.vue
│      │      Brand.vue
│      │      Classify.vue
│      │      Commodity.vue
│      │      Props.vue
│      │      Sku.vue
│      │      Stock.vue
│      │
│      ├─components-demo
│      │      Theme.vue
│      │
│      ├─news
│      │      NewsArticleManage.vue
│      │      NewsMessageManage.vue
│      │      NewsNoticeManage.vue
│      │      NewsUseHelp.vue
│      │
│      ├─operations
│      │      OperationsActivityPage.vue
│      │      OperationsApplet.vue
│      │      OperationsBanner.vue
│      │      OperationsHomeAdvertImg.vue
│      │      OperationsPrivilegeCardConfig.vue
│      │      OperationsRptShareActivity.vue
│      │      OperationsSearchWord.vue
│      │      OperationsSentiviteWord.vue
│      │      OperationsSetupClassify.vue
│      │      OperationsSigninConfig.vue
│      │      OperationsWaterfall.vue
│      │
│      ├─order
│      │      OrderBargainRecord.vue
│      │      OrderEvaluateList.vue
│      │      OrderHistory.vue
│      │      OrderPending.vue
│      │      OrderStatistic.vue
│      │
│      ├─reward
│      │      RewardManage.vue
│      │      RewardTaskManage.vue
│      │      RewardTopupManage.vue
│      │
│      ├─statistic
│      │      StatisticDirsirData.vue
│      │      StatisticGameData.vue
│      │      StatisticIncome.vue
│      │      StatisticOperatePoint.vue
│      │      StatisticUser.vue
│      │      StatisticUserAttr.vue
│      │
│      ├─system
│      │  │  index.vue
│      │  │
│      │  └─components
│      │          SystemAdministratorLimit.vue
│      │          SystemDispatchingSetup.vue
│      │          SystemInformManage.vue
│      │          SystemOpinionManage.vue
│      │          SystemOtherConfig.vue
│      │          SystemSetup.vue
│      │          SystemVersionManage.vue
│      │
│      └─user
│          │  index.vue
│          │
│          └─components
│                  UserBehaviorStatistics.vue
│                  UserCredit.vue
│                  UserGradeConfig.vue
│                  UserManage.vue
│                  UserPortrayal.vue
│                  UserSupplierManage.vue
│                  UserTeamGeneralize.vue
│
└─tests
    └─unit
            .eslintrc.js
            example.spec.js
```

### 项目目录结构说明

```
├── build                      // 构建相关  
├── config                     // 配置相关
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── assets                 // 主题 字体等静态资源
│   ├── components             // 全局公用组件
│   ├── directive              // 全局指令
│   ├── filtres                // 全局 filter
│   ├── icons                  // 项目所有 svg icons
│   ├── lang                   // 国际化 language
│   ├── mock                   // 项目mock 模拟数据
│   ├── router                 // 路由
│   ├── store                  // 全局 store管理
│   ├── styles                 // 全局样式
│   ├── utils                  // 全局公用方法
│   ├── vendor                 // 公用vendor
│   ├── views                   // view
│   ├── App.vue                // 入口页面
│   ├── main.js                // 入口 加载组件 初始化等
│   └── permission.js          // 权限管理
├── static                     // 第三方不打包资源
│   └── Tinymce                // 富文本
├── .babelrc                   // babel-loader 配置
├── eslintrc.js                // eslint 配置项
├── .gitignore                 // git 忽略项
├── favicon.ico                // favicon图标
├── index.html                 // html模板
└── package.json               // package.json

```
