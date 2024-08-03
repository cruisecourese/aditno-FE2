document.addEventListener('DOMContentLoaded', function() {
    //오류가 떠서 찾아보니 html문서를 모두 로드한 후 아래 코드를 실행시켜야 오류가 안난다고 해서 넣었습니다.
    let temp = [
        {
            id: "1",
            title: "에어팟 프로 오른쪽을 찾았어요.",
            info: "에어팟 프로 2세대 오른쪽을 찾았어요.",
            tags: ["1층", "에어팟", "2학년 4반 신희성"],
            image: "./images/temp.jpg",
            imageText: "Related image",
            moreinfo: "SRC 1층에서 에어팟 오른쪽 하나를 찾았어요. 흰색이에요 흰색<br>주인이신 분 알려주세요! 제가 3번에 넣어놓았어여영아시겠죠??"
        },
        {
            id: "2",
            title: "에어팟 프로 오른쪽을 찾았어요.",
            info: "에어팟 프로 2세대 오른쪽을 찾았어요.",
            tags: ["1층", "에어팟", "2학년 4반 신희성"],
            image: "./images/temp.jpg",
            imageText: "Related image",
            moreinfo: "SRC 1층에서 에어팟 오른쪽 하나를 찾았어요. 흰색이에요 흰색<br>주인이신 분 알려주세요! 제가 3번에 넣어놓았어여영아시겠죠??"
        },
        {
            id: "3",
            title: "에어팟 프로 오른쪽을 찾았어요.",
            info: "에어팟 프로 2세대 오른쪽을 찾았어요.",
            tags: ["1층", "에어팟", "2학년 4반 신희성"],
            image: "./images/temp.jpg",
            imageText: "Related image",
            moreinfo: "SRC 1층에서 에어팟 오른쪽 하나를 찾았어요. 흰색이에요 흰색<br>주인이신 분 알려주세요! 제가 3번에 넣어놓았어여영아시겠죠??"
        },
        {
            id: "4",
            title: "에어팟 프로 오른쪽을 찾았어요.",
            info: "에어팟 프로 2세대 오른쪽을 찾았어요.",
            tags: ["1층", "에어팟", "2학년 4반 신희성"],
            image: "./images/temp.jpg",
            imageText: "Related image",
            moreinfo: "SRC 1층에서 에어팟 오른쪽 하나를 찾았어요. 흰색이에요 흰색<br>주인이신 분 알려주세요! 제가 3번에 넣어놓았어여영아시겠죠??"
        }
    ];

    const list = document.getElementById('find-list');

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
            <div id="${item.id}" class="container-l-f" onclick="openModal('${item.id}')">
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
        `;

        list.innerHTML += itemHTML;
    }

    window.openModal = function(itemId) {
        const item = temp.find(item => item.id === itemId);
        //나중에 해당 데이터도 지워야 하니까 데이터 색출 후 해당 데이터를 변수에 대입하는 과정
        if (item) {
            const modal = document.getElementById('modalBg');
            const modalBody = document.getElementById('modal-b');

            modalBody.innerHTML = `
                <div id="img-tag">
                    <img src="${item.image}" alt="${item.imageText}" class="img">
                    <div class="tags">${item.tags.map(tag => `<div class="tag"><h6>${tag}</h6></div>`).join('')}</div>
                </div>
                <h4 id="title">${item.title}</h4>
                <p id="info">${item.info}</p>
                <p id="more">세부 설명</p>
                <p id="moreinfo">${item.moreinfo}</p>
                <div class="mine"><button type="button" id="confirm-button"><h5>내꺼예요</h5></button></div>
            `;

            modal.style.display = 'block';

            document.getElementById('confirm-button').onclick = function() {
                openConfirmModal(item);
            }
        }
    }

    function openConfirmModal(item) {
        const modalBody = document.getElementById('modal-b');

        modalBody.innerHTML = `
            <div class="con-img"><img src="./images/imoge.png"></div>
            <div class="com">
                <h4>50분 이내에 물건을 찾아가주세요.</h4>
                <p>유의사항 알아보기</p>
            </div>
            <div class="done"><button type="button" onclick="Del('${item.id}')"><h5>완료하기</h5></button></div>
        `;
    }

    function closeModal() {
        const modal = document.getElementById('modalBg');
        modal.style.display = 'none';
    }
    //외부클릭, x버튼 클릭시 닫는 시스템 :)
    window.onclick = function(event) {
        const modal = document.getElementById('modalBg');
        if (event.target == modal) {
            closeModal();
        }
    }

    document.querySelector('.close').onclick = function() {
        closeModal();
    }
    //let 배열 안 데이터 삭제하기
    window.Del = function(itemId) {
        temp = temp.filter(item => item.id !== itemId);
        document.getElementById(itemId).remove();
        closeModal();
    }
});
