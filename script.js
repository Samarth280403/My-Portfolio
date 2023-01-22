var mobile=(/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
if (mobile) {
    alert('Open in Desktop or Laptop for better experience');
 } 

 $(".ripple").ripples({
    resolution:375,
    dropRadius:20,
    perturbance:0.002
})

$("body").ripples({
    resolution:375,
    dropRadius:20,
    perturbance:0.002
})




// Views Counter 

// const count=document.getElementById("count");

// incrementVisitCount();

// function incrementVisitCount(){
//     let  visits;
//     if(!localStorage.getItem("visits")){
//         localStorage.setItem("visits",1);
//     }
    
//     visits = +localStorage.getItem("visits");
//     const newvisits = visits + 1;

//     localStorage.setItem("visits",newvisits);

//     count.innerText=localStorage.getItem("visits");
// }