<?php
require 'controller/services/view.php';

class Controller
{

   public function view_search()
   {
      return view::createView('search.php', []);
   }

   public function view_compare()
   {
      return view::createView('compare.php', []);
   }

   public function view_topByFans()
   {
      return view::createView('topbyfans.php', []);
   }

   public function view_brands()
   {
      return view::createView('brands.php', []);
   }

   public function view_latest()
   {
      return view::createView('latest.php', []);
   }

   public function view_topByInterest()
   {
      return view::createView('topByInterest.php', []);
   }

   public function view_Charts()
   {
      return view::createView('chart.php', []);
   }
}
