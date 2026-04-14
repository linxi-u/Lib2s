// script.js
document.querySelectorAll('.drop-zone').forEach(zone => {
    // 点击上传
    zone.addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                alert(`已选择文件: ${file.name}`);
                // 这里可以添加更复杂的文件处理逻辑
            }
        };
        input.click();
    });

    // 拖拽高亮效果 (仅为视觉反馈)
    zone.addEventListener('dragover', (e) => {
        e.preventDefault();
        zone.classList.add('drag-over');
    });

    zone.addEventListener('dragleave', () => {
        zone.classList.remove('drag-over');
    });

    zone.addEventListener('drop', (e) => {
        e.preventDefault();
        zone.classList.remove('drag-over');
        const file = e.dataTransfer.files[0];
        if (file) {
            alert(`已拖拽文件: ${file.name}`);
            // 这里可以添加文件处理逻辑
        }
    });
});
