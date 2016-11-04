setHtmlFont ();
listenEventForPagesChange();




/*翻页函数*/
function listenEventForPagesChange() {
    var pagesBox = document.querySelector('#js-pagesbox');
    toFlip(pagesBox);
}

function toFlip(tirgger){
    tirgger.addEventListener('touchstart',getTouchClienx);
    tirgger.addEventListener('touchmove',getTouchClienx);
    tirgger.addEventListener('touchend',flip);
}

function getTouchClienx(event){
    event.preventDefault();
    var eventName = event.type + 'ClientX';
    event = event.targetTouches[0];
    this[eventName] = event.clientX;
}


function flip(){

    if(!this.dataset.flipspeed){
        console.log('html的绑定节点没有指定data-flipSpeed属性');
        return;
    }

    var _self = this,
        distance = countDistance(_self),
        direction = distance > 0 ? -1 : 1,
        inTheEnd = ifReachTheEnd(_self,direction),
        speed = parseFloat(_self.dataset.flipspeed),
        company = _self.dataset.speedcompany,
        pageNumber = parseInt(_self.dataset.activepage),
        nextPage = pageNumber - direction;



    if(!inTheEnd && Math.abs(distance) > 30) {
        _self.style['webkitTransform'] = 'translate3d(' + (1 - nextPage) * speed + company + ',0,0)';
        _self.dataset.activepage = pageNumber - direction;
    } else {
        return;
    }

}

function countDistance(outbox){
    var distance = outbox.touchstartClientX - outbox.touchmoveClientX;
    return distance ;
}

function ifReachTheEnd(outbox,direction) {
    if(!outbox.pagesCount) {
        outbox.pagesCount = outbox.querySelectorAll('.js-page-item').length;
    }
    var pagesAmount = parseInt(outbox.pagesCount),
        activePage = parseInt(outbox.dataset.activepage);

    if(activePage == pagesAmount && direction == -1){
        return true;
    }
    if(activePage == 1 && direction == 1) {
        return true;
    }

    return false;
}
/*end*/

/*设置根元素字体大小*/
function setHtmlFont () {
    var html = document.documentElement,
        deviceWidth = html.clientWidth > 1300 ? 1300 : html.clientWidth;

    html.style.fontSize = (deviceWidth / 7.5) + 'px';
}
/*end*/
