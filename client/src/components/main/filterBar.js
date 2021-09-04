import React from 'react';
import { DropdownButton, ButtonGroup, Dropdown } from 'react-bootstrap';
const FilterBar = () => {
    return (
<>
  {['Breed', 'Gender', 'Location'].map(
    (variant) => (
      <DropdownButton
        as={ButtonGroup}
        key={variant}
        id={`dropdown-variants-${variant}`}
        variant={variant.toLowerCase()}
        title={variant}
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3" > Active Item </Dropdown.Item>
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownButton>
    ),
  )}
</>
    );
}
export default FilterBar;