export default async function fetchNews() {
    const response = await fetch('path/to/news.json');
    const articles = await response.json();
    return articles;
}