const temp = [
    {
        title: "에어팟 프로 오른쪽을 잃어버렸어요.",
        info: "에어팟 프로 2세대 오른쪽을 잃어버렸어요.",
        tags: ["1층", "에어팟", "2학년 4반 신희성"],
        image: "./images/temp.jpg",
        imageText: "Related image"
    },
    {
        title: "에어팟 프로 오른쪽을 잃어버렸어요.",
        info: "에어팟 프로 2세대 오른쪽을 잃어버렸어요.",
        tags: ["1층", "에어팟", "2학년 4반 신희성"],
        image: "./images/temp.jpg",
        imageText: "Related image"
    },
    {
        title: "에어팟 프로 오른쪽을 잃어버렸어요.",
        info: "에어팟 프로 2세대 오른쪽을 잃어버렸어요.",
        tags: ["1층", "에어팟", "2학년 4반 신희성"],
        image: "",
        imageText: "Related image"
    },
    {
        title: "에어팟 프로 오른쪽을 잃어버렸어요.",
        info: "에어팟 프로 2세대 오른쪽을 잃어버렸어요.",
        tags: ["1층", "에어팟", "2학년 4반 신희성"],
        image: "",
        imageText: "Related image"
    }
];

const list = document.getElementById('lost-list');

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
//lost 페이지의 반복문도 find페이지와 구조가 같다보니 사실 값만 수정해주면 되는 부분
