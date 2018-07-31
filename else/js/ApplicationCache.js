function getStatus() {
    var appCache = window.applicationCache;
    switch(appCache.status){
        case appCache.UNCACHED: //UNCACHED == 0，表示未缓存
            return 'UNCACHED';
            break;
        case appCache.IDLE://IDLE == 1,表示闲置
            return 'IDLE';
            break;
        case appCache.CHECKING://CHECKING == 2,表示检查中
            return 'CHECKING';
            break;
        case appCache.DOWNLOADING://DOWNLOADING == 3，表示下载中
            return 'DOWNLOADING';
            break;
        case appCache.UPDATEREADY:
            return 'UPDATEREADY';//UPDATEREADY == 4,表示已更新
            break;
        case appCache.OBSOLETE://OBSOLETE == 5，表示已更新
            return 'OBSOLETE';
            break;
        default:
            return 'UKNOWN CACHE STATUS';
            break;
    }
}