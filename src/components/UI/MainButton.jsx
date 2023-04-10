import React from 'react'

const MainButton = ({ formType, btnLabel}) => (
  <button type="submit" className="main-buttons" form={formType} >{btnLabel}</button>
  )


export default MainButton