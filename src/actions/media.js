import { uploadMediaApi, getMediaFromFolderApi } from '../apis/media'
import { requestFinish, requestStart } from './loading.js'

const uploadMediaSuccess = () => ({
    type: 'UPLOAD_MEDIA_SUCCESS'
  })
  
  const uploadMediaFailed = () => ({
    type: 'UPLOAD_MEDIA_FAILED'
  })
  
export const doUploadMedia = (file) => async dispatch => {

    dispatch(requestStart())

    try {
        const data = await uploadMediaApi(file)
        console.log(data)
    } catch (e) {
        console.error(e)
    }

    dispatch(requestFinish())

}

export const doGetMediaFromFolder = (folder) => async dispatch => {

    dispatch(requestStart())

    try {
        const data = await getMediaFromFolderApi(folder)
        console.log(data)
    } catch (e) {
        console.error(e)
    }

    dispatch(requestFinish())

}