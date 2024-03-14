import { Outlet } from 'react-router'
import Navbar from '../Navbar/Navbar'

export default function Layouts() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
