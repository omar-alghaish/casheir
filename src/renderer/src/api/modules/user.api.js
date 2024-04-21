import privateClient from '../client/private.client'
import publicClient from '../client/public.client'

const userEndpoints = {
  signin: 'user/signin',
  getInfo: 'user/info'
}

const userApi = {
  signin: async ({ id, username, password }) => {
    try {
      console.log('send request')
      const response = await publicClient.post(userEndpoints.signin, { id, username, password })

      return { response }
    } catch (err) {
      console.log('err')
      return { err }
    }
  },
  getInfo: async () => {
    try {
      const response = await privateClient.get(userEndpoints.getInfo)

      return { response }
    } catch (err) {
      return { err }
    }
  }
}

export default userApi
