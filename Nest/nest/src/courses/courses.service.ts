import { Injectable } from '@nestjs/common';

@Injectable()
export class CoursesService {
  getHelloWord() {
    return 'Hello Word';
  }

  getFindId(id: string) {
    return `Curso #${id}`;
  }
}
