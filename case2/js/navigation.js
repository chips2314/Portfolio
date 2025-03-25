// -------------------- Battle Room Navigation ----------------------------
 // Делегирование событий для ссылок
 document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded');

    // Слушаем клики на всём документе
    document.body.addEventListener('click', function (event) {
        const link = event.target.closest('a[data-page]');
        if (link) {
            event.preventDefault(); // Останавливаем переход по ссылке
            const page = link.getAttribute('data-page');
            console.log('Link clicked:', page);

            if (page) {
                fetch(page)
                    .then(response => {
                        if (response.ok) {
                            return response.text();
                        }
                        throw new Error(`Error fetching page: ${response.status}`);
                    })
                    .then(html => {
                        const parser = new DOMParser();
                        const doc = parser.parseFromString(html, 'text/html');
                        const newContent = doc.querySelector('#content');

                        if (newContent) {
                            document.querySelector('#content').innerHTML = newContent.innerHTML;
                        } else {
                            console.error('No #content found in fetched page');
                        }
                    })
                    .catch(error => console.error(error));
            }
        }
    });
});