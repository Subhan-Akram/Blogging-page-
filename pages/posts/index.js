
import Link from 'next/link'
import Container from '../../components/container'
import distanceToNow from '../../lib/dateRelative'
import { getAllPosts } from '../../lib/getPost'
import { fetchEntries } from '../api/comment'
import BlogCards from '../../components/blog-card/BlogCards'
import c1 from "../../images/c2.jpeg"
import Image from 'next/image'
export default function NotePage({posts}) {
  console.log("posts>> ",posts)
  return (
    <Container>
  <div className='container_home bd_red'>
  



         <div className='blog_cards bd_red'>
      {posts.map((post) => (
          <article key={post.title} className="mb-10">
            <Link
              as={`/posts/${post.slug}`}
              href="/posts/[slug]"
              className="text-lg leading-6 font-bold"
            >
                     <div className='blog_cards'>
                        <BlogCards data={post} />
   
                      </div>
            </Link>
         
          </article>
        
        ))}
        </div> 
      
      
    
      
    
      </div>

    </Container>
  )
}

// export async function getStaticProps() {
//   const allPosts = getAllPosts(['slug', 'title', 'excerpt', 'date'])

//   return {
//     props: { allPosts },
//   }
// }

export async function getStaticProps() {
  const res = await fetchEntries()
  const posts = await res.map((p) => {
    console.log(p)
    return p.fields
  })

  return {
    props: {
      posts,
    },
  }
}