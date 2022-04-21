import React, { Component } from 'react'
import NewsItem from './NewsItem'

// 5e55fc9e6e424342bfcb08d542b1916b

export class News extends Component {
    constructor(props){
        super(props)
        this.state = {
            articles: [],
            page: 1,
            pageSize: this.props.pageSize
        }
    }

    updateNews = async (page) => {
        let articles = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=5e55fc9e6e424342bfcb08d542b1916b&page=${page}&pageSize=${this.state.pageSize}`)
        let fetchedArticles = await articles.json()
        this.setState({
            articles: fetchedArticles.articles,
            totalResults: fetchedArticles.totalResults,
            page: page
        })
    }

    async componentDidMount(){
        let page = this.state.page
        this.updateNews(page)
    }


    handlePrevButton = async () => {
        let page = this.state.page-1
        this.updateNews(page)
    }

    handleNextButton = async () => {
        let page = this.state.page+1
        this.updateNews(page)
    }

    render() {
        return (
            <div>
                <div className="px-4 py-5 text-center text-white bg-dark">
                    <h1 className="display-5 fw-bold">A daily news app</h1>
                    <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-primary btn-lg px-4 gap-3 rounded-pill">Read News</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4 rounded-pill">About Us</button>
                    </div>
                    </div>
                </div>
                <div className="container my-4">
                    <div className="row">
                        {
                            this.state.articles.map((element,index) => {
                                return <div className="col-md-3 mb-4">
                                    <NewsItem key={index} image={element.urlToImage} title={element.title} description={element.description} newsUrl={element.url} />
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="container text-center my-2">
                    <button disabled={this.state.page <= 1} className="btn btn-primary me-2 rounded-pill" onClick={this.handlePrevButton}>Prev</button>
                    <button disabled={this.state.page >= Math.ceil(this.state.totalResults/this.state.pageSize)} className="btn btn-primary rounded-pill" onClick={this.handleNextButton}>Next</button>
                </div>
            </div>
        )
    }
}

export default News
