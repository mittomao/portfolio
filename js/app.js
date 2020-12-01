const pageNumbers = document.querySelectorAll(".js-page-change");
pageNumbers.forEach((page, index)=>{
  page.addEventListener("click",function(e){
    e.preventDefault();
    let pageID = page.getAttribute("data-page");
    if(!pageID) return;

    let pageTurn = document.getElementById(pageID);

    if(pageTurn.classList.contains("turn")) {
      pageTurn.classList.remove("turn");
      setTimeout(() => {
        pageTurn.style.zIndex = "unset";
      }, 600);
    }
    else {
      pageTurn.classList.add("turn");
      pageTurn.style.zIndex = 20 - index;
    }
  });
});

// Animation open book

let cover = document.querySelector(".js-cover-wrap-book");
let pages = document.querySelectorAll(".page--right");

setTimeout(() => {
  cover.classList.add("turn");
}, 1100);


pages.forEach((page,i)=>{
  setTimeout(() => {
    page.classList.remove("turn");
  }, (i+1)*200 + 1100);
});

// 

let $timesline = $(".js-list-skill");

// if(.length > 0) {
//   $timesline.find('.timeline-exp').forEach
// }

$timesline.find('.js-label').each((i,item)=>{
  $(item).click(function(){
    const _self = $(this).next();
    
    const dataWidth = _self.attr("data-width")
    _self.css({"width" : dataWidth});
    _self.addClass("active");
  });
});