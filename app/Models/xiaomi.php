<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class xiaomi extends Model{
    use HasFactory;

    public function getData(){
        $data = [];
        $data['2022'] = [
        ];
        $data['2021'] = [
            'http://api-mobilespecs.azharimm.site/v2/xiaomi_12_pro-11287',
            'http://api-mobilespecs.azharimm.site/v2/xiaomi_12-11285',
            'http://api-mobilespecs.azharimm.site/v2/xiaomi_12x-11292',
            'http://api-mobilespecs.azharimm.site/v2/xiaomi_redmi_note_11t_5g-11217',
            'http://api-mobilespecs.azharimm.site/v2/xiaomi_redmi_note_11_4g-11241'
        ];
        $data['2020'] = [
            'http://api-mobilespecs.azharimm.site/v2/xiaomi_redmi_k30s-10517',
            'http://api-mobilespecs.azharimm.site/v2/xiaomi_poco_c3-10482',
            'http://api-mobilespecs.azharimm.site/v2/xiaomi_mi_10t_pro_5g-10437',
            'http://api-mobilespecs.azharimm.site/v2/xiaomi_mi_10t_5g-10473',
            'http://api-mobilespecs.azharimm.site/v2/xiaomi_redmi_9at-10591'
        ];
        $data['2019'] = [
            'http://api-mobilespecs.azharimm.site/v2/xiaomi_redmi_k30-9991',
            'http://api-mobilespecs.azharimm.site/v2/xiaomi_redmi_k30_5g-9979',
            'http://api-mobilespecs.azharimm.site/v2/xiaomi_redmi_note_8t-9946',
            'http://api-mobilespecs.azharimm.site/v2/xiaomi_mi_note_10_pro-9945',
            'http://api-mobilespecs.azharimm.site/v2/xiaomi_mi_note_10-9936'
        ];
        $data['2018'] = [
            'http://api-mobilespecs.azharimm.site/v2/xiaomi_mi_play-9499',
            'http://api-mobilespecs.azharimm.site/v2/xiaomi_black_shark_helo-9382',
            'http://api-mobilespecs.azharimm.site/v2/xiaomi_mi_mix_3-9378',
            'http://api-mobilespecs.azharimm.site/v2/xiaomi_redmi_note_6_pro-9333',
            'http://api-mobilespecs.azharimm.site/v2/xiaomi_mi_8_pro-9336'
        ];
        return $data;
    }
}
