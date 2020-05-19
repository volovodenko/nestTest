import { BadRequestException } from '@nestjs/common';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { isEnum } from 'class-validator';
import { UploadedFile } from './uploaded.file';

enum ImageType {
  'image/jpeg' = 'image/jpeg',
  'image/png' = 'image/png',
  'image/pjpeg' = 'image/pjpeg',
  'image/gif' = 'image/gif',
}

type Callback = (error: Error | null, acceptFile: boolean) => void;
const maxFileSize = 10 * 1024 * 1024; // 10Mb

const fileFilter = (req: any, file: UploadedFile, callback: Callback) => {
  if (!isEnum(file.mimetype, ImageType)) {
    return callback(
      new BadRequestException('Only image files are allowed'),
      false,
    );
  }

  if (file.size > maxFileSize) {
    return callback(
      new BadRequestException(
        `File must not be larger than ${Math.round(
          (maxFileSize / 1024 / 1024) * 10,
        ) / 10}Mb`,
      ),
      false,
    );
  }

  callback(null, true);
};

export const multerImageOptions: MulterOptions = {
  fileFilter,
};
