import { Injectable } from '@nestjs/common';
import PDFKit from 'pdfkit';
@Injectable()
export class GenerateHLService {
    async generateHL(doc: PDFKit.PDFDocument, xi: number, xf: number, y: number) {
    doc.strokeColor('#e4e4e4')
        .lineWidth(0.05)
        .moveTo(xi, y)
        .lineTo(xf, y)
        .stroke();
};
}