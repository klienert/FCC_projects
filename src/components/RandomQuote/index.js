import React from "react";
import axios from "axios";
import './styles.css';

export default class RandomQuoteGenerator extends React.Component {
    state = {
        quote: '',
        author: ''
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        axios.get("https://api.gameofthronesquotes.xyz/v1/random")
            .then((resp) => {
                const q = resp.data.sentence;
                const a = resp.data.character.name;
                // console.log(q + "\n- " + a);
                this.setState({
                    quote: q,
                    author: a
                })
            })
            .catch((err) => {
                console.error(err);
            })
    };

    render() {
        return (
            <div id="wrapper">
                <div id="quote-box">
                    <p className="quote-text" id="text">{this.state.quote}</p>
                    <p className="quote-author" id="author">- {this.state.author}</p>
                    <div className="buttons">
                        <a className="button" id="tweet-quote" title="Tweet this quote!" target="_blank" href="https://twitter.com/intent/tweet">
                            <i className="fa fa-twitter"></i>
                        </a>
                        
                        <a className="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank" href="https://www.tumblr.com/widgets/share/tool">
                            <i className="fa fa-tumblr"></i>
                        </a>
                        
                        <button
                            className="button"
                            id="new-quote"
                            onClick={this.fetchData}
                        >New Quote</button>
                    </div>
                </div>
            </div>            
        )
    }
}