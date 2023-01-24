// export type CommentInputProps = {}

import { CSSProperties, FormEvent, useState } from 'react'
import styled from '@emotion/styled'
import { SendRounded } from '@mui/icons-material'
import { TextField, TextFieldProps } from '@mui/material'

import { IconButton } from '../Button'

const FormStyled = styled.form({
  position: 'relative',
  width: '100%',
  maxWidth: '600px',
})

const IconButtonStyled = styled(IconButton)({
  position: 'absolute',
  bottom: 0,
  right: 0,
  transform: 'translate(50%, 50%) rotate(-45deg)',
})

const textFieldStyles: CSSProperties = {}

type CommentInputProps = TextFieldProps & {
  handleSubmit: (value: string) => void
}

export const CommentInput = ({
  handleSubmit: handleSubmitCb,
  style,
  ...props
}: CommentInputProps): JSX.Element => {
  const [comment, setComment] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    handleSubmitCb(comment)
  }

  return (
    <FormStyled onSubmit={handleSubmit}>
      <TextField
        {...props}
        style={{ ...textFieldStyles, ...style }}
        placeholder="Comente aqui"
        fullWidth
        multiline
        value={comment}
        onChange={e => {
          setComment(e.target.value)
        }}
      >
        comment
      </TextField>

      <IconButtonStyled type="submit" Icon={SendRounded} size="medium" filled />
    </FormStyled>
  )
}
