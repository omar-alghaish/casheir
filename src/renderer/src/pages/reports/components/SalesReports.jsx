import { useState } from 'react'
import Header from '../../../components/header/Header'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Modal from '../../../components/modal/Modal'
import { CiCalendar } from 'react-icons/ci'
import Date from '../../../components/Date'
import { IoClose } from 'react-icons/io5'
import Select from '../../../components/select/Select'
import Table from '../../../components/table/Table'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'

const SalesReports = () => {
  const [isDateModalOpen, setIsDateModalOpen] = useState(false)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [selectedValue, setSelectedValue] = useState(null)
  const columns = [
    {
      title: 'رقم التقرير',
      dataIndex: 'reportNumber',
      key: 'reportNumber',
      render: (value) => <strong style={{ color: '#486FE6' }}>{value}</strong>
    },
    { title: 'رقم الفاتورة', dataIndex: 'invoiceNumber', key: 'invoiceNumber' },
    { title: 'الاجمالي', dataIndex: 'total', key: 'total' },
    {
      title: 'الطلبيه',
      dataIndex: 'order',
      key: 'order',
      render: (value) => <div>{value}</div>
    },

    {
      title: 'الاوامر',
      dataIndex: 'actions',
      key: 'actions',
      render: (value) => (
        <button className="actions_button">
          <HiOutlineDotsHorizontal />
        </button>
      )
    }
  ]

  const data = [
    { invoiceNumber: '1', reportNumber: 30, total: '100', order: 'this is test...' },
    { invoiceNumber: '1', reportNumber: 30, total: '100', order: 'this is test...' }
  ]
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ]

  const handleSelect = (option) => {
    setSelectedValue(option)
  }
  const handleCloseDateModal = () => {
    setIsDateModalOpen(false)
  }

  const handleStartDateChange = (date) => {
    setStartDate(date)
  }

  const handleEndDateChange = (date) => {
    setEndDate(date)
  }

  console.log(startDate)
  console.log(endDate)

  return (
    <div className="report sales_reports">
      <Header />
      <div className="filters">
        <div className="date_container" onClick={() => setIsDateModalOpen(true)}>
          <div className="img_container">
            <CiCalendar />
          </div>
          <input type="text" value={startDate} placeholder="تاريخ البداية" />
          <input type="text" value={endDate} placeholder="تاريخ النهاية" />
        </div>
        <div className="select_inpus_container">
          <div className="input_container">
            <label htmlFor="">الورديه</label>
            <Select options={options} onSelect={handleSelect} placeholder="اختر الوردية" />
          </div>
          <div className="input_container">
            <label htmlFor="">الكاشير</label>
            <Select options={options} onSelect={handleSelect} placeholder="اختر الكاشير" />
          </div>
        </div>
      </div>
      <Table columns={columns} data={data} />
      <Modal isOpen={isDateModalOpen} onClose={handleCloseDateModal}>
        <div className="date_content">
          <div className="close_button" onClick={handleCloseDateModal}>
            <IoClose />
          </div>
          <div className="container">
            <Date onSelect={handleStartDateChange} />
          </div>
          <div className="divider"></div>
          <div className="container">
            <Date onSelect={handleEndDateChange} />
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default SalesReports
