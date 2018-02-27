import React from "react"
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class DropdownSpaceType extends React.Component {
  state = {
    selectedOption: '',
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: `, selectedOption);
  }
  render() {
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;

    return (
      <Select
        className="Dropdown_SpaceType"
        name="form-field-name"
        value={value}
        removeSelected={true}
        onChange={this.handleChange}
        placeholder="Space Type"
        options={[
          { value: 'openplan', label: 'Open Plan' },
          { value: 'privateoffice', label: 'Private Office' },
          { value: 'JakBar', label: 'Jakarta Barat' },
        ]}
      />
    );
  }
}
