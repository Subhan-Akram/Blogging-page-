import { useEffect } from 'react'
import type { Comment } from '../../interfaces'
import distanceToNow from '../../lib/dateRelative'
import { useAuth0 } from '@auth0/auth0-react'


export default function CommentList({ comments, onDelete ,data}) {
  const { user } = useAuth0();
  // const { name, picture, email } = user;
// console.log("comments",data,"user",user?.sub,"name",name)
useEffect( ()=>{
 let c=comments()
 console.log("c>>",c)
},[])


  return (
    <div className="space-y-6 mt-10">
      {data?.length>0 &&
        data.map((comment) => {
          // const isAuthor = user && user.sub === comment?.sub
          // const isAdmin =
          //   user && user.email === process.env.NEXT_PUBLIC_AUTH0_ADMIN_EMAIL

          return (
            <div key={comment.sub} className="flex space-x-4">
              <div className="flex-shrink-0">
                <img
                  src={comment?.picture}
                  alt={comment?.name[0].toUpperCase()}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>

              <div className="flex-grow">
                <div className="flex space-x-2">
                  <b>{comment?.name}</b>
                  <time className="text-gray-400">
                    {comment?.createdAt}
                  </time>
                  {/* {(isAdmin || isAuthor) && (
                    <button
                      className="text-gray-400 hover:text-red-500"
                      onClick={() => onDelete(comment)}
                      aria-label="Close"
                    >
                      x
                    </button>
                  )} */}
                </div>

                <div>{comment?.content}</div>
              </div>
            </div>
          )
        })}
    </div>
  )
}
