<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class huawei extends Model{
    use HasFactory;
    public function getData(){
        $data = [];
        $data['2022'] = [
        ];
        $data['2021'] = [
            'http://api-mobilespecs.azharimm.site/v2/huawei_p50_pocket-11280',
            'http://api-mobilespecs.azharimm.site/v2/huawei_nova_8_se_4g-11247',
            'http://api-mobilespecs.azharimm.site/v2/huawei_enjoy_20e-11177',
            'http://api-mobilespecs.azharimm.site/v2/huawei_watch_gt_runner-11227',
            'http://api-mobilespecs.azharimm.site/v2/huawei_watch_gt_3-11171'
        ];
        $data['2020'] = [
            'http://api-mobilespecs.azharimm.site/v2/huawei_nova_8_se-10579',
            'http://api-mobilespecs.azharimm.site/v2/huawei_mate_40_pro+-10550',
            'http://api-mobilespecs.azharimm.site/v2/huawei_mate_40_rs_porsche_design-10551',
            'http://api-mobilespecs.azharimm.site/v2/huawei_mate_40_pro-10528',
            'http://api-mobilespecs.azharimm.site/v2/huawei_mate_40-10553'
        ];
        $data['2019'] = [
            'http://api-mobilespecs.azharimm.site/v2/huawei_nova_5z-9922',
            'http://api-mobilespecs.azharimm.site/v2/huawei_enjoy_10s-9933',
            'http://api-mobilespecs.azharimm.site/v2/huawei_enjoy_10-9905',
            'http://api-mobilespecs.azharimm.site/v2/huawei_mate_30_pro_5g-9880',
            'http://api-mobilespecs.azharimm.site/v2/huawei_mate_30_pro-9885'
        ];
        $data['2018'] = [
            'http://api-mobilespecs.azharimm.site/v2/huawei_y5_lite_(2018)-9501',
            'http://api-mobilespecs.azharimm.site/v2/huawei_nova_4-9481',
            'http://api-mobilespecs.azharimm.site/v2/huawei_p_smart_2019-9409',
            'http://api-mobilespecs.azharimm.site/v2/huawei_enjoy_9-9466',
            'http://api-mobilespecs.azharimm.site/v2/huawei_watch_gt-9395'
        ];
        return $data;
    }
}
