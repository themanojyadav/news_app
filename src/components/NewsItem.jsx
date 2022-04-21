import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {image, title, newsUrl} = this.props;
        
        return (
            <div className="card border-0 shadow">
                <img src={(image)?image:'image-not-found.svg'} className={`card-img-top ${!image ? 'no-image' : ''}`} alt={title} />
                <div className="card-body">
                    <h6 className="card-title mb-3">{title}</h6>
                    <div className="text-center">
                        <a href={newsUrl} className="btn btn-primary btn-sm rounded-pill" target="_BLANK">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
