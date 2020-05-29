import { uploadMediaApi, getMediaFromFolderApi } from '../apis/media'
import { requestFinish, requestStart } from './loading.js'
import { parseString } from 'xml2js'

const uploadMediaSuccess = () => ({
    type: 'UPLOAD_MEDIA_SUCCESS'
})
  
const uploadMediaFailed = () => ({
    type: 'UPLOAD_MEDIA_FAILED'
})
  
const getMediaFromFolderSuccess = medias => ({
    type: 'GET_MEDIA_FROM_FOLDER_SUCCESS',
    medias
})

export const doUploadMedia = (file) => async dispatch => {

    dispatch(requestStart())

    try {
        const xml = await uploadMediaApi(file)
        parseString(xml, (err, result) => {
            result.root.result[0] === '0'
            ? dispatch(uploadMediaSuccess())
            : dispatch(uploadMediaFailed())
        })
    } catch (e) {
        console.error(e)
    }

    dispatch(requestFinish())

}

export const doGetMediaFromFolder = folder => async dispatch => {

    dispatch(requestStart())

    try {
        const xml = await getMediaFromFolderApi(folder)
        parseString(xml, (err, result) => {
            if(result.root.result[0] === '0') dispatch(getMediaFromFolderSuccess(result.root.media_info))
        })
    } catch (e) {
        console.error(e)
    }

    dispatch(requestFinish())

}