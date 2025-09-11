import { Test, TestingModule } from '@nestjs/testing';
<<<<<<< HEAD
import { AdminsService } from './providers/admins.service';
=======
import { AdminsService } from './admins.service';
>>>>>>> d2e94048e8728d36e6d24fc43c23638096f53ceb

describe('AdminsService', () => {
  let service: AdminsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminsService],
    }).compile();

    service = module.get<AdminsService>(AdminsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
