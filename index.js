var btnLeft = document.querySelector('.btn1');
var btnRight = document.querySelector('.btn2');
var list = document.querySelector('.content ul');
var links = document.querySelectorAll('.control a');
var control = document.querySelector('.control');
var index = 0;

btnRight.onclick = function() {
    links[index].className = '';
    index++;
    if (index > 5) {
        index = 5;
    }
    var v = index * -400;//当前值0 目标值-400
    move(list,v);
    // clearInterval(list.num);
    // list.num = setInterval(function() {
    //     var x = list.offsetLeft;
    //     if (x == v) {
    //         clearInterval(list.num);
    //         return;
    //     }
    //     var speed = (v - x ) / 2;
    //     //v 是目标值 x 是当前值
    //     if (v - x > 0) {
    //         speed = Math.ceil(speed);
    //     } else if (v - x < 0 ) {
    //         speed = Math.floor(speed);
    //     }
    //     list.style.left = x + speed +'px';
    // },10);
    links[index].className = 'active';
}

btnLeft.onclick = function() {
    links[index].className = '';
    index--;
    if (index < 0 ) {
        index = 0
    }
    var v = index * -400;//当前为-2000，目标值为-1600 
    move(list,v);

    // clearInterval(list.num);
    // list.num = setInterval(function() {
    //     var x = list.offsetLeft;
    //     if (x == v) {
    //         clearInterval(list.num);
    //         return;
    //     }
    //         var speed = (v - x) / 2;
    //         if (v - x > 0) {
    //             speed = Math.ceil(speed);
    //         } else if (v - x < 0) {
    //             speed = Math.floor(speed);
    //         }
    //         list.style.left = x + speed +'px';
    // },10);
    links[index].className = 'active';
}

for (var i = 0;i < links.length; i++) {
    links[i].num = i;
}
control.onmousemove = function(e) {
    var t = e.target;
    if (t.nodeName == 'A') {
        links[index].className = '';
        index = t.num;
        var v  = index * -400;
        move(list,v);
        links[index].className = 'active';
    }
};


function move (element,targetValue) {
    clearInterval(element.num);
    element.num = setInterval(function() {
        var x = element.offsetLeft;
        if (x == targetValue) {
            clearInterval(element.num);
            return;
        }
            var speed = (targetValue - x) / 2;
            if (targetValue - x > 0) {
                speed = Math.ceil(speed);
            } else if (targetValue - x < 0) {
                speed = Math.floor(speed);
            }
            element.style.left = x + speed +'px';
    },10);
}