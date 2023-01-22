import { ArrowBackRounded } from '@mui/icons-material'

import { Button } from '../components/Button'
import { IconButton } from '../components/IconButton'

export default function Home(): JSX.Element {
  return (
    <>
      <h1 className="text-8xl">UniAvalia</h1>
      <IconButton color="primary" Icon={ArrowBackRounded} />
      <IconButton color="secondary" Icon={ArrowBackRounded} filled />
      <Button rounded href="/search">
        Pesquisar
      </Button>
      <Button color="secondary">Cadastrar</Button>
    </>
  )
}
