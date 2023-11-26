import Header from "@/compnents/header"
import List from "@/compnents/prefecturesList"
import Chart from "@/compnents/chart"

export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <div>
          <List />
        </div>
        <div>
          <Chart />
        </div>
      </div>
    </main>
  )
}
