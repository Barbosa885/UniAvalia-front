import { ArrowBackRounded } from '@mui/icons-material'

import { Button, IconButton } from '../components/Button'

export default function Home(): JSX.Element {
  return (
    <>
      <h1 className="text-8xl">UniAvalia</h1>
      <IconButton Icon={ArrowBackRounded} />
      <Button>Avançar</Button>
      <Button color="secondary">Avançar</Button>
    </>
  )
}
