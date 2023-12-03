import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ShippingModel } from '../../model/shipping.model';
import { ShippingService } from '../../services/shipping.service';


@Component({
    selector: 'app-simple-form',
    templateUrl: './simple-form.component.html',
    styleUrls: ['./simple-form.component.scss'],
    standalone: true,
    imports: [
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        ReactiveFormsModule
    ]
})
export class SimpleFormComponent {
    private fb = inject(FormBuilder);
    addressForm = this.fb.group({
        company: '',
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        address: ['', Validators.required],
        address2: '',
        city: ['', Validators.required],
        state: ['', Validators.required],
        postalCode: ['', Validators.compose([
            Validators.required, Validators.minLength(5), Validators.maxLength(5)])
        ],
        shipping: ['free', Validators.required]
    });

    hasUnitNumber = false;

    states = [
        {"name": "Acre", "abbreviation": "AC"},
        {"name": "Alagoas", "abbreviation": "AL"},
        {"name": "Amazonas", "abbreviation": "AM"},
        {"name": "Amapá", "abbreviation": "AP"},
        {"name": "Bahia", "abbreviation": "BA"},
        {"name": "Ceará", "abbreviation": "CE"},
        {"name": "Distrito Federal", "abbreviation": "DF"},
        {"name": "Espírito Santo", "abbreviation": "ES"},
        {"name": "Goiás", "abbreviation": "GO"},
        {"name": "Maranhão", "abbreviation": "MA"},
        {"name": "Minas Gerais", "abbreviation": "MG"},
        {"name": "Mato Grosso do Sul", "abbreviation": "MS"},
        {"name": "Mato Grosso", "abbreviation": "MT"},
        {"name": "Pará", "abbreviation": "PA"},
        {"name": "Paraíba", "abbreviation": "PB"},
        {"name": "Pernambuco", "abbreviation": "PE"},
        {"name": "Piauí", "abbreviation": "PI"},
        {"name": "Paraná", "abbreviation": "PR"},
        {"name": "Rio de Janeiro", "abbreviation": "RJ"},
        {"name": "Rio Grande do Norte", "abbreviation": "RN"},
        {"name": "Rondônia", "abbreviation": "RO"},
        {"name": "Roraima", "abbreviation": "RR"},
        {"name": "Rio Grande do Sul", "abbreviation": "RS"},
        {"name": "Santa Catarina", "abbreviation": "SC"},
        {"name": "Sergipe", "abbreviation": "SE"},
        {"name": "São Paulo", "abbreviation": "SP"},
        {"name": "Tocantins", "abbreviation": "TO"}
    ];

    constructor(protected shippingService: ShippingService){

    }

    onSubmit(): void {
        try{
            var toCreate: ShippingModel = {                
                company: this.addressForm.get("company")?.value!,
                firstName: this.addressForm.get("firstName")?.value!,
                lastName: this.addressForm.get("lastName")?.value!,
                address: this.addressForm.get("address")?.value!,
                address2: this.addressForm.get("address2")?.value!,
                city: this.addressForm.get("city")?.value!,
                state: this.addressForm.get("state")?.value!,
                postalCode: this.addressForm.get("postalCode")?.value!,
                shipping: this.addressForm.get("shipping")?.value!
            }

            this.shippingService.setShipping(toCreate);
            this.addressForm.reset();
        }

        catch(Exception){
            throw Exception;
        }
    }
}
