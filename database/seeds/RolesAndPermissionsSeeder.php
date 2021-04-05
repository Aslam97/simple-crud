<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions
        $permissions = [
            ['name' => 'task.create', 'guard_name' => 'web'],
            ['name' => 'task.view', 'guard_name' => 'web'],
            ['name' => 'task.update', 'guard_name' => 'web'],
            ['name' => 'task.delete', 'guard_name' => 'web'],
        ];

        Permission::insert($permissions);

        // roles
        $roles = [
            ['name' => 'admin', 'guard_name' => 'web'],
            ['name' => 'supervisor', 'guard_name' => 'web'],
            ['name' => 'employee', 'guard_name' => 'web'],
        ];

        Role::insert($roles);

        foreach (Role::all() as $role) {
            $role->givePermissionTo(Permission::all());
        }
    }
}
