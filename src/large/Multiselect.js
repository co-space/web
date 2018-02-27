import React from "react"
import Select from 'react-select';
import 'react-select/dist/react-select.css';


const FLAVOURS = [
	{ label: 'High Speed Wifi', value: 'chocolate' },
	{ label: 'Lounge', value: 'vanilla' },
	{ label: 'Free Coffee/Tea', value: 'strawberry' },
	{ label: 'Kitchen', value: 'caramel' },
	{ label: 'Standing Desk', value: 'cookiescream' },
	{ label: 'Pool Table', value: 'peppermint' },
  { label: 'Skype Room', value: 'chocolate' },
  { label: 'Projector', value: 'vanilla' },
  { label: 'Screen', value: 'strawberry' },
  { label: 'Large Monitor', value: 'caramel' },
  { label: 'Speakers', value: 'cookiescream' },
  { label: 'Personal Table', value: 'peppermint' },
  { label: 'Computers', value: 'chocolate' },
	{ label: 'Lounge', value: 'vanilla' },
	{ label: 'Free Coffee/Tea', value: 'strawberry' },
	{ label: 'Kitchen', value: 'caramel' },
	{ label: 'Standing Desk', value: 'cookiescream' },
	{ label: 'Pool Table', value: 'peppermint' },
  { label: 'Skype Room', value: 'chocolate' },
  { label: 'Projector', value: 'vanilla' },
  { label: 'Screen', value: 'strawberry' },
  { label: 'Large Monitor', value: 'caramel' },
  { label: 'Speakers', value: 'cookiescream' },
  { label: 'Personal Table', value: 'peppermint' },
];

const WHY_WOULD_YOU = [
	{ label: 'Chocolate (are you crazy?)', value: 'chocolate', disabled: true },
].concat(FLAVOURS.slice(1));

export default class Multiselect extends React.Component {

  state = {
    value: [],
    crazy: false,
    disabled: false,
    removeSelected: true,
  }
  handleChange = (value) => {
    this.setState({ value });
    console.log(` You Selected: `, value);


  }
  render() {
    const { crazy, disabled, stayOpen, value } = this.state;
		const options = crazy ? WHY_WOULD_YOU : FLAVOURS;

    return (
      <Select
        multi
        Creatable
        simpleValue
        rtl={this.state.rtl}
        removeSelected={true}
        // className="Dropdown_City"
        value={value}
        onChange={this.handleChange}
        placeholder="Select Your Aminieties"
        options={options}
      />
    );
  }
}
