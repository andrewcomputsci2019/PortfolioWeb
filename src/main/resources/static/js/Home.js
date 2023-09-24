window.onload = () => {
    //set up all element listeners
    fontIconClickable();
    navbarScrollListener();
    hamburgerMenuListener();
}

function fontIconClickable(){
    let items =  document.querySelectorAll(".clickableLink")
    console.log(items)
    items.forEach((ele) => {
        console.log(ele.getAttribute("finallink"))
        ele.addEventListener('click',()=>{
            let url = ele.getAttribute("finallink")
            window.open(url,"_blank")
        })
    })
}

function navbarScrollListener(){
    document.addEventListener('scroll', ()=>{
        setTimeout(()=> changeScrollBarColor(window.scrollY),35)
    })
}
function changeScrollBarColor(scrollPos){
    console.log("scroll function called")
    let item = document.querySelector("header")
    let height = item.offsetHeight
    if(height < scrollPos){
        document.querySelector(".navbar").classList.add('navbar-scroll')
        document.querySelector('header').classList.remove('header-isolate')
    }
    else{
        document.querySelector('header').classList.add('header-isolate')
        document.querySelector(".navbar").classList.remove('navbar-scroll')
    }
}
function hamburgerMenuListener() {
    const toggleButton = document.getElementsByClassName('toggle-button')[0]
    const navLinks = document.getElementsByClassName('navbar-links')[0]
    const header = document.querySelector("header")
    toggleButton.addEventListener('click',()=>{
        navLinks.classList.toggle('active')
        if(window.scrollY < header.offsetHeight){
            document.querySelector(".navbar").classList.toggle('navbar-scroll')
        }
    })
}