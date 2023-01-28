import styled from '@emotion/styled'
import { TextField, TextFieldProps } from '@mui/material'

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
  return (
    <StyledForm>
      <div className="input-container">
        <TextField placeholder="Pesquise aqui" fullWidth {...props} />
      </div>

      <Switch isTeacher={isTeacher} setIsTeacher={setIsTeacher} />
    </StyledForm>
  )
}

export default SearchBar
