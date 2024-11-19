const PLAYLIST_ID = 'PLeZ6YstWzTKvbe0dmWj9iqWg6zDXXlw0T';
const API_URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=50&key=YOUR_API_KEY`;

export default async function fetchEpisodes() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data.items.map(item => ({
            videoId: item.snippet.resourceId.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnail: item.snippet.thumbnails.medium.url,
            publishedAt: item.snippet.publishedAt,
            url: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`
        }));
    } catch (error) {
        console.error('Error fetching episodes:', error);
        return [];
    }
}