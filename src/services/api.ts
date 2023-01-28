import axios from 'axios'

const api = axios.create({
  baseURL: 'https://k55eka.deta.dev/',
})

interface ApiDiscipline {
  disciplina_id: number
  disciplina_nome: string
  professor_id: number
  professor_nome: string
}

class ApiService {
  async getDisciplines(): Promise<IDiscipline[]> {
    const res = await api
      .get('disciplinas_professores')
      .then(res => res.data as ApiDiscipline[])
      .catch(err => {
        console.log(err)
        return [] as ApiDiscipline[]
      })

    return res.map(discipline => ({
      disciplineId: discipline.disciplina_id,
      disciplineName: discipline.disciplina_nome,
      teacherId: discipline.professor_id,
      teacherName: discipline.professor_nome,
      comments: [],
    }))
  }
}

const apiService = new ApiService()
export default apiService
