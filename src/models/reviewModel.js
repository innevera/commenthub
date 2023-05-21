import T from 'prop-types';
const { string, bool, number, shape, arrayOf } = T;

/**
 * @typedef {Object} mediaFiles
 * @property {Number} id
 * @property {String} url
 * @property {String} thumbnailUrl
 * @property {String} mediaType
 */

/**
 * @typedef {Object} ReviewModel
 * @property {Boolean} isElite
 * @property {Boolean} isInfluencer
 * @property {String} commentDate
 * @property {String} userFullName
 * @property {Number} id
 * @property {Number} rate
 * @property {String} commentTitle
 * @property {String} comment
 * @property {Boolean} trusted
 * @property {String} lastModifiedDate
 * @property {Number} positiveFlagCount
 * @property {Number} negativeFlagCount
 * @property {Boolean} userLiked
 */
export const ReviewModel = shape({
    isElite: bool,
    isInfluencer: bool,
    commentDate: string,
    userFullName: string,
    id: number,
    rate: number,
    commentTitle: string,
    comment: string,
    trusted: bool,
    lastModifiedDate: string,
    positiveFlagCount: number,
    negativeFlagCount: number,
    userLiked: bool,
    mediaFiles: arrayOf(
        shape({
            id: number,
            url: string,
            thumbnailUrl: string,
            mediaType: string,
        })
    )
});