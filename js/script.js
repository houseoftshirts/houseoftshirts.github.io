function applyFilters() {
    var boysFilter = document.getElementById("boysFilter");
    var boysTops = document.getElementById("boysTops");
    var boysBottoms = document.getElementById("boysBottoms");
    var girlsFilter = document.getElementById("girlsFilter");
    var girlsTops = document.getElementById("girlsTops");
    var girlsBottoms = document.getElementById("girlsBottoms");
    var girlsSets = document.getElementById("girlsSets");
    var girlsSkirts = document.getElementById("girlsSkirts");
    var imageGallery = document.getElementById("imageGallery");
	var girls02 = document.getElementById("girls02");
	
    var images = [];

    console.log("Boys Filter Checked:", boysFilter.checked);
    console.log("Girls Filter Checked:", girlsFilter.checked);

    // Fetch images data from JSON file
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "images/images.json", false);
    xhr.send(null);

    if (xhr.status === 200) {
        imagesData = JSON.parse(xhr.responseText);
    }

    console.log("Boys Filter Checked:", boysFilter.checked);
    console.log("Girls Filter Checked:", girlsFilter.checked);
    console.log("Boys tops Checked:", boysTops.checked);
    console.log("Girls bottoms Checked:", boysBottoms.checked);

    var selectedImagesData = [];

		if(girlsTops.checked || girlsBottoms.checked || girlsSets.checked || girlsSkirts.checked){
			girlsFilter.checked = true;
			if(girlsTops.checked){
				selectedImagesData = selectedImagesData.concat(imagesData["gtops"]);
			}
			if(girlsBottoms.checked){
				selectedImagesData = selectedImagesData.concat(imagesData["gbottoms"]);
			}
			if(girlsSets.checked){
				selectedImagesData = selectedImagesData.concat(imagesData["gsets"]);
			}
			if(girlsSkirts.checked){
				selectedImagesData = selectedImagesData.concat(imagesData["gskirts"]);
			}
			girls02.checked = false;
		} 

	   
       if(!girlsTops.checked && !girlsBottoms.checked && !girlsSets.checked && !girlsSkirts.checked){
           girlsFilter.checked = false;
       }

       if(boysTops.checked){
                boysFilter.checked = true;
		selectedImagesData = selectedImagesData.concat(imagesData["btops"]);
       }
       if(boysBottoms.checked){
                boysFilter.checked = true;
		selectedImagesData = selectedImagesData.concat(imagesData["bbottoms"]);
       }
       if(!boysTops.checked && !boysBottoms.checked){
           boysFilter.checked = false;
       }

       if (!boysFilter.checked && !girlsFilter.checked) {
            selectedImagesData = imagesData["girls"].concat(imagesData["boys"]);
       }


    console.log("Selected Images Data:", selectedImagesData);

    renderImages(imageGallery, selectedImagesData);
}

function applyFilters_age() {
    var boysFilter = document.getElementById("boysFilter");
    var boysTops = document.getElementById("boysTops");
    var boysBottoms = document.getElementById("boysBottoms");
    var girlsFilter = document.getElementById("girlsFilter");
    var girlsTops = document.getElementById("girlsTops");
    var girlsBottoms = document.getElementById("girlsBottoms");
    var girlsSets = document.getElementById("girlsSets");
    var girlsSkirts = document.getElementById("girlsSkirts");
    var imageGallery = document.getElementById("imageGallery");
	var girls02 = document.getElementById("girls02");
    var images = [];

    console.log("Boys Filter Checked:", boysFilter.checked);
    console.log("Girls Filter Checked:", girlsFilter.checked);

    // Fetch images data from JSON file
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "images/images.json", false);
    xhr.send(null);

    if (xhr.status === 200) {
        imagesData = JSON.parse(xhr.responseText);
    }

    console.log("Boys Filter Checked:", boysFilter.checked);
    console.log("Girls Filter Checked:", girlsFilter.checked);
    console.log("Boys tops Checked:", boysTops.checked);
    console.log("Girls bottoms Checked:", boysBottoms.checked);

    var selectedImagesData = [];

		if(girls02.checked){
			girlsFilter.checked = true;
			selectedImagesData = selectedImagesData.concat(imagesData["g02"]);
			
			girlsTops.checked = false;
			girlsBottoms.checked = false;
			girlsSets.checked = false;
			girlsSkirts.checked = false;
		}

	   
       if(!girls02.checked){
           girlsFilter.checked = false;
       }
	   
	  if (!boysFilter.checked && !girlsFilter.checked) {
            selectedImagesData = imagesData["girls"].concat(imagesData["boys"]);
       }


    console.log("Selected Images Data:", selectedImagesData);

    renderImages(imageGallery, selectedImagesData);
}

function applyFilters_g() {
    var boysFilter = document.getElementById("boysFilter");
    var boysTops = document.getElementById("boysTops");
    var boysBottoms = document.getElementById("boysBottoms");
    var girlsFilter = document.getElementById("girlsFilter");
    var girlsTops = document.getElementById("girlsTops");
    var girlsBottoms = document.getElementById("girlsBottoms");
    var girlsSets = document.getElementById("girlsSets");
    var girlsSkirts = document.getElementById("girlsSkirts");
    var imageGallery = document.getElementById("imageGallery");
    var images = [];

    console.log("Boys Filter Checked:", boysFilter.checked);
    console.log("Girls Filter Checked:", girlsFilter.checked);

    // Fetch images data from JSON file
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "images/images.json", false);
    xhr.send(null);

    if (xhr.status === 200) {
        imagesData = JSON.parse(xhr.responseText);
    }

    console.log("Boys Filter Checked:", boysFilter.checked);
    console.log("Girls Filter Checked:", girlsFilter.checked);
    console.log("Boys tops Checked:", boysTops.checked);
    console.log("Girls bottoms Checked:", boysBottoms.checked);

    var selectedImagesData = [];

       if(girlsFilter.checked){
                girlsTops.checked = true;
                girlsBottoms.checked = true;
                girlsSets.checked = true;
                girlsSkirts.checked = true;
		selectedImagesData = imagesData["gtops"].concat(imagesData["gbottoms"].concat(imagesData["gsets"].concat(imagesData["gskirts"])));
	} else {
                girlsTops.checked = false;
                girlsBottoms.checked = false;
                girlsSets.checked = false;
                girlsSkirts.checked = false;
        }

       if(boysTops.checked){
                boysFilter.checked = true;
		selectedImagesData = selectedImagesData.concat(imagesData["btops"]);
       }
       if(boysBottoms.checked){
                boysFilter.checked = true;
		selectedImagesData = selectedImagesData.concat(imagesData["bbottoms"]);
       }
       if(!boysTops.checked && !boysBottoms.checked){
           boysFilter.checked = false;
       }


    if (!boysFilter.checked && !girlsFilter.checked) {
        selectedImagesData = imagesData["girls"].concat(imagesData["boys"]);
    }

    console.log("Selected Images Data:", selectedImagesData);

    renderImages(imageGallery, selectedImagesData);
}


function applyFilters_b() {
    var boysFilter = document.getElementById("boysFilter");
    var boysTops = document.getElementById("boysTops");
    var boysBottoms = document.getElementById("boysBottoms");
    var girlsFilter = document.getElementById("girlsFilter");
    var girlsTops = document.getElementById("girlsTops");
    var girlsBottoms = document.getElementById("girlsBottoms");
    var girlsSets = document.getElementById("girlsSets");
    var girlsSkirts = document.getElementById("girlsSkirts");
    var imageGallery = document.getElementById("imageGallery");
    var images = [];

    console.log("Boys Filter Checked:", boysFilter.checked);
    console.log("Girls Filter Checked:", girlsFilter.checked);

    // Fetch images data from JSON file
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "images/images.json", false);
    xhr.send(null);

    if (xhr.status === 200) {
        imagesData = JSON.parse(xhr.responseText);
    }

    console.log("Boys Filter Checked:", boysFilter.checked);
    console.log("Girls Filter Checked:", girlsFilter.checked);
    console.log("Boys tops Checked:", boysTops.checked);
    console.log("Girls bottoms Checked:", boysBottoms.checked);

    var selectedImagesData = [];

       if(boysFilter.checked){
                boysTops.checked = true;
                boysBottoms.checked = true;
		selectedImagesData = imagesData["btops"].concat(imagesData["bbottoms"]);
	} else {
                boysTops.checked = false;
                boysBottoms.checked = false;
        }

       if(girlsTops.checked){
                girlsFilter.checked = true;
		selectedImagesData = selectedImagesData.concat(imagesData["gtops"]);
       }
       if(girlsBottoms.checked){
                girlsFilter.checked = true;
		selectedImagesData = selectedImagesData.concat(imagesData["gbottoms"]);
       }
       if(girlsSets.checked){
                girlsFilter.checked = true;
		selectedImagesData = selectedImagesData.concat(imagesData["gsets"]);
       }
       if(girlsSkirts.checked){
                girlsFilter.checked = true;
		selectedImagesData = selectedImagesData.concat(imagesData["gskirts"]);
       }
	   
       if(!girlsTops.checked && !girlsBottoms.checked && !girlsSets.checked && !girlsSkirts.checked){
           girlsFilter.checked = false;
       }
	   
	   if (!boysFilter.checked && !girlsFilter.checked) {
        selectedImagesData = imagesData["girls"].concat(imagesData["boys"]);
       }

    console.log("Selected Images Data:", selectedImagesData);

    renderImages(imageGallery, selectedImagesData);
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

    images.forEach(function(imageInfo) {
        var img = document.createElement("img");
        img.src = imageInfo.filename;
        
        var priceLabel = document.createElement("div");
        priceLabel.classList.add("price-label");
        priceLabel.textContent = imageInfo.price;

        var imgContainer = document.createElement("div");
        imgContainer.classList.add("image-container");
        imgContainer.appendChild(img);
        imgContainer.appendChild(priceLabel);

        // Add click event listener to display full-size image
        imgContainer.addEventListener("click", function() {
            displayFullSizeImage(img.src);
        });

        container.appendChild(imgContainer);
    });

    console.log("Rendered Images:", images);
}

function displayFullSizeImage(imageUrl) {
    var modal = document.getElementById("modal");
    var modalContent = document.getElementById("modal-content");
    var fullSizeImg = document.createElement("img");
    fullSizeImg.src = imageUrl;
    modalContent.innerHTML = "";
    modalContent.appendChild(fullSizeImg);
    modal.style.display = "flex";
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

applyFilters(); // Initial rendering

