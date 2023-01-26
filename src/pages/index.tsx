import { ArrowBackRounded, SearchRounded } from '@mui/icons-material'

import {
  Button,
  FloatingButton,
  IconButton,
  LinkButton,
} from '../components/Button'
import SearchCard from '../components/Card/SearchResult'
import { CommentInput } from '../components/CommentInput'

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

      <div>
        <SearchCard></SearchCard>
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
