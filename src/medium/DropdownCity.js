import React from "react"
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {has} from "lodash"
export default class DropdownCity extends React.Component {
  state = {
    selectedOption: '',
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    // console.log(`Selected: `, selectedOption);
    // var city = ""
    if(has(selectedOption, "value")){
      this.props.setFilterCity(selectedOption.value)
    } else {
      this.props.setFilterCity(null)
    }
  }
  render() {
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;

    return (
      <Select
        className="Dropdown_City"
        name="form-field-name"
        value={value}
        removeSelected={true}
        onChange={this.handleChange}
        placeholder="Select your city"
        options={[
          { value: 'Jakarta', label: 'Jakarta' },
          { value: 'Jakarta Selatan', label: 'Jakarta Selatan' },
          { value: 'Jakarta Barat', label: 'Jakarta Barat' },
          { value: 'Jakarta Utara', label: 'Jakarta Utara' },
          { value: 'Jakarta Timur', label: 'Jakarta Timur' },
          { value: 'Jakarta Pusat', label: 'Jakarta Pusat' },
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
