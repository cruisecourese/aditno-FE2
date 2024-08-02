const temp = [
    {
        title: "에어팟 프로 오른쪽을 찾았어요.",
        info: "에어팟 프로 2세대 오른쪽을 찾았어요.",
        tags: ["1층", "에어팟", "2학년 4반 신희성"],
        image: "./images/temp.jpg",
        imageText: "Related image"
    },
    {
        title: "에어팟 프로 오른쪽을 찾았어요.",
        info: "에어팟 프로 2세대 오른쪽을 찾았어요.",
        tags: ["1층", "에어팟", "2학년 4반 신희성"],
        image: "./images/temp.jpg",
        imageText: "Related image"
    },
    {
        title: "에어팟 프로 오른쪽을 찾았어요.",
        info: "에어팟 프로 2세대 오른쪽을 찾았어요.",
        tags: ["1층", "에어팟", "2학년 4반 신희성"],
        image: "./images/temp.jpg",
        imageText: "Related image"
    },
    {
        title: "에어팟 프로 오른쪽을 찾았어요.",
        info: "에어팟 프로 2세대 오른쪽을 찾았어요.",
        tags: ["1층", "에어팟", "2학년 4반 신희성"],
        image: "./images/temp.jpg",
        imageText: "Related image"
    }
];

const list = document.getElementById('find-list');
//length란? 해당 데이터의 개수를 반환한다.***
for (let i = 0; i < temp.length; i++) {
    const item = temp[i];

    let tagsHTML = '';
    for (let j = 0; j < item.tags.length; j++) {
        tagsHTML += `<div class="tag"><h6>${item.tags[j]}</h6></div>`;
    }

    let imageHTML = '';
    if (item.image) {
        imageHTML = `<img src="${item.image}" alt="${item.imageText}">`;
    } else {
        imageHTML = `<p>사진이<br>없습니다.</p>`;
    }

    const itemHTML = `
        <div class="lost-find">
            <div class="container-l-f">
                <div class="info">
                    <h4>${item.title}</h4>
                    <p>${item.info}</p>
                    <div class="tags">
                        ${tagsHTML}
                    </div>
                </div>
                <div class="info-img">
                    ${imageHTML}
                </div>
            </div>
        </div>
    `;

    list.innerHTML += itemHTML;
}
