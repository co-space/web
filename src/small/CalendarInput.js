import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { Input, Form } from 'reactstrap';
import 'react-day-picker/lib/style.css';
export default class CalendarInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined,
      isDisabled: false,
    };
  }
  handleDayChange(selectedDay, modifiers) {
    this.setState({
      selectedDay,
      isDisabled: modifiers.disabled === true,
    });
  }
  render() {
    const { selectedDay, isDisabled } = this.state;
    return (
      <div>
        <p>
          {!selectedDay && '🤔 Pick a date'}
          {selectedDay && isDisabled && '😡 This day is disabled'}
          {selectedDay &&
            !isDisabled &&
            `😄 You chose ${selectedDay.toLocaleDateString()}`}
        </p>
        <DayPickerInput
          className = "calendar-input"
          value={selectedDay}
          onDayChange={this.handleDayChange}
          dayPickerProps={{
            selectedDays: selectedDay,
            disabledDays: {
              daysOfWeek: [0, 6],
            },
          }}
        />
      </div>
    );
  }
}
