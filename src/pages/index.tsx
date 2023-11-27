import React, { useEffect, useState } from "react"
import Header from "@/compnents/header"
import List from "@/compnents/prefecturesList"
import Chart from "@/compnents/chart"
import { getPrefecures, prefectures } from "@/utils/getPrefectures"
import { getPopulationConfiguration } from "@/utils/getPopulationComposition"
import { ChartProps } from "@/compnents/chart"

export default function Home() {
  const [ prefectures, setPrefectuers ] = useState<
    | {
      message: null
      result: {
        prefCode: number,
        prefName: string,
      }[]
    } | null
  >(null)
  const [ prefPopulation, setPrefPopulation] = useState<ChartProps["PopulationData"]>([])

  useEffect(() => {
    
    getPrefecures().then((result) => {
      // fix 型
      setPrefectuers(result)
    })
    .catch((e) => {})
    // const fetchPrefectures = async () => {
    //     const data:any = await getPrefecures()
    //     if( data && data.result) {
    //         setPrefectuers(data.result)
    //     }
    // }
    // fetchPrefectures();
  }, [])



  const clickCheck = (
    prefName: string,
    prefCode: number,
    check: boolean
  ) => {
    let count = prefPopulation?.slice()

    if (check) {
      if (count?.findIndex((value) => value.prefName === prefName) !== -1)
      return
      const chartData = async () => {
        const data: any = await getPopulationConfiguration(prefCode)
        setPrefPopulation(data.result)
  
        chartData()
      }
    } else {
      const deleteChartData = count?.findIndex((value) => value.prefName === prefName)
      if  (deleteChartData === -1) return;
      count?.splice(deleteChartData, 1)
      setPrefPopulation(count)
    }
  }
  

  return (
    <main>
      <div>
        <Header />
        { prefectures && (
          <List 
            prefectures={prefectures.result}
            onChange={clickCheck}
        />
        )}

        <div>
          <Chart PopulationData={prefPopulation} />
        </div>
      </div>
    </main>
  )
}
