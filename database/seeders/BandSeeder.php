<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\models\Band;
use App\models\Genre;


class BandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

    Band::insert([
        [
        'genre_id' => 1,
        'name' => 'Pink Floyd',
        ],
        [
        'genre_id' => 2,
        'name' => 'Iron Maiden',
        ],
        [
        'genre_id' => 3,
        'name' => 'AC/DC',
        ],
        [
        'genre_id' => 4,
        'name' => 'Metallica',
        ],
        [
        'genre_id' => 2,
        'name' => 'Alice Cooper',
        ],
        [
        'genre_id' => 2,
        'name' => 'Kiss',
        ],
        [
        'genre_id' => 2,
        'name' => 'Europe',
        ],
        [
        'genre_id' => 2,
        'name' => 'Motorhead',
        ],
        [
        'genre_id' => 4,
        'name' => 'Kreator',
        ],
        [
        'genre_id' => 2,
        'name' => 'Kraken',
        ]
        ]);
    }
}
