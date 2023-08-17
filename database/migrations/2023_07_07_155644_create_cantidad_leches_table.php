<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cantidad_leches', function (Blueprint $table) {
            $table->id();
            $table->Integer('litros');
            $table->timestamps();
        });
        // Al insertar 
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('leche_ordenadas');
    }
};
