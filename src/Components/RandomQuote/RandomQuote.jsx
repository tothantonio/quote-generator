import React, {useState} from 'react'
import './RandomQuote.css'
import twitter_icon from '../Assets/icons8-twitterx-50.png'
import refresh_icon from '../Assets/icons8-reload-50.png'

const RandomQuote = () => {

    let quotes = [];

    async function loadQuotes(){
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }

    const [quote, setQuote] = useState({
        text: 'Difficulties increase the nearer we get to the goal.',
        author: 'Johann Wolfgang von Goethe',
    });

    const random = () => {
        const select = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(select); 
    }

    const twitter = () => {
        window.open('https://twitter.com/intent/tweet?text=' + quote.text + ' - ' + quote.author.split(',')[0]); 
    }

    loadQuotes(); 
  return (
    <div className='container'>
        <div className="quote">{quote.text}</div>
        <div>
            <div className="line"></div>
            <div className="bottom">
                <div className='author'>- {quote.author.split(',')[0]}</div>
                <div className='icons'>
                    <img src={refresh_icon} onClick={()=>{random()}} alt=''/>
                    <img src={twitter_icon} onClick={()=>{twitter()}} alt=''/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RandomQuote