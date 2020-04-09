import { instance } from './base.js'

export const postAuthApi = async ({ email, passWord }) => {
  try {
    const response = await instance.post('/user/loginUser', { email, passWord })
    return response.data
  } catch (e) {
    console.error(e)
  }
}