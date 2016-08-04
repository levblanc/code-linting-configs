var fs = require('fs')
var path = require('path')
// ===========================================
// 在项目中使用，需要安装对应插件
var glob = require('glob')
var jsBeautify = require('js-beautify').js
var jsBeautifyConfig = require('../configs/jsBeautify.config.json')
// ===========================================

// 项目根目录
var DIR_ROOT = path.resolve(__dirname, '../')
// js文件匹配路径
var jsGlob = path.resolve(DIR_ROOT, 'beautify_demo/*.js')

/**
 * 查找出所有匹配指定路径的文件，并对其格式化
 * @param  {string} sourceFolderName 目标文件夹名称
 * @param  {string} globPattern      匹配文件路径的pattern
 */
var formatTargetFiles = function (sourceFolderName, globPattern) {
    /**
     * 读取单个文件并格式化
     * @param  {string} jsFile 单个js文件路径
     */
    var formatPiping = function (jsFile) {
        var destFilePath = jsFile.replace('before', 'after')

        fs.readFile(jsFile, 'utf8', function (err, data) {
            if (err) throw err
            // 在项目中真正使用，直接写入到源文件，即jsFile，即可
            fs.writeFile(destFilePath, jsBeautify(data, jsBeautifyConfig), 'utf8', function (err) {
                if (err) throw err
                console.log(jsFile + ' formated!')
            })
        })
    }
    // 匹配指定路径找出所有目标文件
    glob(globPattern, function (err, targetFiles) {
        if (err) throw err
        console.log('====== ' + sourceFolderName + '文件夹中共有 ' + targetFiles.length + ' 个js文件 ======')
        targetFiles.forEach(function (jsFile) {
            formatPiping(jsFile)
        })
    })
}

formatTargetFiles('beautify_demo', jsGlob)
