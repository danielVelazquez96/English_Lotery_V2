import { useState } from "react"

function usePage(initial) {
    const [page,setPage]=useState(initial)

    const changePage=(NewPage)=>{
      setPage(NewPage)
    }

  return [page,changePage]
}

export default usePage