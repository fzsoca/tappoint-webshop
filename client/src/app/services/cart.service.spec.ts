import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service).toBeTruthy();
  });

  it('should add item to cart', () => {
    const service: CartService = TestBed.get(CartService);
    service.addItem({testProp: 'true'})
    expect(service.getItems()).toBe([{testProp: 'true'}])
  })
});
