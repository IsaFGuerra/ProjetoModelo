import { Controller, Get, Param, Post } from "@nestjs/common";
import { CreatePDFService } from "./post-pdf.service";


@Controller('/createPDF')
export class PostPDFController {
    constructor(private readonly PDFService: CreatePDFService) { }

    @Post(':id')
    async createPDF(@Param('id') id: string) {
        try {
            const createPDF = await this.PDFService.createPDF(id)
            return createPDF;
        } catch (err) {
            console.log(err)
        }

    }
}