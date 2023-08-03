<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Album;

class AlbumSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    Album::insert([
        [
        'band_id' => 1,
        'name' => 'The Dark Side of the Moon',
        'release_date' => '1973-03-01',
        'place' => 'United Kingdom',
        'duration' => 42.49,
        'copies_sold' => 45000000
        ],
        [
        'band_id' => 1,
        'name' => 'The Wall',
        'release_date' => '1979-11-30',
        'place' => 'United Kingdom',
        'duration' => 81.09,
        'copies_sold' => 30000000
        ],
        [
        'band_id' => 2,
        'name' => 'Fear of the Dark',
        'release_date' => '1992-05-11',
        'place' => 'United Kingdom',
        'duration' => 58.36,
        'copies_sold' => 7000000
        ],
        [
        'band_id' => 2,
        'name' => 'The Number of the Beast',
        'release_date' => '1982-03-22',
        'place' => 'United Kingdom',
        'duration' => 39.16,
        'copies_sold' => 14000000
        ],
        [
        'band_id' => 3,
        'name' => 'The Razors Edge',
        'release_date' => '1990-09-24',
        'place' => 'Canadá',
        'duration' => 46.42,
        'copies_sold' => 5000000
        ],
        [
        'band_id' => 3,
        'name' => 'Highway to Hell',
        'release_date' => '1979-07-27',
        'place' => 'Canadá',
        'duration' => 41.41,
        'copies_sold' => 7000000
        ],
        [
        'band_id' => 4,
        'name' => 'Master of Puppets',
        'release_date' => '1986-03-03',
        'place' => 'United States',
        'duration' => 54.46,
        'copies_sold' => 10000000
        ],
        [
        'band_id' => 4,
        'name' => 'Metallica',
        'release_date' => '1991-08-12',
        'place' => 'United States',
        'duration' => 62.40,
        'copies_sold' => 30000000
        ],
        [
        'band_id' => 5,
        'name' => 'Trash',
        'release_date' => '1989-06-21',
        'place' => 'United States',
        'duration' => 45.05,
        'copies_sold' => 5000000
        ],
        [
        'band_id' => 5,
        'name' => 'Welcome to My Nightmare',
        'release_date' => '1975-03-11',
        'place' => 'United States',
        'duration' => 43.42,
        'copies_sold' => 5000000
        ],
        [
        'band_id' => 6,
        'name' => 'Lick it Up',
        'release_date' => '1983-09-18',
        'place' => 'United States',
        'duration' => 41.40,
        'copies_sold' => 3000000
        ],
        [
        'band_id' => 6,
        'name' => 'Destroyer',
        'release_date' => '1976-03-15',
        'place' => 'United States',
        'duration' => 34.40,
        'copies_sold' => 4000000
        ],
        [
        'band_id' => 7,
        'name' => 'The Final Countdown',
        'release_date' => '1986-05-26',
        'place' => 'Sweden',
        'duration' => 40.10,
        'copies_sold' => 3000000
        ],
        [
        'band_id' => 7,
        'name' => 'Wings of Tomorrow',
        'release_date' => '1984-02-24',
        'place' => 'Sweden',
        'duration' => 38.10,
        'copies_sold' => 100000
        ],
        [
        'band_id' => 8,
        'name' => 'Ace of Spades',
        'release_date' => '1980-11-08',
        'place' => 'United Kingdom',
        'duration' => 36.40,
        'copies_sold' => 2000000
        ],
        [
        'band_id' => 8,
        'name' => 'Overkill',
        'release_date' => '1979-03-24',
        'place' => 'United Kingdom',
        'duration' => 41.40,
        'copies_sold' => 1000000
        ],
        [
        'band_id' => 9,
        'name' => 'Pleasure to Kill',
        'release_date' => '1986-11-01',
        'place' => 'Germany',
        'duration' => 36.40,
        'copies_sold' => 1500000
        ],
        [
        'band_id' => 9,
        'name' => 'Endless Pain',
        'release_date' => '1985-10-01',
        'place' => 'Germany',
        'duration' => 45.40,
        'copies_sold' => 2000000
        ],
        [
        'band_id' => 10,
        'name' => 'Kraken I',
        'release_date' => '1987-01-01',
        'place' => 'Colombia',
        'duration' => 38.40,
        'copies_sold' => 1000000
        ],
        [
        'band_id' => 10,
        'name' => 'Kraken II',
        'release_date' => '1989-01-01',
        'place' => 'Colombia',
        'duration' => 47.40,
        'copies_sold' => 1000000
        ]
    ]);

    }
}
