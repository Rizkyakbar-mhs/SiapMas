<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Users extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('Users')) {
            // if Users Table Exists Do Nothing
        }
        else {
            
            // Make Users Table
            Schema::create('Users', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->integer('NIP');
                $table->char('Name','50');
                $table->char('Email','50');
                $table->char('Password','50');
                $table->char('Address','100');
                $table->integer('No_Hp');
                $table->datetime('created at', 0);
                $table->timestamps(0);
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Drop Table
        Schema::drop('Users');
    }
}
