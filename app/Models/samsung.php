<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class samsung extends Model{
    use HasFactory;

    public function getData(){
        $data = [];
        $data['2022'] = [
            'http://api-mobilespecs.azharimm.site/v2/samsung_galaxy_s21_fe_5g-10954',
        ];
        $data['2021'] = [
            'http://api-mobilespecs.azharimm.site/v2/samsung_galaxy_tab_a8_10_5_(2021)-11265',
            'http://api-mobilespecs.azharimm.site/v2/samsung_galaxy_a13_5g-11149',
            'http://api-mobilespecs.azharimm.site/v2/samsung_galaxy_a03-11244',
            'http://api-mobilespecs.azharimm.site/v2/samsung_galaxy_a03_core-11215',
            'http://api-mobilespecs.azharimm.site/v2/samsung_galaxy_f42_5g-11124'
        ];
        $data['2020'] = [
            'http://api-mobilespecs.azharimm.site/v2/samsung_galaxy_m21s-10580',
            'http://api-mobilespecs.azharimm.site/v2/samsung_galaxy_m31_prime-10496',
            'http://api-mobilespecs.azharimm.site/v2/samsung_galaxy_f41-10498',
            'http://api-mobilespecs.azharimm.site/v2/samsung_galaxy_tab_active3-10476',
            'http://api-mobilespecs.azharimm.site/v2/samsung_galaxy_s20_fe_5g-10377'
        ];
        $data['2019'] = [
            'http://api-mobilespecs.azharimm.site/v2/samsung_galaxy_a70s-9899',
            'http://api-mobilespecs.azharimm.site/v2/samsung_galaxy_a20s-9852',
            'http://api-mobilespecs.azharimm.site/v2/samsung_galaxy_m30s-9818',
            'http://api-mobilespecs.azharimm.site/v2/samsung_galaxy_m10s-9861',
            'http://api-mobilespecs.azharimm.site/v2/samsung_galaxy_fold_5g-9851'
        ];
        $data['2018'] = [
            'http://api-mobilespecs.azharimm.site/v2/samsung_galaxy_j7_(2018)-9234',
            'http://api-mobilespecs.azharimm.site/v2/samsung_galaxy_j3_(2018)-8928',
            'http://api-mobilespecs.azharimm.site/v2/samsung_galaxy_a8_star_(a9_star)-9220',
            'http://api-mobilespecs.azharimm.site/v2/samsung_galaxy_s_light_luxury-9202',
            'http://api-mobilespecs.azharimm.site/v2/samsung_galaxy_j8-9205'
        ];
        return $data;
    }
}
