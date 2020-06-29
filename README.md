# NgxFunctionExecutor

Allows angular to execute user-defined methods smoothly without caring for Change Detection problem which triggers the method multiple times whenever there is a change.

Ngx-FE is a directive which takes 3 inputs and executes your method from a template without impacting any performance.

## Usage

app.module.ts

```typescript
import { NgxFunctionExecutorDirective } from 'ngx-function-executor';
@NgModule({
  declarations: [
    AppComponent,
    NgxFunctionExecutorDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
```

Component

```html
<any-component ngx-fe [fnObject]="myObjectWhichContainsMethod"
fnName="MethodNameToCall" [fnParm]="[myMethodPar1,myMethodPar2]">
</any-component>
```

Example

```typescript
const myObject = {
  propert1: false,
  myFunction: (params: any[]) => {
    console.log(params[0] + params[1]);
  }
};
```

```html
<div ngx-fe [fnObject]="myObject" fnName="myFunction" [fnParm]="[2,3]"></div>
```

Before we used to call the method in template {{myFunction(2,3)}} which the angular change detection will trigger many times whenever there is any change even on mouse move. This creates a performance issue.

What i have done is very simple logic to take the inputs as a directive and execute the method from the object which will execute smoothly without triggering 100s of time.
