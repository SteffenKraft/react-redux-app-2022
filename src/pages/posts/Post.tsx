import { selectPostsById } from '../../features/axios/posts/postsSlice'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
// import Posts from 'features/axios/posts/Posts'

const PostsPage = (): JSX.Element => {
  const { postId } = useParams()
  const post = useAppSelector((state) => selectPostsById(state, Number(postId)))

  return (
    <>
      {post && (
        <p>
          Post title: {post.title} <br />
          Post id {post.id} <br />
          Post body {post.body} <br />
        </p>
      )}
    </>
  )
}

export default PostsPage
