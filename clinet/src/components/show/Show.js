import React, { useEffect, useState } from 'react'
import './Show.css'
import { useParams } from 'react-router-dom'

const Show = () => {
    const [srcDoc, setSrcDoc] = useState('')
    const [result, setResult] = useState()

    const [html, setHtml] = useState('')
    const [css, setCss] = useState('')
    const [js, setJs] = useState('')
    const id = useParams()
    console.log(id.id)

  const getDetails = async () => {
    let data = await fetch(`http://localhost:4000/code/show/${id.id}`)
    data = await data.json()
    setResult(data.result)
    // setHtml(result.html)
    // setHtml(result.css)
    // setHtml(result.js)
    setSrcDoc(`
    <html>
            <body>${data.result.html}</body>
           <style>${data.result.css}</style>
          
         </html>
        `)
    }
    
    
    
  
  useEffect(() => {
    getDetails();
  },[])


  


  


  
  return (
    <div className='show'>
      {
        result &&  <iframe
        srcDoc = {srcDoc}
        title='output'
        allowFullScreen = {true}
        sandbox='allow-scripts'
        frameBorder="0"
        className='show-iframe-container'
        />
      }
      
    </div>
  )
}

export default Show
