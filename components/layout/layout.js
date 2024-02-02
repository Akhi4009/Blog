import MainNavigation from "./main-navigation";
import {Toaster} from "react-hot-toast"

function Layout(props){
    return(
        <>
       <MainNavigation/> 
       <main>
       {props.children}
       </main>
       <Toaster 
       position="top-center" gutter={12}
       containerStyle={{margin:"8px"}}
       toastOptions={{
         success:{
           duration:3000
         },
         error:{
           duration:1000,
         },
         style:{
           fontSize:"16px",
           maxWidth:"500px",
           padding:"16px 24px",
           backgroundColor:"var(--color-primary-100)",
           color:"var(--color-grey-50)"
         }
       }}
       />
        </>
    )
}

export default Layout;
