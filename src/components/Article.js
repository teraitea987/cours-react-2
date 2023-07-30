import React from 'react';

const Article = ({ article }) => {

    const dateFormater = (date) => {
        return date
    };
    
    return (
        <div className='article'>
            <div className="card-header">
                <h3>{article.author}</h3>
                <em>Posté le {dateFormater(article.date)}</em>
            </div>
            <p>{article.content}</p>
            <div className="btn-container">
                <button>Editer</button>
                <button>Supprimer</button>
            </div>
        </div>
    );
};

export default Article;