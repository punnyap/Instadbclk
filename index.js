const lcount = document.getElementById("t");;
//doubling clicking on a image to like a picture
let count = 0;
document.getElementById("j").addEventListener("dblclick", () => {
document.getElementById("fav").style.color = "rgb(206, 28, 28)";    
  count=1;
  lcount.innerHTML = count;
}
);

//single click on like button to unlike the picture
document.getElementById("fav").addEventListener("click", () => {
    document.getElementById("fav").style.color = "rgb(168, 152, 152)";    
      count=0;
      lcount.innerHTML = count;
});

const l1count = document.getElementById("u");
//doubling clicking on a image to like a picture
let count1 = 0;
document.getElementById("k").addEventListener("dblclick", () => {
    document.getElementById("fav1").style.color = "rgb(206, 28, 28)";    
      count1=1;
      l1count.innerHTML = count1;
    }
    );
    
 //single click on like button to unlike the picture
document.getElementById("fav1").addEventListener("click", () => {
    document.getElementById("fav1").style.color = "rgb(168, 152, 152)";    
        count1=0;
        l1count.innerHTML = count1;
    });

const l2count = document.getElementById("v");
//doubling clicking on a image to like a picture
let count2 = 0; 
document.getElementById("l").addEventListener("dblclick", () => {
document.getElementById("fav2").style.color = "rgb(206, 28, 28)";    
  count2=1;
  l2count.innerHTML = count2;
}
);

//single click on like button to unlike the picture
document.getElementById("fav2").addEventListener("click", () => {
    document.getElementById("fav2").style.color = "rgb(168, 152, 152)";    
      count2=0;
      l2count.innerHTML = count2;
});





