import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';
import { ActivatedRoute,Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-quote',
  templateUrl: './edit-quote.component.html',
  styleUrls: ['./edit-quote.component.scss']
})
export class EditQuoteComponent implements OnInit {
  quote = {
    author: '',
    title :''
    
  } 

  id:string;
  constructor(private quotesService : QuotesService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id)
    if(this.id){
     
      this.quotesService.getQuote(this.id).subscribe(data =>{
        this.quote = data
      });
  }
    
     
  }

  onSave(form){
    
    const data = form.value
    if(this.id){
      this.snackBar.open('Quote Updated')
      this.quotesService.updateQuote(this.id,data).subscribe(quote =>{
        console.log(quote)
        this.router.navigateByUrl("/quotes")
      })
    }else{
      this.snackBar.open('Quote Created')
      this.quotesService.createQuote(data).subscribe(quote =>{
        console.log(quote);
        this.router.navigateByUrl("/quotes")
      })
    }
  }

}
