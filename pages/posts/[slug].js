import PostContent from "../../components/posts/pos-detail/post-content"
import { getPostData, getPostsFile } from "../../lib/post-util"
function PostDetailsPage(props){

    return(
        <>
       <PostContent post={props.post}/ >
        </>
    )
}

export function getStaticProps(context){
    const {params:{slug}} = context;
    const postData = getPostData(slug)

   return {
    props:{
        post:postData
    },
    revalidate:600
   }
}

export function getStaticPaths(){

  const postFilename =  getPostsFile();
  const slugs = postFilename.map(fileName=>fileName.replace(/\.md$/,''))

    return{
        paths:slugs.map(slug=>({params:{slug:slug}})),
        fallback:true
    }
}

export default PostDetailsPage;