import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalDemoPage } from './modal-demo.page';

describe('ModalDemoPage', () => {
  let component: ModalDemoPage;
  let fixture: ComponentFixture<ModalDemoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDemoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalDemoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
