import { useState } from 'react'
import styled from '@emotion/styled'
import { ArrowBackRounded } from '@mui/icons-material'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { IconButton } from '../../../../components/Button'
import { Comment } from '../../../../components/Comment'
import { CommentInput } from '../../../../components/CommentInput'

const TEACHER_IMG =
  'https://www.provafacilnaweb.com.br/wp-content/uploads/2020/10/retencao-de-alunos-entenda-o-papel-do-professor-para-evitar-a-evasao-academica-capa-2048x1367-1-1024x684.jpg'

const exampleComment: IComment = {
  id: 0,
  message:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia',
  agrees: 15,
  disagrees: 3,
  date: new Date(),
  semester: '2021.1',
  agreed: false,
  disagreed: true,
}

const exampleClass: IDiscipline = {
  teacherId: 0,
  disciplineId: 0,
  disciplineName: 'Matemática',
  teacherName: 'João da Silva',
  comments: [
    { ...exampleComment, id: 1 },
    { ...exampleComment, id: 2 },
    { ...exampleComment, id: 3 },
  ],
}

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 16px 32px;
`

const TeacherContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;

  & .teacher-info {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2,
    h3 {
      margin: 0;
    }

    h2 {
      font-weight: bold;
    }

    h3 {
      font-weight: normal;
    }
  }
`

const CommentsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

function TeacherDisciplinePage(): JSX.Element {
  const router = useRouter()
  const { teacherId, disciplineId } = router.query

  const [cclass, setCclass] = useState<IDiscipline>(exampleClass)
  const [comments, setComments] = useState<IComment[]>(cclass?.comments)

  const handleAgree = (id: number, isAgree: boolean): void => {
    setComments(comments => {
      const newComments = comments.map(comment => {
        if (comment.id !== id) return comment

        if (isAgree)
          return {
            ...comment,
            disagreed: false,
            agreed: !comment.agreed,
            agrees: comment.agrees + (comment.agreed ? -1 : 1),
            disagrees: comment.disagrees + (comment.disagreed ? -1 : 0),
          }

        return {
          ...comment,
          disagreed: !comment.disagreed,
          agreed: false,
          agrees: comment.agrees + (comment.agreed ? -1 : 0),
          disagrees: comment.disagrees + (comment.disagreed ? -1 : 1),
        }
      })

      return newComments
    })
  }

  return (
    <ContainerStyled>
      <div className="">
        <IconButton
          color="primary"
          size="medium"
          Icon={ArrowBackRounded}
          onClick={router.back}
        />
      </div>

      <TeacherContainerStyled>
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: 9999,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Image
            src={TEACHER_IMG}
            alt="Professor"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className="teacher-info">
          <h2>{cclass.teacherName}</h2>
          <h3>{cclass.disciplineName}</h3>
        </div>
      </TeacherContainerStyled>

      <CommentInput handleSubmit={() => undefined} />

      <div className="">
        <h4 style={{ marginTop: 10 }}>Comentários</h4>

        <CommentsContainerStyled>
          {comments.map(comment => (
            <Comment
              key={comment.id}
              comment={comment}
              onAgree={() => {
                handleAgree(comment.id, true)
              }}
              onDisagree={() => {
                handleAgree(comment.id, false)
              }}
            />
          ))}
        </CommentsContainerStyled>
      </div>
    </ContainerStyled>
  )
}

export default dynamic(
  async () => await Promise.resolve(TeacherDisciplinePage),
  {
    ssr: false,
  },
)
