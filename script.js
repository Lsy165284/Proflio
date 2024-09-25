document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');

    // Read More / Read Less 功能
    document.querySelectorAll('.writing-piece').forEach(function(article) {
        const readMoreBtn = article.querySelector('.read-more');
        const readLessBtn = article.querySelector('.read-less');
        const excerpt = article.querySelector('.writing-excerpt');
        const fullContent = article.querySelector('.writing-full-content');

        if (readMoreBtn && readLessBtn && excerpt && fullContent) {
            readMoreBtn.addEventListener('click', function() {
                excerpt.style.display = 'none';
                fullContent.style.display = 'block';
            });

            readLessBtn.addEventListener('click', function() {
                fullContent.style.display = 'none';
                excerpt.style.display = 'block';
            });
        } else {
            console.error('One or more elements for Read More/Less functionality not found in an article');
        }
    });

    // 添加平滑滚动功能
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                console.error('Target element not found:', targetId);
            }
        });
    });
});

console.log('Script loaded');