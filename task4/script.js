let imagesList = [
    {
        url: "https://agrarii-razom.com.ua/sites/default/files/styles/imagetext_carousel/public/byr/garbuz_dekorativniy_0.jpg?itok=Ol8bHCAH",
        title: "Гарбуз",
        description: "-Декоративний-",
    },
    {
        url: "https://agrarii-razom.com.ua/sites/default/files/styles/imagetext_carousel/public/byr/kartoplya_1.jpg?itok=HxSReK7u",
        title: "Картопля",
        description: "-Херсонська-",
    },
    {
        url: "https://agrarii-razom.com.ua/sites/default/files/styles/imagetext_carousel/public/byr/kapusta_bilogolova_2.jpeg?itok=y8WD18Hv",
        title: "Капуста",
        description: "-Білоголова-",
    },
];

function initPhotoRotator(identificator, list) {
    let i = 0;

    const rotator = document.getElementById(identificator);

    const headerRotator = document.createElement("div");
    const numberPhotoFromList = document.createElement("p");
    const image = document.createElement("img");

    const leftSide = document.createElement("div");
    const rightSide = document.createElement("div");

    const btnPrev = document.createElement("button");
    const btnNext = document.createElement("button");
    const titleParagraph = document.createElement("p");
    const descriptionParagraph = document.createElement("p");

    headerRotator.classList.add("container_picture");
    leftSide.classList.add("algin_items_center");
    rightSide.classList.add("algin_items_center");
    titleParagraph.classList.add("title");
    descriptionParagraph.classList.add("description");

    numberPhotoFromList.textContent = `Фото ${i + 1} з ${list.length}`;
    titleParagraph.textContent = list[0].title;
    descriptionParagraph.textContent = list[0].description;
    btnPrev.textContent = "Назад";
    btnNext.textContent = "Вперед";
    image.src = list[0].url;

    btnPrev.disabled = true;

    if (imagesList.length == 1 || imagesList.length == 0) btnNext.disabled = true;


    btnPrev.addEventListener("click", () => {
        btnNext.disabled = false;
        i--;

        if (i == 0) btnPrev.disabled = true;
        numberPhotoFromList.textContent = `Фото ${i + 1} з ${list.length}`;
        titleParagraph.textContent = list[i].title;
        descriptionParagraph.textContent = list[i].description;

        image.src = list[i].url;
    });

    btnNext.addEventListener("click", () => {
        btnPrev.disabled = false;
        i++;
        if (i == list.length - 1) btnNext.disabled = true;

        numberPhotoFromList.textContent = `Фото ${i + 1} з ${list.length}`;

        titleParagraph.textContent = list[i].title;
        descriptionParagraph.textContent = list[i].description;

        image.src = list[i].url;
    });

    leftSide.appendChild(btnPrev);
    rightSide.appendChild(btnNext);

    headerRotator.appendChild(numberPhotoFromList);
    headerRotator.appendChild(image);
    headerRotator.appendChild(titleParagraph);
    headerRotator.appendChild(descriptionParagraph);

    rotator.appendChild(leftSide);
    rotator.appendChild(headerRotator);
    rotator.appendChild(rightSide);
}

initPhotoRotator("rotator", imagesList);