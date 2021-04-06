<?php

use App\Status;
use Illuminate\Database\Seeder;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $statuses = [
            ['name' => 'On track', 'value' => 'on-track', 'color' => '#00423f', 'bg' => '#00d4c8'],
            ['name' => 'At risk', 'value' => 'at-risk', 'color' => '#574500', 'bg' => '#ffd100'],
            ['name' => 'On track', 'value' => 'off-track', 'color' => '#fff', 'bg' => '#fb5779'],
        ];

        Status::insert($statuses);
    }
}
