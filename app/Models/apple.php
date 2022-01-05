<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class apple extends Model
{
    use HasFactory;

    public function getData(){
        $data = [];
        $data['2022'] = [
        ];
        $data['2021'] = [
            'http://api-mobilespecs.azharimm.site/v2/apple_iphone_13_pro_max-11089',
            'http://api-mobilespecs.azharimm.site/v2/apple_iphone_13_pro-11102',
            'http://api-mobilespecs.azharimm.site/v2/apple_iphone_13-11103',
            'http://api-mobilespecs.azharimm.site/v2/apple_iphone_13_mini-11104',
            'http://api-mobilespecs.azharimm.site/v2/apple_ipad_mini_(2021)-11105'
        ];
        $data['2020'] = [
            'http://api-mobilespecs.azharimm.site/v2/apple_iphone_12_pro_max-10237',
            'http://api-mobilespecs.azharimm.site/v2/apple_iphone_12_pro-10508',
            'http://api-mobilespecs.azharimm.site/v2/apple_iphone_12_mini-10510',
            'http://api-mobilespecs.azharimm.site/v2/apple_ipad_air_(2020)-10444',
            'http://api-mobilespecs.azharimm.site/v2/apple_ipad_10_2_(2020)-10445'
        ];
        $data['2019'] = [
            'http://api-mobilespecs.azharimm.site/v2/apple_iphone_11_pro_max-9846',
            'http://api-mobilespecs.azharimm.site/v2/apple_iphone_11_pro-9847',
            'http://api-mobilespecs.azharimm.site/v2/apple_iphone_11-9848',
            'http://api-mobilespecs.azharimm.site/v2/apple_ipad_10_2_(2019)-9857',
            'http://api-mobilespecs.azharimm.site/v2/apple_watch_edition_series_5-9860'
        ];
        $data['2018'] = [
            'http://api-mobilespecs.azharimm.site/v2/apple_ipad_pro_12_9_(2018)-9387',
            'http://api-mobilespecs.azharimm.site/v2/apple_ipad_pro_11_(2018)-9386',
            'http://api-mobilespecs.azharimm.site/v2/apple_iphone_xs_max-9319',
            'http://api-mobilespecs.azharimm.site/v2/apple_iphone_xs-9318',
            'http://api-mobilespecs.azharimm.site/v2/apple_iphone_xr-9320'
        ];
        return $data;
    }
}
