import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Users} from '../model/users';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { syntaxError } from '@angular/compiler';
@Component({
  selector: 'officec',
  templateUrl: './officec.component.html',
  styleUrls: ['./officec.component.css']
})
export class OfficecComponent {
  
 errormsg0="";
 errormsg1="";
 errormsg2="";
 errormsg3="";
 errormsg4="";
 errormsg5="";
 errormsg6="";
 errormsg7="";
 errormsg8="";
 errormsg9="";
 errormsga="";
 errormsgb="";
 errormsgc="";
 errormsgd="";
 errormsge="";
 errormsgf="";
 errormsgg="";
 
 userlist:Array<Users>=[];
 clobj:Users=new Users();
  constructor() { 

  
  }
 addUser(){
   try {
  if(this.clobj.OfficeName=="")
  {
  this.errormsg0="OfficeName cant be empty";}
   if(this.clobj.AddressLine1=="")
   {
   this.errormsg1=" AddressLine1 cant be empty";}
   if(this.clobj.AddressLine2=="")
   {
   this.errormsg2=" AddressLine2 cant be empty";}
   if(this.clobj.City=="")
   {
   this.errormsg3=" City cant be empty";}
   if(this.clobj.State =="")
   {
   this.errormsg4=" State cant be empty";}
  if(this.clobj.Zip =="")
   {
   this.errormsg5=" Zip cant be empty";}
   if(this.clobj.Phone=="" || this.clobj.Phone.length!=10 )
 {
   this.errormsg6=" Phone cant be empty";}
  if(this.clobj.Fax =="")
  {
   this.errormsg7="Fax cant be empty";}
  if(this.clobj.Email=="" )
   {
   this.errormsg8=" Email cant be empty";}
   if(this.clobj.Contact =="" || this.clobj.Contact.length!=10)
   {   this.errormsg9=" Contact cant be empty";}
   if(this.clobj.NationalProviderID =="")
   {
   this.errormsga=" NationalProviderID cant be empty";}
   if(this.clobj.EmplyerTaxID =="")
   {
  this.errormsgb=" EmplyerTaxID cant be empty";}
   if(this.clobj.AgencyMedicareID =="")
   {
   this.errormsgc="AgencyMedicareID  cant be empty";}
   if(this.clobj.AgencyMedicaidID =="")
   {
   this.errormsgd=" AgencyMedicaidID cant be empty";}
   if(this.clobj.BranchID =="")
   {
   this.errormsge=" BranchID cant be empty";}
   if(this.clobj.StateAssignedAgencyID =="")
   {
  this.errormsgf=" StateAssignedAgencyID cant be empty";}
  if(this.clobj.AgencymeetsMedicareQualitySubmissionRequirement =="")
   {
  this.errormsgg="AgencymeetsMedicareQualitySubmissionRequirement  cant be empty";}
  this.userlist.push(this.clobj);
  console.log(this.clobj);  
  }
   catch (err0r) {
     console.log("nonono");
  
}
}
}
