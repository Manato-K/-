import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import words from "@/constants/language/ja/chart";

export type ChartProps = {
  PopulationData?: {
    prefName: string;
    data: {
      year: number;   
      value: number;
    }[];
  }[];
};

const Chart = ({ PopulationData }: ChartProps): JSX.Element => {
  const series: Highcharts.SeriesOptionsType[] = [];
  const categories: string[] = [];

  PopulationData?.forEach((population) => {
    let data: number[] = []
    population.data.forEach((PopulationData) => {
        categories.push(String(PopulationData.year))
    })
    
    series.push({
        type: "line",
        name: population.prefName,
        data: data
    })
  })
  

  const options: Highcharts.Options = {
    title: {
        text: "TITLE"
    },

    xAxis: {
      title: {
        text: words.YEAR,
      },
    },

    yAxis: {
      title: {
        text: words.POPULATION_COUNT,
      },
    },
    
    series:
      series.length === 0
        ? [
            {
              type: "line",
              name: words.PREFECTURES_NAME,
              data: [],
            },
          ]
        : series,
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Chart;
