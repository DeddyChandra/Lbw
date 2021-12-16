<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    function getWeight($str){
        $pos = strpos($str, 'g');
        return substr($str,0,$pos-1);
    }

    function getBattery($str){
        $pos = strpos($str, 'mAh');
        if($pos == false){
            return 0;
        }
        $str = substr($str,0,$pos-1);
        $integer = "";
        preg_match_all('!\d+!', $str, $integer);
        return $integer == "" ? 0 : $integer[0][0];
    }

    function getData($brand){
        $result['totalWeight'] = 0;
        $result['countProperWeight'] = 0;
        $result['totalBattery'] = 0;
        $result['countProperBattery'] = 0;
        foreach($brand as $key => $item){
            $result['name'][$key] = $item->data->phone_name; 

            $weight = $item->data->specifications[2]->specs[1]->val[0];
            $weightInt = $this->getWeight($weight);
            $result['weight'][$key] = $weightInt;
            $result['totalWeight'] += (int) $weightInt;
            if($weightInt > 0){
                $result['countProperWeight']++;
            }

            $battery = $item->data->specifications[11]->specs[0]->val[0];
            $batteryInt = $this->getBattery($battery);
            $result['battery'][$key] = $batteryInt;
            $result['totalBattery'] += (int) $batteryInt;
            if($batteryInt > 0){
                $result['countProperBattery']++;
            }

        }
        return $result;
    }
}
