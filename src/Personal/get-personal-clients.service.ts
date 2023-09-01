import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class GetPersonalService {
    constructor(private readonly database: PrismaService) { }

    async getClientFromPersonal(name2: string) {
        const personal = await this.database.personal.findMany({
            where: {
                User: {
                    name: {
                        equals: name2,
                    }
                }
            },
            // select: {
            //     client:{
            //         name: true,
            //     }
            // }
            include: {
                client: {
                    select: {
                        User: {
                            select: {
                                name: true
                            }
                        }
                    }
                }
            }
        });
        console.log(personal)
        return personal
    }
}