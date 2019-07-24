import axios from 'axios';

const FlickrKey = '80d201a12bbe5681186384688155e4d9';

export function getRecentPhotos() {
    return axios.get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${FlickrKey}&format=json&nojsoncallback=1`
    );
}
