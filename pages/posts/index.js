import {getAllPosts} from "../../lib/post-util"
import AllPosts from "../../components/posts/all-posts"


function AllPostsPage(props){

    return (
        <>
        <AllPosts posts={props.posts}/>
        </>
    )
}

export function getStaticProps(){

  const allPosts=getAllPosts();

  return {
    props:{
      posts:allPosts
    }
  }
}

export default AllPostsPage;