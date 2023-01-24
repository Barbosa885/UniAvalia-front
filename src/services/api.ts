import axios from 'axios'

const api = axios.create({
  baseURL: 'https://k55eka.deta.dev/',
})

class ApiService {
  async getDisciplines(): Promise<void> {
    const res = await api.get('disciplinas_professores').catch(err => {
      console.log(err)
    })
    console.log(res?.data)
  }
}

const apiService = new ApiService()
export default apiService
