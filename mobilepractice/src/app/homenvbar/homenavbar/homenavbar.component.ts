import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-homenavbar',
  templateUrl: './homenavbar.component.html',
  styleUrls: ['./homenavbar.component.css']
})
export class HomenavbarComponent {

  searchForm: FormGroup;
  cards = [
    { title: 'Realme', description: 'This is a short description of the Realme product.', image: 'https://dvf83rt16ac4w.cloudfront.net/upload/media/1717395875728913.jpeg' },
    { title: 'IPhone', description: 'This is a short description of the iPhone product.', image: 'https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UF1000,1000_QL80_.jpg' },
    { title: 'One Plus', description: 'This is a short description of the One Plus product.', image: 'https://m.media-amazon.com/images/I/61amb0CfMGL._AC_UF1000,1000_QL80_.jpg' }
  ];
  filteredCards = this.cards;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchTerm: ['']
    });
  }

  ngOnInit(): void {
    this.searchForm.get('searchTerm')?.valueChanges.subscribe(value => {
      this.filterCards();
    });
  }

  filterCards() {
    const searchTerm = this.searchForm.get('searchTerm')?.value.toLowerCase();
    this.filteredCards = this.cards.filter(card =>
      card.title.toLowerCase().includes(searchTerm)
    );
  }
}
