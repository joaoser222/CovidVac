<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\StatesTableSeeder;
use Database\Seeders\PermissionsTableSeeder;
use Database\Seeders\AdminUserSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
      (new StatesTableSeeder)->run();
      (new PermissionsTableSeeder)->run();
      (new AdminUserSeeder)->run();
    }
}
