import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { updateItemStatus, addComment, deleteItem } from '../redux/actions';
import { STATUS_ENUM } from '../redux/constants';

const Container = styled.div`
  position: relative;
  padding: 16px;
  margin-top: 16px;

  border: 1px solid #CCC;
  background-color: #FFF;
`;

const Title = styled.h3`
  margin-top: 0;
`;

const Description = styled.div`
  padding-bottom: 8px;
`;

const Category = styled.span`
  background-color: #2378F4;
  color: #FFF;
  padding: 2px 8px;
  border-radius: 10px;
`;

const DueDate = styled.div`
  margin-top: 10px;
  text-align: center;
`;

const Arrow = styled.div`
  position: absolute;
  bottom: 10px;
  font-size: 28px;

  ${(props) => props.right && `
    right: 16px;
  `}

  :hover {
    cursor: pointer;
    color: #00DD00;
  }
`;

const Ex = styled.div`
  position: absolute;
  font-size: 20px;
  top: 8px;
  right: 16px;

  :hover {
    cursor: pointer;
    color: #FF0000;
  }
`;

const Item = ({
  id,
  title,
  description,
  category,
  status,
  dueDate,
  onUpdateItemStatus,
  // eslint-disable-next-line no-unused-vars
  onAddComment,
  onDeleteItem,
}) => (
  <Container>
    <Ex
      onClick={() => onDeleteItem(id)}
    >
      x
    </Ex>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Category>{category}</Category>
    <DueDate>
      Due:&nbsp;
      {dueDate}
    </DueDate>

    {status !== 0 && (
      <Arrow
        left
        onClick={() => onUpdateItemStatus(id, status - 1)}
      >
        &lt;
      </Arrow>
    )}

    {status !== (STATUS_ENUM.length - 1) && (
      <Arrow
        right
        onClick={() => onUpdateItemStatus(id, status + 1)}
      >
        &gt;
      </Arrow>
    )}
  </Container>
);

Item.defaultProps = {
  title: 'Untitled',
  description: 'No Description',
  category: '',
  status: 'Not Started',
  dueDate: '00/00/0000',
};

Item.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  status: PropTypes.number,
  dueDate: PropTypes.string,

  onUpdateItemStatus: PropTypes.func.isRequired,
  onAddComment: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};

export default connect(
  null,
  {
    onUpdateItemStatus: (id, status) => updateItemStatus(id, status),
    onAddComment: (id, comment) => addComment(id, comment),
    onDeleteItem: (id) => deleteItem(id),
  },
)(Item);
