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

	if(boysTops.checked){
                boysFilter.checked = true;
                boysBottoms.checked = false;
		selectedImagesData = selectedImagesData.concat(imagesData["btops"]);
	} else if(boysBottoms.checked){
                boysFilter.checked = true;
                boysTops.checked = false;
		selectedImagesData = selectedImagesData.concat(imagesData["bbottoms"]);
	} 


	if (girlsFilter.checked) {
		selectedImagesData = selectedImagesData.concat(imagesData["girls"]);
	}
	if(girlsTops.checked){
	    selectedImagesData = selectedImagesData.concat(imagesData["gtops"]);
	} else if(girlsBottoms.checked){
	    selectedImagesData = selectedImagesData.concat(imagesData["gbottoms"]);
	} else if(girlsSets.checked){
	    selectedImagesData = selectedImagesData.concat(imagesData["gsets"]);
	} else if(girlsSkirts.checked){
	    selectedImagesData = selectedImagesData.concat(imagesData["gskirts"]);
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

        if(boysFilter.checked) {
             selectedImagesData = selectedImagesData.concat(imagesData["boys"]);
        }


    if (!boysFilter.checked && !girlsFilter.checked) {
        selectedImagesData = imagesData["girls"].concat(imagesData["boys"]);
    }

    console.log("Selected Images Data:", selectedImagesData);

    renderImages(imageGallery, selectedImagesData);
}

function applyFilters_gt() {
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

       if(girlsTops.checked){
                girlsFilter.checked = true;
                girlsBottoms.checked = false;
                girlsSets.checked = false;
                girlsSkirts.checked = false;
		selectedImagesData = selectedImagesData.concat(imagesData["gtops"]);
	} else {
             if(!girlsBottoms.checked && !girlsSets.checked && !girlsSkirts.checked){
                girlsFilter.checked = false;
             } else {
               if(girlsBottoms.checked){
                   selectedImagesData = selectedImagesData.concat(imagesData["gbottoms"]);
               }   
               if(girlsSets.checked){
                   selectedImagesData = selectedImagesData.concat(imagesData["gsets"]);
               } 
               if(girlsSkirts.checked){
                   selectedImagesData = selectedImagesData.concat(imagesData["gskirts"]);
               }            
             }
        }
        if(boysFilter.checked) {
             selectedImagesData = selectedImagesData.concat(imagesData["boys"]);
        }


    if (!boysFilter.checked && !girlsFilter.checked) {
        selectedImagesData = imagesData["girls"].concat(imagesData["boys"]);
    }

    console.log("Selected Images Data:", selectedImagesData);

    renderImages(imageGallery, selectedImagesData);
}

function applyFilters_gb() {
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

       if(girlsBottoms.checked){
                girlsFilter.checked = true;
                girlsTops.checked = false;
                girlsSets.checked = false;
                girlsSkirts.checked = false;
		selectedImagesData = selectedImagesData.concat(imagesData["gbottoms"]);
	} else {
             if(!girlsTops.checked && !girlsSets.checked && !girlsSkirts.checked){
                girlsFilter.checked = false;
             } else {
               if(girlsTops.checked){
                   selectedImagesData = selectedImagesData.concat(imagesData["gtops"]);
               }   
               if(girlsSets.checked){
                   selectedImagesData = selectedImagesData.concat(imagesData["gsets"]);
               } 
               if(girlsSkirts.checked){
                   selectedImagesData = selectedImagesData.concat(imagesData["gskirts"]);
               }            
             }
        }
        if(boysFilter.checked) {
             selectedImagesData = selectedImagesData.concat(imagesData["boys"]);
        }


    if (!boysFilter.checked && !girlsFilter.checked) {
        selectedImagesData = imagesData["girls"].concat(imagesData["boys"]);
    }

    console.log("Selected Images Data:", selectedImagesData);

    renderImages(imageGallery, selectedImagesData);
}

function applyFilters_gs() {
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

       if(girlsSets.checked){
                girlsFilter.checked = true;
                girlsTops.checked = false;
                girlsBottoms.checked = false;
                girlsSkirts.checked = false;
		selectedImagesData = selectedImagesData.concat(imagesData["gsets"]);
	} else {
             if(!girlsTops.checked && !girlsBottoms.checked && !girlsSkirts.checked){
                girlsFilter.checked = false;
             } else {
               if(girlsTops.checked){
                   selectedImagesData = selectedImagesData.concat(imagesData["gtops"]);
               }   
               if(girlsBottoms.checked){
                   selectedImagesData = selectedImagesData.concat(imagesData["gbottoms"]);
               } 
               if(girlsSkirts.checked){
                   selectedImagesData = selectedImagesData.concat(imagesData["gskirts"]);
               }            
             }
        }
        if(boysFilter.checked) {
             selectedImagesData = selectedImagesData.concat(imagesData["boys"]);
        }


    if (!boysFilter.checked && !girlsFilter.checked) {
        selectedImagesData = imagesData["girls"].concat(imagesData["boys"]);
    }

    console.log("Selected Images Data:", selectedImagesData);

    renderImages(imageGallery, selectedImagesData);
}

function applyFilters_gsk() {
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

       if(girlsSkirts.checked){
                girlsFilter.checked = true;
                girlsTops.checked = false;
                girlsBottoms.checked = false;
                girlsSets.checked = false;
		selectedImagesData = selectedImagesData.concat(imagesData["gskirts"]);
	} else {
             if(!girlsTops.checked && !girlsBottoms.checked && !girlsSets.checked){
                girlsFilter.checked = false;
             } else {
               if(girlsTops.checked){
                   selectedImagesData = selectedImagesData.concat(imagesData["gtops"]);
               }   
               if(girlsBottoms.checked){
                   selectedImagesData = selectedImagesData.concat(imagesData["gbottoms"]);
               } 
               if(girlsSets.checked){
                   selectedImagesData = selectedImagesData.concat(imagesData["gsets"]);
               }            
             }
        }
        if(boysFilter.checked) {
             selectedImagesData = selectedImagesData.concat(imagesData["boys"]);
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
        if(girlsFilter.checked) {
             selectedImagesData = selectedImagesData.concat(imagesData["girls"]);
        }


    if (!boysFilter.checked && !girlsFilter.checked) {
        selectedImagesData = imagesData["girls"].concat(imagesData["boys"]);
    }

    console.log("Selected Images Data:", selectedImagesData);

    renderImages(imageGallery, selectedImagesData);
}

function applyFilters_bt() {
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

       if(boysTops.checked){
                boysFilter.checked = true;
                boysBottoms.checked = false;
		selectedImagesData = selectedImagesData.concat(imagesData["btops"]);
	} else {
             if(!boysBottoms.checked){
                boysFilter.checked = false;
             } else {
                selectedImagesData = selectedImagesData.concat(imagesData["bbottoms"]);
             }
        }
        if(girlsFilter.checked) {
             selectedImagesData = selectedImagesData.concat(imagesData["girls"]);
        }


    if (!boysFilter.checked && !girlsFilter.checked) {
        selectedImagesData = imagesData["girls"].concat(imagesData["boys"]);
    }

    console.log("Selected Images Data:", selectedImagesData);

    renderImages(imageGallery, selectedImagesData);
}

function applyFilters_bb() {
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

       if(boysBottoms.checked){
                boysFilter.checked = true;
                boysTops.checked = false;
		selectedImagesData = selectedImagesData.concat(imagesData["bbottoms"]);
	} else {
             if(!boysTops.checked){
                boysFilter.checked = false;
             } else {
                selectedImagesData = selectedImagesData.concat(imagesData["btops"]);
             }
        }
        if(girlsFilter.checked) {
             selectedImagesData = selectedImagesData.concat(imagesData["girls"]);
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
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

applyFilters(); // Initial rendering

