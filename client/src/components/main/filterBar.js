import React from 'react';
import { DropdownButton, ButtonGroup, Dropdown } from 'react-bootstrap';

const FilterBar = () => {
  const handleSelect = (e) => {
    console.log(e)
  }
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
        onSelect={handleSelect}
      >
        <Dropdown.Item eventKey="Action">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3" > Active Item </Dropdown.Item>
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownButton>
    ),
  )}
</>
    );
}
export default FilterBar