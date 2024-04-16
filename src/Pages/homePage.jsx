import axios from "axios"
import { useEffect, useState } from "react"
import ItemsList from "../component/ItemsList"

const HomePage = () => {
  const [itemsData, setItemsData] = useState([])



  useEffect(() => {
    const getAllItems = async () => {
      try {
        const { data } = await axios.get("http://localhost:5055/getAllItem", {
          headers: {
            Authorization:
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ6YWliYWhtZWRnQGdtYWlsLmNvbSIsIm5hbWUiOiJ6YWliYWxpIGFobWVkZyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MTIyMTk2NzMsImV4cCI6MTcxMjIyMzI3M30.foHftJ58AxaC4xi4CpjtMd94waTWQUxfrOx9as5RLf8",
          },
        })
        setItemsData(data)
        console.log("get data", data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllItems()
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">HOME PAGE</h1>

      {/* Items List Section */}
      <div>
        {itemsData.map((item) => (
          <ItemsList
            key={item.id}
            item={item}

          />
        ))}
      </div>
    </div>
  )
}

export default HomePage
