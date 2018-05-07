import React, { Component } from 'react';

import '../components/News.css';

class News extends Component {
    render() {
        return (
            <div className='News'>
            <span className='News-del-icon' onClick={this.props.onDelete}> × </span>
                <h4 className='News-title'>
                    {this.props.title}
                </h4>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default News;