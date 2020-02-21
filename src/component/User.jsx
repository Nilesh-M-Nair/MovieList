import React from 'react';
import { Table, Button } from 'antd';

class User extends React.Component {
    
    state = {
      filteredInfo: null,
      sortedInfo: null,

    };
  
    handleChange = (pagination, filters, sorter) => {
      console.log('Various parameters', pagination, filters, sorter);
      this.setState({
        filteredInfo: filters,
        sortedInfo: sorter,
      });
    };
  
    clearFilters = () => {
      this.setState({ filteredInfo: null });
    };
  
    clearAll = () => {
      this.setState({
        filteredInfo: null,
        sortedInfo: null,
      });
    };
  
    setAgeSort = () => {
      this.setState({
        sortedInfo: {
          order: 'descend',
          columnKey: 'age',
        },
      });
    };
  
    render() {
      let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: 'Language',
        dataIndex: 'original_language',
        key: 'language',
        filters: [{ text: 'en', value: 'en' }, { text: 'ko', value: 'ko' }],
        filteredValue: filteredInfo.original_language || null,
        onFilter: null,
        sorter: (a, b) => a.original_language.length + 10 - b.original_language.length,
        sortOrder: sortedInfo.columnKey === 'original_language' && sortedInfo.order,
        ellipsis: true,
      
      },
      {
        title: 'Ratings',
        dataIndex: 'vote_average',
        key: 'vote_average',
        filters: [{ text: 'Hits', value: '7' }, { text: 'Average', value: '5.9' }],
        filteredValue: filteredInfo.vote_average || null,
        onFilter: (value, record) => record.vote_average.includes(value),
        sorter: (a, b) => a.vote_average - b.vote_average,
        sortOrder: sortedInfo.columnKey === 'vote_average' && sortedInfo.order,
        ellipsis: true,
       
      },
      {
        title: 'Movie Name',
        dataIndex: 'title',
        key: 'title',
        filters: [{ text: 'Avengers: Infinity War', value: 'Avengers: Infinity War' }, { text: 'Dolittle', value: 'Dolittle' }],
        filteredValue: filteredInfo.title || null,
        onFilter: (value, record) => record.title.includes(value),
        sorter: (a, b) => a.title.length - b.title.length,
        sortOrder: sortedInfo.columnKey === 'title' && sortedInfo.order,
        ellipsis: true,
       
      },
     
      {
        title: 'Release date',
        dataIndex: 'release_date',
        key: 'date',
        filters: [{ text: '2019', value: '2019-09-17' }, { text: '2018', value: '2018'}],
        filteredValue: filteredInfo.release_date || null,
        onFilter: (value, record) => record.release_date.includes(value),
        sorter: (a, b) => a.release_date.length - b.release_date.length,
        sortOrder: sortedInfo.columnKey === 'release_date' && sortedInfo.order,
        ellipsis: true,
       
      },
    ];
      return (
        <div>
          <div className="table-operations">
            <Button onClick={this.setAgeSort}>Sort age</Button>
            <Button onClick={this.clearFilters}>Clear filters</Button>
            <Button onClick={this.clearAll}>Clear filters and sorters</Button>
          </div>
          <Table columns={columns} dataSource={this.props.name} onChange={this.handleChange} rowKey={(row) => `${row.id}${row.name}`}/>
        </div>
      );
    }
  }

  export default User;