import React, { useEffect, useState } from 'react';
import { getRecentPhotos } from './api';
import { buildImageURL, getRandomIndex } from './utils';

const ONE_SECOND = 1000;
export const Sizes = {
    /** 75x75 */
    SmallSquare: 's',
    /** 150x150 */
    LargeSquare: 'q',
    /** 100 on longest side */
    Thumbnail: 't',
    /** 240 on longest side */
    Small240: 'm',
    /** 320 on longest side */
    Small320: 'n',
    /** 640 on longest side */
    Medium640: 'z',
    /** 800 on longest side */
    Medium800: 'c',
    /** 1024 on longest side */
    Large1024: 'b'
};

const imgStyles = {
    height: 'auto',
    maxWidth: '100%'
};

export default function RandomFlickrImage({ interval = 3, style = {}, className, size }) {
    const [url, setPhotoURL] = useState('https://via.placeholder.com/150');
    const [name, setPhotoName] = useState('Placeholder');

    const getPhotoURL = async () => {
        try {
            const res = await getRecentPhotos();
            if (res.data.stat === 'ok' && res.data.photos.photo.length > 0) {
                const photoIndex = getRandomIndex(res.data.photos.photo.length);
                const photoInfo = res.data.photos.photo[photoIndex];
                setPhotoURL(
                    buildImageUrl({
                        farmId: photoInfo.farm,
                        serverId: photoInfo.server,
                        id: photoInfo.id,
                        secret: photoInfo.secret,
                        size
                    })
                );
                setPhotoName(photoInfo.title);
            }
        } catch (error) {
            setPhotoURL('');
            setPhotoName('');
        }
    };

    useEffect(() => {
        const timeout = interval * ONE_SECOND;

        let id = setTimeout(function tick() {
            getPhotoURL().then(() => (id = setTimeout(tick, timeout)));
        }, timeout);
        return () => clearTimeout(id);
    }, [interval]);

    return <img className={className} style={{ ...imgStyles, ...style }} src={url} alt={name} />;
}
