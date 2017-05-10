# ngx-filedropper

This library provides a component for dragging + dropping files using the HTML 5 file upload API.

The component is stable and usable,and a more configurable directive will be released soon.

## Installation

To install this library, run:

```bash
$ npm install ngx-filedropper --save
```

## Usage

Import the `NgxFiledropperModule` into your module of choice:

```typescript
import { NgxFiledropperModule } from "ngx-filedropper";

@NgModule({
  imports: [
    NgxFiledropperModule,
  ]
})
```

Once imported, simply use the component's template in your template's HTML:

```xml
<app-filedrop></app-filedrop>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

and then

```bash
$ npm run copyassets
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Harrison Evans](mailto:hevans9000@gmail.com)
