<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVaccineStocksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vaccine_stocks', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('vaccine_id')->unsigned()->index();
            $table->integer('quantity');
            $table->date('validity');
            $table->string('batch');
            $table->unsignedBigInteger('vendor_id')->unsigned()->index();
            $table->timestamps();

            $table->foreign('vaccine_id')->references('id')->on('vaccines');
            $table->foreign('vendor_id')->references('id')->on('vendors');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vaccine_stocks');
    }
}
