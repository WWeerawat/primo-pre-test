import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('merge function', () => {
    it('should able to merge two empty arrays', () => {
      expect(service.merge([], [])).toEqual([]);
    });

    it('should able to merge two arrays with one element each', () => {
      expect(service.merge([1], [2])).toEqual([1, 2]);
    });

    it('should able to merge two arrays with multiple elements', () => {
      expect(service.merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('should able to merge two arrays with different length', () => {
      expect(service.merge([5, 10], [2])).toEqual([2, 5, 10]);
    });
  });
});
