//openDatabase() 方法可以打开已经存在的数据库，不存在则创建
//let db = openDatabase('mydatabase','1.0','test table',2*1024*1024);
//let name = [2,'ouven'];
//db.transaction(function (table) {
    //table.executeSql('CREATE TABLE IF NOT EXISTS t1 (id unique,msg)');
    //table.executeSql('INSERT INTO t1(id,msg) VALUES(1,"hello")');
    //table.executeSql('INSERT INTO t1(id,msg) VALUES(?,?) ',name);
//})
//transaction(); //transaction() 这个方法允许我们根据情况控制执行事务提交或回滚
//executeSql(); //executeSql() 用于执行真实的SQL 查询语句