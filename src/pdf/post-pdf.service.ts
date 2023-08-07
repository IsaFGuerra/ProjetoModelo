import fs from 'fs';
import path from 'path';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import PDFDocument from 'pdfkit';
import { ContentService } from './content.service';
// const personal = PersonalDTO;

@Injectable()
export class CreatePDFService {
  constructor(private readonly database: PrismaService, private readonly content: ContentService) { }

  async createPDF(id: string) {
    const personal = await this.database.personal.findMany({
      where: {
        personalId: id,
      }
    })
    const doc = new PDFDocument({
      size: 'A4',
      bufferPages: true,
      margins: {
        top: 30,
        bottom: 10,
        left: 10,
        right: 10,
      },
    });

    await this.content.content(doc, personal)
    // ContentService(doc, personal);
    const test = 'test';
    const filepath = path.join(__dirname, '..', '..', 'public');
    if (!fs.existsSync(filepath)) fs.mkdirSync(filepath);

    doc.pipe(fs.createWriteStream(`${filepath}/${test}.pdf`));

    doc.end();

    setTimeout(() => {
      fs.unlinkSync(`${filepath}/${test}.pdf`);
    }, 30 * 1000);

    return `${test}.pdf`;
  }


  // (() => {

}