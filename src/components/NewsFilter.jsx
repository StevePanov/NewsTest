import React, { Component } from 'react';

import '../components/NewsFilter.css';

class NewsFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
        this.handleTitleFilter = this.handleTitleFilter.bind(this);
    }

    filterBy(data, field, value) { //глупый фильтр
        return !value ? data : data.filter(item => item[field] === value);;
    }

    handleTitleFilter(event) {
        const res = this.filterBy(this.props.news, 'title', event.target.value);
        this.setState({ name: event.target.value });

        this.props.onFilter({ name: res });
    }

    render() {
        return (
            <div className="NewsFilter">
                <p>Фильтр:</p>
                <input
                    type="text"
                    className="NewsFilter-input"
                    placeholder="Введите название статьи"
                    onChange={this.handleTitleFilter}
                    value={this.state.name}
                    tabIndex={3}
                />
            </div>
        );
    }
}

export default NewsFilter;