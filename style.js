/**
 * Created by Administrator on 2017/11/16.
 */
function show(){
    /*页面顶部设置按钮的显示与隐藏*/
    var top_right=document.getElementById("top_right");
    var top_exit=document.getElementById("top_exit");
    top_right.onclick=function(){
        top_exit.style.display="block"
    };
    top_exit.onmouseout=function(){
        top_exit.style.display="none"
    };


    /*歌曲列表中对歌曲操作的按钮的显示与隐藏*/
    var time=document.getElementById("time");
    var details=document.getElementById("details");
    var hidden=document.getElementById("hidden");
    details.onmouseover=function(){
        hidden.style.display="block";
        time.style.display="none";
    };
    details.onmouseout=function(){
        hidden.style.display="none";
        time.style.display="block";
    };

    /*歌曲操作按钮中对分享按钮内部显示样式的设置*/
    var share=document.getElementById("share");
    var share_out=document.getElementById("share_out");
    var share_in=document.getElementById("share_in");
    share.onmouseover=function(){
        share_out.style.border="solid 2px white";
        share_out.style.borderTop="none";
        share_in.style.border="solid 2px white";
        share_in.style.borderBottom="none";
        share_in.style.borderRight="none";
    };
    share.onmouseout=function(){
        share_out.style.border="solid 2px gray";
        share_out.style.borderTop="none";
        share_in.style.border="solid 2px gray";
        share_in.style.borderBottom="none";
        share_in.style.borderRight="none";
    };

    /*页面底部纯净声按钮的操作*/
    var soundOFF=document.getElementById("soundOFF");
    var soundCircle=document.getElementById("soundCircle");

    soundCircle.onclick=function(){
        soundOFF.firstChild.nodeValue="ON";
        soundOFF.style.left="3px";
        soundCircle.style.textIndent="37%";
    };
     soundOFF.onclick=function() {
         soundOFF.firstChild.nodeValue = "OFF";
         soundOFF.style.left = "35px";
         soundCircle.style.textIndent = "7%";

     }
}
show();
