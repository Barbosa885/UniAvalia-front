import { useState } from 'react'
import { ArrowBackRounded, SearchRounded } from '@mui/icons-material'

import {
  Button,
  FloatingButton,
  IconButton,
  LinkButton,
} from '../components/Button'
import { Comment } from '../components/Comment'

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

export default function Home(): JSX.Element {
  const [comments, setComments] = useState<IComment[]>([
    { ...exampleComment, id: 1 },
    { ...exampleComment, id: 2 },
    { ...exampleComment, id: 3 },
  ])

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
    <>
      <FloatingButton size="large" Icon={SearchRounded} />
      <h1 className="text-8xl">UniAvalia</h1>
      <div className="">
        <IconButton size="small" color="primary" Icon={ArrowBackRounded} />
        <IconButton
          size="large"
          color="secondary"
          Icon={ArrowBackRounded}
          filled
        />
      </div>

      <div className="">
        <Button rounded href="/search">
          Pesquisar
        </Button>
        <Button color="secondary">Cadastrar</Button>
        <LinkButton href="/search">Procurar</LinkButton>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 32,
          padding: 16,
        }}
      >
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
      </div>
    </>
  )
}
