import { ArrowBackRounded, SearchRounded } from '@mui/icons-material'

import {
  Button,
  FloatingButton,
  IconButton,
  LinkButton,
} from '../components/Button'
import { Comment } from '../components/Comment'

export default function Home(): JSX.Element {
  const comment: IComment = {
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia',
    agrees: 0,
    disagrees: 0,
    date: new Date(),
    semester: '2021.1',
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
          gap: 16,
          padding: 16,
        }}
      >
        <Comment comment={comment} />
        <Comment comment={comment} />
        <Comment comment={comment} />
      </div>
    </>
  )
}
