import axios from 'axios'

export const postAuthApi = async ({ email, passWord }) => {
  try {
    const response = await axios.post('https://vms.ichenprocin.dsmynas.com/api/v1/user/loginUser', { email, passWord })
    return response.data
  } catch (e) {
    console.error(e)
  }
}