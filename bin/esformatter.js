import esformatter from 'esformatter'
import fs from 'fs'
import path from 'path'
import glob from 'glob'
import esformatterConfig from '../configs/esformatter.config'

// 项目根目录
const DIR_ROOT = path.resolve(__dirname, '../')
// js文件匹配路径
const jsGlob = path.resolve(DIR_ROOT, 'esformatter_demo/before.es6.js')

/**
 * 查找出所有匹配指定路径的文件，并对其格式化
 * @param  {string} sourceFolderName 目标文件夹名称
 * @param  {string} globPattern      匹配文件路径的pattern
 */
const formatTargetFiles = (sourceFolderName, globPattern) => {
    /**
     * 读取单个文件并格式化
     * @param  {string} jsFile 单个js文件路径
     */
    const formatPiping = (jsFile) => {
        var destFilePath = jsFile.replace('before', 'after')

        fs.readFile(jsFile, 'utf8', (err, data) => {
            if (err) {
                throw err
            }
            // 在项目中真正使用，直接写入到源文件，即jsFile，即可
            fs.writeFile(destFilePath, esformatter.format(data, esformatterConfig), 'utf8', (err) => {
                if (err) {
                    throw err
                }
                console.log(`${jsFile} formated!`)
            })
        })
    }
    // 匹配指定路径找出所有目标文件
    glob(globPattern, (err, targetFiles) => {
        if (err) {
            throw err
        }
        console.log(`====== ${sourceFolderName} 文件夹中共有 ${targetFiles.length} 个js文件 ======`)
        targetFiles.forEach((jsFile) => {
            formatPiping(jsFile)
        })
    })
}

formatTargetFiles('esformatter_demo', jsGlob)
