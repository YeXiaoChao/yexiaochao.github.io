var ox = document.createElement('div'); // X 轴线
var oy = document.createElement('div'); // Y 轴线
ox.style.width = '100%';
ox.style.height = '1px';
ox.style.backgroundColor = '#ddd';
ox.style.position = 'fixed';
ox.style.left = 0;
document.body.appendChild(ox);
oy.style.height = '100%';
oy.style.width = '1px';
oy.style.backgroundColor = '#ddd';
oy.style.position = 'fixed';
oy.style.top = 0;
document.body.appendChild(oy);
document.onmousemove = function(e) {
    var e = e || event;
    var x = e.pageX;
    var y = e.pageY;
    ox.style.top = y + 'px';
    oy.style.left = x + 'px';
    document.getElementById('content').innerHTML = 'x : ' + x + '<br />y : ' + y;
};