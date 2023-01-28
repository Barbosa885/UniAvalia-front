import styled from '@emotion/styled'
import { SearchRounded } from '@mui/icons-material'
import { TextField, TextFieldProps } from '@mui/material'
import { useRouter } from 'next/router'

import { IconButton } from '../Button'
import { Switch } from '../Switch'

const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '.5rem',

  '.input-container': {
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    width: '90%',
  },
})

export type SearchBarProps = TextFieldProps & {
  isTeacher: boolean
  setIsTeacher: (isTeacher: boolean) => void
}

export const SearchBar = ({
  isTeacher,
  setIsTeacher,
  ...props
}: SearchBarProps): JSX.Element => {
  const router = useRouter()

  return (
    <StyledForm>
      <div className="input-container">
        <TextField placeholder="Pesquise aqui" fullWidth {...props} />
        <IconButton
          filled
          size="large"
          onClick={router.back}
          color="primary"
          Icon={SearchRounded}
        />
      </div>

      <Switch isTeacher={isTeacher} setIsTeacher={setIsTeacher} />
    </StyledForm>
  )
}

export default SearchBar
