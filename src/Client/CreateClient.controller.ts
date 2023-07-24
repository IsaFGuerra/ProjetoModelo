//classe que recebe as requisições do insomnia
//pra ser controller precisa ter o @Controller
//aqui ficam os @get, @posts, @delete, ....
import { Body, Controller, Get, Injectable, Param, Post } from '@nestjs/common';
import { ClientDTO } from '../dtos/Client.dto';
import { ClientService } from './client.service';


@Controller('teste')
export class CreateClientController {
  constructor(private readonly userService: ClientService) { }

  @Post()
  create(@Body() body: ClientDTO) {
    return this.userService.create(body);
  }
}