import ReactMarkDown from "react-markdown"
import PostHeader from "./post-header";
import classes from "./post-content.module.css"
import Image from "next/image";




function PostContent(props) {
    const {post} = props;
    const imagePath = `/images/posts/${post?.slug}/${post?.image}`

    const customRenderers = {
        image(image) {
            return  (<Image 
            src={`/images/posts/${post.slug}/${image.src}`} 
            alt={image.alt} 
            width={600} 
            height={300}
            />
            );
        }
    }
    
    
   
    return (
        <article className={classes.content}>
        <PostHeader title={post?.title} image={imagePath}/>
        <ReactMarkDown>
        {post?.content}
        </ReactMarkDown>
        </article>
    )
}

export default PostContent;