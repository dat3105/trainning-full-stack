import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuotesService } from '../quotes.service'
import { Quote } from './quote';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  constructor(private quotesService: QuotesService) { }

  quotes : Observable<Quote[]>;
  subcription;

  ngOnInit(): void {
    // this.subcription = this.quotesService.getData().subscribe(data =>{
    //   console.log(data)
    //   this.quotes = data
    // })
    this.getData()
  }

  getData(){
    this.quotes = this.quotesService.getData()
  }

 
  getRandomColor(){
    const letters = '0123456789ABCDEF';

    let color = '#';
    for(let i=0;i<6;i++){
      color += letters[Math.floor(Math.random() *16 )]
    }
    return { background:color}
  }

   onDelete(id){
    console.log(id)
    this.quotesService.deleteQuote(id).subscribe(data =>{
      this.getData()
      console.log('Quote delete')
    })
  }

}
