import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { AddressDetailsComponent } from './address-details/crp-address-details.component';
import { CrpCompanyDetailsComponent } from './crp-company-details/crp-company-details.component';
import { CrpContactpersionDetailsComponent } from './crp-contactperson-details/crp-contactpersion-details.component';
import { CrpCorporateDetailsComponent } from './crp-corporate-details/crp-corporate-details.component';
import { IndBasicDetailsComponent } from './ind-basic-details/ind-basic-details.component';
import { IndPrsonalDetailsComponent } from './ind-prsonal-details/ind-prsonal-details.component';
import { NgModule } from '@angular/core';
import { CrpDashboardComponent } from './crp-dashboard/crp-dashboard.component';
import { IndDashbordComponent } from './ind-dashbord/dashbord.component';

export const routes: Routes = [
{
    path:'',
    component:LoginComponent
 },
 {
    path:'login',
    component:LoginComponent
 },
 {
    path:'',
    component:LayoutComponent,
    children: [
        {
            path:'inddashboard',
            component: IndDashbordComponent
        },
        {
            path:'crpdashboard',
            component: CrpDashboardComponent
        },
        {
            path:'basicDetails',
            component: IndBasicDetailsComponent
        },
        {
            path:'addressDetails',
            component: AddressDetailsComponent
        },
        {
            path:'personalDetails',
            component: IndPrsonalDetailsComponent
        },
        {
            path:'companyDetails',
            component: CrpCompanyDetailsComponent
        },
        {
            path:'contactPersonDetails',
            component: CrpContactpersionDetailsComponent
        },
        {
            path:'corporateDetails',
            component: CrpCorporateDetailsComponent
        },
]}

];


