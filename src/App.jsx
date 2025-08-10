import { useState } from 'react'
import SectionHeader from './components/SectionHeader';
import Profile from './components/Profile';
import Educations from './components/Educations';
import Works from './components/Works';
import './App.css'

export default function App() {
  
  return (
    <>
      <SectionHeader title={"Profile"} />
      <Profile />
      <SectionHeader title={"Educations"} />
      <Educations />
      <SectionHeader title={"Experiences"} />
      <Works />
    </>
  )
}
