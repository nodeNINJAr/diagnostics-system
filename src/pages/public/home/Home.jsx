import React from 'react'
import  useAuth from '../../../hooks/useAuth'

const Home = () => {
  const {name} = useAuth();
  console.log(name);
  return (
    <div>Home</div>
  )
}

export default Home