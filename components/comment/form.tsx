import { useAuth0 } from '@auth0/auth0-react'
import { AiOutlineSend } from 'react-icons/ai'

type CommentFormProps = {
  text: string
  setText: Function
  onSubmit: (e: React.FormEvent) => Promise<void>
}

export default function CommentForm({
  text,
  setText,
  onSubmit,
}: CommentFormProps) {
  const { isAuthenticated, logout, loginWithPopup } = useAuth0()

  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="flex w-full max-h-40 p-3 rounded resize-y bg-gray-200 text-gray-900 placeholder-gray-500"
        rows={2}
        placeholder={
          isAuthenticated
            ? `What are your thoughts?`
            : 'Please login to leave a comment'
        }
        onChange={(e) => setText(e.target.value)}
        value={text}
        disabled={!isAuthenticated}
      />

      <div className="flex items-center mt-4">
        {isAuthenticated ? (
          <div className="flex items-center space-x-6">
            <button className="nav_link_btn send ">
              <AiOutlineSend />
            </button>
            {/* <button
              className="text-gray-500"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log Out
            </button> */}
          </div>
        ) : (
          <button
            type="button"
            className="nav_link_btn"
            onClick={() => loginWithPopup()}
          >
            Log In
          </button>
        )}
      </div>
    </form>
  )
}
