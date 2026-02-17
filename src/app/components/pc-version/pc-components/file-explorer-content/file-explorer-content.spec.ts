import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileExplorerContent } from './file-explorer-content';

describe('FileExplorerContent', () => {
  let component: FileExplorerContent;
  let fixture: ComponentFixture<FileExplorerContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileExplorerContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileExplorerContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
