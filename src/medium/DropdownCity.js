import React from "react"
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class DropdownCity extends React.Component {
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
        className="Dropdown_City"
        name="form-field-name"
        value={value}
        onChange={this.handleChange}
        placeholder="Select your city"
        options={[
          { value: 'Jakarta', label: 'Jakarta' },
          { value: 'JakSel', label: 'Jakarta Selatan' },
          { value: 'JakBar', label: 'Jakarta Barat' },
          { value: 'JakUt', label: 'Jakarta Utara' },
          { value: 'JakTim', label: 'Jakarta Timur' },
          { value: 'JakPus', label: 'Jakarta Pusat' },
          { value: 'Bandung', label: 'Bandung' },
          { value: 'Semarang', label: 'Semarang' },
          { value: 'Bogor', label: 'Bogor' },
          { value: 'Surabaya', label: 'Surabaya' },
          { value: 'Tangerang', label: 'Tangerang' },
          { value: 'Medan', label: 'Medan' },
          { value: 'Makassar', label: 'Makassar' },
          { value: 'Solo', label: 'Solo' },
          { value: 'Banjarmasin', label: 'Banjarmasin' },
          { value: 'Batam', label: 'Batam' },
          { value: 'Lampung', label: 'Lampung' },
          { value: 'Malang', label: 'Malang' },
        ]}
      />
    );
  }
}
