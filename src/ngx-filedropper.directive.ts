import { Directive, HostListener, HostBinding, EventEmitter, Output, Input } from '@angular/core';

@Directive({
  selector: '[filedrop]'
})
export class NgxFiledropperDirective {

  constructor() { }

  @Output() private filesChangeEmitter: EventEmitter<File> = new EventEmitter();

  @Output() private invalidFileEmitter: EventEmitter<boolean> = new EventEmitter();

  @Input() private allowed_extensions: Array<string> = [];

  @HostBinding('style.background') private background = '#eee !important';

  @HostListener('dragover', ['$event']) ondragover(evt : any) {
    console.dir('dragged over');
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#999';

  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt : any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';
  }

  @HostListener('drop', ['$event']) public onDrop(evt : any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';
    let files = evt.dataTransfer.files;
    let valid_files: Array<File> = [];
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        let ext = files[i].name.split('.')[files[i].name.split('.').length - 1];
        if (this.allowed_extensions.lastIndexOf(ext.toLowerCase()) != -1) {
          valid_files.push(files[i]);
        } else {
          this.invalidFileEmitter.emit(true);
          // alert(`You tried to upload a disallowed filetype: ${ext}`)
        }
      }
      this.filesChangeEmitter.emit(valid_files[0]);
    }
  }

}
