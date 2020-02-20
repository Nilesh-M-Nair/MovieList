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
        title: 'Genres',
        dataIndex: 'name',
        key: 'name',
        filters: [{ text: 'Horror', value: 'Horror' }, { text: 'Romance', value: 'Romance' }],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
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