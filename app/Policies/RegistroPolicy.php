<?php

namespace App\Policies;

use App\Models\User;
use App\Models\LecheRegistros;
use Illuminate\Auth\Access\Response;

class RegistroPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, LecheRegistro $lecheRegistro): bool
    {
        //
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, LecheRegistros $lecheRegistros): bool
    {
        //
        return $lecheRegistros->user()->is($user);
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, LecheRegistro $lecheRegistro): bool
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, LecheRegistro $lecheRegistro): bool
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, LecheRegistro $lecheRegistro): bool
    {
        //
    }
}
