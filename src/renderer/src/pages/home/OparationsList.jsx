const OparationsList = () => {
  const list = [
    {
      title: 'اكواد وتعريفات',
      link: ''
    },
    {
      title: 'مصروفات وايرادات',
      link: ''
    },
    {
      title: 'بحث واستعلام',
      link: ''
    },
    {
      title: 'المدفوعات',
      link: ''
    },
    {
      title: 'المشتريات',
      link: ''
    },
    {
      title: 'مراجعات المشتربات',
      link: ''
    },
    {
      title: 'المبيعات',
      link: ''
    },
    {
      title: 'مراجعات المبيعات',
      link: ''
    },
    {
      title: 'العمليات',
      link: ''
    },
    {
      title: 'التقارير',
      link: ''
    }
  ]
  return (
    <div className="Operations_list_container">
      <div className="top_head">
        <div className="row1">العمليات الاساسيه للنظام</div>
        <div className="row2">
          <h3>المستخدم الحالي:</h3>
          <h3>عادل محمد حسين</h3>
        </div>
      </div>
      <div className="links">
        {list.map((item) => 
           <div className="link">{item?.title}</div>
        )}
      </div>
    </div>
  )
}

export default OparationsList
