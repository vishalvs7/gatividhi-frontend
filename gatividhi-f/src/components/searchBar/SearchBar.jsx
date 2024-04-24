import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSearch = () => {
    // Perform search using searchText and selectedDate
    console.log('Search Text:', searchText);
    console.log('Selected Date:', selectedDate);
  };

  return (
    <div>
      <TextField
        label="Search"
        variant="outlined"
        value={searchText}
        onChange={handleSearchTextChange}
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Select Date"
          inputFormat="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} variant="outlined" />}
        />
      </LocalizationProvider>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
