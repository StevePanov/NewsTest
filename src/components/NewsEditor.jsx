import React, { Component } from 'react';

import './NewsEditor.css';

class NewsEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };
        this.handleNewsAdd = this.handleNewsAdd.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
    }

    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleBodyChange(event) {
        this.setState({ body: event.target.value });
    }

    handleNewsAdd = () => {
        const newNews = {
            title: this.state.title,
            body: this.state.body
        };
        this.props.onNewsAdd(newNews);
        this.setState({ title: '', body: '' })
    }

    render() {
        return (
            <div className='NewsEditor'>
                <p>Создание статьи:</p>
                <input
                    type='text'
                    className='NewsEditor-title'
                    placeholder='Введите название статьи'
                    onChange={this.handleTitleChange}
                    value={this.state.title}
                    tabIndex={0}
                />
                <textarea
                    className='NewsEditor-body'
                    placeholder='Введите текст статьи'
                    onChange={this.handleBodyChange}
                    rows={3}
                    tabIndex={1}
                    cols={30}
                    value={this.state.body}
                />
                <div className='NewsEditor-footer'>
                    <button
                        className='NewsEditor-button'
                        onClick={this.handleNewsAdd}
                        disabled={!(this.state.body && this.state.title)}
                        tabIndex={2}
                    >Добавить</button>
                </div>
            </div>
        );
    }
};

export default NewsEditor;