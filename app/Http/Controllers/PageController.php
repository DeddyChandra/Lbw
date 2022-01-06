<?php

namespace App\Http\Controllers;

use App\Models\apple;
use App\Models\huawei;
use App\Models\oppo;
use App\Models\samsung;
use App\Models\xiaomi;
use Illuminate\Support\Facades\Cache;

class PageController extends Controller{

    function view_search(){
        return view('search');
    }

    function view_compare(){
        return view('compare');
    }

    function view_brands(){
        if(Cache::get('brand-data') == null){
            $brandData = file_get_contents('https://api-mobilespecs.azharimm.site/v2/brands');
            $brandData = json_encode($brandData);
            Cache::forever('brand-data', $brandData);
        }
        else{
            $brandData = Cache::get('brand-data');
        }
        // dd($brandData);
        return view('brands', [
            "brandData" => json_decode($brandData),
        ]);
    }

    function view_brands_detail($brand_slug){
        if(Cache::get($brand_slug) == null){
            $brandData = file_get_contents('https://api-mobilespecs.azharimm.site/v2/brands/'.$brand_slug);
            $brandData = json_encode($brandData);
            Cache::forever($brand_slug, $brandData);
        }
        else{
            $brandData = Cache::get($brand_slug);
        }
        // dd($brandData);
        return view('brandsItem', [
            "brandData" => json_decode($brandData),
        ]);
    }

    function view_latest(){
        return view('latest');
    }

    function view_topByInterest(){
        return view('topByInterest');
    }

    function view_topByFans(){
        return view('topByFans');
    }

    function view_charts(){
        ini_set('max_execution_time', 0);

        // Cache::forget('samsung_data');
        // Cache::forget('apple_data');
        // Cache::forget('huawei_data');
        // Cache::forget('xiaomi_data');
        // Cache::forget('oppo_data');

        $samsung = new samsung();
        if(Cache::get('samsung_data') == null){
            $samsungData = $this->getDataFromDetail($samsung->getData());
            Cache::put('samsung_data', $samsungData, $seconds = 365 * 24 * 60 * 60);
        }
        else{
            $samsungData = Cache::get('samsung_data');
        }

        $apple = new apple();
        if(Cache::get('apple_data') == null){
            $appleData = $this->getDataFromDetail($apple->getData());
            Cache::put('apple_data', $appleData, $seconds = 365 * 24 * 60 * 60);
        }
        else{
            $appleData = Cache::get('apple_data');
        }

        $huawei = new huawei();
        if(Cache::get('huawei_data') == null){
            $huaweiData = $this->getDataFromDetail($huawei->getData());
            Cache::put('huawei_data', $huaweiData, $seconds = 365 * 24 * 60 * 60);
        }
        else{
            $huaweiData = Cache::get('huawei_data');
        }
        // dd($huaweiData);

        $xiaomi = new xiaomi();
        if(Cache::get('xiaomi_data') == null){
            $xiaomiData = $this->getDataFromDetail($xiaomi->getData());
            Cache::put('xiaomi_data', $xiaomiData, $seconds = 365 * 24 * 60 * 60);
        }
        else{
            $xiaomiData = Cache::get('xiaomi_data');
        }

        $oppo = new oppo();
        if(Cache::get('oppo_data') == null){
            $oppoData = $this->getDataFromDetail($oppo->getData());
            Cache::put('oppo_data', $oppoData, $seconds = 365 * 24 * 60 * 60);
        }
        else{
            $oppoData = Cache::get('oppo_data');
        }

        // dd($samsungData, $appleData, $huaweiData);
        // dd($samsungData, $appleData, $huaweiData, $xiaomiData, $oppoData);
        // $this->getData($samsungData);

        return view('charts',[
            'samsung' => json_encode($this->getData($samsungData)),
            'apple' => json_encode($this->getData($appleData)),
            'huawei' => json_encode($this->getData($huaweiData)),
            'oppo' => json_encode($this->getData($oppoData)),
            'xiaomi' => json_encode($this->getData($xiaomiData)),
        ]);
    }
}
