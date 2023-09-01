//classe que recebe as requisições do insomnia
//pra ser controller precisa ter o @Controller
//aqui ficam os @get, @posts, @delete, ....
import { Body, Controller, Get, Injectable, Param, Post } from '@nestjs/common';
import { createClientDTO, createClientZodDTO } from '../dtos/create-client.dto';
import { ClientService } from './create-client.service';


@Controller('/teste')
export class CreateClientController {
  constructor(private readonly userService: ClientService) { }

  @Post()
  create(@Body() body: createClientDTO) {
    //adicionar zod
    const zod = createClientZodDTO.parse(body);
    return this.userService.create(zod);
  }
}