/**
 * Created by Administrator on 2018/9/18.
 */
window.onload=function () {

    var liNodes=document.querySelectorAll('#wrap #header .headerMain .nav li');
    var liNodesUpNode=document.querySelectorAll('#wrap #header .headerMain .nav li .up');
    var content=document.getElementById('content');
    var header=document.querySelector('#wrap #header');
    var arrowNode=document.querySelector('#wrap #header .headerMain .arrow');
    var screen=document.querySelector('#wrap #content .screen');
    var asidNodes=document.querySelectorAll('#wrap #content .screen li .circleAsid li');
    var circleNodes=document.querySelectorAll('#wrap #content .screen .circle>li');
    var bannerNodes=document.querySelectorAll('#wrap #content .bannerWrap .banner');
    var homeUlNode=document.querySelector('#wrap #content .bannerWrap');
    var finalLiNodes=document.querySelectorAll('#wrap #content .screenFive .wrapFive .team_lists li');
    var finalUlNode=document.querySelector('#wrap #content .screenFive .wrapFive .team_lists');
    var music=document.querySelector('.music');
    var audio=document.querySelector('.music audio');
    var planeNodes = document.querySelectorAll('.plane1,.plane2,.plane3');
    var pencelNodes = document.querySelectorAll('.pencel1,.pencel2,.pencel3');
    var boxImg=document.querySelector('.boxImg');
    var boxImg1=document.querySelector('.boxImg1');
    var title=document.querySelector('#wrap #content .screenFive .wrapFive .top .title');
    var text=document.querySelector('.text');
    // console.log(boxImg);




    var bannerWrap=document.querySelector('.bannerWrap');


    var timer1=null;
    var timer2=null;

    var lastIndex=0;
    var nowIndex=0;
    var timer=null;
    var lastTime=0;
    var asidIndex=0;



    //music

    music.onclick=function () {
        if(audio.paused){
            audio.play();
            this.style.backgroundImage = 'url("img/musicon.gif")';
        }else{
            audio.pause();
            this.style.backgroundImage = 'url("img/musicoff.gif")';
        }


    }

    audio.play();
    audio.muted=false;


    //    小三角

    arrowNode.style.left=liNodes[0].getBoundingClientRect().left+liNodes[0].offsetWidth/2-arrowNode.offsetWidth/2+'px';


    //头部区


    liNodesUpNode[0].style.width='100%';
    for(var i=0; i<liNodes.length;i++){
        liNodes[i].index=i;
        liNodes[i].onclick=function () {
            for(var j=0; j<liNodesUpNode.length;j++){
                liNodesUpNode[j].style.width='';
            }
            liNodesUpNode[this.index].style.width='100%';
            //点击小三角动
            arrowNode.style.left=liNodes[this.index].getBoundingClientRect().left+liNodes[this.index].offsetWidth/2-arrowNode.offsetWidth/2+'px';

        //    点击切换屏幕上下
            screen.style.top=-this.index*content.offsetHeight+'px';


            for(var k=0;k<asidNodes.length;k++){
                asidNodes[k].className='';
            }
            this.className='active';

            for(var j=0; j<asidNodes.length;j++){
                asidNodes[j].className='';

            }
            asidNodes[this.index].className='active';



            for(var k=0;k<aniArr.length;k++){
                aniArr[k].anOut();
            }
            aniArr[this.index].anIn();

            asidIndex=this.index;
            this.num=this.index;

        }
    }

    var headerHeight=header.offsetHeight;


    //内容区高度等于屏幕高度-头部高度
   var contentHeight= document.documentElement.clientHeight-headerHeight;


    var styleNode=document.createElement('style');
    styleNode.innerHTML='#content{height:'+ contentHeight+'px}';
    document.head.appendChild(styleNode);

var wheelTimer=null;

//滚轮事件
    document.onmousewheel=wheel;
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', wheel);
    }

    function wheel(event) {
        event = event || window.event;
        clearTimeout(wheelTimer);
        wheelTimer= setTimeout(function () {
            var flag = '';
            if (event.wheelDelta) {
                //ie/chrome
                if (event.wheelDelta > 0) {
                    flag = 'up';
                } else {
                    flag = 'down'
                }
            } else if (event.detail) {
                //firefox
                if (event.detail < 0) {
                    flag = 'up';
                } else {
                    flag = 'down'
                }
            }

            switch (flag) {
                case 'up' :
                    if(asidIndex>0){
                        asidIndex--;
                        asidNodes[asidIndex].className='active';
                        asidNodes[asidIndex+1].className='';
                        screen.style.top=-asidIndex*content.offsetHeight+'px';
                        arrowNode.style.left=liNodes[asidIndex].getBoundingClientRect().left+liNodes[asidIndex].offsetWidth/2-arrowNode.offsetWidth/2+'px';
                        liNodesUpNode[asidIndex].style.width='100%';
                        liNodesUpNode[asidIndex+1].style.width=0;


                        asidNodes[asidIndex+1].className='';

                        asidNodes[asidIndex].className='active';


                        aniArr[asidIndex].anIn();

                        aniArr[asidIndex+1].anOut();

                        this.num=asidIndex;



                    }
                    break;
                case 'down' :

                    if(asidIndex<5){
                        asidIndex++;
                        asidNodes[asidIndex].className='active';
                        asidNodes[asidIndex-1].className='';
                        screen.style.top=-asidIndex*content.offsetHeight+'px';
                        arrowNode.style.left=liNodes[asidIndex].getBoundingClientRect().left+liNodes[asidIndex].offsetWidth/2-arrowNode.offsetWidth/2+'px';
                        liNodesUpNode[asidIndex].style.width='100%';
                        liNodesUpNode[asidIndex-1].style.width=0;


                        asidNodes[asidIndex-1].className='';

                        asidNodes[asidIndex].className='active';

                        aniArr[asidIndex-1].anOut();
                        aniArr[asidIndex].anIn();

                        this.num=asidIndex;
                    }
                    break;
            }
        },200);

        //禁止默认行为
        event.preventDefault && event.preventDefault();
        return false;
    }

    for(var i=0; i<asidNodes.length;i++){
        asidNodes[i].num=i;
        asidNodes[i].onclick=function () {
            for(var j=0;j<asidNodes.length;j++){
                asidNodes[j].className='';
            }

            this.className='active';


            screen.style.top=-this.num*content.offsetHeight+'px';
            for(var j=0; j<liNodesUpNode.length;j++){
                liNodesUpNode[j].style.width='';
            }
            liNodesUpNode[this.num].style.width='100%';



            for(var k=0;k<aniArr.length;k++){
                aniArr[k].anOut();
            }
            aniArr[this.num].anIn();

            arrowNode.style.left=liNodes[this.num].getBoundingClientRect().left+liNodes[this.num].offsetWidth/2-arrowNode.offsetWidth/2+'px';

            asidIndex=this.num;
            this.index=this.num;
        }


    }


    window.onresize=function () {
        arrowNode.style.left=liNodes[nowIndex].getBoundingClientRect().left+liNodes[nowIndex].offsetWidth/2-arrowNode.offsetWidth/2+'px';
    };

//    轮播图
    for(var i=0;i<circleNodes.length;i++){
        circleNodes[i].index=i;

        circleNodes[i].onclick=function() {

            var nowTime = Date.now();

            if (nowTime - lastTime < 2100) {
                //说明两次点击间隔时间少于两秒
                return;
            }
            lastTime = nowTime;

            nowIndex = this.index;

            if(nowIndex===lastIndex) return;

           clearInterval(timer);

            for (var j = 0; j < bannerNodes.length; j++) {
                bannerNodes[j].className = 'banner';

            }

            if(nowIndex>lastIndex){
                bannerNodes[nowIndex].className='banner rightShow';
                bannerNodes[lastIndex].className='banner leftHide';
            }else{
                bannerNodes[nowIndex].className='banner leftShow';
                bannerNodes[lastIndex].className='banner rightHide';
            }
            circleNodes[lastIndex].className = '';
            circleNodes[nowIndex].className = 'active';

            lastIndex = nowIndex;



            autoPlay();
        }
    }

    autoPlay();
    function autoPlay() {
        timer=setInterval(function () {
            nowTime=Date.now();
            if (nowTime - lastTime < 2100) {
                //说明两次点击间隔时间少于两秒
                return;
            }
            lastTime = nowTime;

            nowIndex++;
            if(nowIndex===4){
                nowIndex=0;
            }
            bannerNodes[nowIndex].className='banner rightShow';
            bannerNodes[lastIndex].className='banner leftHide';

            circleNodes[lastIndex].className = '';
            circleNodes[nowIndex].className = 'active';

            lastIndex=nowIndex;



        },2500);
    }
//鼠标移入移出事件
    homeUlNode.onmouseenter = function () {
        clearInterval(timer);

    };
    homeUlNode.onmouseleave = autoPlay;


    var canvas=null;

    for(var i=0; i<finalLiNodes.length;i++){
        finalLiNodes[i].index=i;
        finalLiNodes[i].onmouseenter=function () {
            for(var j=0;j<finalLiNodes.length;j++){
                finalLiNodes[j].style.opacity='0.5';
            }
            this.style.opacity='1';

            addCanvas(this.index);
            
        };
    }


    //给ul绑定鼠标移出事件
    finalUlNode.onmouseleave = function () {
        //将所有li透明度改为1
        for (var j = 0; j < finalLiNodes.length; j++) {
            finalLiNodes[j].style.opacity = 1;
        }
        //清除画布
        canvas.remove();
        canvas = null; //为了让下一次能产生新的画布
        //清除定时器
        clearInterval(timer1);
        clearInterval(timer2);
    }



    function addCanvas(index) {
        /*
         如果之前没有，我要新创建一个
         如果之前有，使用之前的，改变位置left
         */
        if (!canvas) {
            //创建canvas
            canvas = document.createElement('canvas');
            //设置宽度和高度
            canvas.width = 236;
            canvas.height = 448;

            canvas.style.position = 'absolute';
            canvas.style.left = index * 236 + 'px';
            //产生气泡运动
            bubble();
            //添加到ul中
            finalUlNode.appendChild(canvas);
        } else {
            canvas.style.left = index * 236 + 'px';
        }
    }
    
    
    function bubble() {
        if (canvas.getContext) {

            var ctx = canvas.getContext('2d');

            var circleArr = [];

           timer1=setInterval(function () {

                var r = Math.round(Math.random() * 255);

                var g = Math.round(Math.random() * 255);

                var b = Math.round(Math.random() * 255);

                var c_r = Math.round(Math.random() * 8 + 2);

                var x = Math.round(Math.random() * canvas.width);

                var y = canvas.height + c_r;

                var s = Math.round(Math.random() * 50 + 20);

                circleArr.push({
                    r: r,
                    g: g,
                    b: b,
                    c_r: c_r,
                    x: x,
                    y: y,
                    s: s,
                    d: 0
                })

            }, 50);

            timer2=setInterval(function () {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                for (var i = 0; i < circleArr.length; i++) {

                    var item = circleArr[i];

                    item.d += 4;

                    var rad = item.d * Math.PI / 180;

                    var x = Math.round(item.x + Math.sin(rad) * item.s);

                    var y = Math.round(item.y - rad * item.s);

                    if (y <= 0) {

                        circleArr.splice(i, 1);

                        continue;
                    }

                    ctx.beginPath();

                    ctx.fillStyle = 'rgb(' + item.r + ',' + item.g + ',' + item.b + ')';

                    ctx.arc(x, y, item.c_r, 0, 2 * Math.PI);

                    ctx.fill();

                }


            }, 1000 / 60)
        }
    }


    var aniArr=[
        {
            anIn:function () {
                bannerWrap.style.transform='translateY(0)';
                bannerWrap.style.opacity='1';
                bannerWrap.style.transition='1s';
            },
            anOut:function () {
                bannerWrap.style.transform='translateY(-50%)';
                bannerWrap.style.opacity='0';
                bannerWrap.style.transition='1s';

            }
        },
        {
            anIn:function () {
                planeNodes[0].style.transform = 'translate(0, 0)';
                planeNodes[1].style.transform = 'translate(0, 0)';
                planeNodes[2].style.transform = 'translate(0, 0)';
            },
            anOut:function () {
                planeNodes[0].style.transform = 'translate(-100px, -100px)';
                planeNodes[1].style.transform = 'translate(-100px, 100px)';
                planeNodes[2].style.transform = 'translate(100px, -100px)';

            }
        },
        {
            anIn: function () {
                pencelNodes[0].style.transform = 'translateY(0)';
                pencelNodes[1].style.transform = 'translateY(0)';
                pencelNodes[2].style.transform = 'translateY(0)';
            },
            anOut: function () {
                pencelNodes[0].style.transform = 'translateY(-100px)';
                pencelNodes[1].style.transform = 'translateY(100px)';
                pencelNodes[2].style.transform = 'translateY(100px)';
            }
        },
        {
            anIn: function () {
               boxImg.style.transform='rotate(0deg)';
               boxImg1.style.transform='rotate(0deg)';
            },
            anOut: function () {
                boxImg.style.transform='rotate(45deg)';
                boxImg1.style.transform='rotate(-45deg)';
            }

        },
        {
            anIn: function () {
                title.style.transform='translateX(0px)';
                text.style.transform='translateX(0px)';
            },
            anOut: function () {
                title.style.transform='translateX(-100px)';
                text.style.transform='translateX(100px)';
            }
        }


        ];

    for(var i=0; i<aniArr.length;i++){
        aniArr[i].anOut();
    }




    setTimeout(function () {
        aniArr[0].anIn();
    },2000)
};