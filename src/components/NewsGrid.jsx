import React, { Component } from 'react';
import News from './News';
import Masonry from 'react-masonry-component';

import '../components/NewsGrid.css';

class NewsGrid extends Component {
    render() {
        const masonryOptions = {
            itemSelector: '.News',
            columnWidth: 250,
            gutter: 10,
            isFitWidth: true
        }
        return (
            <Masonry
                className='NewsGrid'
                options={masonryOptions}
            >
                {
                    this.props.news && this.props.news.map(news =>
                        <News
                            key={news.id}
                            title={news.title}
                        >
                            {news.body}
                        </News>
                    )
                }
            </Masonry>
        );
    }
};

export default NewsGrid;