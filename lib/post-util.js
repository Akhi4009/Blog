import fs from "fs"
import path from "path";
import matter from "gray-matter";

const postsdirectory = path.join(process.cwd(),'content','posts');

function getPostData(fileName){

const filePath=path.join(postsdirectory, fileName)
const fileContent = fs.readFileSync(filePath, 'utf-8');

const {data, content} = matter(fileContent);
// console.log(typeof data)
const postSlug = fileName.replace(/\.md$/, ''); // remove the file etension
const postData={
    slug:postSlug,
    ...data,
    content
};

return postData;
}

export  function getAllPosts(){
    
  const postFiles =  fs.readdirSync(postsdirectory)
// console.log(postFiles)
  
 const allPosts = postFiles.map(postFile=>{
    return getPostData(postFile);
 })
// console.log(allPosts)
const sortedPosts = allPosts.sort((postA,postB)=>postA.date > postB.date ? -1 : 1);

return sortedPosts;

}

export  function getFeaturedPosts(){
    const allPost =getAllPosts()

    // console.log(allPost)
    const featuredPost = allPost.filter(post=>post.isFeatured);

    // console.log(featuredPost)
    return featuredPost;
}
