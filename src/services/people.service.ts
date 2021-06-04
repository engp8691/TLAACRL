import { PeopleDto, PeopleRequest } from '../dtos/people.dto';

class PeopleService {
  public prescribe = async (peopleReq: PeopleRequest): Promise<PeopleDto> => {
    const peopleDto = new PeopleDto();
    peopleDto.sayHi(`Hi ${peopleReq.name}!`);
    peopleDto.treatments(peopleReq.job, peopleReq.patients);
    return peopleDto;
  };
}

export default PeopleService;
