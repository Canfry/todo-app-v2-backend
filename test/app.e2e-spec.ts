import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';

// Create a test module

describe('App e2e', () => {
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
  });
  it.todo('should pass');
});
