import React    from 'react';

const Card = (props) => {
    const {card, style}     = props;
    const {thumbnail, name} = card;

    let content = thumbnail != null ? (
            <div>
                <img src={thumbnail} alt={name}/>
                <div className="txt-wrapper">
                    <div className="title-wrapper">
                        {name}
                    </div>
                </div>
            </div>
        ) : ('');

    return (
        <div className="cs-card"  style={style}>
            {content}
        </div>
    );
};

export default Card;