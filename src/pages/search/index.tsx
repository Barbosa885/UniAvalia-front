import { ArrowBackRounded } from '@mui/icons-material'
import { useRouter } from 'next/router'

import { IconButton } from '../../components/IconButton'

export default function Search(): JSX.Element {
  const router = useRouter()

  return (
    <>
      <h1 className="text-8xl">UniAvalia</h1>
      <IconButton
        onClick={() => {
          router.back()
        }}
        color="primary"
        Icon={ArrowBackRounded}
      />
      <h2 className="text-4xl">Pesquisar</h2>
    </>
  )
}
