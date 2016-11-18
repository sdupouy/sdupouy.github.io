var photo = document.getElementById("mainPhoto");
var descr = document.getElementById("description");
var btn = document.getElementById("fleche-descr");
var posDescr = parseInt(window.getComputedStyle(descr)
            .getPropertyValue("left"),10);
var posBtn = parseInt(window.getComputedStyle(btn)
            .getPropertyValue("left"),10);

function showDetail() {
    var pos = parseInt(window.getComputedStyle(photo)
            .getPropertyValue("left"),10);
            
    if (pos==0) {
        var id = setInterval(frameNeg, 5);
    } else {
        var id = setInterval(framePos, 5);
    }
    
    function frameNeg() {
        if (pos==-150) {
            clearInterval(id);
            btn.childNodes[0].style.transform = 'rotateY(180deg)';
        } else {
            pos--;
            photo.style.left = pos + 'px';
            descr.style.left = posDescr + (-pos)*1.3 + 'px';
            descr.style.clip = 'rect(0em, 40em, 23em, ' + (350+2.3*pos) + 'px)';
            btn.style.left = posBtn -pos*1.27 + 'px';
        }
    }
    
    function framePos() {
        if (pos==0) {
            clearInterval(id);
            btn.childNodes[0].style.transform = 'rotateY(0deg)';
        } else {
            pos++;
            photo.style.left = pos + 'px';
            descr.style.left = posDescr + (-pos)*1.3 + 'px';
            descr.style.clip = 'rect(0em, 40em, 23em, ' + (350+2.3*pos) + 'px)';
            btn.style.left = posBtn -pos*1.27 + 'px';
        }
    }
}