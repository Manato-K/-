import words from "@/constants/language/ja/chart"
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export type Props = {
    populationdata: {
        prefName: string;
        data: { 
            year: number;
            value: number 
        }[];
    }[];
}

const chart = ({populationdata}: Props):JSX.Element => {
    const series: Highcharts.SeriesOptionsType[] = [];
    const categories = [];

    for (let population of populationdata) {
        let data: number[] = []
        
        for (let populationData of population.data) {
            data.push(populationData.value)
            categories.push(String(populationData.year))
        }

        series.push({
            type: "line",
            name: population.prefName,
            data: data
        })
    }
    const options: Highcharts.Options = {
        xAxis: {
            title: {
                text: words.POPULATION_COUNT
            }
        },
        yAxis: {
            title: {
                text: words.YEAR
            }
        },
        series:
            series.length === 0 ? [
                {
                    type: "line",
                    name: words.PREFECTURES_NAME,
                    data: []
                }
            ]: series
    };

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options}/>
        </div>
        
    )

}

export default chart