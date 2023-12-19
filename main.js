const iPhone = document.querySelector(".iPhone");

const samsung = document.querySelector(".samsung");

iPhone.addEventListener("click", function(event) {
    let clickTarget = event.target;

    let activeButton = iPhone.querySelector(".active");

    let priceItem = iPhone.querySelector(".price");

    let currentPrice;

    let activeButtonColor = iPhone.querySelector(".active-border");


    if (clickTarget.classList.contains("color-btn") && !clickTarget.classList.contains("active-border")){

        clickTarget.classList.add("active-border");

        activeButtonColor.classList.remove("active-border");
    }


    if (clickTarget.classList.contains("btn") && !clickTarget.classList.contains("active")){

        clickTarget.classList.add("active");

        activeButton.classList.remove("active");
    }
});
samsung.addEventListener("click", function(event) {
    let clickTarget = event.target;

    let activeButton = samsung.querySelector(".active");

    let priceItem = samsung.querySelector(".price");

    let currentPrice;

    let activeButtonColor = samsung.querySelector(".active-border");


    if (clickTarget.classList.contains("color-btn") && !clickTarget.classList.contains("active-border")){

        clickTarget.classList.add("active-border");

        activeButtonColor.classList.remove("active-border");
    }


    if (clickTarget.classList.contains("btn") && !clickTarget.classList.contains("active")){

        clickTarget.classList.add("active");

        activeButton.classList.remove("active");
    }
});