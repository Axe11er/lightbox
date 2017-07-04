let blackpanel,
    images;

    function init() {
        //NOTE: blackpanel - HTMLElement
        blackpanel = document.getElementById("blackpanel");
        //NOTE: images - HTMLCollection
        images = document.getElementsByClassName("my-image");
        console.log(images);

        for (let i = 0; i < images.length; i++) {
            images[i].addEventListener("click", function() {
                blackpanel.style.display = "flex";
                console.log(this.src);

                let largeImage = document.createElement("img");
                largeImage.src = this.src;
                largeImage.style.width = "70vw";
                largeImage.style.margin = "auto";
                largeImage.style.borderRadius = "4px";
                blackpanel.appendChild(largeImage);
            });
        }

        blackpanel.addEventListener("click", function() {
                    this.innerHTML = "";
                    this.style.display = "none";
                });
    }

    init();