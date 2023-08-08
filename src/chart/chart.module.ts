import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { ChartService } from "./charts.service";
import { CreateChartController } from "./chart.controller";

@Module({
    imports: [PrismaModule],
    controllers: [CreateChartController],
    providers: [ChartService],
})
export class ChartModule { }