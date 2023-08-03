<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\models\Concert;

class ConcertSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Concert::insert([
            [
            'band_id' => 1,
            'name' => 'The Dark Side of the Moon',
            'date' => '1973-03-10',
            'place' => 'United Kingdom',
            'time' => 142.49,
            'place' => 'London'
            ],
            [
            'band_id' => 1,
            'name' => 'The Wall',
            'date' => '1979-11-30',
            'time' => 181.09,
            'place' => 'London'
            ],
            [
            'band_id' => 2,
            'name' => 'Fear of the Dark',
            'date' => '1992-05-11',
            'time' => 158.36,
            'place' => 'London'
            ],
            [
            'band_id' => 2,
            'name' => 'The Number of the Beast',
            'date' => '1982-03-22',
            'time' => 139.16,
            'place' => 'London'
            ],
            [
            'band_id' => 3,
            'name' => 'The Razors Edge Concert',
            'date' => '1990-09-24',
            'time' => 146.42,
            'place' => 'Toronto'
            ],
            [
            'band_id' => 3,
            'name' => 'Highway to Hell Concert',
            'date' => '1989-07-27',
            'time' => 141.41,
            'place' => 'Berlin'
            ]
            ]);
    }
}
