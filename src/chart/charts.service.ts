import { Injectable } from "@nestjs/common";
import QuickChart from "quickchart-js";
import fs from "fs";
import path from "node:path";


@Injectable()
export class ChartService {
    async generate(): Promise<Buffer> {

        const chart = new QuickChart();;
        chart.setConfig(
            {
                type: 'bar',                                // Show a bar chart
                data: {
                    labels: [2012, 2013, 2014, 2015, 2016],   // Set X-axis labels
                    datasets: [{
                        label: 'Users',                         // Create the 'Users' dataset
                        data: [120, 60, 50, 180, 120]           // Add data to the chart
                    }]
                }
            }
        );

        chart.toFile('public/chart.png');
        const image = await chart.toBinary();
        return image;
    }
}