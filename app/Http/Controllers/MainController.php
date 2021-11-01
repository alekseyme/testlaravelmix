<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class MainController extends Controller
{
    public function index() {
        $row = DB::table('projects')->get();
        return response($row, 200);
    }
}
