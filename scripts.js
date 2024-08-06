function nav1(){
    var toggle = document.getElementById("navlist");
    if (toggle.style.display === 'block') {
    toggle.style.display = 'none';
} else {
    toggle.style.display = 'block';
}
}
function check(){
    if(window.innerWidth<1000){
        document.getElementById("navbar").style.backgroundColor='black'
        document.getElementById("navbar").style.boxShadow='none'
        document.getElementById("rest").style.color='white'
        document.getElementById("rest").style.fontSize='24px'
    }else{
        navchange();
    }
}
function navchange(){
    if(window.scrollY>100){
        document.getElementById("navbar").style.backgroundColor='white'
        document.getElementById("navbar").style.boxShadow='grey 0px 0px 5px'
        document.getElementById("rest").style.color='black'
        document.getElementById("rest").style.fontSize='30px'
        let navlinks= document.querySelectorAll(".navtags")
        navlinks.forEach(x => {
            x.style.color='black';
        });
    }else
    if(window.scrollY<100){
        document.getElementById("navbar").style.backgroundColor='transparent'
        document.getElementById("navbar").style.boxShadow='none'
        document.getElementById("rest").style.color='white'
        document.getElementById("rest").style.fontSize='24px'
        let navlinks= document.querySelectorAll(".navtags")
        navlinks.forEach(x => {
            x.style.color='white';
        });
    }
}

document.addEventListener("wheel", check);
