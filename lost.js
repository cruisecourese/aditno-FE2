document.addEventListener('DOMContentLoaded', function() {
    let temp = [
        {
            id: "1",
            title: "에어팟 프로 오른쪽을 잃어버렸어요.",
            info: "에어팟 프로 2세대 오른쪽을 잃어버렸어요.",
            tags: ["1층", "에어팟", "2학년 4반 신희성"],
            image: "./images/temp.jpg",
            imageText: "Related image",
            moreinfo: "SRC 1층에서 에어팟 오른쪽 하나를 잃어버렸어요 흰색이에요"
        },
        {
            id: "2",
            title: "에어팟 프로 오른쪽을 잃어버렸어요.",
            info: "에어팟 프로 2세대 오른쪽을 잃어버렸어요.",
            tags: ["1층", "에어팟", "2학년 4반 신희성"],
            image: "./images/temp.jpg",
            imageText: "Related image",
            moreinfo: "SRC 1층에서 에어팟 오른쪽 하나를 잃어버렸어요 흰색이에요"
        },
        {
            id: "3",
            title: "에어팟 프로 오른쪽을 잃어버렸어요.",
            info: "에어팟 프로 2세대 오른쪽을 잃어버렸어요.",
            tags: ["1층", "에어팟", "2학년 4반 신희성"],
            image: "./images/temp.jpg",
            imageText: "Related image",
            moreinfo: "SRC 1층에서 에어팟 오른쪽 하나를 잃어버렸어요 흰색이에요"
        },
        {
            id: "4",
            title: "에어팟 프로 오른쪽을 잃어버렸어요.",
            info: "에어팟 프로 2세대 오른쪽을 잃어버렸어요.",
            tags: ["1층", "에어팟", "2학년 4반 신희성"],
            image: "./images/temp.jpg",
            imageText: "Related image",
            moreinfo: "SRC 1층에서 에어팟 오른쪽 하나를 잃어버렸어요 흰색이에요"
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
                <div id="comment">
                    <p>댓글 쓰기</p>
                    <input type="text" id="comInput" placeholder="자신의 물건이라 생각이 들면 댓글을 써주세요.">
                    <div id="comSec"></div>
                </div>
            `;
    
            modal.style.display = 'block';
    
            const comtInput = document.getElementById('comInput');
            comInput.addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    const commentText = comInput.value.trim();
                    if (commentText) {
                        addComment(commentText);
                        comInput.value = '';//자동 새로고침!
                    }
                }
            });
    
            //문제는 로그인 기능이 없는상태라서 옆에 이름을 표시하기가 어렵다는 것...일단 임시값으로 대체해야할듯
            function addComment(text) {
                const commentsSection = document.getElementById('comSec');
                const comment = document.createElement('div');
                comment.classList.add('comment');
                comment.textContent = text;
                commentsSection.appendChild(comment);
            }
        }
    }   

    function closeModal() {
        const modal = document.getElementById('modalBg');
        modal.style.display = 'none';
    }
    window.onclick = function(event) {
        const modal = document.getElementById('modalBg');
        if (event.target == modal) {
            closeModal();
        }
    }

    document.querySelector('.close').onclick = function() {
        closeModal();
    }
});
