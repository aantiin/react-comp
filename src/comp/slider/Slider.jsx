import React, { Component } from 'react';

import Card              from './Card.jsx';

class Slider extends Component {

    render() {
        const {cards}   = this.props;
        let content     = [];

        if (cards != null) {
            let i = 0;
            for (var key in cards) {
                if(cards.hasOwnProperty(key)) {
                    let card               = cards[key];

                    let style = {};
                    if (i === 0) {
                        style = {
                            marginLeft: "16px"
                        };
                    }

                    content.push(
                        <Card card={card} style={style}/>
                    );
                    i++;
                }
            }
        }


        return (
            <div className="card-slider">
                <div className="cs-parent-wrapper">
                    <div className="cs-wrapper">
                        {content}
                    </div>
                </div>
            </div>
        );
    }
}

export default Slider;