import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import words from "@/constants/language/ja/chart"

const chart = ():JSX.Element => {
    const series: Highcharts.SeriesOptionsType[] = [];
    const categories = [];

    const options: Highcharts.Options = {
        title: {
            text:'TITLE'
        },
        xAxis: {
            title: words.YEAR 
        },
        yAxis: {
            title: words.POPULATION_COUNT
        }
    }

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options}/>
        </div>
        
    )

}

export default chart