<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class oppo extends Model{
    use HasFactory;
    public function getData(){
        $data = [];
        $data['2022'] = [
        ];
        $data['2021'] = [
            'http://api-mobilespecs.azharimm.site/v2/oppo_a11s-11288',
            'http://api-mobilespecs.azharimm.site/v2/oppo_find_n-11267',
            'http://api-mobilespecs.azharimm.site/v2/oppo_reno7_pro_5g-11190',
            'http://api-mobilespecs.azharimm.site/v2/oppo_reno7_5g-11160',
            'http://api-mobilespecs.azharimm.site/v2/oppo_reno7_se_5g-11191'
        ];
        $data['2020'] = [
            'http://api-mobilespecs.azharimm.site/v2/oppo_a53_5g-10608',
            'http://api-mobilespecs.azharimm.site/v2/oppo_reno5_pro_5g-10606',
            'http://api-mobilespecs.azharimm.site/v2/oppo_reno5_5g-10589',
            'http://api-mobilespecs.azharimm.site/v2/oppo_a73_5g-10499',
            'http://api-mobilespecs.azharimm.site/v2/oppo_reno4_f-10478'
        ];
        $data['2019'] = [
            'http://api-mobilespecs.azharimm.site/v2/oppo_a8-10002',
            'http://api-mobilespecs.azharimm.site/v2/oppo_a11-9901',
            'http://api-mobilespecs.azharimm.site/v2/oppo_k5-9907',
            'http://api-mobilespecs.azharimm.site/v2/oppo_reno_ace-9894',
            'http://api-mobilespecs.azharimm.site/v2/oppo_reno_a-9808'
        ];
        $data['2018'] = [
            'http://api-mobilespecs.azharimm.site/v2/oppo_a7-9394',
            'http://api-mobilespecs.azharimm.site/v2/oppo_r15x-9380',
            'http://api-mobilespecs.azharimm.site/v2/oppo_rx17_neo-9393',
            'http://api-mobilespecs.azharimm.site/v2/oppo_k1-9361',
            'http://api-mobilespecs.azharimm.site/v2/oppo_a7x-9317'
        ];
        return $data;
    }
}
