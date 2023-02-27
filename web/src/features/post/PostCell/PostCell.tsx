import type { POST_BY_ID, POST_BY_IDVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { POST_BY_ID_QUERY } from 'src/graphql/queries'
import { CellEmpty } from '../../redwood/CellWrapper/Empty'
import { CellLoading } from '../../redwood/CellWrapper/Loading'
import { CellError } from '../../redwood/CellWrapper/Error'
import PostCardBig from '../PostCardBig/PostCardBig'

export const QUERY = POST_BY_ID_QUERY

export const beforeQuery = (props) => {
  return {
    variables: props,
    fetchPolicy: 'cache-first',
  }
}

export const Loading = () => <CellLoading />

export const Empty = () => <CellEmpty itemName="Post" />

export const Failure = ({ error }: CellFailureProps<POST_BY_IDVariables>) => (
  <CellError message={error.message} />
)

export const Success = ({
  post,
}: CellSuccessProps<POST_BY_ID, POST_BY_IDVariables>) => {
  return (
    <>
      <PostCardBig post={post} />
    </>
  )
}
