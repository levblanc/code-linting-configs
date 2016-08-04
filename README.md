## Code Linting Congifs
---

### 文件夹结构
```bash
code-linting-configs
├── .editorconfig                   editorconfig插件配置文件
├── .es5.eslintrc                   eslint es5规范配置文件
├── .es6.eslintrc                   eslint es6规范配置文件
├── .eslintignore                   eslint忽略检测的配置文件
├── .lesshintrc                     lesshint配置文件
├── README.md                       项目说明文件（本文）
├── beautify_demo
│   ├── before.js                   格式不符合规范的js文件
│   └── before.less                 格式不符合规范的less文件
├── bin
│   ├── jsBeautify.js               js文件格式化执行文件
│   └── lessBeautify.js             less文件格式化执行文件
├── configs
│   ├── jsBeautify.config.json      js文件格式化配置
│   └── lessBeautify.config.json    less文件格式化配置
└── package.json                    npm说明文件
```

### .eslintrc
为了区分两个不同版本的配置文件，特意在文件名称中加上版本前缀。
实际使用中，直接在项目根目录下放置名为`.eslintrc`的配置文件即可。
npm运行的script中不需要再使用`--config` flag指定配置文件。


针对es5的eslint插件及依赖包版本如下，如果`eslint-plugin-react`使用6.0版本将会报错，无法检测。
- "eslint": "3.2.0",
- "eslint-config-airbnb-es5": "1.0.9",
- "eslint-plugin-react": "5.2.2",


### 格式化缩进不符合要求的文件的DEMO
在`beautify_demo`文件夹中，以`before`为文件名的，是不符合规范的文件。

执行`npm run jsformat`、`npm run lessformat`, 会生成以`after`为文件名的文件，是已经格式化好的。可以打开前后两个文件进行对比。

使用的格式化工具为[js-beautify](https://www.npmjs.com/package/js-beautify)。可以对HTML、CSS、JS文件进行格式化。

除了缩进以外，这个工具还可以对一些常用的规范进行格式化。可以设置的命令行及JSON配置说明[在此](https://www.npmjs.com/package/js-beautify#options)。


### js/less linting
注意：需在执行format命令后才进行检测。
因为lint命令配置的检测文件是format命令生成的。

`npm run jslint`: 执行对js代码的检测

`npm run lesslint`: 执行对less代码的检测


### .es5.eslintrc补充说明
在es5版本的配置中有两个设置，在此进行详细说明：

```javascript
// http://eslint.org/docs/rules/no-shadow
// 允许在作用域内重复使用'err'
"no-shadow": [2, { "allow": ["err"] }]

// 如果不进行设置，下面这段代码的'err'就会报错
var formatPiping = function (jsFile) {
    fs.readFile(jsFile, 'utf8', function (err, data) {
        if (err) throw err
        fs.writeFile(jsFile, jsBeautify(data, jsBeautifyConfig), 'utf8', function (err) {
            if (err) throw err
            console.log(jsFile + ' formated!')
        })
    })
}
```

```javascript
// http://eslint.org/docs/rules/new-cap
// 使用new关键字时，'webpackHtmlPlugin'不需要首字母大写
"new-cap": [2, { "newIsCapExceptions": ["webpackHtmlPlugin"] }]

// 如果不进行设置，下面的代码就会报错
new webpackHtmlPlugin()
```
