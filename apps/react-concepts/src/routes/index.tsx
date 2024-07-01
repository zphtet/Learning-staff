// import React from 'react'
import { useQuery } from "@apollo/client"
import { GET_QUERY } from "../apollo/query"
const Index = () => {
  const { loading, error, data } = useQuery(GET_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>;

  console.log( 'query data users',data)
  return (
    <div>
      <h2 className='text-3xl text-blue-500 h-[50vh] bg-blue-200'>This is Index Route</h2>
    </div>
  )
}

export default Index