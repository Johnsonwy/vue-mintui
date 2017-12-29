/*
 * @Author: shixinghao 
 * @Date: 2017-12-25 16:07:28 
 * @Last Modified by: shixinghao
 * @Last Modified time: 2017-12-27 16:08:17
 */
module.exports = {
    dev: {
        assetsPublicPath: '/',
        host: '0.0.0.0',
        port: 4200,
        proxyTable: {
            '/**/*.api': "http://192.168.1.65:8090",
            '/**/*.cms': "http://121.40.156.197:8081"
        }
    }
}