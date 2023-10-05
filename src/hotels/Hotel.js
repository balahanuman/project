import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Hotel = () => {
  const data=[
    {
      title:'1',
      path:"/hot",
      name:"Hot",
      desc:'Radisson',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_LBgRTFFWINzeyhAz9U9UE4WeScb6SzJa1g&usqp=CAU'
    }, {
      title:'2',
      path:"/hote",
      name:"Hote",
      desc:'Aj Grand Hotel,Mangalore',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-K28gK0fc2VKQ8aQdx545enZVGFWWDEpIZA&usqp=CAU'
    },
    {
      title:'3',
      path:"/hot",
      name:"Hot",
      desc:'Dream Hotel',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc-qn0xJeI7b1d5b_PSbfJjLUNS1pY9enZmA&usqp=CAU'
    },
    {
      title:'4',
      path:"/hotels",
      name:"Hotels",
      desc:'Radisson Hotels',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjQoTBqn9q9_Buqx9GwSPSxoFhS-5JnM7b3w&usqp=CAU'
    },
    {
      title:'5',
      path:"/hotel",
      name:"Hotel",
      desc:'Mgallery Minaro',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNMVLv0YQeEVlJOuFuZsG0EHlWw5t8UVww8A&usqp=CAU'
    },
    {
      title:'6',
      path:"/hotel",
      name:"Hotel",
      desc:'Taj open new hotel-Taj Lakefront',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXTFAJoLaAfp71W699LXj9Atp0vzrCTN5rcw&usqp=CAU'
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
                        <Link to ={item.path}>{item.name}</Link>
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

export default Hotel


