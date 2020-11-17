import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getItems } from '../redux/selectors';

import Item from './Item';
import NewItem from './NewItem';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 24px;

  ${(props) => !props.last && `
    border-right: 1px solid #EEE;
  `}

  @media (max-width: 800px) {
    flex-direction: column;
    border-bottom: 1px solid #EEE;
  }
`;

export const SectionTitle = styled.h2`

`;

const ItemsList = ({ items }) => (
  <Container>
    <Section>
      <SectionTitle>Not Started</SectionTitle>
      <NewItem />
      {items.filter((e) => e.status === 0)
        .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate)).map((item) => (
          <Item
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            category={item.category}
            status={item.status}
            dueDate={item.dueDate}
          />
        ))}
    </Section>
    <Section>
      <SectionTitle>In Progress</SectionTitle>
      {items.filter((e) => e.status === 1)
        .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate)).map((item) => (
          <Item
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            category={item.category}
            status={item.status}
            dueDate={item.dueDate}
          />
        ))}
    </Section>
    <Section>
      <SectionTitle>Review</SectionTitle>
      {items.filter((e) => e.status === 2)
        .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate)).map((item) => (
          <Item
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            category={item.category}
            status={item.status}
            dueDate={item.dueDate}
          />
        ))}
    </Section>
    <Section last>
      <SectionTitle>Done</SectionTitle>
      {items.filter((e) => e.status === 3)
        .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate)).map((item) => (
          <Item
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            category={item.category}
            status={item.status}
            dueDate={item.dueDate}
          />
        ))}
    </Section>
  </Container>
);

const mapStateToProps = (state) => {
  const items = getItems(state);
  return { items };
};

ItemsList.defaultProps = {
  items: [],
};

ItemsList.propTypes = {
  items: PropTypes.array,
};

export default connect(mapStateToProps)(ItemsList);
