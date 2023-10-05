import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Hote = () => {
  const data=[
    {
      title:'1',
      path:"/hotel",
      name:"Hotel",
      desc:'Robot with A Computer image',
      img:'data:image/jpeg;base64,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'
    }, {
      title:'2',
      path:"/hotel",
      name:"Hotel",
      desc:'The Peninsula Hotels',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo-nn3_x_34CSP3nQ17wT4DLed49aGR2giTQ&usqp=CAU'
    },
    {
      title:'3',
      path:"/hotel",
      name:"Hotel",
      desc:'Houghton Hotel',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_PaCBrUI67KfVFAdnW-MFvIeJYsmh0hm25Q&usqp=CAU'
    },
    {
      title:'4',
      path:"/hotel",
      name:"Hotel",
      desc:'This new hotel in the hills',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDvKDovDDbi5a1ikSZreh5hxhSnOxY4ION_w&usqp=CAU'
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
                    <div className='col-11 col-md-6 col-lg-6 mx-0 mb-4'>
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

export default Hote


