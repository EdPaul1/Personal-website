// Display an image once the App Titles are clicked

document.getElementById("title1").addEventListener("click", function(){
    const img1 = document.getElementById("img1");
    if (img1.style.display === "none"){
        img1.style.display = "block"
    }else {
        img1.style.display = "none";
    }
    
});
document.getElementById("title2").addEventListener("click", function(){
    const img2 = document.getElementById("img2");
    if (img2.style.display === "none"){
        img2.style.display = "block"
    }else {
        img2.style.display = "none";
    }
    
});
document.getElementById("title3").addEventListener("click", function(){
    const img3 = document.getElementById("img3");
    if (img3.style.display === "none"){
        img3.style.display = "block"
    }else {
        img3.style.display = "none";
    }
    
});

const tabButton = document.querySelector('.tab-button');
const tabContent = document.querySelector('.tab-content');

tabButton.addEventListener('click', () => {
  tabContent.style.display = tabContent.style.display === 'block' ? 'none' : 'block';
});
