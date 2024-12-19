async function fetchBitcoinNews() {
    const apiKey = 'YOUR_NEWS_API_KEY'; // Replace with your actual API key
    const apiUrl = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}&pageSize=5`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const newsFeed = document.getElementById('news-feed');
        newsFeed.innerHTML = '';

        data.articles.forEach(article => {
            const articleElement = document.createElement('article');
            articleElement.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.description}</p>
                <a href="${article.url}" target="_blank" rel="noopener noreferrer">Read more</a>
            `;
            newsFeed.appendChild(articleElement);
        });
    } catch (error) {
        console.error('Error fetching Bitcoin news:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchBitcoinNews);

