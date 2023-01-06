// import type { NextApiRequest, NextApiResponse } from 'next'
// import fetchComment from '../../lib/fetchComment'
// import createComments from '../../lib/createComment'
// import deleteComments from '../../lib/deleteComment'

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   switch (req.method) {
//     case 'GET':
//       return fetchComment(req, res)
//     case 'POST':
//       return createComments(req, res)
//     case 'DELETE':
//       return deleteComments(req, res)
//     default:
//       return res.status(400).json({ message: 'Invalid method.' })
//   }
// }

// /utils/ContentfulApi.js

// export default class ContentfulApi {

//   static async callContentful(query) {
//     const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

//     const fetchOptions = {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ query }),
//     };

//     try {
//       const data = await fetch(fetchUrl, fetchOptions).then((response) =>
//         {
//           console.log(response.json()) 
//           return response.json()
        
//         },

       
//       );
//       return data;
//     } catch (error) {
//       throw new Error("Could not fetch data from Contentful!");
//     }
//   }
// }
// /utils/ContentfulApi.js

// const space = process.env.CONTENTFUL_ACCESS_TOKEN
// const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN
const space="wus7u7nserin"
const accessToken="RyOY-n2lfCBxHAIaMbmvsdTMpj25-T5L-bg1GfJK6kU"
console.log("space",space)
const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

export async function fetchEntries() {
  console.log("entries>>>>>>>>>>>>>>>")
  const entries = await client.getEntries()
   console.log("posts>>",entries)
  if (entries.items) return entries.items
  console.log(`Error getting Entries for .`)
}
export async function getSingleBlogPost(slug) {


  const entry = await client.getEntries({
    content_type: 'busesRoutes',
    limit: 1,
    'fields.slug[in]': slug,
  });

  return entry?.items?.map(item =>{
    const fields = item.fields
    return {
      title: fields.title,
      slug: fields.slug,
      content: fields.content,
      description:fields.description
    };
  })[0];
}
export default { fetchEntries ,getSingleBlogPost}