import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-viagem',
  templateUrl: './viagem.component.html',
  styleUrls: ['./viagem.component.css']
})
export class ViagemComponent {
  viagemForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.viagemForm = this.fb.group({
      destino: ['', Validators.required],
      dataIda: ['', Validators.required],
      dataVolta: ['', Validators.required],
      numeroPassageiros: [1, [Validators.required, Validators.min(1), Validators.max(5)]],
      emailContato: ['', [Validators.required, Validators.email]]
    });
  }

  getErrorMessage(field: string) {
    const control = this.viagemForm.get(field);
    if (control?.hasError('required')) {
      return 'Campo obrigatório';
    }
    if (control?.hasError('min')) {
      return 'O número de passageiros deve estar entre 1 e 5';
    }
    if (control?.hasError('max')) {
      return 'O número de passageiros deve estar entre 1 e 5';
    }
    if (control?.hasError('email')) {
      return 'Insira um e-mail válido';
    }
    return '';
  }

  onSubmit() {
    if (this.viagemForm.valid) {
      console.log(this.viagemForm.value);
    }
  } 
}  

