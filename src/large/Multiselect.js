import React from "react"
import Select from 'react-select';
import 'react-select/dist/react-select.css';


const AMENITIES = [
	{ label: 'High Speed Wifi 🤘🏻', value: 'highspeedwifi' },
	{ label: 'Lounge 🤘🏻', value: 'Lounge' },
	{ label: 'Free Coffee/Tea 🤘🏻', value: 'freecoffetea' },
	{ label: 'Kitchen', value: 'kitchen' },
	{ label: 'Standing Desk', value: 'standingdesk' },
	{ label: 'Pool Table', value: 'pooltable' },
  { label: 'Skype Room', value: 'skyperoom' },
  { label: 'Projector', value: 'projector' },
  { label: 'Screen', value: 'screen' },
  { label: 'Large Monitor', value: 'largemonitor' },
  { label: 'Speakers', value: 'speakers' },
  { label: 'Personal Table', value: 'personaltable' },
  { label: 'Computers (PCs)', value: 'pcs' },
	{ label: 'Computers (Macs)', value: 'macs' },
	{ label: 'On-site Cafe/Restaurant', value: 'restaurant' },
	{ label: 'Comfortable Chair', value: 'chair' },
	{ label: 'Childcare 👶🏻', value: 'childcare' },
	{ label: 'Beanbags', value: 'beanbags' },
  { label: 'Outdoor Teracce', value: 'outdoorteracce' },
  { label: 'Ping Pong Table 🏓', value: 'pingpong' },
  { label: 'Printer', value: 'printer' },
  { label: 'Scanner', value: 'scanner' },
  { label: '24hr member access', value: '24hr' },
  { label: 'Dual/Single Monitor', value: 'dualsinglemonitor' },
  { label: 'Free parking', value: 'freeparking' },
  { label: 'Events and / or workshops', value: 'eventsandworkshops' },
  { label: 'Whiteboard and Fresh Markers', value: 'whiteboardmarkers' },
];
//
// const WHY_WOULD_YOU = [
// 	{ label: 'Chocolate (are you crazy?)', value: 'chocolate', disabled: true },
// ].concat(FLAVOURS.slice(1));
// console.log(`WHY_WOULD_YOU `, WHY_WOULD_YOU)

export default class Multiselect extends React.Component {

  state = {
    value: [],
    // crazy: false,
    disabled: false,
    // removeSelected: true,
  }
  handleChange = (value) => {
    this.setState({ value });
    console.log(` You Selected: `, value);
  }
  render() {
    const { crazy, disabled, stayOpen, value } = this.state;
		// const options = crazy ? WHY_WOULD_YOU : FLAVOURS;
    const options = AMENITIES

    return (
      <Select
        multi
        Creatable
        simpleValue
        rtl={this.state.rtl}
        removeSelected={true}
        className="multiselect"
        value={value}
        onChange={this.handleChange}
        isLoading={false}
        placeholder="Select Your Amenities"
        options={options}
      />
    );
  }
}
