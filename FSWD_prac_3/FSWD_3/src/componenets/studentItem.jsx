import React from 'react'

function StudentItem({student}) {
  return (
    <div>
        Name:{student.name}
        Register Number:{student.registerNumber}
    </div>
  )
}

export default StudentItem