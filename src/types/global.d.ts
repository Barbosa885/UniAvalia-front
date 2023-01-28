declare interface IDiscipline {
  teacherId: number
  teacherName: string

  disciplineId: number
  disciplineName: string

  comments: IComment[]
}

declare interface IComment {
  id: number
  message: string
  date: Date
  agrees: number
  disagrees: number

  /** static */
  semester: string
  agreed: boolean
  disagreed: boolean
}
