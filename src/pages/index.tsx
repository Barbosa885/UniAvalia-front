import { ArrowBackRounded, SearchRounded } from '@mui/icons-material'

import {
  Button,
  FloatingButton,
  IconButton,
  LinkButton,
} from '../components/Button'
import { CommentInput } from '../components/CommentInput'
export default function Home(): JSX.Element {
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

      <div style={{ padding: 20 }}>
        <CommentInput
          handleSubmit={value => {
            console.log(`value: ${value}`)
          }}
        />
      </div>
    </>
  )
}
