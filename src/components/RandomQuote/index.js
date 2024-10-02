import React, { useState, useEffect } from "react";
import './styles.css';

// export default class RandomQuoteGenerator extends React.Component {
//     state = {
//         quote: '',
//         author: ''
//     };

//     componentDidMount() {
//         this.fetchData();
//     }

//     fetchData = () => {
//         axios.get("https://api.gameofthronesquotes.xyz/v1/random")
//             .then((resp) => {
//                 const q = resp.data.sentence;
//                 const a = resp.data.character.name;
//                 // console.log(q + "\n- " + a);
//                 this.setState({
//                     quote: q,
//                     author: a
//                 })
//             })
//             .catch((err) => {
//                 console.error(err);
//             })
//     };

//     render() {
//         return (
//             <div id="wrapper">
//                 <div id="quote-box">
//                     <p className="quote-text" id="text">{this.state.quote}</p>
//                     <p className="quote-author" id="author">- {this.state.author}</p>
//                     <div className="buttons">
//                         <a className="button" id="tweet-quote" title="Tweet this quote!" target="_blank" href="https://twitter.com/intent/tweet">
//                             <i className="fa fa-twitter"></i>
//                         </a>
                        
//                         <a className="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank" href="https://www.tumblr.com/widgets/share/tool">
//                             <i className="fa fa-tumblr"></i>
//                         </a>
                        
//                         <button
//                             className="button"
//                             id="new-quote"
//                             onClick={this.fetchData}
//                         >New Quote</button>
//                     </div>
//                 </div>
//             </div>            
//         )
//     }
// }

const RandomQuoteGenerator = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // fetch data 
    const fetchData = () => {
        setLoading(true);
        setError(null);
        // fetch data
        fetch("https://api.gameofthronesquotes.xyz/v1/random")
            .then((resp) => {
                if(!resp.ok) {
                    throw new Error('Network response was not ok');
                }
                return resp.json();
            })
            .then((data) => {
                // console.log(data);
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    };

    // handle button
    const handleBtn = () => {
        fetchData();
    }

    // twitter Thread
    const handleTwitter = ()  => {
        let prefix = 'https://www.twitter.com/intent/tweet?';
        let body = encodeURIComponent('"' + data.sentence + '" ' + data.character.name);
        console.log(prefix + body);
        return prefix + body;
    }

    useEffect(() => {
        fetchData();
    }, []); // empty dependency array ensures this only runs once

    if (loading) return <p>Loading...</p>;
    if(error) return <p>Error: {error}</p>;

    return (
        <div id="wrapper">
            <div id="quote-box">
                <p className="quote-text" id="text">{data.sentence}</p>
                <p className="quote-author" id="author">- {data.character.name}</p>
                <div className="buttons">
                    <a className="button" id="tweet-quote" title="Tweet this quote!" target="_blank" href={handleTwitter()}>
                    <i className="fa fa-twitter"></i></a>
                    <a className="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank" href="https://www.tumblr.com/widgets/share/tool"><i className="fa fa-tumblr"></i></a>
                    <button
                        className="button"
                        id="new-quote"
                        onClick={handleBtn}
                    >New Quote</button>
                    </div>
                </div>
            </div> 
    )
}

export default RandomQuoteGenerator;