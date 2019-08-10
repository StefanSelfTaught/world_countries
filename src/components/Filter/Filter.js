import React, { Component } from 'react';
import Select from 'react-select';
import './Filter.css';

const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'Americas', label: 'Americas' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' }
];

class Filter extends Component {
  state = {
    selectedOption: null
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        className='select'
        value={this.selectedOption}
        onChange={this.handleChange}
        options={options}
        placeholder='Filter by Region'
      />
    );
  }
}

export default Filter;

// import React from 'react';
// import './Filter.css';

// const Filter = () => {
//   return (
//     <div className='filter'>
//       <select>
//         <option value='saab'>America</option>
//         <option value='mercedes'>Asia</option>
//         <option value='audi'>Europe</option>
//         <option value='audi'>Oceania</option>
//       </select>
//     </div>
//   );
// };

// export default Filter;
