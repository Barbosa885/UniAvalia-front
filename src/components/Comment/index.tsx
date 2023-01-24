import styled from '@emotion/styled'
import { Paper } from '@mui/material'
import moment from 'moment'

import { Agree } from '../Agree'

const PaperStyled = styled(Paper)(({ theme }) => ({
  position: 'relative',
  minHeight: 90,
  padding: theme.spacing(2),
  borderRadius: 10,
  boxSizing: 'border-box',

  p: {
    fontSize: 16,
    margin: 0,
  },

  '.agree-btns': {
    position: 'absolute',
    bottom: 0,
    right: theme.spacing(2),
    transform: 'translateY(50%)',
    zIndex: 1,
    display: 'flex',
    gap: theme.spacing(1),
  },
}))

const PStyled = styled.p(({ theme }) => ({
  fontSize: 14,
  color: theme.palette.grey[500],
}))

export interface CommentProps {
  comment: IComment
  onAgree?: () => void
  onDisagree?: () => void
}

export const Comment = ({
  comment,
  onAgree,
  onDisagree,
}: CommentProps): JSX.Element => {
  const { message, date, semester, agrees, disagrees, agreed, disagreed } =
    comment

  const formattedDate = moment(date).format('D/MM/YY [as] H:mm')

  return (
    <PaperStyled elevation={3}>
      <PStyled className="comment-timestamp">
        {formattedDate} - Cursou em {semester}
      </PStyled>

      <p className="comment-message">{message}</p>

      <div className="agree-btns">
        <Agree onClick={onAgree} active={agreed} count={agrees} />

        <Agree
          onClick={onDisagree}
          active={disagreed}
          count={disagrees}
          isDisagree
        />
      </div>
    </PaperStyled>
  )
}
