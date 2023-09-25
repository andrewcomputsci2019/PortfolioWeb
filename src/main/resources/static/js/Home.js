window.onload = () => {
    //set up all element listeners
    fontIconClickable();
    navbarScrollListener();
    hamburgerMenuListener();
    addSvgAspectChanger();
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
function addSvgAspectChanger(){
    let eles = document.querySelectorAll('.svg-img-aspect')
    console.log(eles)
    eles.forEach((ele) =>{
        new ResizeObserver(entries => {
            entries.forEach((entry ) =>{
                const width = entry.contentRect.width;
                let el = entry.target
                const height = (width*9)/16.0
                el.setAttribute("style","height:"+Math.round(height)+"px")
            })
        }).observe(ele)
    })

}