document.addEventListener('DOMContentLoaded', function () {
    // Код, який викликається після завершення завантаження DOM
    console.log('DOM is ready');
    getData();
    setInterval(getData, 60000);
});
function getData() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "get-data.php", true);
    let retrievedData;
    xhr.onload = function () {
        if (xhr.status === 200) {
            retrievedData = JSON.parse(xhr.responseText);
            console.log("Data retrieved successfully:", retrievedData);

            // Do something with the retrieved data
            displayData(retrievedData);
            buildMasonry(retrievedData);
        } else {
            console.error("Error while retrieving data");
        }
    };

    xhr.send();

}

function displayData(data) {
    // Modify this function to suit your needs
    console.log("Displaying data:", data);
}

function buildMasonry(data){
    console.log(data);
    const middle = document.querySelector('.middle')
    middle.innerHTML='';
    middle.innerHTML += `<div id="masonryContainer" class="masonry"></div>`;
    container = document.querySelector("#masonryContainer");

    for(let obj in data){
        const masonryItem = document.createElement('div');
        masonryItem.className = 'masonry-item';
        masonryItem.id = obj;
        masonryItem.textContent=data[obj];
        container.append(masonryItem);
    }
}