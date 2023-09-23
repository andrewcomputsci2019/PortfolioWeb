window.onload = () => {
    //set up all element listeners
    fontIconClickable();
    navbarScrollListener();

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
    }
    else{
        document.querySelector(".navbar").classList.remove('navbar-scroll')
    }
}