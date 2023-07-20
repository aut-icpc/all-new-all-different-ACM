import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Inject,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'acpc-modal-body',
  templateUrl: './modal-body.component.html',
  styleUrls: ['./modal-body.component.scss']
})
export class ModalBodyComponent implements AfterViewInit {

  @ViewChild('dynamicContent', { read: ViewContainerRef })
  dynamicContentContainer!: ViewContainerRef;

  constructor(
    public dialogRef: MatDialogRef<ModalBodyComponent>,
    private componentFactoryResolver: ComponentFactoryResolver,
    @Inject(MAT_DIALOG_DATA) public data: { header: string; content: any }
  ) {}

  ngAfterViewInit(): void {
    if (this.data.content instanceof TemplateRef) {
      this.createDynamicContentFromTemplate(this.data.content);
    } else if (this.data.content) {
      this.createComponentFromComponent(this.data.content);
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

  createDynamicContentFromTemplate(content: TemplateRef<any>): void {
    this.clearDynamicContent()
    this.dynamicContentContainer.createEmbeddedView(content);
  }

  createComponentFromComponent(component: any): void {
    this.clearDynamicContent()
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      component
    );
    const componentRef = factory.create(this.dynamicContentContainer.parentInjector);
    this.dynamicContentContainer.insert(componentRef.hostView);
  }

  private clearDynamicContent() {
    if (this.dynamicContentContainer)
      this.dynamicContentContainer.clear();
  }

}
