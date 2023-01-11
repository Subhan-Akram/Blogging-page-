import Reacr,{useState,useEffect, useRef} from "react"
import Link from 'next/link'
import Container from '../../components/container'
import { fetchEntries } from '../api/comment'
import BlogCards from '../../components/blog-card/BlogCards'
import { FaRocket } from 'react-icons/fa'


export default function NotePage({posts}) {
  let ref=useRef(null)
  const [filterPost,setFilterPost]=useState([])
  useEffect(()=>{
    setFilterPost(posts)
  },[])


  const filterBlogs=(s)=>{
    let inputValue=ref?.current.value.toLowerCase()

if(inputValue == ""){
     return  setFilterPost(posts)
}
const filteredItems = posts.filter(item => item.title.toLowerCase().includes(inputValue));
setFilterPost(filteredItems);
  }
  return (
    <Container>
      
  <div className='container_home bd_red'>
  

       <div className='blog_search bd_red'>
         <input ref={ref} className='bd_yellow' placeholder='search' onChange={()=>{filterBlogs()}}></input>
         <button  aria-label="Search Buses" className='bd_blue search_icon' onClick={()=>{filterBlogs("f")}}><FaRocket /></button>
       </div>

         <div className='blog_cards bd_red'>
      {filterPost.map((post) => (
          // <article key={post.title} className="mb-10">
            <Link
              as={`/posts/${post.slug}`}
              href="/posts/[slug]"
              className="blog_link bd_yellow text-lg leading-6 font-bold"
            >
                
                        <BlogCards data={post} />
   
                 
             </Link>
         
          // </article>
        
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