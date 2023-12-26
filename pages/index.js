 import Hero from "../components/home-page/hero"
 import FeaturedPosts from "../components/home-page/featured-posts"
 
 const DUMMY_POSTS=[
  {
    slug:'getting-started-nextjs-1',
   title: 'Nextjs',
   image:'getting-started-nextjs.png',
    excerpt: 'Nextjs is the react framework for production.',
     date: '2023-12-26'
  },
  {
    slug:'getting-started-nextjs-2',
   title: 'Nextjs',
   image:'getting-started-nextjs.png',
    excerpt: 'Nextjs is the react framework for production.',
     date: '2023-12-26'
  },
  {
    slug:'getting-started-nextjs-3',
   title: 'Nextjs',
   image:'getting-started-nextjs.png',
    excerpt: 'Nextjs is the react framework for production.',
     date: '2023-12-26'
  },
  {
    slug:'getting-started-nextjs-4',
   title: 'Nextjs',
   image:'getting-started-nextjs.png',
    excerpt: 'Nextjs is the react framework for production.',
     date: '2023-12-26'
  }
 ];
 function HomePage(){
    return (
        <>
      <Hero/>
      <FeaturedPosts posts={DUMMY_POSTS}/>
        </>
    )
}

export default HomePage;