<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\models\Genre;

class GenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Genre::insert
        ([
            [
            'name' => 'Progressive Rock',
            ],
            [
            'name' => 'Heavy Metal',
            ],
            [
            'name' => 'Thrash Metal',
            ],
            [
            'name' => 'Hard Rock'
            ]
        ]);
    }
}
