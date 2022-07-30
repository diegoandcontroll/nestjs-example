import { IsString } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  readonly id: number;

  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsString({ each: true })
  readonly tags: string[];
}
