import React from "react"
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class DropdownMember extends React.Component {
  state = {
    selectedOption: '',
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  }
  render() {
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;

    return (
      <Select
        className="Dropdown_Member"
        name="form-field-name"
        value={value}
        onChange={this.handleChange}
        placeholder="Member Type"
        options={[
          { value: 'daily', label: 'Daily' },
          { value: 'weekly', label: 'Weekly' },
          { value: 'monthly', label: 'Monthly' },
        ]}
      />
    );
  }
}
