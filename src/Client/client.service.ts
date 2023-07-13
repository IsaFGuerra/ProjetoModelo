// //service é a camada entre a API e o BD

// import { Injectable } from '@nestjs/common';
// import { PrismaService } from 'src/prisma.service';

// @Injectable()
// export class ClientService {
//     constructor(private readonly prismaService: PrismaService) {}

//     async createClient(name : string, esporte : string){
//         const client = await this.prismaService.client.create({
//             data: {
//                 name : name,
//                 esporte : esporte,
//             }
//         });
//         return client;
//     }
// }
