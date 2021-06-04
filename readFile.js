const fs = require('fs')
const path = require('path')

//node方式读取文件
/*fs.readFile(path.join(__dirname, './1.txt'), 'utf-8', (err, dataStr) => {
    if (err) throw err
    console.log(dataStr)
});*/


//使用promise实现读取文件的异步操作
function getFileByPath(path){
    var promise = new Promise(function (resolve, reject) {
        //这是一个异步操作，子线程处理，当调用getFileByPath方法时，可能该操作还未执行完成
        fs.readFile(path, 'utf-8', (err, data) => {
            //如果报错 直接return出去 不往下执行 （其实是先执行reject函数再return的）
            if(err) return reject(err)
            //成功则调用resolve
            resolve(data)
        });
    })

    return promise;
}

//调用方法
var p = getFileByPath(path.join(__dirname,'./11.txt'))
p.then(function (data) {
    console.log(`-----成功-----${data}`)
}).catch(function (err) {
    console.log(`异常处理：${err}`)
})

console.log('OKOK')
