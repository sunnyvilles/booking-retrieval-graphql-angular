import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CheckinComponent } from './checkin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatInputHarness } from '@angular/material/input/testing';
import { MatButtonHarness } from '@angular/material/button/testing';

describe('CheckinComponent', () => {
  let component: CheckinComponent;
  let fixture: ComponentFixture<CheckinComponent>;
  let harnessLoader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule],
      declarations: [CheckinComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    harnessLoader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate booking form for diferrent values', async () => {
    const invalidBookingCode = 'ab12';
    const validBookingCode = 'abc34d';

    const input = await harnessLoader.getHarness<MatInputHarness>(
      MatInputHarness.with({ selector: '#booking-code-input' })
    );
    const input2 = await harnessLoader.getHarness<MatInputHarness>(
      MatInputHarness.with({ selector: '#family-name-input' })
    );
    const checkButton = await harnessLoader.getHarness<MatButtonHarness>(
      MatButtonHarness.with({ selector: '#submit-booking' })
    );

    expect(input).toBeTruthy();

    await input.setValue(invalidBookingCode);
    await input2.setValue('hello');
    await checkButton.click();

    expect(await checkButton.isDisabled()).toBe(true);
    expect(fixture.componentInstance.checkinForm.invalid).toBe(true);

    await input.setValue(validBookingCode);
    await checkButton.click();

    expect(await checkButton.isDisabled()).toBe(false);
    expect(fixture.componentInstance.checkinForm.invalid).toBe(false);
  });
});
