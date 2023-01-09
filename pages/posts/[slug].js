
import React from 'react'
import { fetchEntries , getSingleBlogPost} from '../api/comment'
import ReactDOM from 'react-dom';
import Map from "../../components/Map"
import Comment from '../../components/comment'
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
function posts({post}) {
  console.log(post)
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className={paragraphClass(node)}>{children}</p>
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className={titleClass(node)}>{children}</h1>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        let featured=node.data?.target?.fields?.title;
console.log("featrured",featured)
       return (
          <div  className="blog_img" >
            <img
             src={node.data?.target?.fields?.file?.url}
             alt={node.data?.target?.fields?.title}
            className={`${featured=="featured"?"featured_blog_img":"blog_content_img"}`}
           />
          </div>
         )
      },
      [BLOCKS.TABLE_ROW]: (node, children) => { 
        return (
   
          <tr className='table_tr'>{children}</tr>
 
      );
    },
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className='ol'>{children}</ol>
    )
    },
  };
  
  function paragraphClass(node) {
    const className = 'para_text';
    //alternate logic for 'odd' | 'even'
    return className;
  }
    
  function titleClass(node) {
    const className = 'para_title';
    //alternate logic for 'odd' | 'even'
    return className;
  }
  return (
            <div className=' blog_post'>
  
            {documentToReactComponents(post.content,options)}
           <div className=' blog_post'> <Map path={post.mapsCoordinates} /></div>
            <Comment />

    </div>
  )
}

export default posts


export const getStaticProps = async (context) => {
  
  const { slug } = context.params;
  const post = await getSingleBlogPost(slug);

  return {
    props: { post },
  };
};
export const getStaticPaths = async () => {
 
  const posts = await fetchEntries();
  
  const paths = posts?.map(( s ) => ({ params: { slug:s.fields.slug } })) ?? [];

  return {
    paths,
    fallback: false,
  };
}

