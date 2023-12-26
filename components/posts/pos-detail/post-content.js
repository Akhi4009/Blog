import ReactMarkDown from "react-markdown"
import PostHeader from "./post-header";
import classes from "./post-content.module.css"


const DUMMY_POSTS=
    {
      slug:'getting-started-nextjs-1',
     title: 'Nextjs',
     image:'getting-started-nextjs.png',
     content:`# This is the first post`,
       date: '2023-12-26'
    }


function PostContent() {

    const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`
    return (
        <article className={classes.content}>
        <PostHeader title={DUMMY_POSTS.title} image={imagePath}/>
        <ReactMarkDown>
        {DUMMY_POSTS.content}
        </ReactMarkDown>
        </article>
    )
}

export default PostContent;