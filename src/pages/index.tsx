import { ArrowBackRounded, SearchRounded } from '@mui/icons-material'

import { Button } from '../components/Button'
import { FloatingButton } from '../components/FloatingButton'
import { IconButton } from '../components/IconButton'
import { LinkButton } from '../components/LinkButton'

export default function Home(): JSX.Element {
  return (
    <>
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
      </div>
      <LinkButton href="/search">Procurar</LinkButton>
      <FloatingButton size="large" Icon={SearchRounded} />
    </>
  )
}
