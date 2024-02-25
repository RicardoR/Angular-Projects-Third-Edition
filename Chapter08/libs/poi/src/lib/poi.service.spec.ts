import { poiListMock } from './mocks/poi-list.mock';
import { PoiEntity } from './../state/poi.models';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PoiService } from './poi.service';

describe('PoiService', () => {
  let service: PoiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PoiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all the pois', () => {
    service.getAll().subscribe((poiList: PoiEntity[]) => {
      expect(poiList).toBe(poiListMock);
    })
    const request = httpMock.expectOne((req) => req.url === 'assets/poi.json');

    expect(request.request.method).toBe('GET');
    request.flush(poiListMock);
  });
});
