
function saveData() {
    const masonry = document.querySelectorAll('.masonry-item')
    console.log(masonry);
    let dataToSave = {};

    Array.from(masonry).forEach((element,index)=>{
        const id = 'element'+(index+1);
        dataToSave[id] = element.textContent;
    })
    console.log(dataToSave);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "send-data.php", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log("Дані збережено успішно");
        } else {
            console.error("Помилка під час збереження даних");
        }
    };

    xhr.send(JSON.stringify(dataToSave));
}