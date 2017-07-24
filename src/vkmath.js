document.body.onload = function(){
    var div = document.createElement('div');
    div.className = 'im-chat-input--vkmath';
    div.innerHTML = '<label onmouseover="showTooltip(this,{text:\'Режим формулы\',black:true,shift:[4,5]});" class="im-chat-input--vkmath-label"></label>';
    document.getElementsByClassName('im-chat-input--txt-wrap _im_text_wrap')[0].appendChild(div);

    div.onclick = function() {
        var e = document.getElementsByClassName('im_editable im-chat-input--text _im_text')[0];
        var s = e.innerHTML;
        e.innerHTML = 'https://vkmath.dergunov.net/?v='+encodeURIComponent(s);
        var ev = new Event("keyup");
        e.dispatchEvent(ev);
        var i = setInterval(function() {
            if(document.getElementsByTagName('body')[0].style.cursor=='wait'){
                e.innerHTML = '';
                clearInterval(i);   
            }
        }, 100);
    }
}
document.getElementsByClassName('im-chat-input--txt-wrap _im_text_wrap')[0].onload = function() {
    console.log('asd');
}