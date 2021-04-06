<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = factory(App\User::class)->create(['email' => 'admin@app.com']);
        $admin->assignRole('admin');

        $supervisor = factory(App\User::class)->create(['email' => 'supervisor@app.com']);
        $supervisor->assignRole('supervisor');

        $employee = factory(App\User::class)->create(['email' => 'employee@app.com']);
        $employee->assignRole('employee');

        factory(App\User::class, 5)
            ->create()
            ->each(function ($user) {
                $user->assignRole('supervisor');
            });

        factory(App\User::class, 5)
            ->create()
            ->each(function ($user) {
                $user->assignRole('employee');
            });
    }
}
