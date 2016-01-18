import { Component } from 'angular2/core';

@Component({
  selector: 'app',
  template: `
    <div class="container">
      <header class="page-header">
          <h1>Angular Starter</h1>
          <p>A Webpack starter for the Angular2 Beta Class (Hypertheory)</p>
      </header>
      <section class="row">
        <p>Your Stuff Here <small>The only limit is <em>your imagination!</em></small></p>
        <div class="alert alert-danger">
            Now Get Busy!
        </div>
      </section>
    </div>
  `
})

export class App {}
