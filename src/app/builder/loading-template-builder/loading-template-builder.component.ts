import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-template-builder',
  templateUrl: './loading-template-builder.component.html',
  styleUrls: ['./loading-template-builder.component.css']
})
export class LoadingTemplateBuilderComponent implements OnInit {

  @Input() dataResponseFromBackend;
  constructor() { }

  ngOnInit(): void {
  }

}
