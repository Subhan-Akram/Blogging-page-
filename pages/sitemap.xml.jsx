import React from 'react';
import { fetchEntries } from './api/comment';
import * as fs from 'fs'
const Sitemap = () => {
    return null;
};

export const getServerSideProps = async ({ res }) => {
    const BASE_URL = 'https://blogging-page-psi.vercel.app'; //This is where you will define your base url. You can also use the default dev url http://localhost:3000
    const staticPaths = fs.readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "sitemap.xml.js",
        "404.js",
        "_app.js",
        "_document.js",
        "api"
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
    return `${BASE_URL}/${staticPagePath.replace('.js', '')}`;
    });
    
   
    const blogs = await fetchEntries() 
    const dynamicPaths = blogs.map( singleBlog => {
   console.log("url : ",`${BASE_URL}/blogs/${singleBlog.fields.slug}`)
      return `${BASE_URL}/blogs/${singleBlog.fields.slug}`
      
    })
    const allPaths = [...staticPaths, ...dynamicPaths];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
            </url>
          `;
        })
      .join("")}
    </urlset>
  `;

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;