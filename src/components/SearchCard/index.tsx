import styled from '@emotion/styled'
import { ButtonBase, ButtonBaseProps, Paper } from '@mui/material'
import Image from 'next/image'

const TEACHER_IMG =
  'https://www.provafacilnaweb.com.br/wp-content/uploads/2020/10/retencao-de-alunos-entenda-o-papel-do-professor-para-evitar-a-evasao-academica-capa-2048x1367-1-1024x684.jpg'

const ButtonBaseStyled = styled(ButtonBase)`
  display: flex;
  border-radius: 10px;
`

const PaperStyled = styled(Paper)`
  display: flex;
  flex-direction: row;
  padding: 10px;
  border-radius: 10px;
  width: 100%;
`

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
      text-align: left;
      text-transform: none;
      font-family: 'Poppins', sans-serif;
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

export interface SearchCardProps extends ButtonBaseProps {
  teacherName: string
  disciplineName: string
}

export function SearchCard({
  disciplineName,
  teacherName,
  ...props
}: SearchCardProps): JSX.Element {
  return (
    <ButtonBaseStyled {...props}>
      <PaperStyled elevation={3}>
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
              sizes="100%"
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
    </ButtonBaseStyled>
  )
}
