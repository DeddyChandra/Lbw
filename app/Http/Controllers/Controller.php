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
        foreach($brand as $year => $items){
            $result[$year]['totalWeight'] = 0;
            $result[$year]['countProperWeight'] = 0;
            $result[$year]['totalBattery'] = 0;
            $result[$year]['countProperBattery'] = 0;
            // dd($items);
            foreach($items as $key => $item){
                $result[$year]['name'][$key] = $item->data->phone_name;

                $weight = $item->data->specifications[2]->specs[1]->val[0];
                $weightInt = $this->getWeight($weight);
                $result[$year]['weight'][$key] = $weightInt;
                $result[$year]['totalWeight'] += (int) $weightInt;
                if($weightInt > 0){
                    $result[$year]['countProperWeight']++;
                }

                $battery = $item->data->specifications[11]->specs[0]->val[0];
                $batteryInt = $this->getBattery($battery);
                $result[$year]['battery'][$key] = $batteryInt;
                $result[$year]['totalBattery'] += (int) $batteryInt;
                if($batteryInt > 0){
                    $result[$year]['countProperBattery']++;
                }
            }
        }
        // dd($result);
        return $result;
    }

    function    getDataFromDetail($data){
        $result = [];
        foreach($data as $key => $items){
            foreach($items as $key2 => $item){
                $result[$key][$key2] = json_decode(file_get_contents($item));
            }
        }
        return $result;
    }
}
