import React, {useEffect, useState} from 'react'

const Task = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // const [items, setItems] = useState([])
  const [items, setItems] = useState(localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):[])
  // console.log(title);
  // console.log(description)

  const inputHandler = (e) =>{

    setTitle(e.target.value)
    // console.log(title)
  }

  useEffect(()=>{
    localStorage.setItem("items", JSON.stringify(items))
  },[items])
  useEffect(()=>{
    items.reverse();
  },[])

  const submitHandler = (e) =>{
    e.preventDefault(); //ye sirf final submit button ke handler me hi likhte hai or sirf tab jab hum form use karte hai
    setItems([...items, {title, description}])
    // console.log(items[0].title)
  }

  const deleteHandler = (index) =>{
    const filteredArray = items.filter((curr, i)=>{
      return i != index
    })

    setItems(filteredArray);
  }

  return (
    <>
      <form >

        <label htmlFor="">Title</label>
        <input type="text" name="title" id=""  value={title} onChange={inputHandler} />
        <br />
        <label htmlFor="">Description</label>
        <input type="text" name="description" id="" value={description}  onChange={e=>setDescription(e.target.value)} />
        <input type="button" value="submit" onClick={submitHandler} />
      </form>

      {
        items.map((curr, index)=>{
          return (<div className='task' key={index}>
          <h3>{curr.title}</h3>
          <p>{curr.description}</p>
          <input type="button" value="delete" onClick={()=>deleteHandler(index)} />
        </div>)
        })
      }
    </>
  )
}

export default Task
