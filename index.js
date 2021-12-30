var left="[";
var right="]";
var msg="--- Username ----";
var speed=200;
 
function scroll_title() {
        document.title=left+msg+right;
        msg=msg.substring(1,msg.length)+msg.charAt(0);
        setTimeout("scroll_title()",speed);
}
scroll_title();
document.getElementById('mode-btn').addEventListener('click',() =>{
        document.body.classList.toggle('night');
        localStorage.setItem('mode', document.body.classList);
        });
        if(localStorage.getItem('mode') != ''){
            document.body.classList.add(localStorage.getItem('mode'));
            document.getElementById('mode-btn').checked = true;
        }