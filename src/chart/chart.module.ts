import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { ChartService } from "./charts.service";

@Module({
    imports: [PrismaModule],
    controllers: [],
    providers: [ChartService],
})
export class ChartModule { }