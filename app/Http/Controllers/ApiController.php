<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class ApiController extends Controller{
    function __constructor(){

    }

    function api_samsung(){
        ini_set('max_execution_time', 0);
        $brand = file_get_contents('http://api-mobilespecs.azharimm.site/v2/brands/samsung-phones-9');
        $brand = json_decode($brand);
        $devices = [];
        // Cache::forget('samsung_phone_specs');
        if(Cache::get('samsung_phone_specs') == null){
            foreach($brand->data->phones as $key => $item){
                $devices[] = json_decode(file_get_contents($item->detail));
                if($key == 20){
                    break;
                }
            }
            Cache::forever('samsung_phone_specs', json_encode($devices));
        }
        $data = Cache::get('samsung_phone_specs');
        return response($data,200)
            ->header('Content-Type', 'application/json');
    }

    function api_apple(){
        ini_set('max_execution_time', 0);
        $brand = file_get_contents('https://api-mobilespecs.azharimm.site/v2/brands/apple-phones-48');
        $brand = json_decode($brand);
        $devices = [];
        // Cache::forget('apple_phone_specs');
        if(Cache::get('apple_phone_specs') == null){
            foreach($brand->data->phones as $key => $item){
                $devices[] = json_decode(file_get_contents($item->detail));
                if($key == 20){
                    break;
                }
            }
            Cache::forever('apple_phone_specs', json_encode($devices));
        }
        $data = Cache::get('apple_phone_specs');
        return response($data,200)
            ->header('Content-Type', 'application/json');
    }

    function api_huawei(){
        ini_set('max_execution_time', 0);
        $brand = file_get_contents('https://api-mobilespecs.azharimm.site/v2/brands/huawei-phones-58');
        $brand = json_decode($brand);
        $devices = [];
        // Cache::forget('huawei_phone_specs');
        if(Cache::get('huawei_phone_specs') == null){
            foreach($brand->data->phones as $key => $item){
                $devices[] = json_decode(file_get_contents($item->detail));
                if($key == 20){
                    break;
                }
            }
            Cache::forever('huawei_phone_specs', json_encode($devices));
        }
        $data = Cache::get('huawei_phone_specs');
        return response($data,200)
            ->header('Content-Type', 'application/json');
    }

    function api_oppo(){
        ini_set('max_execution_time', 0);
        $brand = file_get_contents('https://api-mobilespecs.azharimm.site/v2/brands/oppo-phones-82');
        $brand = json_decode($brand);
        $devices = [];
        // Cache::forget('oppo_phone_specs');
        if(Cache::get('oppo_phone_specs') == null){
            foreach($brand->data->phones as $key => $item){
                $devices[] = json_decode(file_get_contents($item->detail));
                if($key == 20){
                    break;
                }
            }
            Cache::forever('oppo_phone_specs', json_encode($devices));
        }
        $data = Cache::get('oppo_phone_specs');
        return response($data,200)
            ->header('Content-Type', 'application/json');
    }

    function api_xiaomi(){
        ini_set('max_execution_time', 0);
        $brand = file_get_contents('https://api-mobilespecs.azharimm.site/v2/brands/xiaomi-phones-80');
        $brand = json_decode($brand);
        $devices = [];
        // Cache::forget('xiaomi_phone_specs');
        if(Cache::get('xiaomi_phone_specs') == null){
            foreach($brand->data->phones as $key => $item){
                $devices[] = json_decode(file_get_contents($item->detail));
                if($key == 20){
                    break;
                }
            }
            Cache::forever('xiaomi_phone_specs', json_encode($devices));
        }
        $data = Cache::get('xiaomi_phone_specs');
        return response($data,200)
            ->header('Content-Type', 'application/json');
    }

    function clear_api_cache(){
        Cache::forget('samsung_phone_specs');
        Cache::forget('apple_phone_specs');
        Cache::forget('huawei_phone_specs');
        Cache::forget('oppo_phone_specs');
        Cache::forget('xiaomi_phone_specs');
    }
}
