let petImagesEl = {
    dog:"https://wallup.net/wp-content/uploads/2016/01/256905-animals-dog-puppies.jpg",
    cat:"https://wallpapercave.com/wp/BzpgP00.jpg",
    horse:"http://www.hdwallpaper.nu/wp-content/uploads/2015/02/105811.jpg",
    parrot:"https://tse4.mm.bing.net/th?id=OIP.SXPJBL9INZPk-MYey0g-NQHaFj&pid=Api&P=0&h=220",
    rabbit:"http://hdqwalls.com/wallpapers/cute-rabbit.jpg",
    goat:"https://tse3.mm.bing.net/th?id=OIP.aAicAiVCyDmKWl44QSEQ_wHaEK&pid=Api&P=0&h=220"
};

let selectedLisEl = document.getElementById("selectedList");
let petImgEl = document.getElementById("petImg");


selectedLisEl.addEventListener("change",function(event){
    let selectedPet = event.target.value;
    let selectedPetImage = petImagesEl[selectedPet]
    petImgEl.src = selectedPetImage
});