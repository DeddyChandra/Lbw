<?php

namespace App\Http\Controllers;

use App\Models\samsung;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class ApiController extends Controller{
    function __constructor(){

    }

    function api_samsung(){
        $samsung = new samsung();
        dd($samsung->getData());
        ini_set('max_execution_time', 0);
        // Cache::forget('samsung_phone_specs');
        if(Cache::get('samsung_phone_specs') == null){
            $brand = file_get_contents('https://api-mobilespecs.azharimm.site/v2/brands/samsung-phones-9');
            $brand = json_decode($brand);
            $data = [];
            foreach($brand->data->phones as $key => $item){
                $data[] = json_decode(file_get_contents($item->detail));
                if($key == 20){
                    break;
                }
            }
            Cache::put('samsung_phone_specs', json_encode($data), $seconds = 365 * 24 * 60 * 60);
        }
        else{
            $data = Cache::get('samsung_phone_specs');
        }
        return response($data,200)
            ->header('Content-Type', 'application/json');
    }

    function api_apple(){
        ini_set('max_execution_time', 0);
        // Cache::forget('apple_phone_specs');
        if(Cache::get('apple_phone_specs') == null){
            $brand = file_get_contents('https://api-mobilespecs.azharimm.site/v2/brands/apple-phones-48');
            $brand = json_decode($brand);
            $data = [];
            foreach($brand->data->phones as $key => $item){
                $data[] = json_decode(file_get_contents($item->detail));
                if($key == 20){
                    break;
                }
            }
            Cache::put('apple_phone_specs', json_encode($data), $seconds = 365 * 24 * 60 * 60);
        }
        else{
            $data = Cache::get('apple_phone_specs');
        }
        return response($data,200)
            ->header('Content-Type', 'application/json');
    }

    function api_huawei(){
        ini_set('max_execution_time', 0);
        // Cache::forget('huawei_phone_specs');
        if(Cache::get('huawei_phone_specs') == null){
            $brand = file_get_contents('https://api-mobilespecs.azharimm.site/v2/brands/huawei-phones-58');
            $brand = json_decode($brand);
            $data = [];
            foreach($brand->data->phones as $key => $item){
                $data[] = json_decode(file_get_contents($item->detail));
                if($key == 20){
                    break;
                }
            }
            Cache::put('huawei_phone_specs', json_encode($data), $seconds = 365 * 24 * 60 * 60);
        }
        else{
            $data = Cache::get('huawei_phone_specs');
        }
        return response($data,200)
            ->header('Content-Type', 'application/json');
    }

    function api_oppo(){
        ini_set('max_execution_time', 0);
        // Cache::forget('oppo_phone_specs');
        if(Cache::get('oppo_phone_specs') == null){
            $brand = file_get_contents('https://api-mobilespecs.azharimm.site/v2/brands/oppo-phones-82');
            $brand = json_decode($brand);
            $data = [];
            foreach($brand->data->phones as $key => $item){
                $data[] = json_decode(file_get_contents($item->detail));
                if($key == 20){
                    break;
                }
            }
            Cache::put('oppo_phone_specs', json_encode($data), $seconds = 365 * 24 * 60 * 60);
        }
        else{
            $data = Cache::get('oppo_phone_specs');
        }
        return response($data,200)
            ->header('Content-Type', 'application/json');
    }

    function api_xiaomi(){
        ini_set('max_execution_time', 0);
        // Cache::forget('xiaomi_phone_specs');
        if(Cache::get('xiaomi_phone_specs') == null){
            $brand = file_get_contents('https://api-mobilespecs.azharimm.site/v2/brands/xiaomi-phones-80');
            $brand = json_decode($brand);
            $data = [];
            foreach($brand->data->phones as $key => $item){
                $data[] = json_decode(file_get_contents($item->detail));
                if($key == 20){
                    break;
                }
            }
            Cache::put('xiaomi_phone_specs', json_encode($data), $seconds = 365 * 24 * 60 * 60);
        }
        else{
            $data = Cache::get('xiaomi_phone_specs');
        }
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
