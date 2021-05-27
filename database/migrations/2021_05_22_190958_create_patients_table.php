<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patients', function (Blueprint $table) {
          $table->id();
          $table->string('name');
          $table->string('phone',15);
          $table->string('email')->nullable();
          $table->string('cpf',14);
          $table->string('rg',14);
          $table->string('cep',9);
          $table->string('number');
          $table->string('complement')->nullable();
          $table->string('street');
          $table->string('district');
          $table->string('city');
          $table->integer('state_id');
          $table->date('birth_date');
          $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('patients');
    }
}
