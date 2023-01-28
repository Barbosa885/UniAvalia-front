import styled from '@emotion/styled'
import { Paper } from '@mui/material'
import Image from 'next/image'

const TEACHER_IMG =
  'https://www.provafacilnaweb.com.br/wp-content/uploads/2020/10/retencao-de-alunos-entenda-o-papel-do-professor-para-evitar-a-evasao-academica-capa-2048x1367-1-1024x684.jpg'

const TeacherContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
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

const PaperStyled = styled(Paper)`
  display: flex;
  flex-direction: row;
  padding: 10px;
  border-radius: 10px;
  width: 100%;
`

export interface SearchCardProps {
  teacherName: string
  disciplineName: string
  style?: React.CSSProperties
}

export function SearchCard({
  disciplineName,
  teacherName,
  style,
}: SearchCardProps): JSX.Element {
  return (
    <PaperStyled elevation={3} style={style}>
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
            alt="Imagem do professor"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="teacher-info">
          <h2>{teacherName}</h2>
          <h3>{disciplineName}</h3>
        </div>
      </TeacherContainerStyled>
    </PaperStyled>
  )
}
