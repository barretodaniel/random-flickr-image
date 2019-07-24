export function getRandomIndex(length = 0) {
    if (typeof length !== 'number') {
        return 0;
    }

    if (length < 2) {
        return 0;
    }

    return Math.floor(Math.random() * length);
}

export function buildImageUrl({ farmId, serverId, id, secret, size } = {}) {
    const propertiesToValidate = [
        ['farmId', farmId],
        ['serverId', serverId],
        ['id', id],
        ['secret', secret]
    ];
    const missing = propertiesToValidate.filter(p => p[1] === null || p[1] === undefined);
    if (missing.length > 0) {
        throw new Error(
            `The following ${
                missing.length > 1 ? 'properties are' : 'property is'
            } missing: ${missing.map(p => p[0]).join(', ')}`
        );
    }

    if (!size) {
        return `https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}.jpg`;
    }
    return `https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}_${size}.jpg`;
}
