<?php

namespace App\Http\Controllers;
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
        $samsungData = file_get_contents('https://dc.deddychandra.my.id/api/samsung');
        $samsungData = json_decode($samsungData);
        // dd($samsungData);

        $appleData = file_get_contents('https://dc.deddychandra.my.id/api/apple');
        $appleData = json_decode($appleData);

        $huaweiData = file_get_contents('https://dc.deddychandra.my.id/api/huawei');
        $huaweiData = json_decode($huaweiData);

        $xiaomiData = file_get_contents('https://dc.deddychandra.my.id/api/xiaomi');
        $xiaomiData = json_decode($xiaomiData);

        $oppoData = file_get_contents('https://dc.deddychandra.my.id/api/oppo');
        $oppoData = json_decode($oppoData);

        return view('charts',[
            'samsung' => json_encode($this->getData($samsungData)),
            'apple' => json_encode($this->getData($appleData)),
            'huawei' => json_encode($this->getData($huaweiData)),
            'oppo' => json_encode($this->getData($oppoData)),
            'xiaomi' => json_encode($this->getData($xiaomiData)),
        ]);
    }
}
