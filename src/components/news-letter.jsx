import React from 'react'
import './newsletter.css'

export default function NewsLetter() {
    const [mail, setMail] = React.useState("");
  return (
    <div className='newsletter'>
        <h1>Newsletter</h1>
        <h2>Subscribe to our Newsletter !</h2>
        <h3>And never miss an update about our latest deals.</h3>
        <div className='news-mail'>
            <input placeholder='you@abc.com' value={mail} onChange={(event)=>{setMail(event.target.value)}}/>
            <button onClick={()=>{setMail("")}}> Subscribe</button>
        </div>
    </div>
  )
}
