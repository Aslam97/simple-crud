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
        $user = factory(App\User::class)->create([
            'email' => 'admin@admin.com',
            'avatar' => 'https://www.gravatar.com/avatar/' . md5(strtolower('admin@admin.com')) . '.jpg?s=200&d=mm',
        ]);

        $user->assignRole('admin');

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
