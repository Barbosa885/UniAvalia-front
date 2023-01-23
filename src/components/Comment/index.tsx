import styled from '@emotion/styled'
import { Paper } from '@mui/material'
import moment from 'moment'

const PaperStyled = styled(Paper)(({ theme }) => ({
  minHeight: 90,
  padding: theme.spacing(2),
  borderRadius: 10,
  boxSizing: 'border-box',

  span: {
    fontSize: 14,
    color: theme.palette.grey[500],
  },

  p: {
    fontSize: 16,
    margin: 0,
  },
}))

export interface CommentProps {
  comment: IComment
}

export const Comment = ({ comment }: CommentProps): JSX.Element => {
  const { message, date, semester, agrees, disagrees } = comment

  return (
    <PaperStyled elevation={3}>
      <span>
        {moment(date).format('D/MM/YY [as] H:mm')} - Cursou em {semester}
      </span>
      <p>{message}</p>
    </PaperStyled>
  )
}
