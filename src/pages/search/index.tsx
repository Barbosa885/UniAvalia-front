import { useEffect, useMemo, useState } from 'react'
import { Virtuoso } from 'react-virtuoso'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

import SearchBar from '../../components/SearchBar'
import { SearchCard } from '../../components/SearchCard'
import apiService from '../../services/api'

const SearchContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 16px 0;

  height: 100vh;

  .search-res {
    text-align: center;
  }
`

const removeAccentsLowerCase = (str: string): string =>
  str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()

export default function Search(): JSX.Element {
  const router = useRouter()

  const [disciplines, setDisciplines] = useState<IDiscipline[]>([])
  const [search, setSearch] = useState<string>('')
  const [isTeacher, setIsTeacher] = useState(true)

  const filteredDisciplines = useMemo(() => {
    const searchLower = removeAccentsLowerCase(search)

    return disciplines.filter(discipline =>
      removeAccentsLowerCase(
        discipline[isTeacher ? 'teacherName' : 'disciplineName'],
      )
        .toLowerCase()
        .includes(searchLower),
    )
  }, [disciplines, isTeacher, search])

  const notFoundString = useMemo(
    () =>
      isTeacher
        ? 'Nenhum professor encontrado'
        : 'Nenhuma disciplina encontrada',
    [isTeacher],
  )

  useEffect(() => {
    void apiService.getDisciplines().then(setDisciplines)
  }, [])

  return (
    <SearchContainerStyled>
      <SearchBar
        value={search}
        onChange={e => {
          setSearch(e.target.value)
        }}
        isTeacher={isTeacher}
        setIsTeacher={setIsTeacher}
      />

      {/* eslint-disable multiline-ternary */}
      {filteredDisciplines.length > 0 ? (
        <Virtuoso
          data={filteredDisciplines}
          itemContent={(i, discipline) => (
            <SearchCard
              key={`${discipline.disciplineId}-${discipline.teacherId}`}
              disciplineName={discipline.disciplineName}
              teacherName={discipline.teacherName}
              style={{ width: '95%', margin: '16px auto' }}
              onClick={() => {
                void router.push(
                  `/teachers/${discipline.teacherId}/disciplines/${discipline.disciplineId}`,
                )
              }}
            />
          )}
          style={{
            position: 'relative',
            width: '100%',
          }}
        />
      ) : (
        <p className="search-res">
          {search.length > 0 ? notFoundString : 'Aguardando pesquisa...'}
        </p>
      )}
      {/* eslint-enable multiline-ternary */}
    </SearchContainerStyled>
  )
}
