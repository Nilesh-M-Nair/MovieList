import React from 'react';
import { Table, Button } from 'antd';
import { Link } from "react-router-dom";

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
        title: 'Movie Name',
        dataIndex: 'title',
        key: 'title',
        filters: [{ text: 'A', value: 'A' }, { text: 'B', value: 'B' }],
        filteredValue: filteredInfo.title || null,
        onFilter: (value, record) => record.title.includes(value),
        sorter: (a, b) => a.title.length - b.title.length,
        sortOrder: sortedInfo.columnKey === 'title' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Language',
        dataIndex: 'original_language',
        key: 'original_language',
        
        filters: [{ text: 'English', value:'en'}, {text: 'Korean', value: 'ko' }, {text: 'Chinese', value: 'cn' }],
        filteredValue: filteredInfo.original_language || null,
        onFilter: (value, record) => record.original_language.includes(value),
        sorter: (a, b) => a.original_language - b.original_language,
        sortOrder: sortedInfo.columnKey === 'original_language' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Ratings',
        dataIndex: 'vote_average',
        key: 'vote_average',
        filters: [{ text: 'Super Hits', value: 'Super Hits' }, { text: 'Hits', value: 'Hits' }, { text: 'Average', value: 'average' }],
        filteredValue: filteredInfo.vote_average || null,
        onFilter: (value, record) => {
          switch(value) {
            case 'Super Hits':
              return record.vote_average > 8
              
            case 'Hits':
              console.log(record.vote_average);
              return record.vote_average <8 && record.vote_average >7

              default:
              return +record.vote_average < 7
          }
        },
        sorter: (a, b) => a.vote_average - b.vote_average,
        sortOrder: sortedInfo.columnKey === 'vote_average' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Release date',
        dataIndex: 'release_date',
        key: 'release_date',
        filters: [{ text: '2020', value: '2020'}, { text: '2019', value: '2019'}, { text: 'More older', value: 'More older' }],
        filteredValue: filteredInfo.release_date || null,
        onFilter: (value, record) => {
          switch(value) {
            case '2020': 
            return record.release_date.substr(0, 4) === '2020';
            
            case '2019':
            return record.release_date.substr(0, 4) === '2019';

            default:
            return record.release_date.substr(0, 4) < 2019;
          }
          
        },
        sorter: (a, b) => a.release_date.length - b.release_date.length,
        sortOrder: sortedInfo.columnKey === 'release_date' && sortedInfo.order,
        ellipsis: true,
        
      },
      {
        title: 'View Details',
        dataIndex: 'id',
        key: 'id',
        ellipsis: true,
        render: (id) => 
          <div>
            <Link to= {`/overview/${id}`}>{'Click here'}</Link>
          </div>
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

  //render: (id) => <a href={`https://www.google.com/${id}`}>{id}</a>,