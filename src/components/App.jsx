import React, { Component } from 'react';
import '../components/App.css';

import NewsEditor from './NewsEditor.jsx';
import NewsFilter from './NewsFilter.jsx';
import NewsGrid from './NewsGrid.jsx';

import NewsActions from '../actions/NewsActions'
import NewsStore from '../stores/NewsStore'


function getStateFromFlux() { //изменения в сторе (emit change)
  return {
    isLoading: NewsStore.isLoading(),
    news: NewsStore.getNews(),
    result: NewsStore.getNews()
  };
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      func: getStateFromFlux()
    }
    this._onChange = this._onChange.bind(this)
  }

  componentWillMount() {
    NewsActions.loadNews();
    this.setState({ result: this.state.news });
  }

  componentDidMount() {
    NewsStore.addChangeListener(this._onChange); //добавляем слушителя
  }

  componentWillUnmount() {
    NewsStore.removeChangeListener(this._onChange);// удаляем слушателя
  }

  handleNewsAdd = (data) => {
    NewsActions.createNews(data);
  }

  handleTitleFilter = (event) => {
    this.setState({ result: event.name });
  }

  render() {
    return (
      <div className='App'>
        <h1 className='App-title'>Новости</h1>
        <NewsEditor onNewsAdd={this.handleNewsAdd} />
        <NewsFilter onFilter={this.handleTitleFilter} news={this.state.news} />
        <NewsGrid news={this.state.result} />
      </div>
    );
  }

  _onChange() {
    this.setState(getStateFromFlux());
  }

}

export default App;
