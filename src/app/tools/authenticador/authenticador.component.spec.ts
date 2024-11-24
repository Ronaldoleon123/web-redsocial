import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticadorComponent } from './authenticador.component';

describe('AuthenticadorComponent', () => {
  let component: AuthenticadorComponent;
  let fixture: ComponentFixture<AuthenticadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
