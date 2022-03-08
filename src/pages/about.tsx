import type { NextPage } from 'next'
import { useEffect } from 'react'

const About: NextPage = () => {
  useEffect(() =>{
    console.log('aboutus')
  }, [])
  return (
    <div>
      This is from About...
    </div>
  )
}

export default About
