// 팝업 열기
function openModal(title, date, content) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDate').innerText = '작성일: ' + date;
    document.getElementById('modalContent').innerText = content;
    document.getElementById('modalOverlay').style.display = 'flex';
}

// 팝업 닫기
function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
}

// 배경 검은 부분을 클릭해도 팝업이 닫히도록 설정
document.getElementById('modalOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});