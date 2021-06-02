<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\State;
use Illuminate\Support\Facades\Http;

class StatesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      //Retorna a lista de estados do ibge
      $data = json_decode(Http::get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')->body());
      State::query()->delete();
      foreach($data as $item){
        State::create([
          'name'=>$item->nome,
          'symbol'=>$item->sigla
        ]);
      }
    }
}
