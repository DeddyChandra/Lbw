<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller{
    
    function view_search(){
        return view('search');
    }

    function view_compare(){
        return view('compare');
    }

    function view_brands(){
        return view('brands');
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

        $samsungWeight = [];
        $samsungName = [];
        foreach($samsungData as $key => $item){
            $weight = $item->data->specifications[2]->specs[1]->val[0];
            $weightInt = $this->getWeight($weight);
            $samsungWeight[] = $weightInt;
            $samsungName[] = $item->data->phone_name;
        }

        $appleWeight = [];
        $appleName = [];
        foreach($appleData as $key => $item){
            $weight = $item->data->specifications[2]->specs[1]->val[0];
            $weightInt = $this->getWeight($weight);
            $appleWeight[] = $weightInt;
            $appleName[] = $item->data->phone_name;
        }

        $huaweiWeight = [];
        $huaweiName = [];
        foreach($huaweiData as $key => $item){
            $weight = $item->data->specifications[2]->specs[1]->val[0];
            $weightInt = $this->getWeight($weight);
            $huaweiWeight[] = $weightInt;
            $huaweiName[] = $item->data->phone_name;
        }

        $oppoWeight = [];
        $oppoName = [];
        foreach($oppoData as $key => $item){
            $weight = $item->data->specifications[2]->specs[1]->val[0];
            $weightInt = $this->getWeight($weight);
            $oppoWeight[] = $weightInt;
            $oppoName[] = $item->data->phone_name;
        }

        $xiaomiWeight = [];
        $xiaomiName = [];
        foreach($xiaomiData as $key => $item){
            $weight = $item->data->specifications[2]->specs[1]->val[0];
            $weightInt = $this->getWeight($weight);
            $xiaomiWeight[] = $weightInt;
            $xiaomiName[] = $item->data->phone_name;
        }

        return view('charts',[
            "samsungName" => json_encode($samsungName),
            "appleName" => json_encode($appleName),
            "huaweiName" => json_encode($huaweiName),
            "oppoName" => json_encode($oppoName),
            "xiaomiName" => json_encode($xiaomiName),
            
            "samsungWeight" => json_encode($samsungWeight),
            "appleWeight" => json_encode($appleWeight),
            "huaweiWeight" => json_encode($huaweiWeight),
            "oppoWeight" => json_encode($oppoWeight),
            "xiaomiWeight" => json_encode($xiaomiWeight),
            // "samsungData" => json_encode($samsungData),
            // "appleData" => json_encode($appleData),
            // "huaweiData" => json_encode($huaweiData),
            // "xiaomiData" => json_encode($xiaomiData),
            // "oppoData" => json_encode($oppoData)
        ]);
    }
}
