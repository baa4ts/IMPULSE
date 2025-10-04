import { Controller, Get, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
    /**
     * @summary Api REST para la administración de usuarios
     */
    constructor(private readonly usuarioService: UsuarioService) {}

    @Post('registrar')
    registrar() {
        return this.usuarioService.registrar();
    }

    @Post('autenticar')
    autenticar() {
        return this.usuarioService.autenticar();
    }

    @Get()
    obtener() {
        return this.usuarioService.obtener();
    }
}
