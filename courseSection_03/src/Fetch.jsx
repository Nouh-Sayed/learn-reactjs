import React from 'react'

const Fetch = () => {

const [data, setData] = React.useState(null)

    console.log("render")
React.useEffect(() => {
     
    fetch("https://swapi.dev/api/starships/22/")
    .then (res=> res.json())
    .then (data =>setData(data))
}, [])


  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default Fetch
