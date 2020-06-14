<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Loan;
use Faker\Generator as Faker;

$factory->define(Loan::class, function (Faker $faker) {
    return [
        'estimated_date' => '2020-06-13',
        'return_date' => '2020-10-13',
        'status' => 'Ativo',
    ];
});
