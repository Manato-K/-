import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const chart = ():JSX.Element => {
    const series: Highcharts.SeriesOptionsType[] = [];
    const categories = [];

    const options: Highcharts.Options = {

    }

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options}/>
        </div>
        
    )

}

export default chart