import { ArrowBackRounded, SearchRounded } from '@mui/icons-material'

import { Button } from '../components/Button'
import { FloatingButton } from '../components/FloatingButton'
import { IconButton } from '../components/IconButton'

export default function Home(): JSX.Element {
  return (
    <>
      <h1 className="text-8xl">UniAvalia</h1>
      <IconButton size="small" color="primary" Icon={ArrowBackRounded} />
      <IconButton
        size="large"
        color="secondary"
        Icon={ArrowBackRounded}
        filled
      />
      <Button rounded href="/search">
        Pesquisar
      </Button>
      <Button color="secondary">Cadastrar</Button>
      <FloatingButton size="large" Icon={SearchRounded} />
    </>
  )
}
