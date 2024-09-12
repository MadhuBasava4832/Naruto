function fun(){
    var x=document.querySelector(".header")
    window.addEventListener("scroll",function(){
        var scroll=window.scrollY;
        // console.log(scroll);
        var target=window.innerWidth >=993 ? 140 : 100 ;
        // console.log(target);
        if(scroll>=target){
            x.classList.add("fixed");
        }else{
            x.classList.remove("fixed");
        }
    })
}
fun();

function white(){
    var x = document.querySelector(".elements")
    x.classList.add("visible")
}
function red(){
    var x = document.querySelector(".elements")
    x.classList.remove("visible")
}
function view_details(){
    alert("Still in Progress ...")
}


function func(){
    window.addEventListener("scroll",function(){
        console.log(window.scrollY);
        let x = window.scrollY;
        let y = window.innerWidth >= 992 ? 350 : 1;
        let z = window.innerWidth >= 992 ? 450 : 100;
        let z1 = window.innerWidth >= 992 ? 550 : 100;
        if(x>=y){
            var yo=document.querySelector(".innerdiv1")
            yo.style="width:48%";
        }
        if(x>=z){
            var yoh=document.querySelector(".innerdiv2")
            yoh.style="width:42%";
        }
        if(x>=z1){
            var yoho=document.querySelector(".innerdiv2")
            yoho.style="width:10%";
        }
    })
    window.addEventListener("scroll",function(){
        console.log(window.scrollY);
        let x = window.scrollY;
        let z = window.innerWidth >= 992 ? 450 : 100;
        if(x>=z){
            var yoh=document.querySelector(".innerdiv2")
            yoh.style="width:42%";
        }
    })
    window.addEventListener("scroll",function(){
        console.log(window.scrollY);
        let x = window.scrollY;
        let z1 = window.innerWidth >= 992 ? 550 : 100;
        if(x>=z1){
            var yoho=document.querySelector(".innerdiv3")
            yoho.style="width:10%";
        }
    })
}
func();