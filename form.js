document.addEventListener('DOMContentLoaded', () => { //충돌을 줄이기 위한 나중 로드!
    const tagInput = document.getElementById('tagsIn');
    const tagList = document.getElementById('tags');

    tagInput.addEventListener('input', () => {
        const tags = tagInput.value.split('/');//슬레쉬를 기준으로 나누는 코드
        tagList.innerHTML = ''; // 기존 태그 목록을 초기화 :)

        tags.forEach(tag => {
            if (tag.trim() !== '') {
                const tagElement = document.createElement('div');
                tagElement.classList.add('tag');
                const tagContent = document.createElement('h6');
                tagContent.textContent = tag.trim();
                tagElement.appendChild(tagContent);
                tagList.appendChild(tagElement);//태그 만들기
            }
        });
    });
});
//여기서부터는 파일 드레그 앤 드롭 구현
const dropArea = document.getElementById("drop-area");
const fileInput = document.getElementById("file-input");
const imagePreview = document.getElementById("image-preview");

// 드래그 앤 드롭 이벤트 처리 기능(블로그의 도움을 전적으로 받았지만...)
dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropArea.style.backgroundColor = "#eee";
});

dropArea.addEventListener("dragleave", () => {
    dropArea.style.backgroundColor = "#fff";
});

dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    dropArea.style.backgroundColor = "#fff";
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image")) {
        displayImage(file);
    }
});

fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (file && file.type.startsWith("image")) {
        displayImage(file);
    }
});

dropArea.addEventListener("click", () => {
    fileInput.click();
});

function displayImage(file) {
    const reader = new FileReader();
    reader.onload = () => {
        imagePreview.src = reader.result;
        imagePreview.style.display = "block";
    };
    reader.readAsDataURL(file);
}