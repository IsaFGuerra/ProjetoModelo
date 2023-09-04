import { Personal, User } from "@prisma/client";
import PDFKit from 'pdfkit';
import { Injectable } from "@nestjs/common";
import { GenerateHLService } from "./generateHL.service";
import { ChartService } from "src/chart/charts.service";
import { contentServiceDTO } from "src/dtos/content-service.dto";

// export default (doc: PDFKit.PDFDocument, data: Personal[]) => {
@Injectable()
export class ContentService {
  constructor(private readonly service: GenerateHLService, private readonly service2: ChartService) { }

  async content(doc: PDFKit.PDFDocument, data: contentServiceDTO[]) {
    let position = 182;
    doc.font('Helvetica-Bold').fontSize(15).text('Alemao', 59, position);
    doc.font('Helvetica-Bold')
      .fillColor('#969696')
      .fontSize(16)
      .text(" ",
        59,
        position + 20
      );
    doc.font('Helvetica-Bold')
      .fillColor('black')
      .fontSize(12)
      .text('Nome', 300, position - 7);
    doc.font('Helvetica-Bold').text(`ID`, 415, position - 7);
    doc.text("CPF",
      200,
      175
    );
    const tableTop = 180;
    let i;
    for (i = 0; i < data.length; i += 1) {
      const item = data[i];
      position = tableTop + (i + 1) * 20;
      doc.font('Helvetica').fontSize(11).text(item.name, 300, position);
      doc.font('Helvetica-Bold').text(item.id.toString(), 417, position);
      doc.font('Helvetica').text(item.cpf, 200, position);
    }
    position = tableTop + data.length * 20 + 20;

    const tabela = await this.service2.generate(1, "oi", 1, "oi")

    const HL = await this.service.generateHL(doc, 24, 571, position)
  };
}