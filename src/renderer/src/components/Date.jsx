import { useEffect, useState } from 'react'

const YearDropdown = ({ year, onChange, isYearOpen, setIsYearOpen }) => {
  const years = Array.from({ length: 10 }, (_, i) => year - i)

  return (
    <div className="select_container">
      <div className="value" onClick={() => setIsYearOpen(!isYearOpen)}>
        {year}
      </div>
      <div className={`options ${isYearOpen ? 'active' : ''}`}>
        {years.map((year) => (
          <div className="select_option" key={year} onClick={() => onChange(year)}>
            {year}
          </div>
        ))}
      </div>
    </div>
  )
}

const MonthDropdown = ({ month, onChange, isMonthOpen, setIsMonthOpen }) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  return (
    <div className="select_container">
      <div className="value" onClick={() => setIsMonthOpen(!isMonthOpen)}>
        {months[month]}
      </div>
      <div className={`options ${isMonthOpen ? 'active' : ''}`}>
        {months.map((month, index) => (
          <div className="select_option" key={index} onClick={() => onChange(index)}>
            {month}
          </div>
        ))}
      </div>
    </div>
  )
}

const CustomDateInput = ({ onSelect }) => {
  const [date, setDate] = useState(new Date())
  const [selectedMonth, setSelectedMonth] = useState(date.getMonth())
  const [selectedYear, setSelectedYear] = useState(date.getFullYear())
  const [selectedDay, setSelectedDay] = useState()
  const [calenderSize, setCalenderSize] = useState()
  const [calenderArray, setCalenderArray] = useState([])
  const [isMonthOpen, setIsMonthOpen] = useState(false)
  const [isYearOpen, setIsYearOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date())

  useEffect(() => {
    setCalenderSize(getDaysInMonth(selectedYear, selectedMonth))
    setCalenderArray(Array.from({ length: calenderSize }, (_, i) => i + 1))
  }, [calenderSize])

  useEffect(() => {
    setSelectedDate(new Date(selectedYear, selectedMonth, selectedDay))
  }, [selectedDay, selectedMonth, selectedYear])

  useEffect(() => {
    setCalenderSize(getDaysInMonth(selectedYear, selectedMonth))
    setCalenderArray(Array.from({ length: calenderSize }, (_, i) => i + 1))
  }, [selectedMonth, selectedYear, calenderSize])

  const handleMonthChange = (month) => {
    setSelectedMonth(month)
    setIsMonthOpen(false)
  }

  const handleYearChange = (year) => {
    setSelectedYear(year)
    setIsYearOpen(false)
  }

  const handleDayChange = (day) => {
    setSelectedDay(day)
  }

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const handleConfirm = () => {
    onSelect(selectedDate)
  }

  return (
    <div className="date_input">
      <div className="input_header">
        <MonthDropdown
          isMonthOpen={isMonthOpen}
          setIsMonthOpen={setIsMonthOpen}
          month={selectedMonth}
          onChange={(month) => handleMonthChange(month)}
        />
        <YearDropdown
          isYearOpen={isYearOpen}
          setIsYearOpen={setIsYearOpen}
          year={selectedYear}
          onChange={(year) => handleYearChange(year)}
        />
      </div>
      <div className="calender_container">
        <div className="days">
          {calenderArray?.map((item, index) => (
            <div
              onClick={() => handleDayChange(item)}
              className={`day ${selectedDay === item ? 'active' : ''}`}
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="bottom">
        <button onClick={handleConfirm}>موافق</button>
        <div className="date_info">
          {selectedDay}/{selectedMonth + 1}/{selectedYear}
        </div>
      </div>
    </div>
  )
}

export default CustomDateInput
