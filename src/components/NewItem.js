import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addItem } from '../redux/actions';

const Container = styled.div`
  border: 1px solid #CCC;
  padding: 16px;
  background-color: #FFF;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  margin-bottom: 10px;
  font-size: 16px;
`;

const Button = styled.button`

`;

class NewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      category: '',
      dueDate: '',
    };
  }

  submit() {
    const content = {
      title: this.state.title,
      description: this.state.description,
      category: this.state.category,
      dueDate: this.state.dueDate,
    };
    this.props.addItem(content);

    // and reset the fields
    this.setState({
      title: '',
      description: '',
      category: '',
      dueDate: '',
    });
  }

  render() {
    const {
      title,
      description,
      category,
      dueDate,
    } = this.state;

    return (
      <Container>
        <Input
          type="text"
          value={title}
          onChange={(e) => this.setState({ title: e.target.value })}
          placeholder="Title"
        />
        <TextArea
          value={description}
          onChange={(e) => this.setState({ description: e.target.value })}
          placeholder="Description"
        />
        <Input
          type="text"
          value={category}
          onChange={(e) => this.setState({ category: e.target.value })}
          placeholder="Category"
        />
        <Input
          type="date"
          value={dueDate}
          onChange={(e) => this.setState({ dueDate: e.target.value })}
          placeholder="Due Date"
        />
        <Button onClick={() => this.submit()}>Add Item</Button>
      </Container>
    );
  }
}

NewItem.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default connect(
  null,
  { addItem },
)(NewItem);
