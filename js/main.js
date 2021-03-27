const navList = window.document.querySelector(".navigation__list");
const toggleBtn  =  window.document.querySelector(".navigation__toggle-btn");

navList.addEventListener("click",function(e){
    if(e.target.classList.contains("navigation__link")){

        console.log(e.target);
        const links = navList.querySelectorAll(".navigation__link");

        links.forEach((i)=>{
            i.classList.remove("navigation__link--active");
        });

        e.target.classList.add("navigation__link--active");

    }        
})




//#region For Setting  NavBar Toggle Button.
toggleBtn.addEventListener("click",function(){
            
    navListStyle = window.getComputedStyle(navList) ;

    if(navListStyle.display  == "none"){
        navList.style.display= "flex" ;
    }else{
        navList.style.display = "none" ;
    }

});
//#endregion




//#region For Setting  small devices xs and sm Media.
// Create a condition that targets viewports at up tp 767.99px wide
const smMediaVar = window.matchMedia('(max-width: 767.99px)') ;

function smMediaFun(e) {
// Check if the media query is true
    if (e.matches) { 
        // Then log the following message to the console
        if(navList.style.display == "flex"){
            navList.style.display = "none"
        }
    }
}

// Register event listener
smMediaVar.addListener(smMediaFun) ;

// Initial check
smMediaFun(smMediaVar);
//#endregion




//#region For Setting large devices md, lg and xl Media.
// Create a condition that targets viewports at least 768px wide
const lgMediaVar = window.matchMedia('(min-width: 768px)') ;

function lgMediaFun(e) {
// Check if the media query is true
    if (e.matches) { 
        // Then log the following message to the console
        if(navList.style.display == "none"){
            navList.style.display = "flex"
        }
    }
}

// Register event listener
lgMediaVar.addListener(lgMediaFun) ;

// Initial check
lgMediaFun(lgMediaVar);
//#endregion




