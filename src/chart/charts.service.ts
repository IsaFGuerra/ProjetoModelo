import { Injectable } from "@nestjs/common";
import QuickChart from "quickchart-js";
import fs from "fs";
import path from "node:path";


@Injectable()
export class ChartService {
    async generate(valor1: number, nome1: string, valor2: number, nome2: String): Promise<Buffer> {

        const chart = new QuickChart();
        chart.setConfig(
            {
                type: 'bar',                        // Show a bar chart
                data: {
                    labels: [nome1, nome2],                // eixo X
                    datasets: [{
                        label: 'Users',             // nome do dado na tabela
                        data: [valor1, valor2]           // eixo Y
                    }]
                }
            }
        );

        chart.toFile('public/chart.png');
        const image = await chart.toBinary();
        return image;
    }
}