import { Injectable } from "@nestjs/common";
import PDFKit from 'pdfkit';

@Injectable()
export default class FontsService{
    async generateFonts(doc: PDFKit.PDFDocument){
        doc.registerFont(
            'Gotham-Bold',
            'src/report/tools/fonts/GothamSSm-Bold.otf',
          );
    }
}