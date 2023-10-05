import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Mhotel = () => {
  const data=[
    {
      title:'1',
      desc:'Dubai Hotel',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSAzJwHQNtqnDgO1Lxsf5OI-rMn10URO-08Q&usqp=CAU',
      path:"/hotel",
      name:"Hotel",
    }, 
    {
      title:'2',
      desc:'Rambagh palace is the best hotel',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCE9P-ScXYUnXi5kBfUHajlAUrObV2NAvGMw&usqp=CAU',
      path:"/hotel",
      name:"More",
    }, 
    {
      title:'3',
      desc:'LaLiT Mumbai',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpOgluCJVBxsjneTdm3AyjO2Xk6yapI0oHLw&usqp=CAU',
      path:"/hotel",
      name:"Hotel",
    }, 
    {
      title:'4',
      desc:'Hotel Association of india',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQphpkwVWqdwDDWAHqlN63HYc_RR9bc1hTaXQ&usqp=CAU',
      path:"/hotel",
      name:"Hotel",
    }, 
    {
      title:'5',
      desc:'Goa',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-YGzz83SZUqThGGfPwZ473oCp7zUyQ-rRwbYOwPYq83E8yEraHPc5JMwMXmf8fXujYVQ&usqp=CAU',
      path:"/hotel",
      name:"Hotel",
    }, 
    {
      title:'6',
      desc:'Rico',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6xmvQ-7guk-6ffwxgWEC-7Ufrt2QG84wgGuz7wlpTPyXVHzWLvrAf74Nu6rkCXRfkRuA&usqp=CAU',
      path:"/hotel",
      name:"Hotel",
    }, 
    {
      title:'1',
      path:"/mhotel",
      name:"Know More",
      desc:'Hotel',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZwx6H1BHu1py23BOyk4bGCjbnh9jC0Edts3EwkwsrZLnPoxqQxogFy5OmQ7BmBCM5Spg&usqp=CAU'
    },
    {
      title:'2',
      path:"/mhotel",
      name:"Know More",
      desc:'Nepal',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWwMCF0AKB-BAme8f7dKUY3fMaqVfVZvJmaA&usqp=CAU'
    },
   
   
  ]
  const[search,setSearch]=useState('')
 const searchText=(e)=>{
  setSearch(e.target.value)
 }

    
  
  return (
    <section className='py-4 cotainer'>
        <div className='row justify-content-center'>
          <div className='col-12 mb-5'>
            <div  className='mb-3 col-4 max-auto text-center'>
            <lebal className='form-lable h4'>Search</lebal>  
              <input type='text'className='form-control' value={search} onChange={ searchText} placeholder='Enter Number 1-12'/>

              
            </div>
          </div>
            {data.filter(item=>item.title.toString().toLowerCase().includes(search.toString().toLowerCase())).map((item,index)=>{
                return(
                    <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
                    <div className='card p-0 overflow-hidden h-100 shadow'>
                      <img src={item.img} className='card-img-top' alt=''/> 
                      <div className='card-body'>
                        <h5 className='card-title'>{item.title}</h5>
                        <p className='card-text'>{item.desc}</p>
                        <Link to={item.path}>{item.name}</Link>
                        </div> 
                    </div>
                    </div>
                )
            })

            }
       
        </div>

    </section>
  )
}

export default Mhotel


