import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import { FaFacebookF,FaLinkedin} from "react-icons/fa";
import { AiOutlineAmazon} from "react-icons/ai";
const Navbar = ({Children}) => {

    const navItems1=[
    
     {
      path:"/hotels",
      name:"Hotels"
    },
    
     {
       path:"/hote",
       name:"Hote"
     },
    
     {
       path:"/hot",
       name:"Hot"
     },
     {
      path:"/mhotel",
      name:"Mhotel"
    },
   
     
    
   
   
    ]
       const navItems2=[
     {
       path:"/hotel",
       name:"Hotel",
       icon:'https://tse4.mm.bing.net/th?id=OIP.xHeRGrGOQ3MamDexH7UpTwHaHa&pid=Api&P=0&h=180'
     },
     {
       path:"/hot",
       name:"Show More",
       icon:'https://tse4.mm.bing.net/th?id=OIP.ghSutRcwH3FXD0vSWbtrqgHaKO&pid=Api&P=0&h=180'
     },
   
    
    
     {
      path:"/hote",
      name:"About",
      icon:'https://tse3.mm.bing.net/th?id=OIP.F_aOQBs2uLhzRlV5QKQJcAHaHa&pid=Api&P=0&h=180'
     },
     {
      path:"/mhotel",
      name:"Famous hotels",
      icon:'https://tse2.mm.bing.net/th?id=OIP.v8Hy1YhZ7NuKH9lnGWiDhgHaJy&pid=Api&P=0&h=180'
     },
    
    
     
    
   
    
    
   
  
    ]
    const socialIcons=[
      {
        icon:<FaFacebookF/>,
        path:'https://www.facebook.com'
      },
      {
        icon:<AiOutlineAmazon/>,
        path:'https://www.facebook.com'
      },
      {
        icon:<FaLinkedin/>,
        path:'https://www.facebook.com'
      }
    ]
     return (
       <div className='container'>
<div className='topsection'>
  <div className='logo'>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5PsxaYJErDmhXjMw6rLAQJ5YgrjTQsekRYLmn50DPbgiyWYnfXB1tIkxh1wUJFM3qASE&usqp=CAU' alt='' className='logo-img'/>

  </div>
  <div className='topnav'>
         {
           navItems1.map((item,index)=>(<NavLink className='link2' to={item.path} key={index}  activeclassName='active'>
           <div className='link_text2'> {item.name}</div></NavLink>))
   
            }
            </div>
            </div>
            <div className='secondnav'>
         {
           navItems2.map((item,index)=>(<NavLink to={item.path} key={index} className='link' activeclassName='active'>
           <div className='link_text'><img src={item.icon} width={70} height={30}  alt=''/> {item.name}</div></NavLink>))
   
            }
            </div>
<div className='socio'>
  {
    socialIcons.map((social,index)=>(<Link to={social.path} key={index}>{social.icon}</Link>))
  }
</div>
         <main>{Children}</main>
       </div>
     )}

export default Navbar;