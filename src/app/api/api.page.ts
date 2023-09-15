import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/provider/pokemon.service';


@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  listPokemon: any []=[];

  constructor( public http: HttpClient,
    private router: Router,
    private pokeService: PokemonService
    ) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(){
    for (let i =1; i <=150; i++){
      this.pokeService.getPokemon(i).subscribe(
      (res)=>{
        this.listPokemon.push(res);
      },
      (err) => {

      }
      )
    }
  }

}
