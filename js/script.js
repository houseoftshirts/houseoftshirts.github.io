function applyFilters() {
    var boysFilter = document.getElementById("boysFilter");
    var girlsFilter = document.getElementById("girlsFilter");
    var imageGallery = document.getElementById("imageGallery");
    var images = [];

    console.log("Boys Filter Checked:", boysFilter.checked);
    console.log("Girls Filter Checked:", girlsFilter.checked);

    if (boysFilter.checked) {
        images = images.concat(getImagesFromFolder("boys"));
    }

    if (girlsFilter.checked) {
        images = images.concat(getImagesFromFolder("girls"));
    }

    if (!boysFilter.checked && !girlsFilter.checked) {
        images = getImagesFromFolder("images");
    }

    console.log("Selected Images:", images);

    renderImages(imageGallery, images);
}

function getImagesFromFolder(folder) {
    var imageFiles = [];

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "images/images.json", false);
    xhr.send(null);

    if (xhr.status === 200) {
        var imageList = JSON.parse(xhr.responseText);
        if (folder in imageList) {
            imageFiles = imageList[folder].map(function(filename) {
                if(folder === 'images') {
                    return "images/" + filename;
                } else {
                    return "images/" + folder + "/" + filename;
                }
            });
        }
    }

    return imageFiles;
}

function renderImages(container, images) {
    container.innerHTML = "";

    images.forEach(function(imagePath) {
        var img = document.createElement("img");
        img.src = imagePath;
        container.appendChild(img);
    });

    console.log("Rendered Images:", images);
}

applyFilters(); // Initial rendering

