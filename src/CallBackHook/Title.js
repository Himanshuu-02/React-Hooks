import React from 'react'

 function Title() {
    console.log('Rendring Title')
  return (
    <div>UseCallback Hook</div>
  )
}
export default React.memo(Title)