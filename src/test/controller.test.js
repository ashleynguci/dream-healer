import { healTheDream } from '../controller';
import {mockRequest, mockResponse} from './mockHttp';

describe(' Controller', () => {
  beforeEach(() => jest.clearAllMocks());
  const request = mockRequest();
  const response = mockResponse();

  test('it should be called ', async () => {
    request.body = {'text':'hello world ! '};
    
    await healTheDream(request, response);
    expect(response.send).toHaveBeenCalledTimes(1)
  })
})