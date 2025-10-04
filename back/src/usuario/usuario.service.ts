import { Injectable } from '@nestjs/common';
import { HelperErrores } from 'helpers/HelperErrores';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsuarioService {
    constructor(private prisma: PrismaService) {}

    /**
     * @summary Método para registrar un usuario
     */
    @HelperErrores()
    async registrar() {}

    /**
     * @summary Método para autenticar un usuario
     */
    @HelperErrores()
    async autenticar() {}

    /**
     * @summary Método para obtener un usuario
     */
    @HelperErrores()
    async obtener() {}
}
