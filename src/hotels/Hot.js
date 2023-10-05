import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Hot = () => {
  const data=[
    {
      title:'1',

      desc:'Hotel ',
      path:"/hotel",
      name:"Hotel",
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTcGvUp8LqOEP7DtYJoUv0AGjs8XDS29i7w&usqp=CAU'
    }, {
      title:'2',
      desc:'7 Star Hotels',
      path:"/mhotel",
      name:"Hotel",
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKK1FKr54UgGjh9ZoUlZdZGe65xQ-0wWHWgQ&usqp=CAU'
    },
    {
      title:'3',
      desc:'Hotel Boss(Singapore)',
      path:"/hotel",
      name:"Hotel",
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbl53eKn5BKwkKc7o5lW1OlN1KVdS-By8FBA&usqp=CAU'
    },
    {
      title:'4',
      desc:'Hotel Englishpoint',
      path:"/hotel",
      name:"Hotel",
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqTSmpwotuGPkEEpI2hTCFuXIqJDDiRcsww&usqp=CAU'
    },
    {
      title:'5',
      desc:'Hotel Maris',
      path:"/hotel",
      name:"Hotel",
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTwgfEzAZpvfpJ7R-MXZHuCUdaSZfz5UwZaw&usqp=CAU'
    },
    {
      title:'6',
      desc:'All-inclusive Resorts in Mexico',
      path:"/hotel",
      name:"Hotel",
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLdUIOA9MzChl4n8S9YFZowgfx_wvwJZKQcA&usqp=CAU'
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

export default Hot


