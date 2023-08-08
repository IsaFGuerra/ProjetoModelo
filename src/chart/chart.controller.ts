import { Body, Controller, Post } from "@nestjs/common";
import { ChartService } from "./charts.service";

@Controller('grafico')
export class CreateChartController {
  constructor(private readonly service:ChartService) { }

  @Post()
  create() {
    return this.service.generate();
  }
}