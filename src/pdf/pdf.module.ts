import { PrismaService } from "src/prisma/prisma.service";
import { CreatePDFService } from "./post-pdf.service";
import { Module } from "@nestjs/common";
import { PostPDFController } from "./post-pdf.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { ContentService } from "./content.service";
import { GenerateHLService } from "./generateHL.service";
import { ChartService } from "src/chart/charts.service";

@Module({
    imports: [PrismaModule],
    controllers: [PostPDFController],
    providers: [PrismaService, CreatePDFService, ContentService, GenerateHLService, ChartService],
})
export class PDFModule { }