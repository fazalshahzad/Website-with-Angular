import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  createProductForm:any | FormGroup;

  constructor(
    
    private _formBuilder:FormBuilder, 
    private _toastr:ToastrService
    
  ) {
    this.productFormModel();
   }

  ngOnInit(): void {
  }
  productFormModel(){
    this.createProductForm = this._formBuilder.group({
      Name:['',[Validators.required, Validators.minLength(1),Validators.maxLength(100)]],
      Des:[''],
      Quantity:['',Validators.required],
      Price:['', Validators.required],
      LimitedStock:[],
      Discount:[],
      Image:[],
    });
  }

    submitPF(){
    console.log(this.createProductForm.value);
  }

  uploadImage(imageData:any){
    const _uploadImage = imageData.target.files[0];
    this.createProductForm.get('Image').setValue(_uploadImage);
    // this.imageName = _uploadImage.name;
    // this._uploadToForm.get('Image').setValue(_uploadImage);
  }

  submitProductForm(){
    let formValue = new FormData();
    formValue.append('Name', this.createProductForm.get('Name').value);
    formValue.append('Des', this.createProductForm.get('Des').value);
    formValue.append('Des', this.createProductForm.get('Quantity').value);
    formValue.append('Price', this.createProductForm.get('Price').value);
    formValue.append('LimitedStock', this.createProductForm.get('LimitedStock').value);
    formValue.append('Discount', this.createProductForm.get('Discount').value);
    formValue.append('Image', this.createProductForm.get('Image').value);

    console.log(formValue);
 }

 submitPFToastr(){
  this._toastr.success('New product has been added successfully.', 'Check it out on Product Page to make sure!', {
    timeOut: 3000,
  });
 }

}