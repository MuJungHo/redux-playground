import { instance } from './base.js'

export const uploadMediaApi = async (file) => {
  try {
    var formData = new FormData()
    formData.append('Filedata', file)
    formData.append('mtitle', file.name)
    formData.append('udid', 1)
    formData.append('foid', 0)
    formData.append('filesize', file.size)
    formData.append('overwrite', 0)

    const response = await instance.post('/upload/psn_mod/upload.py', formData)
    return response.data
  } catch (e) {
    console.error(e)
  }
}

export const getMediaFromFolderApi = async folder => {
    try {
        var formData = new FormData()
        formData.append('cmd', 'getmedialist')
        formData.append('foid', 0)
        formData.append('udid', 1)
        const response = await instance.post('/psn_mod/media.py', formData)
        return response.data
    } catch (e) {
        console.error(e)
    }
}