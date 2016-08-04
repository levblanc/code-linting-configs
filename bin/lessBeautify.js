var fs = require('fs')
var path = require('path')
// ===========================================
// 在项目中使用，需要安装对应插件
var glob = require('glob')
var lessBeautify = require('js-beautify').css
var lessBeautifyConfig = require('../configs/lessBeautify.config.json')
// ===========================================

// 项目根目录
var DIR_ROOT = path.resolve(__dirname, '../')
// less文件匹配路径
var lessGlob = path.resolve(DIR_ROOT, 'beautify_demo/*.less')

/**
 * 查找出所有匹配指定路径的文件，并对其格式化
 * @param  {string} sourceFolderName 目标文件夹名称
 * @param  {string} globPattern      匹配文件路径的pattern
 */
var formatTargetFiles = function (sourceFolderName, globPattern) {
    /**
     * 读取单个文件并格式化
     * @param  {string} lessFile 单个less文件路径
     */
    var formatPiping = function (lessFile) {
        var destFilePath = lessFile.replace('before', 'after')

        fs.readFile(lessFile, 'utf8', function (err, data) {
            if (err) throw err
            // 在项目中真正使用，直接写入到源文件，即lessFile，即可
            fs.writeFile(destFilePath, lessBeautify(data, lessBeautifyConfig), 'utf8', function (err) {
                if (err) throw err
                console.log(lessFile + ' formated!')
            })
        })
    }
    // 匹配指定路径找出所有目标文件
    glob(globPattern, function (err, targetFiles) {
        if (err) throw err
        console.log('====== ' + sourceFolderName + '文件夹中共有 ' + targetFiles.length + ' 个less文件 ======')
        targetFiles.forEach(function (lessFile) {
            formatPiping(lessFile)
        })
    })
}

formatTargetFiles('beautify_demo', lessGlob)
