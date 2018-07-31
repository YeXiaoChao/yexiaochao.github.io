if(navigator.serviceWorker){
    navigator.serviceWorker.register('./service-worker.js').then(function (registration) {
        console.log('service worker 注册成功');
    }).catch(function (err) {
        console.log('service worker 注册失败');
    });
}
// service-worker.js
var cacheList = [
    'main,js',
    'main.css'
];

//这样就将缓存的文件列表注册到 CacheStorage 里面了，浏览器端 使用 caches 全局变量 caches 来管理
this.addEventListener('install',function (event) {
    //添加 cacheStorage 缓存
    event.waitUntil(
        caches.open('my-page-cache').then(function (cache) {
            return caches.addAll(cacheList);
        })
    )
});

this.addEventListener('fetch',function (event) {
    event.respondWith(caches.match(event.request).then(function (response) {
        //如果有线上返回内容
        if(response){
            return response;
        }
        var responseToCache = response.clone();
        //否则读取缓存里面的响应返回
        caches.open('my-page-cache').then(function (cache) {
            cache.put(event.request,responseToCache);
        })
    }))
})