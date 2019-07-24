import { Sizes } from './RandomFlickrImage';
import { getRandomIndex, buildImageUrl } from './utils';

describe('getRandomIndex', () => {
    test('it returns an index within the bounds of the array length', () => {
        const index = getRandomIndex(100);
        expect(index).toBeGreaterThanOrEqual(0);
        expect(index).toBeLessThan(100);
    });

    test('it returns 0 for lengths less than 2', () => {
        expect(getRandomIndex(1)).toBe(0);
        expect(getRandomIndex(0)).toBe(0);
    });

    test('it returns 0 for anything that is not a number', () => {
        expect(getRandomIndex({})).toBe(0);
        expect(getRandomIndex([])).toBe(0);
        expect(getRandomIndex(function() {})).toBe(0);
        expect(getRandomIndex(undefined)).toBe(0);
        expect(getRandomIndex(null)).toBe(0);
        expect(getRandomIndex('')).toBe(0);
        expect(getRandomIndex('2')).toBe(0);
    });
});

describe('buildImageURL', () => {
    test('it inserts the properties passed', () => {
        expect(
            buildImageUrl({
                farmId: 66,
                serverId: 2,
                id: 2636,
                secret: 'a123456',
                size: Sizes.Small240
            })
        ).toContain('farm66.');

        expect(
            buildImageUrl({
                farmId: 66,
                serverId: 2,
                id: 2636,
                secret: 'a123456',
                size: Sizes.Small240
            })
        ).toContain('staticflickr.com/2');

        expect(
            buildImageUrl({
                farmId: 66,
                serverId: 2,
                id: 2636,
                secret: 'a123456',
                size: Sizes.Small240
            })
        ).toContain('2636_a123456_m');
    });

    test('it omits the size if not passed', () => {
        expect(
            buildImageUrl({
                farmId: 66,
                serverId: 2,
                id: 2636,
                secret: 'a123456'
            })
        ).toContain('2636_a123456.jpg');
    });

    test('throws an error if any required properties are missing', () => {
        expect(() => {
            buildImageUrl();
        }).toThrow();
    });
});
