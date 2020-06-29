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

```language
<any-component ngx-fe [fnObject]="myObjectWhichContainsMethod" fnName="MethodNameToCall" [fnParm]="[myMethodPar1,myMethodPar2]"></any-component>
```
