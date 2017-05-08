import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filedrop',
  templateUrl: './ngx-filedropper.component.html',
  styleUrls: ['./ngx-filedropper.component.scss']
})

export class NgxFiledropperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.allowedExtensions = this.allowedDocExtenstions.concat(this.allowedImageExtensions);
  }

  public currentFiles: Array<File> = [];
  public thumbnails: any[] = [];

  public dropzoneInvalid: boolean = false;
  public allowedExtensions: Array<string>;

  private pdfLogo = require('../assets/pdf_logo.png');

  public allowedDocExtenstions = ['pdf'];
  public allowedImageExtensions = ['jpg', 'jpeg', 'bmp', 'png', 'gif'];


  onFilesChange(file: File) {

    if (this.currentFiles.filter(x => x.name == file.name).length) {
      this.dropzoneTempInvalid();
    }

    if (!this.dropzoneInvalid) {
      this.currentFiles.push(file);

      let ext = file.name.split('.')[file.name.split('.').length - 1];

      if (this.allowedImageExtensions.filter(x => x === ext).length) {
        this.buildThumbnail(file);
      } else if (this.allowedDocExtenstions.filter(x => x === ext).length) {
        this.parsePdf(file);
      }

    }
  }

  deleteFile(i: number) {
    this.thumbnails.splice(i, 1);
    this.currentFiles.splice(i, 1);
  }

  dropzoneTempInvalid() {
    this.dropzoneInvalid = true;
    setTimeout(() => {
      this.dropzoneInvalid = false;
    }, 1500);
  }


  readFile(file: File, reader: FileReader, callback: any) {
    reader.onload = () => {
      callback(reader.result);
    }

    reader.readAsDataURL(file);
  }

  parsePdf(file: File) {
    let reader = new FileReader();
    this.readFile(file, reader, (result: any) => {

      this.thumbnails.push(this.pdfLogo);
    });
  }

  buildThumbnail(file: File) {
    let reader = new FileReader();
    this.readFile(file, reader, (result: any) => {
      var img = document.createElement("img");
      img.src = result;

      // Send this img to the resize function (and wait for callback)
      this.resize(img, 250, 250, (resized_jpeg: any, before: any, after: any) => {

        // Add the resized jpeg img source to a list for preview
        // This is also the file you want to upload. (either as a
        // base64 string or img.src = resized_jpeg if you prefer a file). 
        this.thumbnails.push(resized_jpeg);

        // Read the next file;
        //this.readFiles(files, index + 1);
      });
    })
  }

  resize(img: any, MAX_WIDTH: number, MAX_HEIGHT: number, callback: any) {
    // This will wait until the img is loaded before calling this function
    return img.onload = () => {

      // Get the images current width and height
      var width = img.width;
      var height = img.height;

      // Set the WxH to fit the Max values (but maintain proportions)
      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }

      // create a canvas object
      var canvas = document.createElement("canvas");

      // Set the canvas to the new calculated dimensions
      canvas.width = width;
      canvas.height = height;
      var ctx = canvas.getContext("2d");

      if (ctx) {
        ctx.drawImage(img, 0, 0, width, height);
      }

      // Get this encoded as a jpeg
      // IMPORTANT: 'jpeg' NOT 'jpg'
      var dataUrl = canvas.toDataURL('image/jpeg');

      // callback with the results
      callback(dataUrl, img.src.length, dataUrl.length);
    };
  }
}