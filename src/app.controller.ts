import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Get,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { multerImageOptions } from './image';
import { UploadedFile as File } from './uploaded.file';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('hello')
  @UseInterceptors(FileInterceptor('photo', multerImageOptions))
  getHello(@UploadedFile() photo: File): string {
    console.log(photo);

    return 'OK';
  }

  @Get('')
  getTest(): string {
    return 'OK';
  }
}
