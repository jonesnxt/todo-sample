import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { search } from '../redux/actions';

const Container = styled.div`
  padding: 16px;
  padding-right: 28px;
`;

const SearchBar = styled.input`
  width: 100%;
  font-size: 24px;
  padding: 4px;
`;

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };
  }

  changeSearch(searchTerm) {
    this.setState({ searchTerm });
    this.props.onSearch(searchTerm);
  }

  render() {
    return (
      <Container>
        <SearchBar
          placeholder="Search..."
          value={this.state.searchTerm}
          onChange={(e) => this.changeSearch(e.target.value)}
        />
      </Container>
    );
  }
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default connect(
  null,
  {
    onSearch: (searchTerm) => search(searchTerm),
  },
)(Search);
