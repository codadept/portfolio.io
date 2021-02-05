const reload = document.querySelector("#reload");
const contactButton = document.querySelector("#scrolldown");
const scrollToTop = document.querySelector("#btnScrollToTop");

scrollToTop.addEventListener("click", scrollUp);

reload.addEventListener("click", reloadMe);

contactButton.addEventListener("click", scrollDown)


function scrollDown() {

    window.scrollTo({
        top:document.body.scrollHeight,
        left:0,
        behavior:"smooth"
    })
}

function scrollUp() {

    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
}

function reloadMe() {	
    window.location.reload()			
}

