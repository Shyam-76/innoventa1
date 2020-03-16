import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RubricPage } from './rubric.page';

describe('RubricPage', () => {
  let component: RubricPage;
  let fixture: ComponentFixture<RubricPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubricPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RubricPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
