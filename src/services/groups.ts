import axios from '@/utils/axios'

const URL = '/api/v1/groups'

export default {
  fetchPublicGroups: () => axios.get(URL),

  fetchGroupInfo: (uuid: string) => axios.get(`${URL}/${uuid}`),

  createGroup: (data: {}) => axios.post(URL, data),

  fetchChannelInfo: (uuid: string) => axios.get(`${URL}/channels/${uuid}`),

  createChannel: (groupId: number, data: {}) => axios.post(`${URL}/${groupId}/channels`, data),

  removeChannel: (id: number) => axios.delete(`${URL}/channels/${id}`)
}
